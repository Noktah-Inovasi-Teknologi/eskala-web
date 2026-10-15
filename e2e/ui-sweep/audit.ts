/**
 * The in-page half of the UI sweep — runs INSIDE the browser via
 * `page.evaluate(auditDocument, options)`, so it must stay self-contained:
 * no imports, no closures over the test file, plain DOM and CSSOM only.
 *
 * Ported from venyu's and noktah-dashboard's sweeps (2026-10-15). It answers
 * these questions about the rendered page as it stands:
 *
 *   1. **overflow** — does anything spill sideways out of a box that does not
 *      scroll? (A table wider than a phone, a button row leaving the screen.)
 *   2. **clipped** — is any text cut off by `overflow: hidden` WITHOUT the
 *      ellipsis that says the cut is deliberate?
 *   3. **crumpled** — has a short string been forced to wrap into a tall
 *      column because its box is too narrow?
 *   4. **contrast** — does every piece of visible text, and every icon, clear
 *      WCAG AA against the background it actually sits on — walking up
 *      through transparent ancestors, compositing alpha, and reading a
 *      `::before` layer where Nuxt UI paints one?
 *   5. **unlabelled** — does every form control have a name a screen reader
 *      can say? A placeholder is not one: it vanishes on the first keystroke.
 *   6. **nameless** — does every button and link have one? An icon-only
 *      button (the burger, a social icon) needs an `aria-label`.
 *   7. **target** — is every tap target at least `targetPx` square, or far
 *      enough from its neighbours to count as that big? Eskala holds 44px
 *      (CLAUDE.md); links inside a sentence are exempt, as WCAG exempts them.
 *   8. **zoom** — on a phone, does every text field type at 16px or more, so
 *      iOS does not zoom the page when the field takes focus?
 *   9. **boundary** — can every field be found when it is empty: its face or
 *      its edge 3:1 against what it sits on (WCAG 1.4.11)?
 *
 * `focusIndicator`, below, is the focus half: the sweep tabs through a page
 * and asks it of whatever holds focus.
 *
 * The checks are heuristics with deliberate blind spots (gradients,
 * background images, text over photos) and they skip rather than guess.
 */
export interface AuditFinding {
  kind: 'overflow' | 'clipped' | 'crumpled' | 'contrast' | 'unlabelled' | 'nameless' | 'target' | 'zoom' | 'boundary' | 'focus'
  /** A short CSS-ish path, enough to find the element in the source. */
  where: string
  /** The first few words, for a human reading the report. */
  text: string
  detail: string
  /** True for states WCAG exempts (disabled controls) — reported, never gating. */
  exempt?: boolean
}

export interface AuditOptions {
  /** Minimum contrast for ordinary text. WCAG AA = 4.5. */
  textRatio: number
  /** Minimum contrast for large text (≥24px, or ≥18.66px bold). WCAG AA = 3. */
  largeTextRatio: number
  /** Minimum contrast for icons and other non-text marks. WCAG AA = 3. */
  iconRatio: number
  /** Smallest tap target, CSS px. */
  targetPx: number
  /** Cap per kind so one broken list does not drown the report. */
  limit: number
  /** Smallest type size in a text field on a phone, CSS px. Null off a phone. */
  phoneTextPx?: number | null
}

