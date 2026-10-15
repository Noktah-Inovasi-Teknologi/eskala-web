<!--
Sync Impact Report
- Version change: 2.0.0 → 2.0.1 (PATCH: quality gates name the tools that now exist)
- Gates 4 and 5 now point at `/ui-sweep` (`pnpm ui:gate` and its static checks).
- Resolved: Playwright added (`@playwright/test`, `playwright.config.ts`, `e2e/ui-sweep.e2e.ts`).
- Templates: ✅ .specify/templates/tasks-template.md (visual verification task names /ui-sweep)

Previous report (2.0.0):
- Version change: 1.0.0 → 2.0.0 (MAJOR: three principles redefined)
- Modified principles:
  I. Design Is the Source of Truth → I. Design as Visual Reference
     (design/ is the reference for visuals, not the final authority; justified deviations allowed)
  II. Design-System Tokens Only → II. Tokens Stay in Sync with the Design System
     (the Eskala Design System on Claude Design is the token authority, over design/tokens.css)
  IV. Pricing and Brand Restrictions → IV. Pricing and Brand Restraint
     (Noktah may appear where needed, e.g. legal pages; no longer a blanket ban)
- Unchanged: III. Mobile-First and Accessible; V. Visual Verification Before Done
- Added sections: none
- Removed sections: none
- Templates:
  ✅ .specify/templates/plan-template.md (Constitution Check reads gates from this file; no edit needed)
  ✅ .specify/templates/spec-template.md (no conflict)
  ✅ .specify/templates/tasks-template.md (visual verification task already mandatory)
  ✅ .claude/CLAUDE.md (source-of-truth and Noktah lines aligned)
  ✅ .claude/rules/brand.md (source-of-truth and Noktah lines aligned)
  ✅ design/SPEC-BRIEF.md (Positioning point and Noktah acceptance check aligned)
- Follow-up TODOs: none (Playwright resolved in 2.0.1)
-->

# Eskala Web Constitution

## Core Principles

### I. Design as Visual Reference

- `design/` (README, `reference/*.html`, `screenshots/`, `SPEC-BRIEF.md`) is the reference for
  content, section order, links, layout, visuals and responsive behaviour. Pages MUST follow it
  closely by default.
- Text SHOULD be copied exactly from `design/reference/*.html`; headings and copy are not
  rewritten or invented without a reason.
- Deviations from `design/` are allowed when the Design System (Principle II), accessibility
  (Principle III), a technical constraint or an explicit decision requires one. Each deviation
  MUST be recorded in the feature's plan or phase notes.
- Pages are rebuilt in Vue with Tailwind and Nuxt UI; reference markup and its inline styles
  MUST NOT be copied.

**Rationale**: the redesign shows the intended result, but it is a static mock-up; building it
well sometimes means departing from it, and those choices must be visible.

### II. Tokens Stay in Sync with the Design System

- The Eskala Design System on Claude Design
  (https://claude.ai/artifact/EXeTAjSTXsviSH6WqX4Pau) is the authority for token names and
  values: colour, type, spacing, radius and shadow.
- `app/assets/css/main.css` MUST mirror the Design System. Where `design/tokens.css` or the
  reference HTML differ from it, the Design System wins.
- Tokens MUST NOT be added, renamed or re-valued in code unless the Design System changes
  first. When the Design System changes, `main.css` is updated to match in the same change.
- Inline `style` attributes and hardcoded hex values MUST NOT appear in components or pages.

**Rationale**: one token vocabulary, owned in one place, keeps the site and the Design System
from drifting apart.

### III. Mobile-First and Accessible

- Styles MUST be written mobile-first using the Tailwind breakpoints plus `3xl` (1920px).
- No page may scroll horizontally at any viewport width from 320px to 2560px. Wide content
  (e.g. the SMM comparison table) scrolls inside its own `overflow-x-auto` wrapper.
- Every page MUST meet WCAG 2.2 AA: visible focus states, text contrast, tap targets of at
  least 44px, and decorative imagery (wings) marked `aria-hidden`.

**Rationale**: most visitors arrive from social media on phones, and healthcare clients
expect an accessible site.

### IV. Pricing and Brand Restraint

- Only starting prices are shown: "Mulai dari Rp2,5 juta per bulan" (SMM) and
  "Fee mulai dari 10% dari total biaya iklan" (Ads). Tier prices, per-tier ad fees and CPR
  targets MUST NOT appear anywhere in the site, its data files or its metadata.
- Eskala is the brand the site presents. The parent company (Noktah) MAY be named where it is
  genuinely needed, such as the legal entity on Privacy or Terms, but MUST NOT be used in
  marketing copy, headings, CTAs or as a selling point.

**Rationale**: prices are a business decision and a leak is hard to retract; the parent
company is a legal fact, not part of the pitch.

### V. Visual Verification Before Done (NON-NEGOTIABLE)

- A phase is not complete until every page it touches has been captured with Playwright and
  compared against the matching images in `design/screenshots/` (`<page>-1280-*.jpg` and
  `<page>-390-*.jpg`).
- Captures MUST be taken at 1280px and 390px widths at minimum. Any visible mismatch in
  content, order, layout or colour MUST be fixed or recorded as a deviation (Principle I)
  before the phase is marked done.

**Rationale**: the design is defined visually; only a visual comparison shows how closely a
page follows it.

## Technical Constraints

- Stack: Nuxt 4 (Vue 3.5), Nuxt UI 4, Tailwind CSS 4, TypeScript (strict), pnpm,
  Cloudflare Workers via Wrangler.
- Icons go through Iconify; the redesign uses Phosphor (`i-ph-*`).
- Fonts: Plus Jakarta Sans for all text; Livvic 900 only for the "ESKALA" wordmark.
- Repeatable content (tiers, table rows, FAQs, case studies, articles, team) lives as typed
  data in `app/data/`.

## Development Workflow & Quality Gates

Before a phase is marked done:

1. `pnpm build` succeeds with no type errors.
2. Copy on every touched page matches `design/reference/*.html`, apart from recorded deviations.
3. Tokens in `app/assets/css/main.css` match the Design System (Principle II).
4. A search of `app/` and `public/` finds no inline styles, no hex values in components, no
   prices other than the two starting prices, and no Noktah outside the allowed places
   (the static checks in `/ui-sweep` Step 5).
5. `pnpm ui:gate` passes, and its screenshots at 1280px and 390px have been compared against
   `design/screenshots/` (Principle V); the gate includes the horizontal-scroll check at 320px
   and 2560px (Principle III). `/ui-sweep` runs all of this.

## Governance

- This constitution overrides other practice guides where they conflict.
- Amendments are made by editing this file, with a Sync Impact Report and a version bump:
  MAJOR for removing or redefining a principle, MINOR for adding a principle or materially
  expanding guidance, PATCH for wording fixes.
- Every plan's Constitution Check and every review MUST verify compliance with these
  principles. Any justified exception is recorded in the plan's Complexity Tracking table.
- Runtime guidance for agents lives in `.claude/CLAUDE.md` and `.claude/rules/`.

**Version**: 2.0.1 | **Ratified**: 2026-10-15 | **Last Amended**: 2026-10-15
