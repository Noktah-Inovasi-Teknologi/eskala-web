# Feature Specification: Search visibility (SEO, chatbots, keywords, analytics)

**Feature Branch**: `001-search-visibility` (no branch created; the work happens on the branch the user chooses)

**Created**: 2026-10-16

**Status**: Draft

**Input**: User description: "search visibility: SEO, chatbot visibility, keywords and analytics"

**Grill ledger**: [grill.md](grill.md) · session 2026-10-15 (closed 2026-10-16)

## Clarifications

### Session 2026-10-16

- Q: Ship everything at once, or the technical work first? → A: Two releases. Release 1: the technical work, analytics and the baseline (Stories 1, 2, 3 and the baseline half of 5). Release 2: keywords, the new FAQ sections and new answers (Story 4), once the Keyword Planner export and approvals are in.
- Q: How long does Google Analytics keep visitor-level data? → A: 14 months, and the privacy page states it.
- Q: Which language do the chatbot test prompts use? → A: Mostly Bahasa Indonesia, plus about 5 English prompts.
- Q: May the dashboards use core@noktah.co instead of core@eskala.id? → A: Yes, a shared company account (G-29); the same account for Search Console, GA4 and Keyword Planner.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Google and chatbots can find and understand every page (Priority: P1)

A clinic owner asks ChatGPT, Gemini or Perplexity, or searches Google, for a digital marketing partner for their clinic. For Eskala to come up, search engines and AI crawlers must be able to reach every public page, know which pages exist, understand what Eskala is and sells, and show a clean preview when the link is shared. Today the sitemap is missing, two AI crawlers are turned away, `www` does not resolve, old service links end in "page not found", and shared links show a small app icon.

**Why this priority**: most prospects say they found Eskala through a chatbot. Nothing else in this spec matters if crawlers cannot reach or understand the site.

**Independent Test**: request the sitemap, every page and every retired URL as an ordinary browser and as each named AI crawler; validate the structured data; paste each page link into a share-preview checker. Delivers value alone: the site becomes fully crawlable and understandable.

**Acceptance Scenarios**:

1. **Given** a search engine reads the crawling rules, **When** it follows the sitemap address listed there, **Then** it receives a sitemap listing every public page and no developer page.
2. **Given** an AI crawler (training or search) requests any public page, **When** the request arrives, **Then** it receives the page, not a block.
3. **Given** someone opens an old link such as `/services/kol-management`, **When** the page loads, **Then** they land on Digital Marketing in one permanent redirect.
4. **Given** someone types `www.eskala.id` or an `http://` address, **When** the browser loads it, **Then** they end up on the same page at `https://eskala.id`.
5. **Given** someone shares any page link on WhatsApp, LinkedIn or Facebook, **When** the preview renders, **Then** it shows the branded Eskala image, the page title and its description.
6. **Given** a search engine reads Beranda, **When** it parses the structured data, **Then** it finds Eskala as an organisation with its three social profiles, and no mention of Noktah.

---

### User Story 2 - The team knows where each consultation came from (Priority: P1)

A visitor arrives from a ChatGPT answer, reads Digital Marketing and Studi kasus, and taps "Konsultasi gratis 30 menit". The WhatsApp message that opens ends with a short tag naming where the visit started and which page they were on, so whoever answers sees "(via ChatGPT · Digital Marketing)" without having to ask.

**Why this priority**: the consultation happens in WhatsApp, where the site cannot see it. This is the only way to tie a chatbot or Google visit to a real conversation before the Noktah Hub integration exists. It works for every visitor, whether or not they accept analytics.

**Independent Test**: arrive on the site from each named source (simulated referrer or campaign tag), browse to another page, tap each kind of WhatsApp action, and read the pre-filled message.

**Acceptance Scenarios**:

1. **Given** a visitor arrived from ChatGPT and is now on Studi kasus, **When** they tap "Minta dokumen lengkap", **Then** the pre-filled message ends with a tag naming ChatGPT and Studi kasus.
2. **Given** a visitor arrived by typing the address, **When** they tap any WhatsApp button, **Then** the tag names only the page.
3. **Given** a visitor sends the Education waitlist form, **When** WhatsApp opens with their answers, **Then** the same tag ends the message.

---

### User Story 3 - Visitors choose whether analytics runs, and the team sees what visitors do (Priority: P2)

