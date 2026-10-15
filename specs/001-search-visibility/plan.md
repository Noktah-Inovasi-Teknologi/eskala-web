# Implementation Plan: Search visibility (SEO, chatbots, keywords, analytics)

**Branch**: `001-search-visibility` (spec directory; work continues on the user's current branch) | **Date**: 2026-10-16 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-search-visibility/spec.md`, ledger [grill.md](grill.md)

## Summary

Make eskala.id crawlable and understandable for Google and chatbots, tag every WhatsApp conversation with where the visit started, and add consent-gated GA4 alongside cookieless Cloudflare analytics (**Release 1**). Then tune metadata and add per-page FAQs from keyword research (**Release 2**). The approach adds no new dependencies:
- hand-written server routes for `sitemap.xml` and `llms.txt`;
- JSON-LD through the existing `usePageSeo`;
- one static share image;
- one delegated client listener for the source tag and click events;
- a small consent bar and composable;
- the four redirects in `routeRules`.

Dashboard work (Cloudflare, Search Console, Bing, GA4 admin, Keyword Planner) ships as an operational checklist.

## Technical Context

**Language/Version**: TypeScript (strict), Vue 3.5, Node 24 (local)

**Primary Dependencies**: Nuxt 4.4, Nuxt UI 4.6, Tailwind 4; no new dependencies (R1, R2, R7)

**Storage**: browser only. `localStorage` holds the consent choice; `sessionStorage` holds the visit source. GA4 and Cloudflare hold analytics data.

**Testing**:
- `node --test` for the source detector (`pnpm test:unit`, new script, no dependency);
- Playwright `pnpm ui:gate` / `ui:sweep` for layout and accessibility;
- curl checks in [quickstart.md](quickstart.md).

**Target Platform**: Cloudflare Workers (deploy pipeline outside the repo); modern mobile and desktop browsers

**Project Type**: web site (Nuxt app, SSR)

**Performance Goals**: mobile Lighthouse ≥ 90 on Beranda and Digital Marketing in all four categories (SC-007). GA4 loads only after consent and never blocks render.

**Constraints**:
- no horizontal scroll from 320 to 2560px;
- WCAG 2.2 AA;
- only the two starting prices anywhere, metadata included;
- no Noktah outside Privacy and Terms;
- one copy of each fact (prices, contact, page names).

**Scale/Scope**: 10 public pages; about 15 WhatsApp link sites; 3 forms; 5 FAQ groups in Release 2

## Constitution Check

*GATE: must pass before Phase 0 research. Re-checked after Phase 1 design.*

| Principle | Status | How |
|---|---|---|
| I. Design as visual reference | ✅ with recorded deviations | Four deviations, listed in Complexity Tracking. Release 2 visible-copy changes are recorded one by one as they are approved (G-10). |
| II. Tokens in sync | ✅ | The consent bar uses existing tokens and `PillButton`. No new tokens, no hex values, no inline styles. The share image is a PNG asset rendered from brand tokens, outside the CSS. |
| III. Mobile-first and accessible | ✅ | The bar is mobile-first and full width on phones. It reserves its own height (C-7), has 44px buttons, keeps the focus ring, and isn't modal. The sweep gets a consent check with the bar visible. |
| IV. Pricing and brand restraint | ✅ | Structured data carries only the SMM minimum (Rp2.500.000/month). llms.txt reads the two starting-price sentences from `pricing`. Noktah appears in no metadata. |
| V. Visual verification | ✅ | `pnpm ui:gate` before each release is marked done. The sweep sets a consent choice before loading pages so screenshots stay comparable to `design/screenshots/`, and checks the bar separately. |

Post-design re-check (after Phase 1): still passes. Nothing in research or contracts adds a token, a price or a Noktah mention.

## Project Structure

### Documentation (this feature)

```text
specs/001-search-visibility/
├── grill.md             # decision ledger (G-1…G-28)
├── spec.md
├── plan.md              # this file
├── research.md          # R1–R13
├── data-model.md
├── quickstart.md
├── contracts/interfaces.md   # C-1…C-7
├── checklists/requirements.md
├── operations.md        # O-1… operational checklist for the user (tasks)
├── baseline.md          # SC-008 before/after measures (tasks)
├── off-site.md          # FR-024 recommendations (Release 2)
├── keywords/            # seed-list, test-prompts, planner-export.csv, keyword-map (Release 2)
└── tasks.md             # /speckit-tasks
```

### Source Code (repository root)

```text
nuxt.config.ts                       # +4 redirects, runtimeConfig.public.gaId, prerender sitemap/llms
public/
├── robots.txt                       # C-4
└── og-image.png                     # R3, 1200×630
server/routes/
├── sitemap.xml.ts                   # C-3
└── llms.txt.ts                      # C-5
app/
├── app.vue                          # Organization + WebSite JSON-LD; <ConsentBar />
├── data/site.ts                     # + publicPages (path, name, description)
├── data/faqs.ts                     # Release 2: per-page groups
├── composables/usePageSeo.ts        # og image, breadcrumb, faqs, extra schema nodes
├── composables/useConsent.ts        # consent state, GA4 loader, track()
├── composables/useWhatsAppHandoff.ts# + source tag, + form_submit
├── utils/visit-source.ts            # detectVisitSource(), withSourceTag()
├── plugins/visit.client.ts          # remember source; delegated click → tag + events
├── components/site/ConsentBar.vue   # C-7
├── components/site/SiteFooter.vue   # + "Pengaturan cookie" button
├── components/blocks/CaseStudyCard.vue # data-track="document_request"
└── pages/*.vue                      # privacy/terms → usePageSeo; DM → Service nodes; Release 2 FAQ sections
e2e/
├── unit/visit-source.test.ts        # node --test
└── ui-sweep.e2e.ts                  # consent preset + bar check
package.json                         # "test:unit": "node --test e2e/unit/"
```

**Structure Decision**: the existing single Nuxt app. Server routes go in Nuxt's `server/` directory, the first files there; they import `app/data/site.ts` by relative path so the facts live in one place.

## Phases

- **Release 1** (P1–P2 stories 1, 2, 3; baseline): setup → foundation (`publicPages`, `visit-source`) → Story 1 (crawl and understand) → Story 2 (source tag) → Story 3 (consent and GA4, privacy draft) → baseline and operational docs → `pnpm build`, `pnpm test:unit`, `pnpm ui:gate`.
- **Release 2** (Story 4, measurement loop): seed list and prompts → **wait for the user's Keyword Planner export** → keyword map → FAQ drafts → **wait for approval** → metadata and FAQ sections → `ui:gate`.

## Complexity Tracking

Design deviations (constitution I), from ledger rows that land as deviations:

| Deviation | Why needed | Simpler alternative rejected because |
|---|---|---|
| Consent bar on every page; `design/` has none (G-16) | GA4 sets cookies; UU PDP consent (G-13, G-15) | No GA4 (option (a) in G-13) was declined by the user |
| "Pengaturan cookie" button in the footer's legal row (G-15) | The visitor must be able to change their choice | A link only on the privacy page is too hard to find |
| Pre-filled WhatsApp messages end with a source tag the design doesn't show (G-14) | The only way to tie a chatbot visit to a consultation before Hub | Asking prospects "where did you find us" is manual and unreliable |
| Release 2: FAQ sections on Studi kasus, Artikel and Tentang kami; contract question removed from Beranda (G-23) | The user's per-page FAQ rule (G-20); chatbots answer from on-topic pages | One /faq-only list was the earlier recommendation, superseded by G-20 |

No other constitution violations.
