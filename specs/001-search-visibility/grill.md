# Grill ledger: Search visibility (SEO, chatbots, keywords, analytics)

**Session**: 2026-10-15 · **Status**: closed 2026-10-16
**Input**: "SEO Optimization" — widened in round 1: "claim analytics, keywords too. Most of the prospects said that they found us through chatbot (ChatGPT especially). I would like to better found in various chatbots and google searchs. On various keywords on our industry sector, use google keywords for that also"
**Owning spec**: new spec 001 — see G-1

Every row below is traced into spec.md by /speckit-specify, once, as a
requirement, scenario, edge case or assumption — or dropped there with a
reason. Numbers, ordering, exact copy and negatives are copied verbatim.

## Decisions

### G-1 — What this spec covers
- **Decision**: New spec 001. In scope: sitemap, structured data (FR12), share image, retired URLs, www/https, Google Search Console and Bing; **plus analytics and keyword work**, and being found in **chatbots (ChatGPT especially) as well as Google searches**, "on various keywords on our industry sector", using Google's keyword tool. Out of scope: writing articles, Google Business Profile.
- **Why**: the user reports most prospects say they found Eskala through a chatbot, ChatGPT especially.
- **Lands in**: requirement (scope, out of scope)

### G-2 — Retired service URLs
- **Decision**: `/services/ads-management` → 301 to the Ads Management section of Digital Marketing; `/services/kol-management`, `/services/creative-service`, `/services/eskala-vip` → 301 to Digital Marketing.
- **Why**: visitors on old links see current services instead of an error.
- **Lands in**: requirement

### G-3 — Which pages are indexed
- **Decision**: every public page is indexed and in the sitemap, including Education, Training, Artikel, /faq, Privacy and Terms. Only the developer page (`/dev/*`) stays out.
- **Why**: Segera pages collect a waitlist; Privacy and Terms signal a legitimate business.
- **Lands in**: requirement

### G-4 — Share preview image
- **Decision**: one branded 1200×630 image for every page: cobalt panel, copper wing, ESKALA wordmark and "Membumikan kesehatan". Built from brand assets; no text beyond the design's.
- **Why**: per-page generated images are heavy on Workers and add little at 10 pages.
- **Lands in**: requirement

### G-5 — Structured data choices
- **Decision**: FR12 as written. The Social Media Management service carries the starting price (Rp2.500.000 per month, as a minimum). Noktah is not named in structured data. FAQ markup stays, with no expectation of FAQ rich results in Google.
- **Why**: constitution IV allows starting prices in metadata; Noktah only where genuinely needed; Google limits FAQ rich results to government and health-authority sites since 2023.
- **Lands in**: requirement + assumption (no FAQ rich results)

### G-6 — www and https
- **Decision**: `www.eskala.id` and every `http://` address redirect to `https://eskala.id`, done in the Cloudflare dashboard and listed in the spec as a launch checklist for the user.
- **Why**: today www does not resolve and http does not upgrade.
- **Lands in**: requirement (operational checklist)

### G-7 — Search Console and Bing ownership
- **Decision**: registered under an Eskala Google account on core@eskala.id, not a personal one; domain verified through Cloudflare DNS.
- **Why**: alerts must reach the business, not one person.
- **Lands in**: requirement (operational checklist)

### G-8 — AI crawler access
- **Decision**: allow every AI crawler, training and search alike (GPTBot, ClaudeBot, Google-Extended, OAI-SearchBot, PerplexityBot and the like). Turn off Cloudflare's AI-bot blocking (dashboard checklist), name the crawlers explicitly in robots.txt, and publish an `llms.txt` summary of Eskala.
- **Why**: Eskala wants to be known by chatbots; nothing on the site needs protecting from being learned.
- **Lands in**: requirement + operational checklist

### G-9 — Keyword research
- **Decision**: both sources. Claude drafts a seed list from public signals (Google autocomplete, related searches, Google Trends); the user runs it through Google Keyword Planner under the Eskala account and exports a CSV; Claude maps the results to pages. Claude also drafts a list of chatbot prompts (the questions prospects ask) to test ChatGPT, Gemini and Perplexity before and after launch.
- **Why**: real volumes from Google; chatbot "keywords" are questions, not search terms.
- **Lands in**: requirement + assumption (the user has Keyword Planner access via an Eskala Google Ads account)

### G-10 — What keyword work may change
- **Decision**: page titles, meta descriptions, image alt text and structured data may change freely under the copy rules. Visible headings and body copy change only item by item with the user's approval, each recorded as a design deviation.
- **Why**: titles and metadata barely show on the page; the visible copy is the design's.
- **Lands in**: requirement + design deviation (per approved item)

### G-11 — New FAQ answers
- **Decision**: add new questions and answers drawn from the research; "small or medium lists are okay". Written by the copy rules within the health-advertising limits; each answer approved by the user; no invented numbers.
- **Why**: chatbots answer from pages that answer the question directly.
- **Lands in**: requirement

