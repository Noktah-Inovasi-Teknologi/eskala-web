# Eskala Web - Claude Code Guidelines

## Project Overview

Eskala is a digital marketing and healthcare-communication partner for **klinik pratama dan utama, rumah sakit, and dokter umum maupun spesialis** across Indonesia. It works *with* a client's in-house marketing team rather than replacing it. The site's job is to get facilities to book a free 30-minute consultation over WhatsApp.

## Redesign 2026: read this first

The site is being rebuilt to an approved redesign. **`design/` is the source of truth** for content, section order, links, visuals and responsive behaviour:

- `design/README.md`: page list, proposed routes, section order, breakpoint behaviour, placeholders
- `design/reference/*.html`: approved pages as standalone HTML (open in a browser and resize the window)
- `design/screenshots/`: each page at 1280px and 390px, sliced top to bottom
- `design/tokens.css`: tokens to merge into `app/assets/css/main.css`
- `design/SPEC-BRIEF.md`: feature brief, open questions and planning notes for spec-kit

**Rules for the rebuild:**
- Rebuild the pages in Vue with Tailwind and Nuxt UI. Don't copy the reference markup or its inline styles.
- Copy the text **exactly** from the reference HTML. Don't rewrite headings or invent new copy.
- Where a page or component in `app/` conflicts with `design/`, `design/` wins.
- The markup examples in `.claude/skills/*` predate the redesign. Use them for workflow steps only.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3.5)
- **UI library**: Nuxt UI 4. Icons go through Iconify; the redesign uses Phosphor `i-ph-*` (add `@iconify-json/ph`).
- **Styling**: Tailwind CSS 4 with a custom theme in `app/assets/css/main.css`
- **Language**: TypeScript
- **Package manager**: pnpm
- **Deployment**: Cloudflare Workers (Wrangler)

## Development Commands

```bash
pnpm dev       # Start development server (http://localhost:3000)
pnpm build     # Production build (Cloudflare Workers)
pnpm generate  # Static site generation
pnpm preview   # Preview production build
```

## Project Structure (current, before the rebuild)

```
app/
├── assets/css/main.css    # Tailwind theme (fonts, colors)
├── components/
│   ├── Navbar.vue         # Top navigation (to be rebuilt: flat nav + mobile menu)
│   └── WebFooter.vue      # Footer (to be rebuilt)
├── data/case-studies.ts   # Case study data (outdated: fix to "10+ cabang", "Klinik Mata Boyolali")
├── pages/
│   ├── index.vue
│   ├── about-us.vue, case-study.vue, faq.vue, privacy.vue, terms.vue
│   └── services/digital-marketing.vue, services/social-media-management.vue
├── app.vue                # Root layout (Navbar + page + WebFooter)
└── app.config.ts          # Nuxt UI config (colors, container, separator)
design/                    # Redesign handoff (reference only, not served)
public/                    # Static assets
```

The routes are being restructured. The proposed routes and redirects are in `design/README.md` and `design/SPEC-BRIEF.md`.

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

1. **Components**: PascalCase, in `app/components/`.
2. **Pages**: kebab-case, in `app/pages/`.
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
- the parent company name (Noktah);
- dr. Sukardi's testimonial;
- paraphrased testimonials (quotes are verbatim only).

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
