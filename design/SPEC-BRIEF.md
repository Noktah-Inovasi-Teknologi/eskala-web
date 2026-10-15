# Feature brief: eskala.id redesign (2026)

Paste the **Brief** section into `/speckit.specify`. The **Open questions** section is for `/speckit.clarify`. The **Notes for planning** section is for `/speckit.plan`.

---

## Brief

Rebuild the public website eskala.id to match the approved redesign in `design/`. Eskala is a digital marketing and healthcare-communication partner for klinik pratama dan utama, rumah sakit, and dokter umum maupun spesialis across Indonesia. The site's job is to get these facilities to book a free 30-minute consultation over WhatsApp.

The redesign changes the product structure, the information architecture, the visual identity and the copy. Treat `design/reference/*.html` as the spec for content, section order, links and responsive behaviour, and `design/screenshots/` as the visual target.

**Who uses the site**
- Owners, directors and marketing managers of clinics and hospitals deciding whether to hire Eskala.
- Doctors (general practitioners and specialists) who want help with their own channels.
- Existing in-house marketing teams. Eskala positions itself as working *with* them, not replacing them.

**What changes**
1. **Product structure.** There are now three services, and product names are in English:
   - **Digital Marketing**, made up of Social Media Management (tiers Starter, Standard, Premium) and Ads Management (Meta, Google, TikTok). This is live now.
   - **Education**: Online Class, Webinar, Course Videos, Modules. Marked "Segera hadir"; collects a waitlist.
   - **Training**: Workshop, Bootcamp, In-house Training. Marked "Segera hadir"; collects interest.
2. **Pages.** The site has seven pages: Beranda, Digital Marketing, Education, Training, Studi kasus, Artikel and Tentang kami. Each needs the shared nav and footer and a mobile menu below 1024px. The SMM and Digital Marketing pages are merged into a single Digital Marketing page.
3. **Pricing.** Only starting prices are shown publicly, and they must be prominent:
   - SMM: "Mulai dari Rp2,5 juta per bulan".
   - Ads Management: "Fee mulai dari 10% dari total biaya iklan".
   - Individual tier prices, CPR targets and per-tier fees are never shown.
