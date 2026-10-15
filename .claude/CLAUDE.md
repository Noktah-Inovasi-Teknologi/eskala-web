# Eskala Web - Claude Code Guidelines

## Project Overview

Eskala is a digital marketing and healthcare-communication partner for **klinik pratama dan utama, rumah sakit, and dokter umum maupun spesialis** across Indonesia. It works *with* a client's in-house marketing team rather than replacing it. The site's job is to get facilities to book a free 30-minute consultation over WhatsApp.

## Redesign 2026: read this first

The site is being rebuilt to an approved redesign. **`design/` is the visual reference** for content, section order, links, visuals and responsive behaviour. Follow it closely; tokens come from the Eskala Design System instead (see Theme & Colors):

- `design/README.md`: page list, proposed routes, section order, breakpoint behaviour, placeholders
- `design/reference/*.html`: approved pages as standalone HTML (open in a browser and resize the window)
- `design/screenshots/`: each page at 1280px and 390px, sliced top to bottom
- `design/tokens.css`: a snapshot of the tokens to merge into `app/assets/css/main.css`. Where it differs from the Design System, the Design System wins.
- `design/SPEC-BRIEF.md`: feature brief, open questions and planning notes for spec-kit

**Rules for the rebuild:**
- Rebuild the pages in Vue with Tailwind and Nuxt UI. Don't copy the reference markup or its inline styles.
- Copy the text **exactly** from the reference HTML. Don't rewrite headings or invent new copy.
- Where a page or component in `app/` conflicts with `design/`, follow `design/`. Deviations are fine when the Design System, accessibility or a technical constraint requires them; record each one in the feature's plan.

## Workflow

Features go through spec-kit, with the constitution at `.specify/memory/constitution.md`:

```text
/speckit-grill → /speckit-specify → /speckit-clarify → /speckit-plan → /speckit-tasks → /speckit-implement
```

- `/speckit-grill` interviews you until the decisions are settled, writing `CONTEXT.md` (the glossary), ADRs in `docs/adr/` (rarely), and a ledger `specs/NNN-*/grill.md` that `/speckit-specify` must trace row by row. Use it when a feature is still fuzzy; the open questions in `design/SPEC-BRIEF.md` come up in its first round.
- `/ui-sweep` renders every page from 320 to 2560px, runs the layout and accessibility checks, and lays each capture beside `design/screenshots/`. It is the gate for constitution III and V: no phase is done without it.
- `eskala-copy` (skill) holds the voice and the rules for text the design doesn't give: form errors, success states, alt text, aria-labels, titles, meta descriptions. Load it before writing any visible text.
- Commits and PRs carry no AI attribution: no `Co-Authored-By` trailers, no session links, no "Generated with" lines, and commits are authored by the person, not "Claude". `.claude/settings.json` turns the automatic attribution off.
- Agents: `ux-copy-advisor` suggests copy and UX fixes for a string, section, page or path; `performance` measures what makes a page slow. Both suggest; neither edits. When to delegate is in `.claude/rules/delegation.md`; how to write code is in `.claude/rules/coding.md`.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3.5)
- **UI library**: Nuxt UI 4. Icons go through Iconify; the redesign uses Phosphor `i-ph-*` (add `@iconify-json/ph`).
- **Styling**: Tailwind CSS 4 with a custom theme in `app/assets/css/main.css`
- **Language**: TypeScript
- **Package manager**: pnpm
- **Deployment**: Cloudflare Workers (Wrangler): `pnpm build`, then deploy with the Wrangler CLI
- **Nuxt modules**: `@nuxt/fonts` (Plus Jakarta Sans and Livvic; `nuxt.config.ts` still lists Poppins until the rebuild swaps it), `@nuxt/ui`, `nuxt-viewport`. `@nuxt/content` is **not** installed; don't add it unless open question 4 in `design/SPEC-BRIEF.md` settles on it.

## Development Commands

```bash
pnpm install   # Install dependencies (runs nuxt prepare)
pnpm dev       # Start development server (http://localhost:3000)
pnpm build     # Production build (Cloudflare Workers)
pnpm generate  # Static site generation
pnpm preview   # Preview production build
pnpm ui:sweep  # UI sweep: every breakpoint, screenshots + report, records without failing
pnpm ui:gate   # UI gate: 320/390/1280/2560, fails on findings (report: test-results/ui-sweep/report.md)
pnpm nuxi typecheck   # Type-check the app
pnpm nuxi prepare     # Regenerate .nuxt types
```

