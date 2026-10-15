---
description: "Task list for 001 Search visibility"
---

# Tasks: Search visibility (SEO, chatbots, keywords, analytics)

**Input**: Design documents from `specs/001-search-visibility/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/interfaces.md, quickstart.md

**Tests**: one unit test for the source detector (the coding rules require a test for a parser); everything else is verified through [quickstart.md](quickstart.md) and `/ui-sweep`.

**Visual verification (MANDATORY, Constitution Principle V)**: every phase that touches a page ends with a `/ui-sweep` task. The page must be in `ROUTES` in `e2e/ui-sweep.e2e.ts`, `pnpm ui:gate` must pass, and the 1280px and 390px captures must be compared against `design/screenshots/`.

**Copy**: load the `eskala-copy` skill before any task that writes visible text (marked ✍️).

**Blocked on the user**: tasks marked ⏸ wait for something only the user can provide (an export, an approval, a dashboard action).

## Format: `[ID] [P?] [Story] Description`

---

## Phase 1: Setup

- [X] T001 Add the script `"test:unit": "node --test \"e2e/unit/*.test.ts\""` (a glob: Node treats a bare directory as one file) to `package.json`
- [X] T002 In `nuxt.config.ts` add `runtimeConfig: { public: { gaId: "" } }` (filled from `NUXT_PUBLIC_GA_ID`) and `nitro: { prerender: { routes: ["/sitemap.xml", "/llms.txt"] } }` (research R7, R11)
- [X] T003 [P] Write the operational checklist `specs/001-search-visibility/operations.md`, with exact click paths for each step:
  - **O-1** turn off Cloudflare's AI-bot blocking (Security → Bots / AI Crawl Control) and allow every AI crawler;
  - **O-2** add `www` DNS and a redirect rule `www` → apex, and turn on Always Use HTTPS;
  - **O-3** Search Console (Domain property via Cloudflare DNS TXT, account core@noktah.co per G-29) and Bing Webmaster (import from Search Console), with `https://eskala.id/sitemap.xml` submitted to both;
  - **O-4** Cloudflare Web Analytics, automatic setup for eskala.id;
  - **O-5** GA4 property under the same account: data retention 14 months, key events `whatsapp_click` and `form_submit`, custom dimensions per contract C-1;
  - **O-6** **only after O-7**, set `NUXT_PUBLIC_GA_ID` as a Worker variable (Workers → eskala → Settings → Variables, which the server reads at runtime) and as a build variable. Then confirm the consent bar appears on https://eskala.id in a fresh private window;
  - **O-7** approve the privacy update;
  - **O-8** Release 2: create a Google Ads account (no spend), run the seed list through Keyword Planner (location Indonesia, language Indonesian) and save the CSV to `specs/001-search-visibility/keywords/planner-export.csv`.

---

## Phase 2: Foundational (blocks every story)

- [X] T004 Add `publicPages: { path, name, description }[]` to `app/data/site.ts` with the 10 public pages in nav order (data-model § Public page), moving each page's meta description out of its `usePageSeo` call into this list
- [X] T005 Change `app/composables/usePageSeo.ts` to read `description` and `name` from `publicPages` by `path`, and update every caller in `app/pages/*.vue` (index, digital-marketing, education, training, case-study, articles, about-us, faq) to drop the duplicated description
- [X] T006 Create `app/utils/visit-source.ts`, with no imports:
  - `type VisitSource`;
  - `detectVisitSource(referrer: string, utmSource: string | null): VisitSource | null`, using the data-model table and the order rules in research R10;
  - `withSourceTag(link: string, source: VisitSource | null, pageName: string): string`, per contract C-2: appended to the `text` query, idempotent, and creating `text` when absent.
- [X] T007 [P] Write `e2e/unit/visit-source.test.ts` with `node:test` (importing `../../app/utils/visit-source.ts`). Cover:
  - every source in the table;
  - `utm_source=chatgpt.com` beating a Google referrer;
  - `gemini.google.com` → Gemini, and `google.co.id` → Google;
  - `eskala.id` and empty referrers → null;
  - `withSourceTag` on links with and without `text`, and applied twice (idempotent).

  Run `pnpm test:unit`.