On the first visit a small bar at the bottom of the screen asks whether Eskala may use analytics. The visitor taps "Terima" or "Tolak", both equally easy. If they accept, the site counts the actions that matter: WhatsApp taps, form sends, email taps, social profile taps and document requests. Visitors who decline are still counted as anonymous visits. A footer link, "Pengaturan cookie", reopens the choice. The privacy page explains all of this.

**Why this priority**: the user wants click-level analytics now. Without consent handling, adding it would break Indonesian personal-data law (UU PDP).

**Independent Test**: load the site fresh; confirm no analytics cookie exists before a choice; accept and perform each tracked action and confirm each is recorded; decline and confirm nothing is sent; reopen the choice from the footer.

**Acceptance Scenarios**:

1. **Given** a first-time visitor, **When** any page loads, **Then** the consent bar shows and no analytics cookie is set.
2. **Given** the visitor taps "Terima", **When** they tap a WhatsApp button, **Then** the action is recorded with the page and the button's location, as a key event.
3. **Given** the visitor taps "Tolak", **When** they browse, **Then** no click-level analytics loads, while the anonymous visit count still includes them.
4. **Given** a visitor who chose earlier, **When** they tap "Pengaturan cookie" in the footer, **Then** the choice reopens and a new answer takes effect immediately.
5. **Given** a phone at 320px with the consent bar showing, **When** the visitor looks for the WhatsApp button, **Then** the bar does not cover it.

---

### User Story 4 - Pages answer the questions prospects ask (Priority: P2)

Prospects ask Google and chatbots questions such as "berapa biaya digital marketing klinik?". Keyword research, drawing on public signals and Google Keyword Planner, finds the healthcare searches and questions that matter. Each page's title, description and image descriptions are tuned to them. Each page except Education, Training, Privacy and Terms gets a short FAQ on its own topic, and /faq compiles every FAQ in one place.

**Why this priority**: chatbots answer from pages that answer the question directly. This follows Story 1 because it depends on the site being crawlable.

**Independent Test**: compare each page's title and description against the approved keyword map; check that each FAQ appears only on its page's topic and that /faq holds all of them; confirm every new answer has the user's approval.

**Acceptance Scenarios**:

1. **Given** the approved keyword map, **When** a page is published, **Then** its title and description use that page's target terms within the copy rules.
2. **Given** Studi kasus, **When** a visitor scrolls to just above the closing call-to-action, **Then** they see an FAQ about case-study topics only.
3. **Given** /faq, **When** it loads, **Then** it lists every FAQ from every page, each once.
4. **Given** keyword data shows real searches for healthcare + "creative agency", **When** the metadata is written, **Then** the phrase appears only in titles, descriptions, structured data and at most one FAQ answer, never in a heading or in Eskala's self-description.

---

### User Story 5 - The team measures progress and compares rankings (Priority: P3)

Before launch, the team records a baseline: how often chatbots name Eskala across a fixed set of test prompts, visits from chatbots and Google, and Search Console impressions and positions for the target keywords. Eight weeks after launch they measure again. Every month they check, from Indonesia, who ranks above Eskala for the target searches.

**Why this priority**: it shows whether Stories 1–4 worked and feeds the monthly improvements, but it changes nothing a visitor sees.

**Independent Test**: the baseline document exists with every measure filled in before launch, and the monthly check procedure produces a comparison table.

**Acceptance Scenarios**:

1. **Given** the test prompt list, **When** the baseline is taken, **Then** each prompt's answer in ChatGPT, Gemini and Perplexity is recorded with whether Eskala is named.
2. **Given** a monthly check, **When** the team runs it from Indonesia in a private window, **Then** they get a table of who ranks above Eskala for each target search.

---

### Edge Cases

- **Visitor arrives with no detectable source** (typed address, privacy browser, unknown site): the WhatsApp tag names only the page.
- **Visitor arrives from ChatGPT, then follows a Google link back to the site in the same tab**: the tag keeps the source where the visit *started*.
- **Visitor opens a link in a new tab**: the new tab may start without the remembered source. Acceptable; the tag then names only the page.
- **Browser blocks storage** (strict private mode): the consent bar shows on each visit, analytics stays off, and the source tag names only the page. The site still works.
- **Ad or tracker blocker stops analytics after "Terima"**: every button, form and WhatsApp action still works; nothing waits on analytics.
- **JavaScript fails to load**: WhatsApp links still open with the base message, without a tag.
- **Retired URL with a section anchor, or with a trailing slash**: still redirects in one hop to the right page.
- **Two pages share a question**: allowed only when it truly answers both; /faq still lists it once.
- **The privacy wording is not yet approved at launch**: analytics (GA4) does not go live until the privacy update is approved and published.
- **Keyword data shows no volume for "creative agency" terms**: the phrase is not used anywhere.

