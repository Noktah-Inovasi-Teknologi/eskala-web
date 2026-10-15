# Operational checklist: Search visibility

Steps only you can do, in dashboards. Tick each one when it's done. Steps O-1 to O-7 belong to Release 1; O-8 starts Release 2. Dashboard labels change from time to time: if a path below doesn't match, search the dashboard for the **bold** word.

## O-1 · Let AI crawlers in (FR-004)

Until 2026-10-16, GPTBot and ClaudeBot got a 403 from Cloudflare.

- [x] Cloudflare dashboard → eskala.id → **Security** → **Bots**: turn **Block AI bots** off. Also check **AI Crawl Control** (or **AI Audit**) and set every crawler to **Allow**.
- [x] Same area: if **Manage your robots.txt** (Cloudflare's managed robots.txt) is on, turn it off. The site serves its own robots.txt, which already allows these crawlers.
- [x] **Verified 2026-10-16**: GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Google-Extended and CCBot all get 200. Check (Claude can run it): `curl -s -o /dev/null -w '%{http_code}' -A "Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)" https://eskala.id/` returns **200**. Repeat with ClaudeBot.

## O-2 · www and https (FR-003)

State on 2026-10-16: `www.eskala.id` has no DNS record, and `http://eskala.id` answers 200 without redirecting.

- [x] **SSL/TLS** → **Edge Certificates** → **Always Use HTTPS**: on.
- [x] **DNS** → **Records** → **Add record**: type `AAAA`, name `www`, IPv6 `100::`, **Proxied** (orange cloud), TTL Auto. (`100::` is Cloudflare's placeholder for a redirect-only hostname; the existing certificate already covers `www`.)
- [x] **Rules** → **Redirect Rules** → **Create rule** (or the "Redirect from WWW to root" template): name `www to eskala.id`; custom filter: Hostname equals `www.eskala.id`; then Dynamic, expression `concat("https://eskala.id", http.request.uri.path)`, status 301, preserve query string → **Deploy**.
- [x] **Verified 2026-10-16**: http → https, www → apex and http://www → https://eskala.id all in one 301, path and query kept. Check: `curl -sI http://eskala.id/faq` and `curl -sI https://www.eskala.id/` both show `301` to `https://eskala.id/…`.

## O-3 · Google Search Console and Bing (FR-023)

Done 2026-10-16: domain verified (TXT record present). The sitemap reads "Couldn't fetch" until Release 1 is deployed.

Use the company Google account **core@noktah.co** (G-29), not a personal one. Use the same account for O-5 and O-8. If core@eskala.id is a Google account, add it as a second owner after verifying (**Settings** → **Users and permissions** → **Add user** → Owner).

- [x] https://search.google.com/search-console → **Add property** → **Domain** → `eskala.id`. Copy the TXT record and add it in Cloudflare DNS (type `TXT`, name `@`). Then click **Verify**.
- [x] **Sitemaps** → submit `https://eskala.id/sitemap.xml` (after Release 1 is deployed).
- [x] https://www.bing.com/webmasters → sign in → **Import from Google Search Console**, which brings over the site and sitemap. ChatGPT's search relies on Bing's index, so this one matters.

## O-4 · Cloudflare Web Analytics (FR-018)

- [x] Cloudflare → **Analytics & Logs** → **Web Analytics** → **Add a site** → `eskala.id` → **automatic setup** (no code). It's cookieless and counts every visitor.

**Verified 2026-10-16**: the beacon (static.cloudflareinsights.com) is injected into pages requested by a browser.

## O-5 · Google Analytics 4 (FR-018, FR-021, clarification 2)

Account: core@noktah.co (G-29).

- [x] **Admin** → **Create** → **Account** "Eskala" → property `eskala.id`, time zone Indonesia (Jakarta), currency IDR → objectives "Generate leads" → **Web** stream `https://eskala.id`.
- [x] **Enhanced measurement**: keep Page views on, including "Page changes based on browser history events" (the site changes pages without reloading). Turn **Form interactions off**: it sends its own `form_submit` and would double-count the key event. Skip the tag-install instructions; the site loads the tag after "Terima".
- [x] Copy the **Measurement ID** (`G-…`) for O-6. Don't set it in Cloudflare before O-7.
- [x] **Admin** → **Data collection and modification** → **Data retention** → **14 months** → Save.
- [x] **Admin** → **Data collection and modification** → **Data collection**: **Google signals off** (the consent covers analytics, not ad personalisation).
- [x] **Admin** → **Data display** → **Custom definitions** → five event-scoped custom dimensions (all low-cardinality; `page_name` is skipped because GA4's built-in Page path covers it): Lokasi tombol = `location`, Formulir = `form`, Jaringan sosial = `network`, Studi kasus = `case_study`, Sumber kunjungan = `visit_source`.
- [x] **Admin** → **Data display** → **Key events** → **New key event**: `whatsapp_click`, then `form_submit`.

## O-6 · Switch GA4 on

- [x] Done 2026-10-16. The Measurement ID `G-GT2D6YXFFP` is set in `nuxt.config.ts` for production builds, so it ships with the code. It also exists as a Worker variable in the dashboard, which is harmless but redundant. Cloudflare's notice "Update your Wrangler configuration" can be dismissed: a deploy that drops dashboard variables no longer affects GA.
- [ ] Check after deploying Release 1: open https://eskala.id in a fresh private window. The consent bar shows, and "Pengaturan cookie" is in the footer.

## O-7 · Approve the privacy update (FR-022)

- [x] Read the updated **8. Cookies** section and the analytics line in **4. Berbagi Data dengan Pihak Ketiga** on `/privacy` (in the Release 1 change), with a legal check if you have one. Approve it or send changes. GA4 stays off (O-6) until this is done.

## O-8 · Keyword Planner export (Release 2, FR-009)

- [x] https://ads.google.com with core@noktah.co → create an account and skip campaign creation (look for **Switch to Expert Mode** → **Create an account without a campaign**). No payment details are needed for Keyword Planner.
- [x] **Tools** → **Keyword Planner** → **Get search volume and forecasts** → paste the phrases from `keywords/seed-list.md`. Location **Indonesia**, language **Indonesian**, last 12 months.
- [x] **Download keyword ideas** → CSV → save as `specs/001-search-visibility/keywords/planner-export.csv`.

## Live checks after deploy (T034)

| Check | Result | Date |
|---|---|---|
| Rich Results test / Schema validator (Beranda, Digital Marketing, FAQ, Tentang kami) | | |
| Share previews (LinkedIn Post Inspector, Facebook Sharing Debugger, WhatsApp) | | |
| AI crawlers return 200 (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended) | | |
| www and http → https://eskala.id (301) | | |