**Checkpoint**: `pnpm test:unit` passes; pages render unchanged.

---

## Phase 3: User Story 1 — Google and chatbots can find and understand every page (P1, Release 1) 🎯 MVP

**Goal**: FR-001–FR-008. **Independent test**: quickstart steps 2–6 and 10–11.

- [X] T008 [P] [US1] Replace `public/robots.txt` with contract C-4
- [X] T009 [P] [US1] Create `server/routes/sitemap.xml.ts` (contract C-3), importing `publicPages` from `../../app/data/site` and setting `Content-Type: application/xml`
- [X] T010 [P] [US1] Create `server/routes/llms.txt.ts` (contract C-5) from `contact`, `pricing`, `publicPages` and `socialLinks` in `app/data/site.ts`, with `Content-Type: text/plain; charset=utf-8`. The summary line uses the CONTEXT.md self-description ("Partner digital marketing dan komunikasi kesehatan") and the brand audience wording ✍️
- [X] T011 [US1] Add the four 301s to `routeRules` in `nuxt.config.ts` (FR-002):
  - `/services/ads-management` → `/digital-marketing#ads-management`;
  - `/services/kol-management`, `/services/creative-service` and `/services/eskala-vip` → `/digital-marketing`.
- [X] T012 [P] [US1] Render `public/og-image.png` (1200×630; research R3). Steps:
  - write a throwaway HTML in the scratchpad: cobalt-500 panel, `public/brand/wing-copper.svg` cropped large, `wing-white.svg` with the "ESKALA" wordmark in Livvic 900, and "Membumikan kesehatan" in Plus Jakarta Sans 800;
  - screenshot it with Playwright at 1200×630;
  - commit only the PNG and confirm it's under 300 KB.
- [X] T013 [US1] Extend `app/composables/usePageSeo.ts` (contract C-6):
  - `og:image` → `/og-image.png`, with width 1200, height 630 and alt ✍️, plus `twitter:image`;
  - one `application/ld+json` `@graph` per page holding a `BreadcrumbList` (Beranda → page name; inner pages only);
  - an optional `faqs: FaqItem[]` input producing one `FAQPage`;
  - an optional `schema: object[]` input for extra nodes.
- [X] T014 [US1] In `app/app.vue`, add the `Organization` + `WebSite` JSON-LD from contract C-6 (email, phone, `sameAs` from `socialLinks`, logo `https://eskala.id/android-chrome-512x512.png`); no Noktah
- [X] T015 [US1] Replace the hand-written `useSeoMeta`/`useHead` blocks in `app/pages/privacy.vue` and `app/pages/terms.vue` with `usePageSeo` (FR-008). Their descriptions already went into `publicPages` in T004.
- [X] T016 [US1] Pass FAQs and services:
  - `app/pages/index.vue` passes `faqs: homeFaqs`;
  - `app/pages/faq.vue` passes every FAQ on the page;
  - `app/pages/digital-marketing.vue` passes `faqs: digitalMarketingFaqs` and two `Service` nodes (SMM with `minPrice` 2500000 IDR per `MONTH`, Ads with no price; research R2).
- [X] T017 [US1] Verify quickstart steps 2–5 locally with `pnpm dev`, and that `/digital-marketing/` declares `<link rel="canonical" href="https://eskala.id/digital-marketing">` (FR-005). Then run `/ui-sweep` for every page (`pnpm ui:gate`) to confirm nothing visible changed.

**Checkpoint**: sitemap, robots, llms.txt, redirects and structured data are correct. The site looks identical.

---

## Phase 4: User Story 2 — The team knows where each consultation came from (P1, Release 1)

**Goal**: FR-016, FR-017. **Independent test**: quickstart step 7.

- [X] T018 [US2] ✍️ Load `eskala-copy`, settle the tag wording for a known and an unknown source, and write it into contract C-2 in `specs/001-search-visibility/contracts/interfaces.md` and into `withSourceTag` in `app/utils/visit-source.ts`. Update the unit test to match.
- [X] T019 [US2] Create `app/plugins/visit.client.ts` (research R9):
  - on first load in a tab, store `detectVisitSource(document.referrer, utm_source)` in `sessionStorage["eskala-source"]` when empty (try/catch);
  - add a capture-phase `click` listener on `document`; for `a[href^="https://wa.me/"]` it sets `href` to `withSourceTag(href, source, pageName)`, with `pageName` looked up from `publicPages` by the current route path.