## Requirements *(mandatory)*

### Functional Requirements

**Crawling and indexing**

- **FR-001**: The site MUST publish a sitemap at the address the crawling rules name. It MUST list every public page: Beranda, Digital Marketing, Education, Training, Studi kasus, Artikel, Tentang kami, /faq, Privacy and Terms. Only the developer page (`/dev/*`) MUST stay out of the sitemap and out of search indexes (G-3).
- **FR-002**: `/services/ads-management` MUST redirect permanently to the Ads Management section of Digital Marketing. `/services/kol-management`, `/services/creative-service` and `/services/eskala-vip` MUST redirect permanently to Digital Marketing. The two existing `/services/*` redirects stay (G-2).
- **FR-003**: `www.eskala.id` and every `http://` address MUST redirect to the same path on `https://eskala.id`. This is a Cloudflare dashboard step on the operational checklist, done by the user (G-6).
- **FR-004**: Every AI crawler, training and search alike (at least GPTBot, ClaudeBot, Google-Extended, OAI-SearchBot, ChatGPT-User, PerplexityBot, Applebot-Extended, CCBot and Bingbot), MUST receive public pages, not a block. The crawling rules MUST name these crawlers explicitly as allowed. Turning off Cloudflare's AI-bot blocking is an operational checklist step for the user. The site MUST publish an `llms.txt`: a plain-text summary of Eskala, its services, the two starting prices, contact details and links to the main pages (G-8).
- **FR-005**: Each page's canonical address MUST be its single `https://eskala.id` URL with no trailing slash. A trailing-slash variant MUST either redirect to it or declare it as canonical.

**Understanding (structured data and previews)**

- **FR-006**: The site MUST tell search engines, through structured data:
  - that Eskala is an organisation, with its email, phone and the three social profiles (Instagram, TikTok, Threads, all @eskala.team);
  - that Social Media Management and Ads Management are services, with Social Media Management carrying its starting price (Rp2.500.000 per month, as a minimum) and Ads Management carrying no amount;
  - the FAQ on every page that has one;
  - a breadcrumb trail on every inner page.

  Noktah MUST NOT be named in structured data. No price other than the SMM starting price may appear in structured data or any other metadata (constitution IV) (G-5).
- **FR-007**: Every page MUST share one branded 1200×630 preview image: cobalt panel, copper wing, the ESKALA wordmark and "Membumikan kesehatan". It carries no text beyond the design's (G-4).
- **FR-008**: Privacy and Terms MUST get their title, description, canonical address and preview tags the same way as every other page.

**Keywords and copy**

- **FR-009**: Keyword research MUST combine two sources:
  - a seed list Claude drafts from public signals (Google autocomplete, related searches, Google Trends);
  - the user's export of that list from Google Keyword Planner under the Eskala account.

  The result MUST be mapped to pages as an approved keyword map. A list of 15–30 chatbot test prompts, the questions prospects ask, MUST be drafted alongside it, mostly in Bahasa Indonesia plus about 5 in English (for example, "healthcare marketing agency Indonesia") (G-9).
- **FR-010**: Only healthcare-qualified searches are targeted (for example, digital marketing for klinik, rumah sakit and dokter). Generic "digital marketing agency" or "creative agency" terms are not targeted, and no paid directory listing is used (G-25).
- **FR-011**: Page titles, meta descriptions, image alt text and structured data MAY change freely to fit the keyword map, under the `eskala-copy` rules. Visible headings and body copy MAY change only one item at a time with the user's approval, each recorded as a design deviation (G-10).
- **FR-012**: "Creative agency" MAY appear only if Keyword Planner shows real volume for healthcare + "creative agency" terms. Even then it is limited to page titles, meta descriptions, structured data and **one** FAQ answer (for example, "Apakah Eskala sebuah creative agency?"). It MUST **never** become a heading or Eskala's self-description in body copy. If the data shows no volume, it is dropped (G-28).

**FAQs**