export function auditDocument(options: AuditOptions): AuditFinding[] {
  const findings: AuditFinding[] = []
  const counts: Record<string, number> = {}

  function push(finding: AuditFinding) {
    counts[finding.kind] = (counts[finding.kind] ?? 0) + 1
    if (counts[finding.kind]! <= options.limit) findings.push(finding)
  }

  // ── Naming ─────────────────────────────────────────────────────────────
  function describe(el: Element): string {
    const parts: string[] = []
    let node: Element | null = el
    for (let depth = 0; node && depth < 3; depth += 1) {
      let name = node.tagName.toLowerCase()
      if (node.id) name += `#${node.id}`
      const slot = node.getAttribute('data-slot')
      if (slot) name += `[${slot}]`
      const classes = [...node.classList].filter(c => !/^(?:group|relative|flex|items-|gap-|w-|h-|min-|max-|shrink|grow|text-|font-|p[xytblr]?-|m[xytblr]?-|rounded|border|bg-|ring|size-)/.test(c)).slice(0, 2)
      if (classes.length) name += `.${classes.join('.')}`
      parts.unshift(name)
      node = node.parentElement
    }
    return parts.join(' > ')
  }

  function ownText(el: Element): string {
    let text = ''
    for (const child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) text += child.textContent ?? ''
    }
    return text.replace(/\s+/g, ' ').trim()
  }

  function snippet(text: string): string {
    return text.length > 48 ? `${text.slice(0, 45)}…` : text
  }

  // ── Visibility ─────────────────────────────────────────────────────────
  /** The layout size, before transforms: a tilted badge is not a wider box. */
  function layoutSize(el: Element): { width: number, height: number } {
    if (el instanceof HTMLElement) return { width: el.offsetWidth, height: el.offsetHeight }
    const rect = el.getBoundingClientRect()
    return { width: rect.width, height: rect.height }
  }

  function isRendered(el: Element): boolean {
    const style = getComputedStyle(el)
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false
    const rect = el.getBoundingClientRect()
    // A 1px box is the screen-reader-only idiom (clip + 1px), not a layout.
    const size = layoutSize(el)
    if (size.width <= 1 || size.height <= 1) return false
    // Off-canvas (a closed menu parked off-screen).
    if (rect.right < 0 || rect.bottom < 0 || rect.left > innerWidth || rect.top > innerHeight + document.documentElement.scrollHeight) return false
    return true
  }

  function isHiddenFromAll(el: Element): boolean {
    let node: Element | null = el
    while (node) {
      if (node.getAttribute('aria-hidden') === 'true' || node.hasAttribute('inert')) return true
      // The dev server's own devtools are not the site.
      if (node.id.startsWith('nuxt-devtools')) return true
      const style = getComputedStyle(node)
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return true
      // Inside a visually hidden box (sr-only: clipped to nothing): read by screen readers, never seen.
      if (style.clipPath === 'inset(50%)' || style.clip === 'rect(0px, 0px, 0px, 0px)') return true
      if (node !== el && style.overflow !== 'visible') {
        const size = layoutSize(node)
        if (size.width <= 1 && size.height <= 1) return true
      }
      node = node.parentElement
    }
    return false
  }

  function isExempt(el: Element): boolean {
    let node: Element | null = el
    while (node) {
      if (node.hasAttribute('disabled') || node.getAttribute('aria-disabled') === 'true') return true
      node = node.parentElement
    }
    return false
  }

  // ── Names ──────────────────────────────────────────────────────────────
  /** Controls that take a value: named by a label, never by what they hold. */
  const FIELD = 'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]), select, textarea, [role="combobox"], [role="spinbutton"], [role="slider"], [role="textbox"], [role="searchbox"]'
  /** Controls that act: a label, or their own words. */
  const ACTION = 'button, a[href], [role="button"], [role="link"], [role="tab"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="option"], [role="checkbox"], [role="radio"], [role="switch"]'

  /** What a screen reader reads out of a subtree: aria-hidden parts skipped, alt text kept. */
  function spokenText(el: Element): string {
    let text = ''
    for (const child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        text += child.textContent ?? ''
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const element = child as Element
        if (element.getAttribute('aria-hidden') === 'true') continue
        text += ` ${element.tagName === 'IMG' ? element.getAttribute('alt') ?? '' : element.getAttribute('aria-label') ?? spokenText(element)} `
      }
    }
    return text.replace(/\s+/g, ' ').trim()
  }

  /** The labels that point at a control: `<label for>` and a wrapping `<label>`. */
  function labelsOf(el: Element): Element[] {
    const labels: Element[] = el.id ? [...document.querySelectorAll(`label[for="${CSS.escape(el.id)}"]`)] : []
    const wrapping = el.closest('label')
    if (wrapping && !labels.includes(wrapping)) labels.push(wrapping)
    return labels
  }

  /**
   * An approximation of the accessible name — enough to tell "has one" from
   * "has none", which is all the audit asks. `fromContent` is false for value
   * controls: a select's chosen option is its value, not its name.
   */
  function accessibleName(el: Element, fromContent: boolean): string {
    const labelledBy = el.getAttribute('aria-labelledby')
    if (labelledBy) {
      const text = labelledBy.split(/\s+/).map((id) => {
        const target = document.getElementById(id)
        return target ? spokenText(target) : ''
      }).join(' ').trim()
      if (text) return text
    }
    const label = el.getAttribute('aria-label')?.trim()
    if (label) return label
    const fromLabels = labelsOf(el).map(spokenText).join(' ').trim()
    if (fromLabels) return fromLabels
    if (fromContent) {
      const text = spokenText(el)
      if (text) return text
    }
    return el.getAttribute('title')?.trim() ?? ''
  }

  // ── Colour ─────────────────────────────────────────────────────────────
  type Rgba = [number, number, number, number]

  // Tailwind 4 and Nuxt UI colours can compute as `oklch(...)` or
  // `color(srgb ...)`, which an rgb regex cannot read. The browser converts
  // any CSS colour by painting it into a 1px canvas. (Noktah Hub, 2026-09-25.)
  const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true })
  const cache = new Map<string, Rgba | null>()

  function viaCanvas(value: string): Rgba | null {
    if (!probe) return null
    if (cache.has(value)) return cache.get(value)!
    probe.clearRect(0, 0, 1, 1)
    probe.fillStyle = '#000'
    probe.fillStyle = value
    probe.fillRect(0, 0, 1, 1)
    const [r, g, b, a] = probe.getImageData(0, 0, 1, 1).data
    const rgba: Rgba | null = a === undefined ? null : [r!, g!, b!, a / 255]
    cache.set(value, rgba)
    return rgba
  }

  function parseColor(value: string): Rgba | null {
    if (!value || value === 'transparent') return [0, 0, 0, 0]
    const m = value.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?\s*\)$/)
    if (!m) return viaCanvas(value)
    let alpha = 1
    if (m[4] !== undefined) alpha = m[4].endsWith('%') ? Number(m[4].slice(0, -1)) / 100 : Number(m[4])
    return [Number(m[1]), Number(m[2]), Number(m[3]), alpha]
  }

  /** The colour inside a longer value, such as one layer of a box-shadow. */
  const COLOUR_IN = /(?:rgba?|oklch|oklab|lab|lch|hsla?|color)\([^)]*\)/
  function colourIn(value: string): Rgba | null {
    const m = value.match(COLOUR_IN)
    return m ? parseColor(m[0]) : null
  }

  function over(top: Rgba, bottom: Rgba): Rgba {
    const a = top[3] + bottom[3] * (1 - top[3])
    if (a === 0) return [0, 0, 0, 0]
    const mix = (i: 0 | 1 | 2) => (top[i] * top[3] + bottom[i] * bottom[3] * (1 - top[3])) / a
    return [mix(0), mix(1), mix(2), a]
  }

  function luminance([r, g, b]: Rgba): number {
    const chan = (c: number) => {
      const s = c / 255
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
    }
    return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b)
  }

  function contrast(a: Rgba, b: Rgba): number {
    const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x)
    return (l1! + 0.05) / (l2! + 0.05)
  }

  /**
   * The colour actually behind an element: walks up, compositing every
   * partially transparent layer, and reads a `::before` layer when one is
   * painted over the box (Nuxt UI's highlight idiom). `null` when a
   * background image or gradient makes the answer unknowable here.
   */
  function backgroundBehind(el: Element): Rgba | null {
    let stack: Rgba[] = []
    let node: Element | null = el
    while (node) {
      const style = getComputedStyle(node)
      if (style.backgroundImage && style.backgroundImage !== 'none') return null
      const before = getComputedStyle(node, '::before')
      if (before.content && before.content !== 'none' && before.content !== 'normal') {
        const layer = parseColor(before.backgroundColor)
        if (layer && layer[3] > 0 && before.position === 'absolute') stack.push(layer)
      }
      const own = parseColor(style.backgroundColor)
      if (own && own[3] > 0) {
        stack.push(own)
        if (own[3] >= 1) break
      }
      node = node.parentElement
    }
    // Nothing opaque all the way up: the canvas is white.
    let result: Rgba = [255, 255, 255, 1]
    stack = stack.reverse()
    for (const layer of stack) result = over(layer, result)
    return result
  }

  function isLargeText(style: CSSStyleDeclaration): boolean {
    const size = parseFloat(style.fontSize)
    const weight = Number(style.fontWeight) || (style.fontWeight === 'bold' ? 700 : 400)
    return size >= 24 || (size >= 18.66 && weight >= 700)
  }

  // ── Sweep ──────────────────────────────────────────────────────────────
  const all = document.body.querySelectorAll<HTMLElement>('*')
  const scrollsX = (style: CSSStyleDeclaration) => style.overflowX === 'auto' || style.overflowX === 'scroll'
  /** Every rendered control, for the target-size pass after the sweep. */
  const targets: HTMLElement[] = []

  for (const el of all) {
    const tag = el.tagName.toLowerCase()
    if (tag === 'script' || tag === 'style' || tag === 'option' || tag === 'noscript') continue
    if (!isRendered(el) || isHiddenFromAll(el)) continue

    const style = getComputedStyle(el)
    const text = ownText(el)
    const rect = el.getBoundingClientRect()

    // 1. Overflow past a box that does not scroll. Anything trimmed with an
    //    ellipsis is a deliberate cut — unless the box is so narrow that
    //    nothing of the label survives it.
    const ellipsis = style.textOverflow === 'ellipsis'
    if (text && ellipsis && el.scrollWidth > el.clientWidth + 2 && el.clientWidth < parseFloat(style.fontSize) * 3) {
      push({
        kind: 'clipped',
        where: describe(el),
        text: snippet(text),
        detail: `label truncated to almost nothing: ${el.clientWidth}px for "${text}"`
      })
    }
    if (el.scrollWidth > el.clientWidth + 2 && !scrollsX(style) && !ellipsis && el.clientWidth > 0) {
      const hidden = style.overflowX === 'hidden' || style.overflowX === 'clip'
      const kind = hidden ? 'clipped' : 'overflow'
      // A visible-overflow box whose content leaves the VIEWPORT is the case
      // a person sees; one that overflows within the page but stays inside
      // its parent is noise more often than not. A hidden-overflow box only
      // counts when it holds text: the cropped decorative wing is deliberate.
      const escapes = rect.left + el.scrollWidth > innerWidth + 1
      if ((hidden && text) || (!hidden && escapes)) {
        push({
          kind,
          where: describe(el),
          text: snippet(text || el.textContent?.trim() || ''),
          detail: `${hidden ? 'hidden' : 'visible'} overflow: content ${el.scrollWidth}px in a ${el.clientWidth}px box`
        })
      }
    }

    // 1b. Unreachable overflow: a scrolling box whose content starts LEFT of
    //     its own left edge while scrolled to 0. Scrolling only reaches the
    //     right-hand overflow, so that part is cut off for good — what a
    //     centred (`justify-center`) chip row wider than a phone does.
    if (scrollsX(style) && el.scrollWidth > el.clientWidth + 2 && el.scrollLeft === 0) {
      const edge = rect.left + parseFloat(style.borderLeftWidth || '0')
      for (const child of Array.from(el.children)) {
        const left = child.getBoundingClientRect().left
        if (isRendered(child) && left < edge - 2) {
          push({
            kind: 'clipped',
            where: describe(child),
            text: snippet(child.textContent?.trim() || ''),
            detail: `starts ${Math.round(edge - left)}px left of a scrolling box, out of scroll reach`
          })
          break
        }
      }
    }

    // 2. Vertical clipping of text: a box with overflow hidden that is
    //    shorter than what it holds, when it holds text of its own.
    if (text && (style.overflowY === 'hidden' || style.overflowY === 'clip') && el.scrollHeight > el.clientHeight + 2 && style.textOverflow !== 'ellipsis') {
      push({
        kind: 'clipped',
        where: describe(el),
        text: snippet(text),
        detail: `text ${el.scrollHeight}px tall in a ${el.clientHeight}px box`
      })
    }

    // 3. Crumpled: a short string forced into many lines. Nothing under 40
    //    characters should ever need more than three.
    if (text && text.length <= 40 && style.whiteSpace !== 'nowrap' && el.children.length === 0) {
      const size = layoutSize(el)
      // Count the text's own line boxes: a 44px-tall link holds one line, not two.
      const range = document.createRange()
      range.selectNodeContents(el)
      const tops = new Set([...range.getClientRects()].filter(r => r.width > 0).map(r => Math.round(r.top)))
      const lines = tops.size
      const words = text.split(' ').length
      // Either more lines than words (a word broke mid-way), or every word
      // on its own line inside a box narrower than a short phrase.
      if (lines > Math.max(3, words) || (words >= 2 && lines >= words && size.width < 96)) {
        push({
          kind: 'crumpled',
          where: describe(el),
          text: snippet(text),
          detail: `${text.length} characters wrapped onto ${lines} lines in a ${Math.round(size.width)}px box`
        })
      }
    }

    // 4a. Text contrast, on the element's own text nodes.
    if (text) {
      const fg = parseColor(style.color)
      const bg = backgroundBehind(el)
      if (fg && bg) {
        const colour = fg[3] < 1 ? over(fg, bg) : fg
        const ratio = contrast(colour, bg)
        const needed = isLargeText(style) ? options.largeTextRatio : options.textRatio
        if (ratio < needed) {
          push({
            kind: 'contrast',
            where: describe(el),
            text: snippet(text),
            detail: `${ratio.toFixed(2)}:1 (needs ${needed}:1) — ${style.color} on rgb(${bg.slice(0, 3).map(Math.round).join(', ')})`,
            exempt: isExempt(el)
          })
        }
      }
    }

    // 4b. Icon contrast. Nuxt UI draws icons as a masked span whose
    //     `background-color` is `currentColor`, so the colour is `color`.
    if (el.classList.contains('iconify') || tag === 'svg') {
      const fg = parseColor(style.color)
      const bg = el.parentElement ? backgroundBehind(el.parentElement) : null
      if (fg && bg) {
        const colour = fg[3] < 1 ? over(fg, bg) : fg
        const ratio = contrast(colour, bg)
        if (ratio < options.iconRatio) {
          push({
            kind: 'contrast',
            where: describe(el),
            text: `(icon ${[...el.classList].find(c => c.startsWith('i-')) ?? tag})`,
            detail: `${ratio.toFixed(2)}:1 (icon needs ${options.iconRatio}:1) — ${style.color} on rgb(${bg.slice(0, 3).map(Math.round).join(', ')})`,
            exempt: isExempt(el)
          })
        }
      }
    }

    // 5–6. Names. A value control needs a label; an action needs a label or
    //      words of its own.
    const field = el.matches(FIELD)
    if (field || el.matches(ACTION)) {
      targets.push(el)
      if (!accessibleName(el, !field)) {
        const role = el.getAttribute('role') ?? tag
        const placeholder = el.getAttribute('placeholder')
        push({
          kind: field ? 'unlabelled' : 'nameless',
          where: describe(el),
          text: snippet(placeholder ?? ''),
          detail: field
            ? placeholder ? `only a placeholder names this ${role}, and it vanishes on the first keystroke` : `this ${role} has no label`
            : `this ${role} has no words, aria-label or title — an icon alone says nothing to a screen reader`
        })
      }
    }
  }

  // 7. Target size. An undersized target still passes when a circle of the
  //    minimum's diameter, centred on it, reaches no other target — WCAG's
  //    spacing exception. So does a link inside a sentence, and a control
  //    whose label (or enclosing control) is the bigger thing to tap.
  const radius = options.targetPx / 2
  // A control under another layer (the open mobile menu) cannot be tapped,
  // so it is nobody's neighbour. Only the part in the viewport can be
  // hit-tested; a control wholly outside it is kept.
  const covered = (el: Element, rect: DOMRect) => {
    const left = Math.max(rect.left, 0)
    const right = Math.min(rect.right, innerWidth)
    const top = Math.max(rect.top, 0)
    const bottom = Math.min(rect.bottom, innerHeight)
    if (right - left < 1 || bottom - top < 1) return false
    const hit = document.elementFromPoint((left + right) / 2, (top + bottom) / 2)
    return hit !== null && !el.contains(hit) && !hit.contains(el)
  }
  const boxes = targets
    .map(el => ({ el, rect: el.getBoundingClientRect() }))
    .filter(({ el, rect }) => !covered(el, rect))
  const small = (rect: DOMRect) => rect.width < options.targetPx - 0.5 || rect.height < options.targetPx - 0.5
  const pinned = (el: Element): boolean => {
    for (let node: Element | null = el; node; node = node.parentElement) {
      const position = getComputedStyle(node).position
      if (position === 'fixed' || position === 'sticky') return true
    }
    return false
  }
  const centre = (rect: DOMRect): [number, number] => [rect.left + rect.width / 2, rect.top + rect.height / 2]
  const distanceToRect = ([x, y]: [number, number], rect: DOMRect) =>
    Math.hypot(Math.max(rect.left - x, 0, x - rect.right), Math.max(rect.top - y, 0, y - rect.bottom))

  for (const { el, rect } of boxes) {
    if (!small(rect)) continue
    if (getComputedStyle(el).display === 'inline' && el.parentElement && ownText(el.parentElement)) continue
    if (labelsOf(el).some(label => !small(label.getBoundingClientRect()))) continue
    const host = el.parentElement?.closest(ACTION)
    if (host && !small(host.getBoundingClientRect())) continue
    const here = centre(rect)
    const reachableNear = (other: Element, box: DOMRect) => {
      const x = Math.min(Math.max(here[0], box.left + 0.5), box.right - 0.5)
      const y = Math.min(Math.max(here[1], box.top + 0.5), box.bottom - 0.5)
      if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) return true
      const hit = document.elementFromPoint(x, y)
      return hit === null || other.contains(hit) || hit.contains(other)
    }
    // A sticky header is beside a scrolling control only at this scroll
    // position, so the two are never one fixed pair of neighbours.
    const crowded = boxes.find(other => other.el !== el && !el.contains(other.el) && !other.el.contains(el)
      && pinned(other.el) === pinned(el) && (small(other.rect)
      ? Math.hypot(here[0] - centre(other.rect)[0], here[1] - centre(other.rect)[1]) < options.targetPx
      : distanceToRect(here, other.rect) < radius) && reachableNear(other.el, other.rect))
    if (!crowded) continue
    push({
      kind: 'target',
      where: describe(el),
      text: snippet(accessibleName(el, true)),
      detail: `${Math.round(rect.width)}×${Math.round(rect.height)}px, under ${options.targetPx}px, with "${snippet(accessibleName(crowded.el, true))}" (${describe(crowded.el)}) within ${radius}px`,
      exempt: isExempt(el)
    })
  }

  // 9. Boundary (WCAG 1.4.11). A place to type has to be findable when it is
  //    empty: its own background stands 3:1 apart from what it sits on, or
  //    its edge (a border, or the inset ring Nuxt UI draws) does.
  function edgeColours(style: CSSStyleDeclaration): Rgba[] {
    const edges: Rgba[] = []
    for (const side of ['top', 'right', 'bottom', 'left'] as const) {
      const width = Number.parseFloat(style.getPropertyValue(`border-${side}-width`))
      const kind = style.getPropertyValue(`border-${side}-style`)
      const colour = parseColor(style.getPropertyValue(`border-${side}-color`))
      if (width >= 1 && kind !== 'none' && colour && colour[3] > 0) edges.push(colour)
    }
    // Each shadow: a colour, then offsets, blur, spread; a ring is a shadow
    // with no blur and a spread of at least a pixel.
    for (const shadow of style.boxShadow.split(/,(?![^(]*\))/)) {
      const colour = colourIn(shadow)
      const lengths = shadow.replace(COLOUR_IN, '').match(/-?[\d.]+px/g)?.map(Number.parseFloat) ?? []
      if (colour && colour[3] > 0 && lengths.length >= 4 && lengths[2] === 0 && lengths[3]! >= 1) edges.push(colour)
    }
    return edges
  }

  const TEXT_ENTRY = 'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]):not([type="file"]):not([type="submit"]):not([type="button"]):not([type="reset"]), textarea, [contenteditable="true"]'
  for (const { el } of boxes) {
    if (!el.matches(`${TEXT_ENTRY}, [role="checkbox"], [role="radio"]`)) continue
    const style = getComputedStyle(el)
    const behind = el.parentElement ? backgroundBehind(el.parentElement) : null
    const own = parseColor(style.backgroundColor)
    if (!behind || !own) continue
    const face = own[3] > 0 ? over(own, behind) : behind
    if (contrast(face, behind) >= 3) continue
    const edge = Math.max(0, ...edgeColours(style).map(colour => contrast(over(colour, face), behind)))
    if (edge >= 3) continue
    push({
      kind: 'boundary',
      where: describe(el),
      text: snippet(accessibleName(el, false)),
      detail: edge === 0
        ? 'no edge, and its face is the colour of what it sits on — nothing shows where to type or tap'
        : `edge ${edge.toFixed(2)}:1 against what it sits on (needs 3:1)`,
      exempt: isExempt(el)
    })
  }

  // 8. Zoom. Under 16px, iOS zooms the page when a text field takes focus.
  if (options.phoneTextPx) {
    for (const { el } of boxes) {
      if (!el.matches(TEXT_ENTRY)) continue
      const size = Number.parseFloat(getComputedStyle(el).fontSize)
      if (size < options.phoneTextPx - 0.1) {
        push({
          kind: 'zoom',
          where: describe(el),
          text: snippet(accessibleName(el, false)),
          detail: `types at ${size}px — under ${options.phoneTextPx}px, iOS zooms the page when it takes focus`,
          exempt: isExempt(el)
        })
      }
    }
  }

  for (const [kind, n] of Object.entries(counts)) {
    if (n > options.limit) {
      findings.push({
        kind: kind as AuditFinding['kind'],
        where: '(report)',
        text: '',
        detail: `${n - options.limit} more ${kind} findings not listed`
      })
    }
  }

  return findings
}

