# Data model: Search visibility

Entities are named by their `CONTEXT.md` term. All of them are typed data in `app/data/` or browser storage; nothing goes to a server Eskala runs.

## Public page (`publicPages` in `app/data/site.ts`)

| Field | Type | Rule |
|---|---|---|
| `path` | string | Canonical path, no trailing slash, e.g. `/digital-marketing` |
| `name` | string | Page name for breadcrumbs and the **Source tag**: `Beranda`, `Digital Marketing`, `Education`, `Training`, `Studi kasus`, `Artikel`, `Tentang kami`, `FAQ`, `Kebijakan privasi`, `Syarat layanan` |

- Exactly the 10 public pages, never `/dev/*`. The sitemap, llms.txt, breadcrumbs and the source tag all read this list.
- Names match the nav labels already in `mainNav`, `footerNav` and `legalNav`.

## Visit source (session storage `eskala-source`)

`VisitSource` = `"ChatGPT" | "Perplexity" | "Gemini" | "Copilot" | "Claude" | "Google" | "Bing" | "Instagram" | "TikTok" | "Threads" | "Facebook" | "LinkedIn"`

Detection (first match wins; `utm_source` is checked before the referrer, both by hostname or bare value):

| Source | Hostnames / values |
|---|---|
| ChatGPT | `chatgpt.com`, `chat.openai.com`, `openai.com`, `chatgpt` |
| Perplexity | `perplexity.ai`, `www.perplexity.ai`, `perplexity` |
| Gemini | `gemini.google.com`, `bard.google.com`, `gemini` |
| Copilot | `copilot.microsoft.com`, `copilot.cloud.microsoft`, `copilot` |
| Claude | `claude.ai`, `claude` |
| Google | `google.<tld>` and `www.google.<tld>` (any TLD, e.g. `google.co.id`), `google` |
| Bing | `bing.com`, `www.bing.com`, `bing` |
| Instagram | `instagram.com`, `l.instagram.com`, `www.instagram.com`, `instagram`, `ig` |
| TikTok | `tiktok.com`, `www.tiktok.com`, `tiktok` |
| Threads | `threads.net`, `www.threads.net`, `threads.com`, `threads` |
| Facebook | `facebook.com`, `m.facebook.com`, `l.facebook.com`, `lm.facebook.com`, `fb.me`, `facebook`, `fb` |
| LinkedIn | `linkedin.com`, `www.linkedin.com`, `lnkd.in`, `linkedin` |

- Set once per tab, on the first page view, and never overwritten by a later referrer (FR-017).
- An `eskala.id` referrer, an empty referrer or any other host → `null` (the tag names only the page).
- No identifier and no timestamp: it is the source name only.

## Source tag (contract C-2)

Derived, never stored: `(via <VisitSource> · <Public page name>)`, or `(<Public page name>)` when the source is `null`. The exact Indonesian wording is set by `eskala-copy` during implementation and recorded in the contract.

## Consent choice (local storage `eskala-consent`)

| Field | Type | Rule |
|---|---|---|
| `value` | `"granted"` \| `"denied"` | Set only by tapping "Terima" or "Tolak" |
| `at` | ISO date string | When it was set; a choice older than 6 months counts as no choice |

States: **unset** (bar shows, GA off) → **granted** (bar hidden, GA loads) or **denied** (bar hidden, GA off). "Pengaturan cookie" reopens the bar from any state, and a new tap replaces the value. granted → denied disables GA and deletes `_ga*` cookies at once. A storage error behaves as **unset**, and no choice is saved.

## Tracked action (contract C-1)

| Event | When | Parameters |
|---|---|---|
| `whatsapp_click` (key event) | tap on any `wa.me` link except a document request | `page_name`, `location` |
| `form_submit` (key event) | valid submission of a form | `page_name`, `form` (`education_waitlist` \| `training_interest` \| `newsletter`) |
| `email_click` | tap on a `mailto:` link | `page_name`, `location` |
| `social_click` | tap on a social profile link | `page_name`, `location`, `network` (`instagram` \| `tiktok` \| `threads`) |
| `document_request` | tap on "Minta dokumen lengkap" | `page_name`, `case_study` (document title) |

Sent only when the **Consent choice** is `granted`. Every event also carries `visit_source` when known. `location` is `header`, `menu`, `footer`, or the closest section's heading (≤ 60 characters).

## FAQ item (Release 2, `app/data/faqs.ts`)

`FaqItem { question: string, answer: string }` (existing type). Grouped by page: `homeFaqs`, `digitalMarketingFaqs`, `caseStudyFaqs`, `articleFaqs`, `aboutFaqs`. A question appears in two groups only when it answers both pages (FR-014). /faq shows every group and lists each question once.

## Target keyword and Test prompt (Release 2, research documents)

- **Target keyword**: `phrase`, `volume range` (from Keyword Planner), `competition`, `page` (one public page), `where used` (title / description / alt / structured data / FAQ / visible copy, approved item by item).
- **Test prompt**: `prompt`, `language` (`id` \| `en`), plus per chatbot (ChatGPT, Gemini, Perplexity): `names Eskala` (yes/no), `who is named instead`, `date`.
