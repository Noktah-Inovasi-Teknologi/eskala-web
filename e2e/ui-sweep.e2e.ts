/**
 * The rendered half of the UI gate (`/ui-sweep`, constitution III and V).
 *
 * One test per route. Each visits the page at every width of its project,
 * checks the page itself never scrolls sideways, runs the in-page audit
 * (`ui-sweep/audit.ts`), tabs through it for focus rings, opens the mobile
 * menu below `lg`, and saves a full-page screenshot next to the matching
 * `design/screenshots/` slices so the two can be compared by eye.
 *
 * Projects (playwright.config.ts):
 *   sweep — every breakpoint, records findings without failing
 *   gate  — 320 / 390 / 1280 / 2560, fails on any non-exempt finding
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { expect, test, type Page } from '@playwright/test'
import { auditDocument, focusIndicator, type AuditFinding } from './ui-sweep/audit'
import { CELLS_DIR, SHOTS_DIR, type Cell } from './ui-sweep/paths'

/**
 * Every page on the site. `design` is the slug of its slices in
 * `design/screenshots/` (`<design>-1280-01.jpg` …), or null when the page has
 * no design. A page that isn't listed is a page nobody checked: add each new
 * route here when it is built, and move a path when the redesign renames it.
 */
const ROUTES: { slug: string, path: string, design: string | null }[] = [
  // Dev-only gallery of every shared component (app/pages/dev/components.vue).
  { slug: 'components', path: '/dev/components', design: null },
  { slug: 'home', path: '/', design: 'home' },
  { slug: 'digital-marketing', path: '/digital-marketing', design: 'digital-marketing' },
  { slug: 'education', path: '/education', design: 'education' },
  { slug: 'training', path: '/training', design: 'training' },
  { slug: 'case-study', path: '/case-study', design: 'studi-kasus' },
  { slug: 'articles', path: '/articles', design: 'artikel' },
  { slug: 'about-us', path: '/about-us', design: 'tentang-kami' },
  { slug: 'faq', path: '/faq', design: null },
  { slug: 'privacy', path: '/privacy', design: null },
  { slug: 'terms', path: '/terms', design: null },
]

const OPTIONS = {
  textRatio: 4.5,
  largeTextRatio: 3,
  iconRatio: 3,
  targetPx: 44,
  limit: 25,
}

/** Below this width the nav is a burger that opens the full-screen menu. */
const LG = 1024
const HEIGHT = 900
const FOCUS_WIDTHS = new Set([390, 1280])
const TAB_STOPS = 40

/** Scroll through once so lazy images and on-scroll content are in before the shot. */
async function settle(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) {
      scrollTo(0, y)
      await new Promise(resolve => setTimeout(resolve, 60))
    }
    scrollTo(0, 0)
  })
  await page.waitForLoadState('networkidle')
}

async function pageScroll(page: Page): Promise<AuditFinding | null> {
  const { scroll, view } = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, view: innerWidth }))
  return scroll > view + 1
    ? { kind: 'overflow', where: 'html (the page)', text: '', detail: `the page scrolls sideways: ${scroll}px wide in a ${view}px viewport` }
    : null
}

async function focusFindings(page: Page): Promise<AuditFinding[]> {
  const found: AuditFinding[] = []
  const seen = new Set<string>()
  await page.evaluate(() => scrollTo(0, 0))
  for (let i = 0; i < TAB_STOPS; i += 1) {
    await page.keyboard.press('Tab')
    // Two frames: a transitioned outline-color still reads its start value (currentColor) on the first.
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
    const mark = await page.evaluate(focusIndicator)
    if (!mark) continue
    const key = `${mark.where}|${mark.text}`
    if (seen.has(key)) break
    seen.add(key)
    if (mark.ratio < 3) {
      found.push({ kind: 'focus', where: mark.where, text: mark.text, detail: mark.ratio === 0 ? 'no visible focus ring' : `focus ring ${mark.ratio.toFixed(2)}:1 against what it sits on (needs 3:1)` })
    }
  }
  return found
}

async function shoot(page: Page, width: number, name: string) {
  const dir = join(SHOTS_DIR, String(width))
  mkdirSync(dir, { recursive: true })
  const path = join(dir, `${name}.png`)
  await page.screenshot({ path, fullPage: true, animations: 'disabled', style: '[id^="nuxt-devtools"]{display:none!important}' })
  return path
}

for (const route of ROUTES) {
  test(route.slug, async ({ page }, testInfo) => {
    const { widths, soft } = testInfo.project.metadata as { widths: number[], soft: boolean }
    mkdirSync(CELLS_DIR, { recursive: true })

    for (const width of widths) {
      await test.step(`${width}px`, async () => {
        await page.setViewportSize({ width, height: HEIGHT })
        const response = await page.goto(route.path, { waitUntil: 'networkidle' })
        expect(response?.status(), `${route.path} answered`).toBeLessThan(400)
        await settle(page)

        const options = { ...OPTIONS, phoneTextPx: width < 640 ? 16 : null }
        const findings: AuditFinding[] = await page.evaluate(auditDocument, options)
        const scroll = await pageScroll(page)
        if (scroll) findings.unshift(scroll)
        if (FOCUS_WIDTHS.has(width)) findings.push(...await focusFindings(page))
        const shots = [await shoot(page, width, route.slug)]

        // The full-screen menu, where the nav collapses to a burger.
        if (width < LG) {
          const burger = page.locator('header button[aria-expanded]').first()
          if (await burger.count() && await burger.isVisible()) {
            await burger.click()
            await page.waitForTimeout(300)
            const menu = await page.evaluate(auditDocument, options)
            findings.push(...menu.map(f => ({ ...f, where: `(menu open) ${f.where}` })))
            shots.push(await shoot(page, width, `${route.slug}.menu`))
            await page.keyboard.press('Escape')
          }
        }

        const cell: Cell = { slug: route.slug, path: route.path, design: route.design, width, findings, shots }
        writeFileSync(join(CELLS_DIR, `${route.slug}.${width}.json`), JSON.stringify(cell, null, 2))

        const gating = findings.filter(f => !f.exempt && f.where !== '(report)')
        if (!soft) expect.soft(gating, `${route.slug} at ${width}px — see test-results/ui-sweep/report.md`).toEqual([])
      })
    }
  })
}
