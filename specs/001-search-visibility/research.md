# Research: Search visibility

Phase 0 for [plan.md](plan.md). Each item: decision, rationale, alternatives.

## R1. Sitemap: hand-written server route, not `@nuxtjs/sitemap`

- **Decision**: `server/routes/sitemap.xml.ts` renders the public page list from one typed list (`publicPages` in `app/data/site.ts`) and is prerendered at build.
- **Rationale**: 10 URLs, no dynamic content. The coding rules say never add a dependency for a few lines. One list feeds the sitemap, breadcrumbs, the source tag's page names and llms.txt.
- **Alternatives**: `@nuxtjs/sitemap` (auto-discovers routes, but would pick up `/dev/components` unless excluded, and adds a module for ~20 lines); `@nuxtjs/seo` (bundles `nuxt-og-image`, too heavy for Workers, ledger G-4).

## R2. Structured data: hand-written JSON-LD through `useHead`, not `nuxt-schema-org`

- **Decision**: `usePageSeo` gains two optional inputs, `faqs` and `breadcrumb` (default on for inner pages). It emits one `<script type="application/ld+json">` with an `@graph`. `app.vue` emits `Organization` + `WebSite` on every page. Digital Marketing passes its two `Service` nodes.
- **Rationale**: a handful of fixed nodes. A page with several FAQ lists (/faq) must emit one `FAQPage`, which is easier at page level than per `FaqList`. Typed objects keep it checkable.
- **Alternatives**: `nuxt-schema-org` (good, but a module for five node types); emitting from `FaqList` (would produce two `FAQPage` blocks on /faq, which Google flags).
- **Price node**: SMM `Service.offers` = `Offer` with `priceSpecification` `UnitPriceSpecification { minPrice: 2500000, priceCurrency: "IDR", unitText: "MONTH" }`. Ads Management has no offer (constitution IV allows starting prices only; "10%" is not an amount).

## R3. Share image: one static PNG

- **Decision**: `public/og-image.png`, 1200×630, rendered once from a throwaway HTML page (brand SVG from `public/brand/`, Livvic and Plus Jakarta Sans, cobalt-500 panel, copper wing) with Playwright's screenshot, then committed. `usePageSeo`, privacy and terms point to it, with `og:image:width/height/alt`.
- **Rationale**: ledger G-4; no runtime cost on Workers.
- **Alternatives**: `nuxt-og-image` (runtime rendering, rejected in G-4); a designer-supplied image (option (c), declined).

## R4. Crawler access: robots.txt names the AI crawlers; Cloudflare setting is the real switch

- **Decision**: `public/robots.txt` keeps `User-agent: * / Allow: /`, adds explicit `Allow: /` groups for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, Bingbot, and `Disallow: /dev/`. The 403s seen live come from Cloudflare's *Block AI bots* / *AI Crawl Control* setting, which only the dashboard can turn off (operational checklist O-1).
- **Rationale**: robots.txt cannot override a firewall block, but naming the bots documents intent, and some crawlers read their own group in preference to `*`.
- **Check**: `curl -A "<bot UA>" https://eskala.id/` returns 200 for each (quickstart step).

## R5. llms.txt: generated from site data

- **Decision**: `server/routes/llms.txt.ts`, prerendered, built from `app/data/site.ts` (contact, `pricing`, `publicPages`, services) following the llmstxt.org shape: `# Eskala`, a `>` summary, then `## Layanan`, `## Halaman` link lists. Bahasa Indonesia.
- **Rationale**: "one copy of a fact": prices and contact are read from `site.ts`, never retyped.
- **Alternatives**: a static `public/llms.txt` (would duplicate prices and the phone number).

## R6. Retired URLs and trailing slashes

- **Decision**: four more `routeRules` 301s in `nuxt.config.ts` (FR-002). Trailing-slash variants are covered by the canonical tag every page already emits (FR-005 allows "declare it as canonical"); no redirect is added.
- **Rationale**: smallest change that meets FR-005. A blanket trailing-slash redirect in Nitro needs middleware and risks loops with the redirects above.

## R7. Analytics: Cloudflare Web Analytics via dashboard; GA4 hand-loaded after consent

