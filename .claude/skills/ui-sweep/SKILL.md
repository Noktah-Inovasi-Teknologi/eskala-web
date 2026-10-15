---
name: "ui-sweep"
description: "Render every eskala.id page at every breakpoint from 320 to 2560px (and with the mobile menu open), report page-level horizontal scroll, overflow, clipped or crumpled text, contrast failures, unlabelled fields, nameless buttons, small tap targets and missing focus rings; compare each capture against design/screenshots/; read touched pages against the UX rules; fix them by the design system's rules. The gate for constitution Principles III and V: run before a phase is marked done."
argument-hint: "Optional: a page slug or a concern to focus on (e.g. 'home', 'digital-marketing 320', 'mobile menu')"
metadata:
  author: "eskala-web (adapted from venyu and noktah-dashboard, 2026-10-15)"
  origin: "venyu's 2026-09-17 dashboard audit and noktah-dashboard's Hub sweep; reshaped for a marketing site with a design to match"
user-invocable: true
---

## User Input

```text
$ARGUMENTS
```

If the text names a page or a concern, narrow the survey to it and say so. Otherwise sweep everything.

## What this is

`/ui-sweep` is how a phase proves constitution **Principle III** (mobile-first, no horizontal scroll from 320 to 2560px, WCAG 2.2 AA) and **Principle V** (Playwright captures compared against `design/screenshots/` before a phase is done).

It runs `e2e/ui-sweep.e2e.ts`. For every page in its `ROUTES` table, at every width of the project, it:

- checks the **page itself** never scrolls sideways;
- runs the in-page checks in `e2e/ui-sweep/audit.ts`;
- tabs through the page (at 390 and 1280) and checks every focus ring;
- below 1024px, opens the mobile menu and checks it too;
- saves a full-page screenshot, and lists the matching design slices beside it in the report.

| Check | What it catches |
|---|---|
| **overflow** | the page wider than the viewport; content spilling past a box that does not scroll (a table wider than a phone, a CTA row leaving the screen) |
| **clipped** | text cut by `overflow: hidden` with no ellipsis to say the cut is deliberate; a scroll row whose start is out of reach |
| **crumpled** | a short string wrapped into a tall column because its box is too narrow |
| **contrast** | text under 4.5:1 (3:1 for large) and icons under 3:1 against the background they actually sit on |
| **unlabelled** | a field with no label a screen reader can say — a placeholder alone does not count |
| **nameless** | a button or link with no words, `aria-label` or title — the burger, an icon-only social link |
| **target** | a tap target under 44×44px with a neighbour too close (CLAUDE.md's floor; WCAG 2.2 AA's spacing exception applies; links inside a sentence are exempt) |
| **zoom** | below 640px, a text field typing under 16px, so iOS zooms the page on focus |
| **boundary** | an empty field whose face and edge are both under 3:1 against what it sits on |
| **focus** | a control that takes focus with no visible ring, or one under 3:1 |

The checks find *broken*. Only your eyes find *different from the design*, *ugly* and *confusing*. **Step 3 is not optional** — it is Principle V.

Blind spots, by design: text over a photo or a gradient (the hero panels, the wing) is skipped, not guessed. Look at those in the screenshots.

## Step 1 — Preconditions

1. Chromium for Playwright is installed: `pnpm exec playwright install chromium` (once per machine).
2. Every page the change touched or added is in `ROUTES` in `e2e/ui-sweep.e2e.ts`, with its `design` slug (the prefix of its files in `design/screenshots/`). **A page that isn't listed is a page nobody checked.** When the redesign moves a route (`/services/digital-marketing` → `/digital-marketing`), move its row in the same change.
3. Work from a properly-cased path on Windows (`C:\…`, not `c:\…`); Vite compares drive letters case-sensitively.

Playwright starts its own dev server on port 3100 (or reuses one already there), so it never mixes with a `pnpm dev` you have open on 3000.

## Step 2 — Survey

```bash
pnpm ui:sweep
```

All nine widths (320, 390, 640, 768, 1024, 1280, 1536, 1920, 2560), full-page screenshots, soft mode: it records findings and does not fail. Then read `test-results/ui-sweep/report.md` — one section per page, one subsection per width, with the design slices to compare against.