4. **Visual identity.**
   - Plus Jakarta Sans everywhere, replacing Poppins. Livvic 900 is used only for the "ESKALA" wordmark.
   - The wing mark (`design/assets/`) appears next to the wordmark.
   - The palette stays cobalt, copper and slate. Token names follow the Eskala Design System (`design/tokens.css` maps them).
   - Phosphor-style icons.
   - The WhatsApp CTA is green (`success-700`, #15803D).
5. **Copy.**
   - Indonesian throughout, addressing the reader as "Anda".
   - Headings are plain and direct. Copy the text exactly from the reference HTML.
   - Testimonials are verbatim, and only from the people named in the designs: Donny Putra N.H. (SMEC Group) and the Ecky Dental quote.
6. **Social links.** Instagram, TikTok and Threads, all @eskala.team, shown as icon links with the handle.
7. **Positioning.** National, with no city in the positioning. The brand name behind Eskala (Noktah) never appears on the site.

**User scenarios**
- *A clinic owner on a phone* lands on Beranda, sees the starting price and what Eskala does within the first screen, and taps "Konsultasi gratis 30 menit". WhatsApp opens with a pre-filled message.
- *A marketing manager comparing packages* opens Digital Marketing and compares Starter, Standard and Premium in the feature table. On a phone the table scrolls sideways. They read how Ads Management fees work and send a WhatsApp message.
- *A hospital training coordinator* opens Training, reads the In-house Training flow and submits the interest form.
- *A doctor* joins the Education waitlist.
- *A prospect doing due diligence* reads Studi kasus and requests the full SMEC or Klinik Mata Boyolali document. WhatsApp opens with the case title pre-filled.
- *A returning visitor* follows an old link (for example `/services/social-media-management`) and lands on the right new page without a 404.

**Functional requirements**
- FR1: Seven pages, plus the mobile menu, matching the reference content and section order exactly.
- FR2: Shared header and footer on every page. Below 1024px the nav collapses to a burger that opens a full-screen menu. The menu traps focus, closes on Esc and closes on link click.
- FR3: Every "Konsultasi gratis" CTA opens `https://wa.me/6282230712718` with a pre-filled message suited to the page. Email `core@eskala.id` is the secondary CTA.
- FR4: Price callouts appear wherever the designs show them: the hero pill, the copper tag on the package section, the circle badge on Digital Marketing and the Ads fee tag.
- FR5: The SMM comparison table matches the reference row for row. This includes "Permintaan konten di luar jadwal: Paling lambat H-3 | H-3 hingga H-1 | Hingga hari H".
- FR6: FAQ sections are accessible accordions with the exact questions and answers from the reference.
- FR7: Education waitlist, Training interest and Artikel newsletter forms. Each validates its fields, shows success and error states, and delivers submissions to the channel decided in the open questions below.
- FR8: Studi kasus lists the two case studies with filter chips.
  - SMEC Group: **10+ cabang**, >4x ROAS, 250+ konten per bulan.
  - Klinik Mata Boyolali: 12 bulan, 2 jt+ views, 1,28 jt+ reach, 16 rb+ profile visits.
  - "Minta dokumen lengkap" opens WhatsApp with the case title pre-filled.
- FR9: The Artikel index shows search, category chips, a featured article and a grid of cards. It needs a content source, decided below.
- FR10: 301 redirects from every old URL (listed below).
- FR11: Per-page `<title>` and meta description, canonical URL, Open Graph and Twitter tags, `sitemap.xml`, and `robots.txt` pointing to the sitemap.
- FR12: Structured data:
  - `Organization` with `sameAs` linking to the three social profiles;
  - `Service` for Social Media Management and Ads Management;
  - `FAQPage` on the Beranda and Digital Marketing pages;
  - `BreadcrumbList` on inner pages.

**Old → new URLs (301)**

| Old | New |
|---|---|
| `/services/social-media-management` | `/digital-marketing#smm` |
| `/services/digital-marketing` | `/digital-marketing#ads-management` |
| `/case-study` | `/studi-kasus` |
| `/about-us` | `/tentang-kami` |
| `/faq` | `/#faq` (or keep a `/faq` page; see open questions) |

**Non-functional requirements**
- Responsive at every Tailwind breakpoint, plus ultra-wide. Container max widths:
  - 1280px at xl and below;
  - 1440px at 2xl and up;
  - 1600px at 1920px and up, with backgrounds full-bleed.
- No horizontal page scroll at any width from 320px to 2560px. The comparison table is the only element that scrolls on its own.
- Accessibility to WCAG 2.2 AA:
  - Text contrast at least 4.5:1. Copper text uses `accent-strong`.
  - Visible focus states.
  - Tap targets at least 44px.
  - Alt text on real images; decorative wings get `aria-hidden`.
  - `lang="id"`.
- Performance: Lighthouse mobile ≥ 90 for Performance, Accessibility, Best Practices and SEO on Beranda and Digital Marketing. Fonts are self-hosted through `@nuxt/fonts`. Images are optimised.
- Deploys to Cloudflare Workers as today.

**Out of scope**
- Article detail pages and the articles themselves. The six titles in the design are proposed topics.
- A CMS.
- Dark mode.
- Course and checkout functionality for Education and Training.
- The privacy and terms *content*. Those pages are only restyled.

**Success criteria**
- Every page matches its 1280 and 390 screenshots in content, order and hierarchy. Visual differences are limited to what Nuxt UI components impose.
- Playwright checks at 390, 640, 768, 1024, 1280, 1536 and 2560 find no horizontal overflow, and no console errors.
- All old URLs return 301 to the right page.
- No price other than the two starting prices appears anywhere in the built HTML.
- The words "Noktah" and "Yogyakarta" and the handle "@eskala.u" do not appear anywhere in the built HTML.

---

## Open questions (for /speckit.clarify)

1. **Routes.** Should slugs follow the Indonesian nav labels (`/studi-kasus`, `/tentang-kami`, `/artikel`), or should the existing slugs (`/case-study`, `/about-us`) stay to avoid redirects? Should services sit at the root (`/digital-marketing`) or under `/services/`?
2. **FAQ page.** The footer links to "FAQ". Should that be a `/faq` page combining both FAQ sets, or an anchor to `/#faq`?
3. **Form delivery.** Where should waitlist, interest and newsletter submissions go? Options include a Cloudflare Worker endpoint writing to a sheet, email via a form service, or a mailing-list provider for the newsletter.
4. **Articles.** Should the Artikel page ship now with placeholder cards hidden, or wait until the first articles are written? If articles are planned, should they use Nuxt Content (Markdown in the repo)? That would lift the current "no `@nuxt/content`" rule in `.claude/skills/development.md`.
5. **Photos.** Who supplies the placeholder photos listed in `design/README.md`, and when? Until they arrive, should the grey placeholders ship, or should those sections be hidden?
6. **Contract terms.** The redesign says "Kontrak fleksibel, tanpa komitmen tahunan". The old brand notes say "kontrak per semester, notice 30 hari". Which is current?
7. **Privacy and terms links.** The redesigned footer has no links to privacy or terms. Should they be added to the footer's bottom row?
8. **Analytics.** Is there an analytics tool or Meta pixel to keep or add? Should WhatsApp click events be tracked?

---

## Notes for planning (for /speckit.plan)

- **Stack.** Keep the current stack: Nuxt 4, Nuxt UI 4, Tailwind 4, TypeScript, pnpm, Cloudflare Workers. Don't change frameworks.
- **Theme.** Merge `design/tokens.css` into `app/assets/css/main.css` and swap Poppins for Plus Jakarta Sans and Livvic in the `nuxt.config.ts` `fonts` block.
- **Container.** Nuxt UI's container is `max-w-7xl` (1280px). Add `2xl:max-w-[1440px] 3xl:max-w-[1600px]` to the `container` slot in `app.config.ts`, and `px-5 sm:px-6`.
- **Icons.** The designs use Phosphor (regular weight). Add `@iconify-json/ph` and use `i-ph-*` through `UIcon`. Use `i-ph-whatsapp-logo`, `i-ph-instagram-logo`, `i-ph-tiktok-logo` and `i-ph-threads-logo`.
- **Brand mark.** Copy the SVGs from `design/assets/` into `public/brand/`.
- **Redirects.** Use `routeRules` in `nuxt.config.ts`, for example `'/case-study': { redirect: { to: '/studi-kasus', statusCode: 301 } }`.
- **Sitemap.** `@nuxtjs/sitemap`, or `@nuxtjs/seo` for sitemap, robots and schema.org together.
- **Data files.** Keep repeatable content as typed data in `app/data/`: tiers, the comparison table rows, FAQs, case studies, articles, team.
- **Case study data.** `app/data/case-studies.ts` is out of date. It says "15 cabang" and "Klinik Utama Boyolali"; update it to **10+ cabang** and **Klinik Mata Boyolali**.
- **Shared components.** Suggested components: `SiteHeader`/`MobileMenu`, `SiteFooter`, `CtaSection`, `PriceTag`, `ServiceCard`, `TierCard`, `ComparisonTable`, `FaqList`, `CaseStudyCard`, `ArticleCard`, `QuoteCard`, `WingPanel`, `WaitlistForm`.
- **Stale metadata.** `nuxt.config.ts` still has `twitter:site: @eskala.u` and `titleTemplate: "Eskala - %s"`. The reference pages use titles of the form "… — Eskala".
- **After the rebuild.** Rewrite the markup examples in `.claude/skills/*.md` to match the new components.
- **Verification.** Run Playwright screenshots at 390, 640, 768, 1024, 1280, 1536 and 2560 for every page, and compare them against `design/screenshots/`.
