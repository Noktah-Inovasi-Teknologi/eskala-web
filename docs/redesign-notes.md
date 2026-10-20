# Redesign 2026: build notes

The record constitution Principle I asks for: decisions made while building, and every place the
build departs from `design/`, with the reason. Route decisions are in
[ADR-0001](adr/0001-english-route-slugs.md).

## Decisions (2026-10-15)

| Topic | Decision | Where it shows |
|---|---|---|
| Routes | English slugs, services at the root (ADR-0001) | `nuxt.config.ts` `routeRules`, `app/data/site.ts` |
| Forms | No backend yet. A valid submission opens WhatsApp with the answers as the visitor's message | `useWhatsAppHandoff`; Education, Training, Artikel newsletter |
| Photos | Until real photos arrive, image slots are plain brand-tinted panels with no text | `MediaPlaceholder` |
| Articles | The page ships with the proposed topics as cards tagged *Segera*, not links | `app/data/articles.ts`, `ArticleCard` |
| FAQ | A `/faq` page with both FAQ sets; the footer links there | `app/pages/faq.vue` |
| Team | The Tim Eskala section stays hidden until there are real people to show | `about-us.vue` `team` |
| Contract | No annual commitment; the minimum term is 6 months. The FAQ and Syarat & Ketentuan already agree | `app/data/faqs.ts`, `terms.vue` |
| City names | The "no city" rule is about positioning (who and where Eskala serves). The legal jurisdiction in Syarat & Ketentuan stays | `terms.vue` |
| WhatsApp CTAs | Every "Konsultasi gratis" button opens WhatsApp with "Halo Eskala! Saya ingin konsultasi gratis 30 menit." | `consultLink` in `app/data/site.ts` |

## Deviations from the design

| Where | Design | Built | Why |
|---|---|---|---|
| Form fields, search, newsletter | border obsidian-400, placeholder obsidian-500 | obsidian-600 for both | 1.42:1 and 2.56:1 fail WCAG's 3:1 (field boundary) and 4.5:1 (text). The Design System's `border-default`/`text-placeholder` should change too |
| Select placeholder "Pilih" | Nuxt UI default (obsidian-400) | obsidian-600 | 1.48:1 failed |
| Stat tiles on cobalt (SMEC) | label cobalt-100 | white | 4.18:1 on the tile's white/12 layer |
| Footer links | 8px gap | each link a 44px row | CLAUDE.md's 44px tap-target floor; the footer is taller |
| Studi kasus stat strip, phones | stacked, with stray left rules | 2 × 2 below lg | the reference's auto-fit artefact |
| Hero CTA pill | `href="#kontak"` (scrolls to the band) | opens WhatsApp | brand rule: the primary CTA opens WhatsApp |
| Three-card grids at 1280px (Layanan, etc.) | 2 + 1 (the reference's `flex: 1 1 340px` plus padding, without border-box, overflows a 3-up row) | 3 columns from lg | `.claude/rules/tailwind-styling.md` and design/README.md: grids collapse 3 → 2 → 1 |
| Headings | normal wrapping | normal wrapping (`text-balance` was tried and removed) | it changed the reference's line breaks |
| Headings below 640px | fixed minimum sizes (e.g. h1 52px) | scale with the viewport | the longest words overflowed at 320px |
| Price badge value below 640px | 52px minimum | 40–52px | "Rp2,5 juta" overflowed at 320px |
| Problem section caption (Beranda) | caption under the photo | hidden until the photo exists | a caption under an empty panel describes nothing |
| Artikel "Muat artikel lainnya" | shown | hidden | nothing more to load |
| Education and Training header button | `#kontak` | opens WhatsApp | those pages have no #kontak band |
| Analytics consent bar (spec 001, G-16) | none | a small bar sticky at the bottom of every page, "Terima" / "Tolak", shown only when GA4 is configured | GA4 sets cookies; UU PDP consent (G-13, G-15) |
| Footer legal row (spec 001, G-15) | two links | plus a "Pengaturan cookie" button, shown only when GA4 is configured | visitors must be able to change their choice |
| Pre-filled WhatsApp messages (spec 001, G-14) | the design's text | the same text, then "(dari <sumber>, halaman <halaman>)" or "(halaman <halaman>)" | ties a chatbot or Google visit to a consultation before Noktah Hub |
| FAQ sections on Studi kasus, Artikel, Tentang kami (spec 001, G-23) | none | a FAQ section above the closing CTA, on that page's topic only | per-page FAQ rule (G-20); chatbots answer from on-topic pages |
| Beranda and Digital Marketing FAQs (spec 001, G-23) | 4 and 5 questions; the contract question on both | Beranda 6 (contract question removed), Digital Marketing 11; answers approved 2026-10-16 | same; the design's questions stay first and verbatim |
| /faq | two groups | five groups, one per page, each question once | /faq compiles every FAQ (FR-013) |
| "ESKALA" wordmark (2026-10-20) | Livvic 900 | Plus Jakarta Sans 800, same tracking | Owner's decision: one family for the whole brand. The Design System changed first (Principle II); Livvic is no longer loaded |

## Still open

- Nothing from SPEC-BRIEF. Analytics (question 8) was settled by [spec 001](../specs/001-search-visibility/spec.md) (G-13, G-15).
