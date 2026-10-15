# Quickstart: validating Search visibility

Run from the repo root. `pnpm dev` serves on http://localhost:3000; checks marked **live** run against https://eskala.id after deploy.

## Release 1

1. **Unit test**: `pnpm test:unit` passes the `detectVisitSource` cases (every source in [data-model.md](data-model.md), internal and empty referrers, `utm_source` beating the referrer, `gemini.google.com` → Gemini, `google.co.id` → Google).
2. **Sitemap and robots**: `curl -s localhost:3000/sitemap.xml` lists exactly the 10 public pages (C-3), and `curl -s localhost:3000/robots.txt` matches C-4.
3. **llms.txt**: `curl -s localhost:3000/llms.txt` matches the C-5 shape. Its prices are exactly the two starting prices.
4. **Redirects**: `curl -sI localhost:3000/services/kol-management` (and creative-service, eskala-vip, ads-management) returns `301` with the `Location` from FR-002.
5. **Structured data**: view source on `/`, `/digital-marketing`, `/faq` and `/about-us`. Each has one JSON-LD block matching C-6. Paste the live URLs into Google's Rich Results Test and the Schema Markup Validator: zero errors (SC-004).
6. **Share preview** (live): check each public URL in the LinkedIn Post Inspector and the Facebook Sharing Debugger, then share one in WhatsApp. Each shows `og-image.png`, the title and the description (SC-003).
7. **Source tag**: open `localhost:3000/?utm_source=chatgpt.com`, go to Studi kasus and tap "Minta dokumen lengkap". The WhatsApp URL's `text` ends with the ChatGPT + Studi kasus tag (C-2). In a fresh tab without `utm_source`, the tag names only the page. Send the Education form: the tag follows the answers.
8. **Consent and GA4** (with `NUXT_PUBLIC_GA_ID=G-TEST` in `.env`):
   - fresh profile: the bar shows; DevTools → Application shows no `_ga` cookie and no request to `googletagmanager.com`;
   - "Terima": gtag loads; tapping a WhatsApp button sends `whatsapp_click` with `page_name` and `location` (DevTools Network `collect?…en=whatsapp_click`, or GA4 DebugView with the real ID);
   - footer "Pengaturan cookie" → "Tolak": the `_ga*` cookies are gone and no further `collect` requests are sent;
   - without `NUXT_PUBLIC_GA_ID`: no bar and no footer link.
9. **Layout gate**: `pnpm ui:gate` passes, with the bar forced visible in the sweep's consent check (no horizontal scroll at 320–2560, tap targets ≥ 44px, focus ring, contrast). `pnpm build` succeeds.
10. **Crawlers** (live, after operational step O-1): `curl -s -o /dev/null -w '%{http_code}' -A "Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)" https://eskala.id/` returns 200, and the same for ClaudeBot, PerplexityBot, OAI-SearchBot and Google-Extended (SC-002).
11. **www / https** (live, after O-2): `curl -sI http://eskala.id/digital-marketing` and `curl -sI https://www.eskala.id/` both 301 to `https://eskala.id/…`.
12. **Baseline**: `baseline.md` is filled in before Release 1 goes live (SC-008).

## Release 2

13. Every new FAQ answer has an "approved" mark in `keywords/keyword-map.md`. Only approved answers are in `app/data/faqs.ts`.
14. `/faq` lists each question once. Each page's FAQ holds only that page's group. Education, Training, Privacy and Terms have none.
15. Titles and descriptions match `keywords/keyword-map.md`. "creative agency" appears nowhere unless the map shows volume, and then only in the allowed places (FR-012).
16. `pnpm ui:gate` passes and the new FAQ sections are compared against the screenshots (recorded deviations).
