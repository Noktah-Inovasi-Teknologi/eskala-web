# Contracts: Search visibility

What the site exposes to crawlers, analytics and WhatsApp. Each contract is checked in [quickstart.md](../quickstart.md).

## C-1. Analytics events (GA4)

Sent with `gtag('event', name, params)` only when the consent choice is `granted`. Names and parameters are in [data-model.md § Tracked action](../data-model.md#tracked-action-contract-c-1). `whatsapp_click` and `form_submit` are marked as **key events** in the GA4 admin (operational checklist O-5). Custom dimensions to register (event scope): `location`, `form`, `network`, `case_study`, `visit_source`. `page_name` is still sent but not registered, because GA4's built-in Page path covers it (Google's best practice: prefer predefined dimensions). Every parameter is low-cardinality (≤ about 40 values) and carries no identifier.

## C-2. Source tag on pre-filled WhatsApp messages

- Every `https://wa.me/6282230712718?text=…` link the site opens gets the tag appended to `text`, on a new paragraph:
  - known source: `<base message>\n\n(dari <VisitSource>, halaman <page name>)`, e.g. `(dari ChatGPT, halaman Studi kasus)`;
  - unknown source: `<base message>\n\n(halaman <page name>)`.
- A link with no `text` gets `text=<tag>`.
- Form handoffs append the tag after the answers.
- Appending is idempotent: a link that already ends with a tag is not tagged twice.
- Wording settled with `eskala-copy` in T018: plain Indonesian, with "dari" instead of the English "via".

## C-3. `/sitemap.xml`

`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` with one `<url><loc>https://eskala.id{path}</loc></url>` per public page, in `publicPages` order. Content-Type `application/xml`. Prerendered.

## C-4. `/robots.txt`

```text
User-agent: *
Allow: /
Disallow: /dev/

User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: Bingbot
Allow: /
Disallow: /dev/

Sitemap: https://eskala.id/sitemap.xml
```

## C-5. `/llms.txt`

Plain text (`text/plain; charset=utf-8`), Bahasa Indonesia, prerendered, built from `app/data/site.ts`:

```text
# Eskala

> <self-description from CONTEXT.md: partner digital marketing dan komunikasi kesehatan …> <audience wording> <"Melayani seluruh Indonesia">

## Layanan
- Social Media Management: <pricing.smm.sentence>
- Ads Management (Meta, Google, TikTok): <pricing.ads.sentence>
- Education (Segera hadir) · Training (Segera hadir)

## Kontak
- WhatsApp: <contact.phone> (https://wa.me/<number>)
- Email: <contact.email>
- Instagram, TikTok, Threads: @eskala.team

## Halaman
- [<name>](https://eskala.id<path>): <page meta description>   (one line per public page)
```

The page descriptions come from the same strings `usePageSeo` receives, so they move to `publicPages` (one copy).

## C-6. Structured data (JSON-LD)

- **Every page** (`app.vue`): `Organization` (`@id` `https://eskala.id/#organization`, `name` Eskala, `url`, `logo`, `email`, `telephone`, `areaServed` Indonesia, `sameAs` = the three social URLs) and `WebSite` (`@id` `#website`, `inLanguage` `id`, `publisher` → organization). No `parentOrganization`, and no Noktah anywhere.
- **Inner pages** (`usePageSeo`): `BreadcrumbList`: Beranda → page name.
- **Pages with FAQs** (`usePageSeo({ faqs })`): one `FAQPage` with every `Question`/`acceptedAnswer` on the page.
- **Digital Marketing**: two `Service` nodes, `provider` → organization, `areaServed` Indonesia, `audience` = klinik pratama dan utama, rumah sakit, dokter umum maupun spesialis. Social Media Management carries `offers.priceSpecification` `{ "@type": "UnitPriceSpecification", minPrice: 2500000, priceCurrency: "IDR", unitText: "MONTH" }`. Ads Management carries no price.
- **Social meta**: `og:image` `https://eskala.id/og-image.png`, `og:image:width` 1200, `og:image:height` 630, `og:image:alt`, and the matching `twitter:image`.

## C-7. Consent bar

- Rendered only when `runtimeConfig.public.gaId` is set and the consent choice is unset or reopened.
- `role="region"` with an accessible name, not modal. Focus is not stolen on load. Buttons "Terima" and "Tolak" have the same size and style weight, at least 44px tall.
- The footer's legal row gains a `<button>` "Pengaturan cookie", shown only when `gaId` is set, which reopens the bar.
- The bar is the last element on the page and is `position: sticky; bottom: 0`. It stays at the bottom of the viewport while scrolling, and at the end of the page it sits below the footer. Any content, every WhatsApp button included, can be scrolled clear of it, with no measured padding and no inline style.