- [X] T020 [US2] In `app/composables/useWhatsAppHandoff.ts`, apply `withSourceTag` to the built link before `window.open`, reading the source the same way. Both read it through `currentVisitSource()` in `app/utils/visit-source.ts`, with the storage read inside try/catch and still no imports.
- [X] T021 [P] [US2] Add `data-track="document_request"` to the "Minta dokumen lengkap" button in `app/components/blocks/CaseStudyCard.vue`
- [X] T022 [US2] Verify quickstart step 7 (utm and fresh-tab cases, the document request, the Education form)

---

## Phase 5: User Story 3 — Visitors choose analytics; the team sees actions (P2, Release 1)

**Goal**: FR-018–FR-022, FR-027, FR-028. **Independent test**: quickstart step 8.

- [X] T023 [US3] Create `app/composables/useConsent.ts` (research R7, R8; data-model § Consent choice):
  - `useState` shared state, read from and written to `localStorage["eskala-consent"]` with a 6-month expiry, all inside try/catch;
  - `accept()` / `decline()` / `reopen()`;
  - after `accept()`, load `https://www.googletagmanager.com/gtag/js?id=<gaId>` once and call `gtag('config', gaId)`;
  - `decline()` after an accept sets `window['ga-disable-<gaId>'] = true` and deletes the `_ga*` cookies;
  - `track(name, params)` is a no-op unless granted;
  - the whole module is inert when `gaId` is empty.
- [X] T024 [US3] ✍️ Create `app/components/site/ConsentBar.vue` (contract C-7):
  - fixed to the bottom, with `role="region"` and an `aria-label`;
  - a short Indonesian sentence plus a link to `/privacy`;
  - two equal `PillButton`s, "Terima" and "Tolak", at least 44px tall;
  - full width on phones;
  - reports its height so the page reserves bottom padding while it shows.

  Mount it in `app/app.vue`, rendered only when `gaId` is set and the choice is unset or reopened. The wording follows `eskala-copy` and never says ads or "iklan" (G-16).
