# UX rules — what eskala.id holds itself to

The UX half of the UI gate. `/ui-sweep` checks that a page is **not broken**
(overflow, contrast, names, targets). This checklist asks whether it **works for
the person reading it**: can a clinic owner on a phone tell what Eskala does, what
it costs to start, and how to talk to someone?

**It adds no rules of its own.** Every row points at where the rule already lives:
the constitution, `.claude/CLAUDE.md`, `.claude/rules/*.md`, or the design in
`design/`. Where this file and those disagree, they win.

## Where this came from

Adapted from venyu's `ux-rules.md`, which took its rules from **UI UX Pro Max**
(<https://github.com/nextlevelbuilder/ui-ux-pro-max-skill>, commit `09170ee`,
2026-09-27): `ux-guidelines.csv`, the web sections of `references/quick-reference.md`,
and `data/stacks/nuxt-ui.csv`. Their rule slugs are kept in the first column so a
rule can be traced back. Desk, dashboard, dark-mode and app rules were dropped; a
**Conversion** section was added for a marketing site.

> MIT License — Copyright (c) 2024 Next Level Builder. Permission is hereby
> granted, free of charge, to any person obtaining a copy of this software and
> associated documentation files (the "Software"), to deal in the Software
> without restriction, including without limitation the rights to use, copy,
> modify, merge, publish, distribute, sublicense, and/or sell copies of the
> Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions: The above copyright notice and this
> permission notice shall be included in all copies or substantial portions of
> the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

## Where Eskala departs from their rules, on purpose

| Their rule | Ours | Why |
|---|---|---|
| `web-target-size`: 24×24px (WCAG 2.2 AA 2.5.8) | 44px (CLAUDE.md), with WCAG's spacing exception | most visitors are on a phone, arriving from Instagram |
| `scale-feedback`, `spring-physics` | the design's flat hover and active colours; decorative rotations only from `sm` up | a calm, professional site for healthcare |
| `primary-action`: one primary button | the WhatsApp CTA is the primary everywhere; the nav button is an outline pill | one way to start: Konsultasi gratis 30 menit |

## How to read the tables

| Mark | Meaning |
|---|---|
| **Sweep** | `pnpm ui:gate` fails on it (`e2e/ui-sweep/audit.ts`) |
| **Static** | a check in `/ui-sweep` Step 5 prints it |
| **Look** | nothing automatic: check it in `/ui-sweep` Step 3 and in review |

---

## 1. Accessibility (WCAG 2.2 AA, constitution III)

| Rule (their slug) | Eskala | Held by |
|---|---|---|
| `color-contrast` — text 4.5:1, large text and icons 3:1 | Design System tokens; `text-accent-strong`, never `text-copper-500` on white | **Sweep** `contrast` |
| `form-labels`, `input-labels` — a placeholder is not a label | `UFormField :label` on the waitlist, interest and newsletter forms | **Sweep** `unlabelled` |
| `aria-labels` — icon-only controls have a name | burger, close, social icons; words from `eskala-copy` | **Sweep** `nameless` |
| `touch-target-size` — 44px | pill buttons `min-h-[52px]`, nav outline `min-h-11`, burger 44px | **Sweep** `target` |
| `focus-states` — a visible ring on every control | Nuxt UI's ring; custom links `focus-visible:` with a token colour | **Sweep** `focus` |
| `color-not-only` — never colour alone | *Paling dipilih* and *Segera* are tags with words | **Look** |
| `keyboard-nav` — tab order follows the page; the menu traps focus while open and closes with Escape | | **Look** |
| `heading-hierarchy` — one `h1`, no skipped levels | the hero h1 per page | **Look** |
| `skip-links` — skip to the main content | | **Look** |
| `reduced-motion` — honour `prefers-reduced-motion` | | **Look** |
| `decorative-images` — decoration is hidden from screen readers | the copper wing: `alt=""` + `aria-hidden` | **Look** |
| `aria-live-errors` — errors are announced | `UFormField` errors | **Look** |

## 2. Conversion (the site's one job)