/**
 * The focus check's in-page half (WCAG 2.4.7, 1.4.11): what marks the element
 * holding focus, and how well it stands against what it sits on.
 * Self-contained like `auditDocument`. The mark is the best of its outline,
 * its rings (a no-blur box-shadow) and its border — whichever is drawn.
 * Null when nothing holds focus, or the page behind is an image.
 */
export function focusIndicator(): { where: string, text: string, ratio: number } | null {
  const el = document.activeElement
  if (!el || el === document.body || el === document.documentElement) return null
  if (el.closest('[id^="nuxt-devtools"]') || el.tagName.toLowerCase().startsWith('nuxt-devtools')) return null
  const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true })
  const parse = (value: string): number[] | null => {
    const found = value.match(/(?:rgba?|oklch|oklab|lab|lch|hsla?|color)\([^)]*\)/)
    if (!found || !probe) return null
    probe.clearRect(0, 0, 1, 1)
    probe.fillStyle = '#000'
    probe.fillStyle = found[0]
    probe.fillRect(0, 0, 1, 1)
    const [r, g, b, a] = probe.getImageData(0, 0, 1, 1).data
    return [r!, g!, b!, a! / 255]
  }
  const over = (top: number[], bottom: number[]) => {
    const a = top[3]! + bottom[3]! * (1 - top[3]!)
    return [0, 1, 2].map(i => (top[i]! * top[3]! + bottom[i]! * bottom[3]! * (1 - top[3]!)) / (a || 1)).concat(a)
  }
  const lum = (c: number[]) => [0, 1, 2].map((i) => {
    const s = c[i]! / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i]!, 0)
  const ratio = (a: number[], b: number[]) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
    return (x! + 0.05) / (y! + 0.05)
  }
  // What is behind the element (its parent's composited background).
  const layers: number[][] = []
  for (let node = el.parentElement; node; node = node.parentElement) {
    const style = getComputedStyle(node)
    if (style.backgroundImage && style.backgroundImage !== 'none') return null
    const own = parse(style.backgroundColor)
    if (own && own[3]! > 0) {
      layers.push(own)
      if (own[3]! >= 1) break
    }
  }
  let behind = [255, 255, 255, 1]
  for (const layer of layers.reverse()) behind = over(layer, behind)

  const style = getComputedStyle(el)
  const marks: number[][] = []
  const outline = parse(style.outlineColor)
  if (outline && style.outlineStyle !== 'none' && Number.parseFloat(style.outlineWidth) >= 1) marks.push(outline)
  for (const shadow of style.boxShadow.split(/,(?![^(]*\))/)) {
    const colour = parse(shadow)
    const lengths = shadow.replace(/(?:rgba?|oklch|oklab|lab|lch|hsla?|color)\([^)]*\)/, '').match(/-?[\d.]+px/g)?.map(Number.parseFloat) ?? []
    if (colour && lengths.length >= 4 && lengths[2] === 0 && lengths[3]! >= 1) marks.push(colour)
  }
  for (const side of ['top', 'right', 'bottom', 'left']) {
    const colour = parse(style.getPropertyValue(`border-${side}-color`))
    if (colour && Number.parseFloat(style.getPropertyValue(`border-${side}-width`)) >= 2) marks.push(colour)
  }
  const best = Math.max(0, ...marks.filter(mark => mark[3]! > 0).map(mark => ratio(over(mark, behind), behind)))
  const name = (el.getAttribute('aria-label') ?? el.textContent ?? '').replace(/\s+/g, ' ').trim()
  const where = [el.tagName.toLowerCase(), el.getAttribute('data-slot'), el.getAttribute('role')].filter(Boolean).join(' ')
  return { where, text: name.length > 48 ? `${name.slice(0, 45)}…` : name, ratio: best }
}