When something doesn't update:
- Changes to `nuxt.config.ts` need a dev-server restart; pages, components, composables and `main.css` reload on their own.
- Changes still not showing: delete `.nuxt` and restart `pnpm dev`.
- Types wrong or missing: `pnpm nuxi prepare`, then restart the editor's TypeScript server.
- Fonts not loading: check `fonts.families` in `nuxt.config.ts`, and that `main.css` has `@import "@nuxt/ui"`.

## Project Structure

```
app/
├── assets/css/main.css    # Theme tokens (mirror of the Design System), base styles, focus ring
├── components/            # Folders only organise; names are the file names (pathPrefix: false)
│   ├── base/              # Smallest pieces: BrandLogo, PillButton, ArrowLink, Eyebrow, Tag, Chip, FilterChip,
│   │                      #   PricePill, PriceBadge, WingDecor, MediaPlaceholder, StatTile, StatChip, Heading, Lede
│   ├── blocks/            # Cards and blocks: FeatureCard, TierCard, ComparisonTable, ProcessSteps, FaqList,
│   │                      #   QuoteBlock, FloatingQuote, ClaimCard, ArticleCard, FeaturedArticle, CaseStudyCard,
│   │                      #   StatStrip, Milestones, ShortcutCard, TeamCard, SectionHeader, forms (InterestForm, …)
│   └── site/              # Page chrome: SiteHeader, MobileMenu, SiteFooter, SocialLinks, PageSection, WingPanel, CtaSection
├── composables/           # usePageSeo (title, description, canonical), useWhatsAppHandoff (form submit)
├── data/                  # site.ts (contact, nav, the two prices, WhatsApp links), smm, faqs, articles,
│                          #   case-studies, testimonials
├── pages/                 # index, digital-marketing, education, training, case-study, articles, about-us,
│                          #   faq, privacy, terms; dev/components (component gallery, dev only)
├── types/                 # content.ts (shapes of app/data), nuxt.d.ts (page meta: navCta)
├── app.vue                # UApp (Indonesian locale) + SiteHeader + main + SiteFooter
└── app.config.ts          # Nuxt UI config (colors, container widths)
design/                    # Redesign handoff (reference only, not served)
docs/                      # ADRs, redesign-notes.md (decisions and design deviations)
e2e/                       # Playwright: ui-sweep.e2e.ts (ROUTES table) + ui-sweep/audit.ts (in-page checks)
public/brand/              # Wing marks (cobalt, white, copper)
```

The routes are being restructured: English slugs, services at the root (`docs/adr/0001-english-route-slugs.md`). The route table is in `design/README.md`; the redirects are in `design/SPEC-BRIEF.md`.

## Theme & Colors