- [X] T025 [US3] ✍️ In `app/components/site/SiteFooter.vue`, add a `<button type="button">` "Pengaturan cookie" to the legal row, styled like the legal links, calling `reopen()`. Show it only when `gaId` is set.
- [X] T026 [US3] Add event reporting (contract C-1):
  - in `app/plugins/visit.client.ts`, the click listener calls `track()` for `whatsapp_click` / `document_request` (via `data-track`), `email_click` (`mailto:`) and `social_click` (hrefs in `socialLinks`), with `page_name`, `location` (header / menu / footer landmark, else the closest `<section>`'s first h1/h2 text, cut to 60 characters) and `visit_source`;
  - in `app/composables/useWhatsAppHandoff.ts`, `send()` takes a `form` name and calls `track("form_submit", …)`;
  - update the callers in `app/pages/education.vue` (`education_waitlist`), `app/pages/training.vue` (`training_interest`) and `app/pages/articles.vue` (`newsletter`).
- [X] T027 [US3] ✍️ Draft the privacy update in `app/pages/privacy.vue` §8 "Cookies" and §4 where analytics tools are listed:
  - name Google Analytics (Google LLC) and Cloudflare Web Analytics (cookieless);
  - explain the consent bar and "Pengaturan cookie";
  - state the 14-month retention;
  - replace the "atur browser untuk menolak cookies" line.

  ⏸ Mark it in `operations.md` O-7 for the user's approval. GA4 stays off until O-6 sets the ID.
- [X] T028 [US3] Update `e2e/ui-sweep.e2e.ts` and `playwright.config.ts`:
  - set `NUXT_PUBLIC_GA_ID=G-SWEEP00000` in the `webServer.env`;
  - preset `localStorage["eskala-consent"]` to denied with `page.addInitScript` so page captures stay comparable to `design/screenshots/`;
  - add one `consent` route entry that loads `/` with no preset, so the bar is swept at every width.

  Because `reuseExistingServer: true` would reuse a server on 3100 started without the test ID, the `consent` test fails with a clear message ("stop the server on port 3100 and rerun") when the bar is missing.
- [X] T029 [US3] Verify quickstart step 8, then run `/ui-sweep`: `pnpm ui:gate` passes, including the consent bar at 320–2560px; compare captures at 1280 and 390.

---

## Phase 6: User Story 5 — Measure progress and compare rankings (P3; baseline in Release 1)

**Goal**: FR-025, FR-026, SC-008. **Independent test**: `baseline.md` is filled in before Release 1 goes live.

- [X] T030 [P] [US5] ✍️ Draft `specs/001-search-visibility/keywords/test-prompts.md`: 15–30 chatbot prompts a clinic, hospital or doctor would ask, mostly Bahasa Indonesia with about 5 in English (FR-009, clarification 3)
- [X] T031 [US5] Create `specs/001-search-visibility/baseline.md`:
  - tables for each prompt × ChatGPT / Gemini / Perplexity (names Eskala? who is named instead? date);
  - chatbot and Google visits (Cloudflare, GA4);
  - Search Console impressions and average position per target keyword;
  - a "Monthly check" procedure (FR-025/026): private window, location Indonesia, the target searches, a table of who ranks above Eskala.

  ⏸ The user (or Claude with the user's chatbot access) fills in the "before" column ahead of Release 1 going live, and the "8 weeks after" column later.

---

## Phase 7: Release 1 polish

- [ ] T032 Run `pnpm build`, `pnpm test:unit` and `pnpm ui:gate`, plus the `/ui-sweep` Step 5 static checks across `app/`, `public/` and `server/`: no prices other than the two starting prices (structured data included), no Noktah outside Privacy and Terms, no hex values or inline styles. Then run `pnpm nuxi typecheck`. Run mobile Lighthouse (`pnpm build && pnpm preview`, then `npx lighthouse <url> --form-factor=mobile --only-categories=performance,accessibility,best-practices,seo`) on Beranda and Digital Marketing, once with the bar showing and once after "Terima". All four categories must score ≥ 90 (SC-007).
  - **Status 2026-10-16**:
    - passing: `pnpm build` ✓ (sitemap.xml and llms.txt prerendered), `pnpm test:unit` 5/5 ✓, `pnpm ui:gate` 12/12 ✓, static checks ✓;
    - `pnpm nuxi typecheck` ✗ can't run: `vue-tsc` isn't installed, and the version npx fetches doesn't work with TypeScript 6 (`ERR_PACKAGE_PATH_NOT_EXPORTED`). This predates this spec.
    - Lighthouse mobile, local production build (no compression): Accessibility 100, Best Practices 100, SEO 100; Performance 63 on both pages.
    - The **live site before this change** already scores Performance 83 (Beranda) and 84 (Digital Marketing), so SC-007 Performance was missed before spec 001. This change adds no script before consent.
    - Left open: re-measure on the live site after deploy, and hand Performance to the `performance` agent as a follow-up.
- [X] T033 [P] Record the deviations (consent bar, footer button, source tag) in `docs/redesign-notes.md`, mark `design/SPEC-BRIEF.md` open question 8 as settled (pointing to this spec), and add `pnpm test:unit` to the commands in `.claude/CLAUDE.md`

- [ ] T034 ⏸ (after deploy and O-1/O-2/O-3) Run the live checks against https://eskala.id: quickstart steps 5 (Rich Results test, Schema validator), 6 (share previews), 10 (every AI crawler returns 200) and 11 (www/https). Record the results in `operations.md` (SC-002, SC-003, SC-004).

**Release 1 is shippable here** (after the user's O-1…O-7).

---

## Phase 8: User Story 4 — Pages answer the questions prospects ask (P2, Release 2)

**Goal**: FR-009–FR-015, FR-024. **Independent test**: quickstart steps 13–16.

- [X] T035 [P] [US4] Research `specs/001-search-visibility/keywords/seed-list.md` with web search: Google autocomplete, related searches and Trends for healthcare-qualified phrases (klinik, rumah sakit, dokter, kesehatan × digital marketing, social media, iklan, agency, creative agency). 40–80 phrases, grouped by page. No generic agency terms as targets (FR-010).
- [X] T036 [US4] ⏸ (needs O-8) Turn `keywords/planner-export.csv` into `keywords/keyword-map.md`: phrase, volume range, competition, target page, and where it's used. Decide the "creative agency" question by volume (FR-012).
- [ ] T037 [US4] ✍️ Draft new FAQ answers per page (Beranda, Digital Marketing, Studi kasus, Artikel, Tentang kami), small to medium lists on each page's topic only, in `keywords/keyword-map.md` § FAQ drafts. Use no invented numbers and stay within the health-advertising limits. Also draft the title, description and alt-text changes.
  - **Status 2026-10-16**: FAQ drafts written (21 answers, B4 only if FR-012 shows volume, 4 with placeholders) in `keywords/keyword-map.md` § 2, waiting for approval. Title, description and alt drafts wait for the keyword map (T036).
- [X] T038 [US4] ⏸ (needs approval of T037) Add the approved items to `app/data/faqs.ts` as per-page groups (`homeFaqs`, `digitalMarketingFaqs`, `caseStudyFaqs`, `articleFaqs`, `aboutFaqs`), moving the contract question off `homeFaqs` (FR-014)
- [X] T039 [US4] Add a `FaqList` section just above the closing CTA in `app/pages/case-study.vue`, `app/pages/articles.vue` and `app/pages/about-us.vue`, each passing `faqs` to `usePageSeo`. A page whose group is empty renders no section.
- [X] T040 [US4] Make `app/pages/faq.vue` compile every group, listing each question once
- [ ] T041 [US4] Apply the approved titles, descriptions and alt text (`publicPages` in `app/data/site.ts`, the page `usePageSeo` titles, image alt). Record each approved visible-copy change as a deviation in `docs/redesign-notes.md` (FR-011).
- [X] T042 [P] [US4] ✍️ Write `specs/001-search-visibility/off-site.md`: 5–8 free recommendations (FR-024), for example LinkedIn company page, a free Clutch profile, healthcare association directories, guest articles and partner mentions. No paid listings.
- [ ] T043 [US4] Run `/ui-sweep` for case-study, articles, about-us, faq, home and digital-marketing: `pnpm ui:gate` passes and captures are compared at 1280 and 390, with the new FAQ sections recorded as deviations (G-23). Re-run quickstart steps 13–16.
  - **Status 2026-10-16**: FAQ part done, with `pnpm ui:gate` 12/12 and captures of the new sections at 1280 and 390 compared. Rerun after T041 (titles and descriptions).

---

## Dependencies & execution order

- Setup (T001–T003) → Foundational (T004–T007) → **US1** (T008–T017) → **US2** (T018–T022) → **US3** (T023–T029) → **US5 baseline** (T030–T031; may run in parallel with US1–US3) → Release 1 polish (T032–T034) → **US4** (T035–T043).
- US2 and US3 both edit `app/plugins/visit.client.ts` and `useWhatsAppHandoff.ts`: US3's T026 builds on US2's T019/T020.
- T024, T025 and T027 depend on T023. T028 depends on T024.
- US4 depends on Release 1's `usePageSeo` (`faqs`, T013) and on two user waits (O-8 → T036; approval → T038).

## Parallel opportunities

- T003 ∥ T001/T002; T007 ∥ T006 once its signature is fixed.
- US1: T008, T009, T010 and T012 touch different files and run together. T013 → T014 → T015/T016 follow.
- T021 ∥ T019; T030 ∥ any Release 1 phase; T035 and T042 ∥ T036 waiting on the export.

## Implementation strategy

1. **MVP** = Phase 1 + 2 + US1. Shipping just that fixes the 404 sitemap, the crawler blocks (with O-1), the share previews and the old links.
2. Then US2 (source tag) and US3 (consent and GA4), and the baseline before going live. That completes Release 1.
3. Release 2 (US4) starts when the Keyword Planner export arrives, and ships page by page as answers are approved.
