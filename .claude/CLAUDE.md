# Eskala Web - Claude Code Guidelines

## Project Overview

Eskala is a digital marketing agency website built with Nuxt 4, focused primarily on serving **healthcare facilities (faskes)** in Indonesia — klinik, rumah sakit, dan brand kesehatan. The site positions Eskala as a creative partner that helps healthcare businesses grow their digital presence through Social Media Management and Digital Marketing.

## Tech Stack

- **Framework**: Nuxt 4.2.1 (Vue 3.5)
- **UI Library**: Nuxt UI 4.2.1 (with Heroicons and Simple Icons)
- **Styling**: Tailwind CSS 4.1 with custom theme
- **Language**: TypeScript 5.6
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Workers (Wrangler)

## Development Commands

```bash
pnpm dev       # Start development server (http://localhost:3000)
pnpm build     # Production build (Cloudflare Workers)
pnpm generate  # Static site generation
pnpm preview   # Preview production build
```

## Project Structure

```
app/
├── assets/css/main.css    # Tailwind config & custom theme (fonts, colors)
├── components/
│   ├── Navbar.vue         # Top navigation with service dropdown
│   └── WebFooter.vue      # Footer with links, contact, social media
├── pages/
│   ├── index.vue          # Home page (hero, FAQ, services, case study, packages, testimonials, CTA)
│   └── services/
│       ├── digital-marketing.vue     # Digital Marketing service page
│       ├── eskala-vip.vue            # VIP / All-in-one creative service page
│       └── social-media-management.vue  # SMM service page (to be built)
├── error.vue              # Error page
├── app.vue                # Root layout (Navbar + page + WebFooter)
└── app.config.ts          # Nuxt UI config (colors, container, separator)
nuxt.config.ts             # Nuxt config (fonts, ui, vite)
public/                    # Static assets (images, favicon)
```

## Theme & Colors

Defined in `app/assets/css/main.css` using `@theme` and `@theme static`:

- **Cobalt** (`--color-cobalt-*`): Primary blue — buttons, links, active states
- **Copper** (`--color-copper-*`): Secondary orange — accents, badges, CTAs, decorative elements
- **Obsidian** (`--color-obsidian-*`): Neutral gray — text, backgrounds, borders

## Typography

Two font families configured via `@nuxt/fonts`:

| Variable | Font | Usage |
|---|---|---|
| `font-display` / `--font-display` | Poppins | Headings, labels, hero text, section titles |
| `font-body` / `--font-body` | Plus Jakarta Sans | Body text, descriptions, paragraphs |

Always use `font-display` for headings and `font-body` for body copy — not `font-[Poppins]` inline.

## Key Conventions

1. **Components**: PascalCase, `app/components/`
2. **Pages**: kebab-case, `app/pages/` — nested under `services/` for service pages
3. **Styling**: Tailwind utility classes only; Nuxt UI components preferred over custom HTML
4. **TypeScript**: `lang="ts"` on all `<script setup>` blocks; typed props and interfaces
5. **Layout rhythm**: Sections use `py-24`, containers use `UContainer` with an `id` for anchor linking
6. **Section labels**: Use `<p class="font-display text-copper-500 font-medium">──────── Label text</p>` before section headings
7. **Icons**: Heroicons via `i-heroicons-*`, Simple Icons via `i-simple-icons-*`

## Business Context

- **Primary target**: Healthcare facilities in Indonesia (klinik, rumah sakit, brand kesehatan)
- **Core services**:
  - Social Media Management (Starter 4 Juta, Standard 6 Juta, Premium 8 Juta/bulan)
  - Digital Marketing — Ads + KOC (15% / 20% / 25% of ad spend)
  - Eskala VIP — all-in-one creative bundle (15 Juta/bulan)
- **Deprecated/merged**: Ads Management, KOL Management, Creative Service (standalone) — these no longer exist as separate pages
- **Contact**: core@eskala.id, +62 822-3071-2718 (WhatsApp: wa.me/6282230712718)
- **Social media**: @eskala.u on all platforms

## Nuxt UI Config (`app.config.ts`)

```ts
ui: {
  colors: { primary: "cobalt", secondary: "copper", neutral: "obsidian" },
  container: { base: "w-full max-w-7xl mx-auto px-6" },
}
```

The `secondary` color maps to copper — use `color="secondary"` for copper-toned badges and buttons.