### G-12 — Off-site presence
- **Decision**: the spec includes an off-site checklist (5–8 items, no code, done by the user), marked as recommendations, not launch requirements. Google Business Profile may be left off.
- **Why**: chatbots draw heavily on third-party sources; listing it costs nothing.
- **Lands in**: requirement (recommendation checklist)

### G-13 — Analytics scope
- **Decision**: option (b): Cloudflare Web Analytics, Search Console and Bing reports, **plus Google Analytics 4 now**, with click events. GA4 sets cookies, so this spec includes a consent banner and a privacy page update. (Recommendation (a), without GA4, was declined.)
- **Why**: the user wants click events now, not after the Hub work.
- **Lands in**: requirement

### G-14 — Source tag on WhatsApp messages
- **Decision**: the pre-filled WhatsApp message ends with a short plain-words tag — the visitor's source when known, plus the page name, e.g. `(via ChatGPT · Digital Marketing)`. Exact wording goes through the copy rules.
- **Why**: the consultation happens in WhatsApp; this ties a chatbot visit to a real consultation before the Hub work lands.
- **Lands in**: requirement

### G-15 — When Google Analytics may start
- **Decision**: opt-in. GA4 does not load until the visitor taps "Terima". "Terima" and "Tolak" have equal weight. A footer link "Pengaturan cookie" lets the visitor change the choice later. Cloudflare Web Analytics (cookieless) counts every visitor regardless.
- **Why**: the clean reading of UU PDP; Cloudflare fills the gap from visitors who decline.
- **Lands in**: requirement

### G-16 — Consent banner
- **Decision**: a small bar pinned to the bottom; never covers the WhatsApp button; full width on phones, as short as the text allows; site tokens and pill buttons. One category now (analytics). A second category is added only when the Meta Pixel arrives, and it **must not be worded as ads/"iklan"** — the user does not want visitors to think Eskala will push ads on them; wording via the copy rules (see G-22).
- **Why**: don't ask about something that doesn't exist yet; avoid alarming wording.
- **Lands in**: requirement + design deviation (no banner in `design/`)

### G-17 — What GA4 counts
- **Decision**: taps on any WhatsApp button (with page and button location), form sends (Education waitlist, Training interest, newsletter), taps on the email address, taps on a social profile, "Minta dokumen lengkap" on a case study. WhatsApp taps and form sends are key events (conversions). GA4 sits under the same Eskala Google account as Search Console (G-7).
- **Why**: accepted as proposed.
- **Lands in**: requirement

### G-18 — Privacy page update
- **Decision**: Claude drafts the update (names Google Analytics and Cloudflare, explains the banner and "Pengaturan cookie", replaces the "set your browser" line) by the copy rules; the user approves it, with a legal check if available. No legal wording ships without the user's approval.
- **Why**: legal text.
- **Lands in**: requirement + assumption (user approval before launch)

### G-19 — Source tag mechanics
- **Decision**: every WhatsApp message the site pre-fills carries the tag (buttons, form handoffs, document requests). The source is where the visit **started**, kept for the browser tab's session. Named sources: ChatGPT, Perplexity, Gemini, Copilot, Claude, Google, Bing, Instagram, TikTok, Threads, Facebook, LinkedIn; anything else shows only the page name. No tracking ID; no consent needed.
- **Why**: accepted as proposed.
- **Lands in**: requirement + edge case (unknown source)

### G-20 — Where FAQs live
- **Decision**: supersedes the recommendation in round 3. "FAQ should be anywhere on pages except on education and training. And each faq on pages covers that pages topics only. /faq compiles all the faqs". New answers from G-11 go on the page whose topic they answer.
- **Why**: the user's instruction.
- **Lands in**: requirement + design deviation (FAQ sections on pages the design gives none) — page list settled in G-23

### G-21 — How success is measured
- **Decision**: a baseline before launch and a re-measure 8 weeks after: how often Eskala is named across the test prompts (G-9); visits from chatbots and Google (Cloudflare, GA4); Search Console impressions for the target keywords. These are tracked goals, not pass/fail gates. Launch requirements are what the site must do.
- **Why**: chatbot answers are outside Eskala's control.
- **Lands in**: success criteria

### G-22 — Wording of the future second consent choice
- **Decision**: "Analitik pemasaran". Not "Pengukuran kampanye" ("kampanye feels political"), and not ads/"iklan" (G-16). Used only when the Meta Pixel arrives.
- **Why**: the user's call; avoid political and ad-pushing connotations.
- **Lands in**: assumption (future scope; recorded so the Pixel work picks it up)

### G-23 — Which pages get an FAQ
- **Decision**: Beranda, Digital Marketing, Studi kasus, Artikel and Tentang kami, each just above the closing CTA. No FAQ on Education, Training, Privacy or Terms. A question may appear on two pages only when it truly answers both; the contract question stays on Digital Marketing and leaves Beranda, which keeps the general questions. /faq compiles every FAQ.
- **Why**: accepted as proposed, within G-20.
- **Lands in**: requirement + design deviation (new FAQ sections on Studi kasus, Artikel, Tentang kami; contract question removed from Beranda)