- **Decision**:
  - Cloudflare Web Analytics is turned on in the dashboard (automatic setup for a proxied hostname). No code (operational checklist O-4).
  - GA4 loads `gtag.js` only after "Terima", from a small client module. The measurement ID comes from `runtimeConfig.public.gaId`: `G-GT2D6YXFFP` in production builds (set in `nuxt.config.ts` on 2026-10-16, because a Wrangler deploy can drop dashboard variables and the ID is public anyway), empty in development, and overridable with `NUXT_PUBLIC_GA_ID`. **No ID → no consent bar and no GA4**, which also makes the edge case "privacy wording not yet approved" hold: the ID is set only after the privacy update ships (O-6).
  - GA4's enhanced measurement records SPA page views from history changes, so no router hook is needed.
  - "Tolak" after an earlier "Terima": set `window['ga-disable-<ID>'] = true` and delete the `_ga*` cookies, taking effect immediately.
- **Rationale**: ledger G-13/G-15. A hand-written loader is ~25 lines. `@nuxt/scripts` would add a module for one script.
- **Alternatives**: Google Consent Mode "advanced" (pings before consent, rejected in G-15); `@nuxt/scripts`; Cloudflare Zaraz (moves configuration out of the repo).

## R8. Consent choice storage

- **Decision**: `localStorage["eskala-consent"] = { value: "granted" | "denied", at: <ISO date> }`, valid for 6 months (spec assumption). Read and written inside try/catch: if storage throws, there is no remembered choice, the bar shows, and GA stays off. Shared state via `useState("consent")`.
- **Rationale**: the spec's edge case for blocked storage.

## R9. Source tag and click tracking: one delegated client listener

- **Decision**: `app/plugins/visit.client.ts`:
  1. On first load in a tab, if `sessionStorage["eskala-source"]` is empty, set it from `detectVisitSource(document.referrer, utm_source)`; an internal referrer never overwrites it.
  2. A capture-phase `click` listener on `document`. For `a[href^="https://wa.me/"]` it rewrites the `text` query to append the source tag (contract C-2) just before the browser follows it. It also reports the tracked actions (contract C-1) when consent is granted.
  3. `useWhatsAppHandoff` calls the same `withSourceTag()` helper before opening WhatsApp, and reports `form_submit`.
- **Click location**: `header` / `menu` / `footer` landmarks by name. Otherwise the first `h1`/`h2` text of the closest `<section>`, cut to 60 characters. No component edits are needed (most sections have no `id`).
- **"Minta dokumen lengkap"**: carries `data-track="document_request"`, which falls through PillButton/UButton to the `<a>`. It is reported as `document_request` instead of `whatsapp_click`, and still gets the tag.
- **Rationale**: every WhatsApp link (≈15 places) is covered without touching each component. Works with or without consent, and fails safe: if JavaScript fails, the link opens with its base text.
- **Alternatives**: a `useWhatsAppLink()` composable at every call site (touches ~12 files, and SSR markup can't know the session source anyway).

## R10. Source detection: a pure function with a unit test

- **Decision**: `app/utils/visit-source.ts` exports `detectVisitSource(referrer: string, utmSource: string | null): VisitSource | null`, matching hostnames, with `utm_source` checked first (ChatGPT adds `utm_source=chatgpt.com`). Rules in [data-model.md](data-model.md). It has no imports, so `node --test` (Node 24 strips types) runs `e2e/unit/visit-source.test.ts` with no new dependency. Script: `pnpm test:unit`.
- **Order matters**: `gemini.google.com` → Gemini before `google.*` → Google; `copilot.microsoft.com` and `bing.com/chat` → Copilot before `bing.com` → Bing.

## R11. Prerendering

- **Decision**: prerender only `/sitemap.xml` and `/llms.txt` (`nitro.prerender.routes`). Pages keep their current rendering.
- **Rationale**: not in the spec. Prerendering every page changes how the Worker serves the site, and the deploy pipeline lives outside the repo (no wrangler config committed; the local build uses the node-server preset). Recorded as a follow-up, not done here.

## R12. FAQ data shape (Release 2)

- **Decision**: `app/data/faqs.ts` gains per-page exports (`homeFaqs`, `digitalMarketingFaqs`, `caseStudyFaqs`, `articleFaqs`, `aboutFaqs`). /faq renders them grouped by page and de-duplicates by question (the existing pattern in `faq.vue`). Each page passes its list to `FaqList` and to `usePageSeo({ faqs })`.
- **Rationale**: matches the existing shape; FR-013/014.

## R13. Keyword and prompt research deliverables (Release 2)

- **Decision**: markdown in the feature directory: `keywords/seed-list.md` (from Google autocomplete, related searches and Trends, gathered with web search), `keywords/test-prompts.md` (15–30 prompts, about 5 in English), `keywords/keyword-map.md` (filled after the user's Keyword Planner CSV lands in `keywords/planner-export.csv`), `baseline.md`, `operations.md` (checklists O-*), `off-site.md` (5–8 free items).
- **Rationale**: these are working documents for the user, versioned with the spec.