- **FR-013**: FAQs MUST appear on every page except Education, Training, Privacy and Terms. Each page's FAQ covers that page's topics only, and /faq compiles every FAQ (G-20).
- **FR-014**: The pages with an FAQ are Beranda, Digital Marketing, Studi kasus, Artikel and Tentang kami. Each FAQ sits just above the page's closing call-to-action. A question MAY appear on two pages only when it truly answers both. The contract question moves off Beranda and stays on Digital Marketing; Beranda keeps the general questions. /faq lists each question once. The new FAQ sections on Studi kasus, Artikel and Tentang kami, and the contract question leaving Beranda, are design deviations (G-23).
- **FR-015**: New questions and answers drawn from the keyword research MUST be added to the page whose topic they answer, as a small or medium list. Each is written by the `eskala-copy` rules within the health-advertising limits, approved by the user one by one, and contains no invented numbers (G-11).

**Source tag**

- **FR-016**: Every WhatsApp message the site pre-fills MUST end with a short, plain-words tag naming the visitor's source, when known, and the current page name, for example `(via ChatGPT · Digital Marketing)`. This covers buttons, form handoffs and document requests. The exact wording goes through the `eskala-copy` rules (G-14).
- **FR-017**: The source is where the visit **started**, remembered for the browser tab's session. Named sources: ChatGPT, Perplexity, Gemini, Copilot, Claude, Google, Bing, Instagram, TikTok, Threads, Facebook, LinkedIn. For any other source, the tag shows only the page name. The tag MUST carry no tracking identifier and needs no consent (G-19).

**Analytics and consent**

- **FR-018**: Analytics covers three parts:
  - a cookieless visit count for every visitor (Cloudflare Web Analytics);
  - Search Console and Bing Webmaster reports;
  - Google Analytics 4 with click events.

  Because Google Analytics sets cookies, this spec includes a consent bar and a privacy page update (G-13).
- **FR-019**: Google Analytics MUST NOT load until the visitor taps "Terima". "Terima" and "Tolak" MUST have equal visual weight. A footer link labelled "Pengaturan cookie" MUST reopen the choice on every page. The cookieless visit count runs regardless of the choice. Until a Google Analytics property is configured for the site, there is nothing to consent to, so neither the bar nor the footer link is shown (G-15).
- **FR-020**: The consent bar MUST be:
  - a small bar pinned to the bottom of the screen;
  - never covering the WhatsApp button;
  - full width on phones and as short as its text allows;
  - built with the site's tokens and pill buttons.

  It offers one category now (analytics). A second category is added only when the Meta Pixel arrives, and MUST NOT be worded as ads or "iklan". The banner is a design deviation, since `design/` has none (G-16).
- **FR-021**: Once the visitor has accepted, Google Analytics MUST record these actions:
  - taps on any WhatsApp button, with the page and the button's location;
  - form sends (Education waitlist, Training interest, newsletter);
  - taps on the email address;
  - taps on a social profile;
  - "Minta dokumen lengkap" on a case study.

  WhatsApp taps and form sends are key events (conversions). Google Analytics sits under the same company Google account as Search Console (G-17, account per G-29).
- **FR-022**: The privacy page MUST be updated to:
  - name Google Analytics and Cloudflare;
  - explain the consent bar and "Pengaturan cookie";
  - replace the "set your browser to refuse cookies" line;
  - state that Google Analytics keeps visitor-level data for 14 months (its retention setting, which the user sets in the operational checklist).

  Claude drafts the update by the copy rules, and the user approves it, with a legal check if one is available. No legal wording ships without the user's approval (G-18).

**Release order**

- **FR-029**: The work ships in two releases.
  - **Release 1** (no dependency on keyword data): FR-001 to FR-008, FR-016 to FR-023, FR-025 to FR-028, plus the baseline in SC-008. The baseline is taken before Release 1 goes live.
  - **Release 2**: FR-009 to FR-015 and the off-site checklist (FR-024).

  Release 2 starts when the user's Keyword Planner export arrives, and each new FAQ section ships only once its answers are approved. A page whose FAQ answers are not yet approved shows no empty FAQ section.

**Accounts, checklists and measurement**