Token names follow the **Eskala Design System** (https://claude.ai/artifact/EXeTAjSTXsviSH6WqX4Pau). Use its names in code; don't invent new ones. The scales in `app/assets/css/main.css` stay: **cobalt** (primary, #1D4ED8), **copper** (accent, #FB923C) and **obsidian** (slate neutrals). `design/tokens.css` adds or fixes:
- `cobalt-400` #6C93F0 and `copper-400` #FCA65B: real mid-tones. They used to duplicate the 500 steps. Use `text-cobalt-400` for blue accents on dark backgrounds.
- `accent-strong` #A8500C (`text-accent-strong`): copper-coloured *text* on light backgrounds. Plain copper fails contrast on white.
- `success-*` (WhatsApp green): the button is `bg-success-700 hover:bg-success-hover active:bg-success-active`.
- `error-*`: error text is `text-error-700`.

The reference HTML uses two colours that differ from the design system: #166534 (use `success-hover`) and #C2410C (use `error-700`). The mapping is at the top of `design/tokens.css`.

## Typography

- **Plus Jakarta Sans** (400–800) for all text: headings, body and labels. **Poppins is retired.** `font-display` and `font-body` both resolve to Plus Jakarta Sans.
- **Livvic 900** (`font-wordmark`) for the "ESKALA" wordmark **only**.
- Headings are weight 800 with tight tracking. Sizes are in `design/tokens.css`.

## Key Conventions

1. **Components**: PascalCase, in `app/components/`, auto-imported. Cards are `[Name]Card.vue`, reusable page sections `[Name]Section.vue`. Extend the header and footer components; don't create a second one.
2. **Pages**: kebab-case, in `app/pages/`, at the routes in ADR-0001. Give each section an `id` so anchor links work (`#paket`, `#ads-management`, `#daftar`). A new page also needs:
   - its links in the header, the mobile menu and the footer (and on the home page, if it is one of the services there);
   - a row in `ROUTES` in `e2e/ui-sweep.e2e.ts`;
   - a title and meta description written by the `eskala-copy` rules;
   - a 301 in `routeRules` if it replaces an old URL, and an entry in the sitemap.
3. **Styling**: Tailwind utility classes only, and Nuxt UI components where they fit. No inline styles and no hardcoded hex values; use the theme tokens.
4. **TypeScript**: `lang="ts"` on every `<script setup>`, with typed props. Keep repeatable content (tiers, table rows, FAQs, case studies, articles, team) as typed data in `app/data/`.
5. **Responsive**: Mobile-first, at the Tailwind breakpoints plus `3xl` at 1920px.
   - Container max width: 1280px, then 1440px at `2xl`, then 1600px at `3xl`.
   - Section padding: 96px at `lg`, 80px at `md`, 64px at `sm`, 48px below (`py-12 sm:py-16 md:py-20 lg:py-24`).
   - No horizontal page scroll anywhere from 320px to 2560px.
6. **Section labels**: a short uppercase eyebrow (13px, semibold, wide tracking), used sparingly. The old `──────── Label` pattern is retired.
7. **Accessibility**: WCAG 2.2 AA. Focus states visible, tap targets at least 44px, decorative wings `aria-hidden`.

## Business Context

**Services.** Product names stay in English:
- **Digital Marketing**, made up of two services:
  - **Social Media Management**: Starter, Standard (Paling dipilih), Premium.
  - **Ads Management**: Meta, Google, TikTok. A separate service with its own fee.
- **Education**: Online Class, Webinar, Course Videos, Modules. *Segera hadir*; collects a waitlist.
- **Training**: Workshop, Bootcamp, In-house Training. *Segera hadir*; collects interest.
- These are the only services. KOL Management, KOC Management, Creative Service and "Eskala VIP" don't exist; don't bring them back from old pages.

**Pricing.** Show **only** starting prices, and make them prominent:
- SMM: "Mulai dari Rp2,5 juta per bulan".
- Ads: "Fee mulai dari 10% dari total biaya iklan".
- Never publish tier prices, per-tier ad fees or CPR targets.

**Audience wording.** Write "klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis". Positioning is national: don't mention a city, and don't use "tim kreatif kesehatan".

**Contact.** Email core@eskala.id; phone and WhatsApp +62 822-3071-2718 (`https://wa.me/6282230712718`).

**Social.** Instagram, TikTok and Threads, all **@eskala.team**, shown as icon links with the handle:
- https://instagram.com/eskala.team
- https://www.tiktok.com/@eskala.team
- https://www.threads.net/@eskala.team

**Never on the site:**
- dr. Sukardi's testimonial;
- paraphrased testimonials (quotes are verbatim only).

**Parent company (Noktah):** name it only where it's genuinely needed, such as the legal entity on Privacy or Terms. Keep it out of marketing copy, headings and CTAs.

## Copy Rules

- Indonesian throughout, addressing the reader as "Anda".
- Headings are plain and direct, the way a person would say them.
- Avoid stylistic tics:
  - "X. Y." fragment pairs;
  - "X, bukan Y" constructions;
  - stacked parallel phrases;
  - an eyebrow over every heading.

## Nuxt UI Config (`app.config.ts`)

```ts
ui: {
  colors: { primary: "cobalt", secondary: "copper", neutral: "obsidian" },
  container: { base: "w-full max-w-7xl mx-auto px-6" }, // redesign: px-5 sm:px-6 2xl:max-w-[1440px] 3xl:max-w-[1600px]
}
```

The `secondary` color maps to copper.