### G-24 — Competitors
- **Decision**: there are no named competitors; neither the team nor prospects have mentioned one. The goal is to rank first when someone searches for a creative agency or digital marketing for healthcare. "Competitors" means whoever outranks Eskala in those test searches.
- **Why**: "it's just itchy that when we search … we are not number one".
- **Lands in**: requirement (comparison set = who ranks above Eskala for the target searches)

### G-25 — Which race
- **Decision**: (a) win the healthcare-qualified searches on the site. No generic "digital marketing agency"/"creative agency" targeting, and no paid directory listings ("i dont have money for listing"); the off-site checklist (G-12) holds free items only.
- **Why**: winnable, and those searchers buy; no budget for listings.
- **Lands in**: requirement + out of scope (generic terms, paid listings)

### G-26 — How rankings are tested
- **Decision**: (a) Search Console average position for the target keywords, plus (b) a monthly check from Indonesia in a private window with a comparison table against whoever ranks above Eskala. No paid rank tracker.
- **Why**: free; covers both Eskala's own position and the field.
- **Lands in**: requirement (measurement)

### G-27 — "Until we are on top"
- **Decision**: the spec ends at launch + baseline + the 8-week re-measure (G-21). After that, a monthly review compares rankings and chatbot answers, picks the next two or three improvements, and ships each as a small follow-up outside this spec.
- **Why**: ranking is ongoing; a spec needs an end.
- **Lands in**: assumption + success criteria

### G-28 — "Creative agency" as a search term
- **Decision**: the keyword data decides. If Keyword Planner shows real volume for healthcare + "creative agency" terms, the phrase may appear in page titles, meta descriptions, structured data and **one** FAQ answer (e.g. "Apakah Eskala sebuah creative agency?"). It **never** becomes a heading or Eskala's self-description in body copy. If the data shows no volume, it is dropped.
- **Why**: rank for the searches the user cares about without breaking the brand's positioning.
- **Lands in**: requirement + CONTEXT.md «Partner digital marketing dan komunikasi kesehatan»

### G-29 — Account for Search Console, Bing, GA4 and Keyword Planner (supersedes G-7, 2026-10-16)
- **Decision**: the company account **core@noktah.co** may own Search Console and Bing (O-3), GA4 (O-5) and Keyword Planner (O-8), all under the same account. If core@eskala.id is a Google account, add it as a second owner. Never a personal account.
- **Why**: the user asked to use it; it is a shared business inbox, which is what G-7 protected. Noktah's naming rule covers visible site content, not dashboard logins.
- **Lands in**: FR-023 (amended), operations.md O-3, O-5, O-8

## Brief open questions in scope
- Q8 Analytics — settled by G-13 (Cloudflare Web Analytics + GA4 with consent; Meta Pixel later, when Eskala runs its own ads). WhatsApp click events are tracked (G-13).

## Facts looked up (not decisions)
- The redesign is live on eskala.id; titles match `design/reference/*.html`; every page calls `usePageSeo` except privacy/terms, which call `useSeoMeta` directly (`app/pages/*.vue`).
- `https://eskala.id/sitemap.xml` returns 404 while `public/robots.txt` points to it.
- `https://www.eskala.id/` does not resolve; `http://eskala.id/` returns 200 with no redirect; `/digital-marketing/` (trailing slash) returns 200.
- `/services/{kol-management,creative-service,eskala-vip,ads-management}` return 404 (old pages, removed in git history); `/services/social-media-management` 301s to `/digital-marketing#smm`.
- OG image is `android-chrome-512x512.png` on every page (`app/composables/usePageSeo.ts`).
- Live crawler check: GPTBot and ClaudeBot user agents get **403**; OAI-SearchBot and PerplexityBot get 200 — consistent with Cloudflare's AI-bot blocking setting, not robots.txt (which allows all).
- No analytics of any kind on the site (`design/SPEC-BRIEF.md` Q8 open; `docs/redesign-notes.md`).
- `app/pages/privacy.vue` §8 "Cookies" already mentions cookies and analytics in general and tells visitors to block cookies in the browser; no named tool, no on-site choice.
- FAQ sets today: `homeFaqs` (results timing, health-ad rules, in-house team, contract) on Beranda; `digitalMarketingFaqs` (followers, DM replies, sudden content, Ads vs SMM, contract) on Digital Marketing; `/faq` shows both, de-duplicated (`app/data/faqs.ts`, `app/pages/faq.vue`).
- Competitor scan 2026-10-15 (WebSearch is US-based, not Google Indonesia): healthcare-agency queries return mostly academic papers and foreign agencies; the one Indonesian healthcare agency seen is DG Media Creative (sponsored article, timesindonesia.co.id). "Creative agency" queries return general Jakarta agencies (Sense Indonesia, Rangka, Talamalama, Kano) and directories (Clutch, Semrush Agency Partners). Eskala did not appear.
- Noktah Hub has no website ingestion yet; click events that need storage depend on the Hub integration (memory: hub-integration-decisions).