| Rule | Eskala | Held by |
|---|---|---|
| `primary-action` — one primary action per screen | the green WhatsApp pill, "Konsultasi gratis 30 menit" | **Look** |
| `above-the-fold` — what, for whom, and the next step in the first screen at 390px | the hero: h1, lede, price pill, CTA | **Look** (390 capture) |
| `price-transparency` — show the price to start | only the two starting prices (constitution IV) | **Static**; **Look** |
| `social-proof-near-cta` — proof beside the ask | SMEC numbers, the verbatim quotes, medical review and Permenkes near a CTA | **Look** |
| `cta-thumb-reach` — the CTA full width below `sm` | the Pill button spec | **Look** |
| `external-link-clarity` — say when a link leaves the site | the WhatsApp icon and "Chat via WhatsApp" | **Look** |
| `form-length` — ask only what you need | the fields the design shows, no more | **Look** |

## 3. Forms and feedback (waitlist, interest, newsletter)

| Rule (their slug) | Eskala | Held by |
|---|---|---|
| `error-placement`, `error-clarity` — under the field, says how to fix it | `eskala-copy` rule 11 | **Look** |
| `inline-validation` — check on blur, not on every key | | **Look** |
| `submit-feedback`, `loading-buttons` — busy while sending, no double submit | `:loading` on the `UButton` | **Look** |
| `success-feedback` — say it worked and what happens next | `eskala-copy` rule 12 | **Look** |
| `error-recovery` — a failed send offers another way | "…atau hubungi kami lewat WhatsApp" | **Look** |
| `input-type-keyboard` — the right phone keyboard | `type="email"`, `inputmode="tel"`, `autocomplete` | **Look** |
| `readable-font-size` — 16px inputs on phones | the Input spec, `text-base` | **Sweep** `zoom` |
| `field-boundary` — an empty field can be found | `border-obsidian-400` | **Sweep** `boundary` |
| `required-indicators` | | **Look** |

## 4. Layout and responsive

| Rule (their slug) | Eskala | Held by |
|---|---|---|
| `horizontal-scroll` — the page never scrolls sideways, 320–2560 | constitution III | **Sweep** `overflow` (page) |
| `table-handling` — wide data scrolls in its own box | the comparison table: `overflow-x-auto`, `min-w-[760px]`, hint line below `md` | **Sweep** `overflow`, `clipped` |
| `truncation-strategy` — wrap before you cut | | **Sweep** `clipped`, `crumpled` |
| `breakpoint-testing` | 320, 390, 640, 768, 1024, 1280, 1536, 1920, 2560 | **Sweep** |
| `max-width` — lines stay readable on wide screens | container 1280 → 1440 (`2xl`) → 1600 (`3xl`) | **Look** (2560 capture) |
| `viewport-meta` — never disable zoom | `width=device-width, initial-scale=1` | done (`nuxt.config.ts`) |
| `consistent-spacing` | section padding `py-12 sm:py-16 md:py-20 lg:py-24` | **Look** |
| `design-parity` — matches the approved design | constitution I and V | **Look** (Step 3 comparison) |

## 5. Navigation

| Rule (their slug) | Eskala | Held by |
|---|---|---|
| `nav-state-active` — where am I | the current page marked in the nav | **Look** |
| `mobile-nav` — below `lg`, a burger opening the full-screen menu; below `sm` the outline CTA hides | `tailwind-styling.md` › Navigation; `design/reference/mobile-menu.html` | **Look** (`.menu` captures) |
| `modal-escape` — the menu closes with a button and Escape | | **Look** |
| `anchor-offset` — `#paket`, `#daftar` land below the sticky header | `scroll-margin-top` | **Look** |
| `old-urls` — old links still land | 301s in `routeRules` | **Look** |

## 6. Loading and speed

| Rule (their slug) | Eskala | Held by |
|---|---|---|
| `content-jumping` — reserve space for images | width and height on every image | **Look** |
| `image-optimization` — right size, modern format, lazy below the fold | `NuxtImg` where available | **Look** |
| `font-loading` — no invisible text while fonts load | `@nuxt/fonts` | **Look** |

## 7. Nuxt UI usage (from `stacks/nuxt-ui.csv`)

| Rule | Eskala |
|---|---|
| `UFormField` wraps every input | **Sweep** `unlabelled` |
| `UButton` for buttons and button-styled links | **Look** |
| `UAccordion` for FAQ lists | **Look** |
| theme colours through `app.config.ts` and tokens, never palette hex | **Static** |