- **FR-023**: Google Search Console and Bing Webmaster Tools MUST be registered under a company Google account, not a personal one: core@noktah.co (G-29 supersedes G-7's core@eskala.id), with core@eskala.id as a second owner if it is a Google account. The domain is verified through Cloudflare DNS and the sitemap is submitted to both. This is an operational checklist step for the user (G-7).
- **FR-024**: The spec's deliverables MUST include an off-site checklist of 5–8 free items for the user, marked as recommendations, not launch requirements, with no code. Google Business Profile may be left off (G-12).
- **FR-025**: Rankings are tested two ways, with no paid rank tracker:
  - Search Console's average position for the target keywords;
  - a monthly check from Indonesia in a private browser window, producing a comparison table against whoever ranks above Eskala (G-26).
- **FR-026**: The comparison set is whoever ranks above Eskala for the target searches. There are no named competitors (G-24).
- **FR-027**: All visible text this spec adds (consent bar, footer link, source tag, FAQ answers, privacy update, alt text) MUST follow the `eskala-copy` rules and address the reader as "Anda".
- **FR-028**: The consent bar and the new FAQ sections MUST meet WCAG 2.2 AA and cause no horizontal scroll from 320px to 2560px (constitution III).

### Key Entities

- **Target keyword**: a healthcare-qualified search phrase with its monthly volume range from Keyword Planner and the page it is mapped to.
- **Test prompt**: a question a prospect might ask a chatbot; the measure is whether the answer names Eskala.
- **Source tag**: the short ending of a pre-filled WhatsApp message naming where the visit started and the current page.
- **Consent choice**: the visitor's answer to the consent bar (accepted or declined), remembered in their browser and changeable from the footer.
- **Tracked action**: one of the actions Google Analytics records after consent, with its page and location; two of them are key events.
- **FAQ item**: a question and answer belonging to one page's topic (rarely two), shown on that page and compiled on /faq.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of public pages are listed in the sitemap and load successfully. 100% of the six retired service URLs reach a current page in one redirect.
- **SC-002**: Every named AI crawler receives every public page (zero blocked responses), checked after the Cloudflare change.
- **SC-003**: A share-preview check of every public page shows the branded image, title and description on WhatsApp, LinkedIn and Facebook.
- **SC-004**: Google's structured data test reports zero errors on every page that carries structured data.
- **SC-005**: Before the visitor taps "Terima", zero analytics cookies are set. After "Terima", 100% of the tracked actions in a scripted run are recorded.
- **SC-006**: 100% of pre-filled WhatsApp messages end with the page name, and messages from visits that started at a named source also name that source.
- **SC-007**: Beranda and Digital Marketing keep a mobile Lighthouse score of 90 or higher for Performance, Accessibility, Best Practices and SEO, with the consent bar and analytics in place.
- **SC-008**: A baseline is recorded before launch and re-measured 8 weeks after. It covers how often Eskala is named across the test prompts in ChatGPT, Gemini and Perplexity, visits from chatbots and Google, and Search Console impressions for the target keywords. These are tracked goals, not pass/fail gates; launch requirements are what the site must do (G-21).

## Assumptions

- **Scope** (G-1): this spec covers the sitemap, structured data, share image, retired URLs, www and https, Search Console and Bing, analytics, keyword work, and being found in chatbots (ChatGPT especially) as well as Google, "on various keywords on our industry sector", using Google's keyword tool. **Out of scope**: writing articles, Google Business Profile, generic (non-healthcare) keyword targeting, paid listings, a paid rank tracker, the Meta Pixel, and the Noktah Hub integration (form submissions and events stored in Hub).
- The user has, or will create, a Google Ads account under the company Google account (core@noktah.co, G-29) so Keyword Planner can be used. Without ad spend it shows volume ranges, which is enough.
- Google limits FAQ rich results to government and health-authority sites (since 2023). FAQ structured data is kept for other search engines and AI assistants, with no expectation of FAQ rich results in Google.
- The consent choice is remembered for 6 months, then asked again.
- **Future second consent category** (G-22): when the Meta Pixel arrives, its consent choice is labelled "Analitik pemasaran". Not "Pengukuran kampanye" ("kampanye feels political"), and not ads/"iklan".
- **After this spec** (G-27): it ends at launch, the baseline and the 8-week re-measure. After that, a monthly review compares rankings and chatbot answers, picks the next two or three improvements, and ships each as a small follow-up outside this spec.
- Operational steps the user performs in dashboards (Cloudflare AI-bot setting, www and https redirects, Search Console and Bing verification, Keyword Planner export, privacy approval) are delivered as a checklist with exact steps. They count as done when the user ticks them.
- The competitor scan in the ledger used a US-based search tool. Ranking facts come from Search Console and the monthly check from Indonesia, not from that scan.