To narrow: `pnpm ui:sweep -g "home$"` (the title is `[project] › file › slug`, so anchor the slug at the end; don't type the `›`, Windows shells mangle it).

## Step 3 — Look, and compare with the design

Screenshots land in `test-results/ui-sweep/shots/<width>/<slug>[.menu].png`. Open (Read) at least, for every page you touched:

- every width the report flags;
- **`1280/<slug>.png` beside every `design/screenshots/<design>-1280-*.jpg`**, and **`390/<slug>.png` beside every `<design>-390-*.jpg`**. Walk them top to bottom, section by section: the same sections in the same order, the same text, the same layout and the same colours. Each difference is fixed, or recorded as a deviation in the feature's plan (Principle I) — never left unsaid;
- `320/<slug>.png` and `2560/<slug>.png`, the two ends of "no horizontal scroll" — nothing cramped at 320, nothing stretched or lost at 2560 (the container caps at 1600px at `3xl`);
- `390/<slug>.menu.png` and `768/<slug>.menu.png` beside `design/screenshots/mobile-menu-390-*.jpg`;
- any dialog, accordion, chip filter or form state your change adds. The sweep doesn't open them; open them with a short Playwright script and screenshot them: the FAQ open, the comparison table scrolled, a form with errors, a form sent.

While looking, hold the checklist of **states**: each width · menu open · the comparison table at the end of its scroll · an open FAQ · a form empty, with errors, busy, sent and failed · long names and missing photos (the grey placeholders) · keyboard focus rings · decorative rotations gone below `sm`.

Then read every page you touched as the person using it — a clinic owner on a phone who came from Instagram — against the **Look** rows of [references/ux-rules.md](references/ux-rules.md). Five questions catch most of what goes wrong on a marketing site:

1. **What is this, and is it for me?** The hero says what Eskala does and for whom, in one screen at 390px.
2. **What does it cost to start?** The starting price is visible without hunting.
3. **What do I do next?** One primary action per screen — the WhatsApp CTA — and it's reachable with a thumb.
4. **Why should I trust it?** Proof (numbers, the verbatim quotes, medical review, Permenkes) sits near the ask.
5. **Did it work?** After a form is sent, the page says so, and says what happens next.

## Step 4 — Fix by the rules

Never fix a symptom with a one-off class. Every finding maps to a rule; fix it at the rule's level.

| Finding | Rule | Do |
|---|---|---|
| the page scrolls sideways | no horizontal page scroll, 320–2560 (Principle III) | find the element the report names; usually a fixed width, a long unbroken string, a negative margin, or a decorative wing not clipped by its panel's `overflow-hidden`. Wide content scrolls **inside its own box**: `overflow-x-auto` on a wrapper, the table at `min-w-[760px]`, plus the hint line below `md` |
| wider than its box | content wraps or stacks below `sm` | `min-w-0` on flex children that must shrink; `break-words` on long URLs and emails; stack columns below `sm`; `w-full` on the WhatsApp CTA below `sm` |
| faint text or icon | colours are **Design System tokens** | `text-obsidian-700` for body, `text-accent-strong` for copper text on light, `text-cobalt-400` for blue on dark — never `text-copper-500` on white. A token that fails is a Design System question (Principle II), not a per-component fix |
| a literal colour, px or inline style | tokens only (Principle II) | the static checks in Step 5 name it |
| a raw `<button>` / `<input>` / `<select>` | controls are **Nuxt UI's** where they fit | `UButton`, `UInput`, `UFormField`, `UAccordion` — they carry the focus ring and sizes |
| unlabelled field | every field has a label | `UFormField :label`; never a placeholder alone |
| nameless control | every control says what it does | `aria-label` on the burger ("Buka menu"), the close button, icon-only social links — words from the `eskala-copy` skill |
| small target | 44px floor (CLAUDE.md) | `min-h-11`/`min-h-[52px]` per the pill-button spec; pad footer and social links to 44px, or space them so each has 44px of room |
| no focus ring | visible focus everywhere (WCAG 2.2 AA) | keep Nuxt UI's ring; on custom links use `focus-visible:outline-*` with a token colour that clears 3:1 on its background |
| text field under 16px on a phone | `text-base` on inputs (the Input spec) | |
| differs from the design | Principle I | match `design/reference/<page>.html`; if you depart on purpose, record it in the plan |

## Step 5 — Gate

```bash
pnpm build
pnpm ui:gate
```

`ui:gate` runs 320 / 390 / 1280 / 2560 and fails on any non-exempt finding. Then the static half — each must print nothing (constitution, *Quality Gates* 4):

```bash
rg -n 'style="' app/components app/pages app/layouts app/app.vue      # inline styles
rg -n '#[0-9A-Fa-f]{3,8}\b' app/components app/pages app/layouts       # hex values in components
rg -n -i 'poppins|font-\[' app                                          # retired font, arbitrary font classes
rg -n -i 'noktah' app public --glob '!app/pages/privacy.vue' --glob '!app/pages/terms.vue'
rg -n 'Rp ?[0-9]' app public | rg -v 'Rp2,5'                            # any price but the starting one
```

## Step 6 — Report

Say what was found, per rule, with the file and line; what you changed; which screenshots you compared with which design slices; and every deviation from the design you are leaving, with where it is recorded. Short sentences. If something is left, name it and why.
