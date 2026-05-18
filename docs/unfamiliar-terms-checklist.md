# Unfamiliar Terms Checklist — Eskala Website

Audit of industry-specific terms, abbreviations, and jargon used across all pages. Each term is flagged if a general audience (healthcare facility owners, clinic managers) may not immediately understand it without context.

---

## Global / Sitewide

| Term | Where Used | Status | Recommendation |
|------|-----------|--------|----------------|
| SMM | Alt text, internal references | ⚠️ Abbreviation | Avoid in public-facing copy; use "Social Media Management" in full |
| DM | Internal references | ⚠️ Abbreviation | Use "Digital Marketing" in full |
| Faskes | All pages | ✅ Acceptable | Indonesian shorthand for "fasilitas kesehatan" — target audience will know it |
| KPI | — | Not used publicly | — |
| ROI / ROAS | Not used publicly | ✅ Not present | Avoid unless explained |
| Medical Review | SMM page, FAQ, brand.md | ⚠️ Undefined | Add brief inline definition on first use per page: "review konten oleh tim internal sesuai pedoman KKI dan Kemenkes" |

---

## `app/pages/index.vue` — Home

| Term | Section | Status | Recommendation |
|------|---------|--------|----------------|
| Content Pillars | Packages (SMM features) | ⚠️ Jargon | Add tooltip or brief inline note: "(pilar topik konten)" |
| Medical Review | Packages, FAQ | ⚠️ Needs definition | Explain once: "setiap konten melewati review internal sesuai standar KKI & Kemenkes" |
| Geo-targeting | DM expected results | ⚠️ English jargon | Paraphrase as "penargetan berdasarkan lokasi" or "iklan menjangkau calon pasien di sekitar klinik" |
| Organic Reach | Case study stats | ⚠️ Jargon | Paraphrase as "jangkauan organik (tanpa iklan)" |

---

## `app/pages/services/social-media-management.vue` — SMM

| Term | Section | Status | Recommendation |
|------|---------|--------|----------------|
| Content Pillars | Package table | ⚠️ Jargon | Define: "pilar topik yang menjadi panduan konten bulanan" |
| Competitor Analysis | Package table (Premium) | ⚠️ English | Use "Analisis kompetitor" in Indonesian |
| Community Management | Package table (Premium) | ⚠️ English | Use "Pengelolaan komunitas & komentar" |
| Monthly Content Plan | Package table | ⚠️ English | Use "Rencana konten bulanan" |
| Reels | Package table | ✅ Acceptable | Widely understood Instagram/TikTok term |
| Mirroring | Package table (Standard) | ⚠️ Jargon | Clarify: "(konten yang sama diposting di dua platform)" |
| Medical Review | All tiers | ⚠️ Needs definition | Add inline definition on first use |
| KPI | — | Not present publicly | — |

---

## `app/pages/services/digital-marketing.vue` — DM

| Term | Section | Status | Recommendation |
|------|---------|--------|----------------|
| Ad Spend | Package table, fee explanation | ⚠️ English | Use "anggaran iklan" or parenthetical: "ad spend (anggaran iklan Anda)" |
| A/B Testing | Package table (Standard+) | ⚠️ Jargon | Define: "uji variasi iklan untuk hasil terbaik" |
| Geo-targeting | Package table | ⚠️ English jargon | Use "penargetan lokasi" |
| Campaign Setup | Package table | ⚠️ English | Use "Pengaturan kampanye iklan" |
| Creative Brief Review | Package table | ⚠️ Jargon | Use "Review materi iklan" |
| Monthly Optimization | Package table | ⚠️ English | Use "Optimasi bulanan" |
| Meta | Platform name | ✅ Acceptable | Meta (Facebook/Instagram) — widely understood |
| Google Ads | Platform name | ✅ Acceptable | |
| TikTok Ads | Platform name | ✅ Acceptable | |
| CTR / CPC / CPM | Not used publicly | ✅ Not present | Avoid unless explained |
| ROAS | Not used publicly | ✅ Not present | Avoid |

---

## `app/pages/faq.vue` — FAQ

| Term | Section | Status | Recommendation |
|------|---------|--------|----------------|
| Medical Review | SMM answer | ⚠️ Needs definition | Already partially explained ("pedoman KKI dan Kemenkes") — keep consistent |
| KKI | SMM answer | ⚠️ Abbreviation | Expand once: "KKI (Konsil Kedokteran Indonesia)" |
| Kemenkes | SMM answer | ⚠️ Abbreviation | Expand once: "Kemenkes (Kementerian Kesehatan)" |
| Content Pillars | SMM tiers answer | ⚠️ Jargon | Add short note: "(pilar topik konten)" |
| Notice Period | Contract answer | ⚠️ English | Use "periode pemberitahuan 30 hari" |
| Ad Spend | DM answer | ⚠️ English | Use "anggaran iklan (ad spend)" |

---

## `app/pages/about-us.vue` — About Us

| Term | Section | Status | Recommendation |
|------|---------|--------|----------------|
| Medical Review | Core Values | ⚠️ Needs definition | ✅ Already described in context here |
| KKI / Kemenkes | Core Values | ⚠️ Abbreviations | Expand on first use |
| Notice Period | — | Not present | — |

---

## `app/pages/case-study.vue` — Case Study

| Term | Section | Status | Recommendation |
|------|---------|--------|----------------|
| Ophthalmology | Category filter | ⚠️ English medical | Add "(Klinik Mata)" in parentheses |
| Dental | Category filter | ⚠️ English | Add "(Klinik Gigi)" in parentheses |
| Reach Organik | Stats / results badges | ✅ Acceptable | "Reach" + "organik" is widely understood in SMM context |
| Engagement | Case study badges | ⚠️ English | Consider "interaksi" or "engagement (interaksi)" |

---

## `app/pages/privacy.vue` and `app/pages/terms.vue` — Legal

| Term | Status | Recommendation |
|------|--------|----------------|
| Data Pribadi | ✅ Clear | — |
| Cookies | ⚠️ Technical | Briefly explain on first use if target audience is non-technical |
| Third-party | ⚠️ English | Use "pihak ketiga" |

---

## Priority Action Items

1. **KKI and Kemenkes** — expand abbreviations on first use across FAQ and about-us.
2. **Medical Review** — add consistent short definition on first use per page.
3. **Ad Spend** — add Indonesian translation in parentheses on DM page.
4. **Content Pillars** — add brief note in SMM package table.
5. **Ophthalmology / Dental** — add Indonesian labels on case-study category filters.
6. **A/B Testing, Geo-targeting, Community Management** — Indonesianize or parenthesize on DM/SMM pages.
