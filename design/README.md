# Eskala redesign: design handoff

This folder is the source of truth for the 2026 redesign of eskala.id. It is a **reference only** and is not served by Nuxt. Rebuild every page in Vue with Nuxt UI and Tailwind, following the rules in `.claude/CLAUDE.md`.

| Path | What it is |
|---|---|
| `reference/*.html` | The approved designs as standalone HTML, one file per page. Open them in a browser and resize the window to see every breakpoint. Copy, section order, links and responsive rules are all in here. |
| `screenshots/*.jpg` | The same pages rendered at **1280px** (desktop) and **390px** (phone), sliced top to bottom (`home-1280-01.jpg`, `-02`, …) so each slice is readable. |
| `assets/` | Brand mark SVGs: `wing-cobalt.svg` (nav and footer logo on light), `wing-white.svg` (logo on dark), `wing-copper.svg` (decorative wing in hero panels and dark bands). |
| `tokens.css` | Colour and font tokens to merge into `app/assets/css/main.css`, named as in the Eskala Design System, with a map from the reference hex values to token names. |
| `SPEC-BRIEF.md` | The feature brief to paste into `/speckit.specify`, including open questions for `/speckit.clarify`. |

The reference HTML uses inline styles and container queries because it came out of a design tool. **Don't port that markup.** Read it to see what should appear and how it behaves, then write idiomatic Tailwind.

## Pages and proposed routes

| Page (nav label) | Reference | Proposed route | Replaces in the current repo |
|---|---|---|---|
| Beranda | `home.html` | `/` | `pages/index.vue` |
| Digital Marketing | `digital-marketing.html` | `/digital-marketing` (anchors `#smm`, `#paket`, `#ads-management`) | `pages/services/digital-marketing.vue` and `pages/services/social-media-management.vue` |
| Education | `education.html` | `/education` | new |
| Training | `training.html` | `/training` | new |
| Studi kasus | `studi-kasus.html` | `/studi-kasus` | `pages/case-study.vue` |
| Artikel | `artikel.html` | `/artikel` (detail page `/artikel/[slug]` is not designed yet) | new |
| Tentang kami | `tentang-kami.html` | `/tentang-kami` | `pages/about-us.vue` |
| Mobile menu (open state) | `mobile-menu.html` | component state, below 1024px | `components/Navbar.vue` |

Old URLs need 301 redirects (see `SPEC-BRIEF.md`). `privacy.vue` and `terms.vue` stay, restyled with the new tokens.

## Section order per page

**Beranda.** Sections in order:
1. Hero: eyebrow, h1 "Membumikan kesehatan", price pill, WhatsApp CTA, and a cobalt wing panel with Donny Putra's quote.
2. Problem: "Kontennya sudah rutin. Tapi rasanya masih seperti brosur."
3. Layanan: 3 cards. Education and Training are tagged *Segera*.
4. Bekerja bersama tim marketing Anda.
5. Alur produksi konten (6 steps).
6. Dark band: istilah medis yang mudah dipahami pasien.
7. Sesuai aturan iklan kesehatan (Permenkes 1787/2010).
8. Studi kasus SMEC (dark).
9. Kata klien kami (Ecky Dental).
10. Paket Social Media Management: "Mulai dari" tag, no tier prices.
11. FAQ.
12. Artikel terbaru (3 cards).
13. CTA: Konsultasi gratis 30 menit.

**Digital Marketing.** Sections in order:
1. Hero with price pill and copper "Mulai dari Rp2,5 jt" badge, plus shortcut cards to SMM and Ads Management.
2. Dua layanan.
3. Kapan hasilnya mulai terlihat? (timeline).
4. Paket SMM: Starter, Standard (Paling dipilih), Premium.
5. Feature comparison table. It scrolls horizontally below 768px, with a hint line.
6. "Kapan perlu memeriksakan mata?" di tiap paket (dark).
7. Ads Management: "Fee mulai dari 10%", Meta/Google/TikTok, fee formula, checklist.
8. FAQ.
9. CTA.

**Education.** Sections in order:
1. Dark hero, *Segera hadir*.
2. Empat format: Online Class, Webinar, Course Videos, Modules.
3. Untuk siapa.
4. Waitlist form (`#daftar`).

**Training.** Sections in order:
1. Hero with photo collage, *Segera hadir*.
2. Tiga format: Workshop, Bootcamp, In-house Training.
3. Alur In-house Training.
4. Interest form (`#daftar`).

**Studi kasus.** Sections in order:
1. Header with 4 stats.
2. Filter chips.
3. SMEC card.
4. Klinik Mata Boyolali card. Each card has "Minta dokumen lengkap", which opens WhatsApp with pre-filled text.
5. Ecky Dental quote.
6. CTA.

**Artikel.** Sections in order:
1. Header and search.
2. Category chips.
3. Featured article.
4. Grid of 6 cards.
5. "Muat artikel lainnya" button.
6. Newsletter signup.
7. CTA.

**Tentang kami.** Sections in order:
1. Hero (purpose).
2. Visi, misi and purpose (dark).
3. Yang membedakan cara kerja kami.
4. Yang kami janjikan / tidak kami janjikan.
5. Nilai kami (5 values).
6. Tim Eskala (placeholders).
7. CTA.

**Shared on every page:**
- **Nav:** mark and "ESKALA" wordmark; Digital Marketing, Education, Training, Studi kasus, Artikel, Tentang kami; a "Konsultasi gratis" outline button.
- **Footer:**
  - Wordmark and tagline "Membumikan kesehatan", followed by the description.
  - Layanan, Dukungan and Kontak columns.
  - Instagram, TikTok and Threads icons, each with the @eskala.team handle.
  - © 2026 Eskala.

## Responsive behaviour

The breakpoints follow Tailwind, plus one ultra-wide step:

| Width | Behaviour |
|---|---|
| < 640 (base) | Container padding 20px. The nav CTA is hidden, so only the burger shows. CTA pills are full width. Section padding 48px. Lede is 16px. Decorative rotations are removed. |
| ≥ 640 `sm` | The nav CTA is visible next to the burger. Section padding 64px. |
| < 768 | The comparison table scrolls sideways (`min-width: 760px`) and shows the hint "Geser tabel ke samping untuk melihat semua paket." |
| ≥ 768 `md` | Section padding 80px. |
| < 1024 | Nav links collapse into the burger, which opens `mobile-menu.html`. Large two-column gaps shrink to 40px. |
| ≥ 1024 `lg` | Full nav. Section padding 96px. |
| ≥ 1280 `xl` | Container max 1280px. This is the main design width. |
| ≥ 1536 `2xl` | Container max 1440px. |
| ≥ 1920 `3xl` (custom) | Container max 1600px and lede 19px. Section backgrounds stay full-bleed; content stays centred. Check at 2560 that nothing stretches. |

Section padding follows the design system's steps. The reference files use 96px between 768 and 1023px and 64px between 640 and 767px; build to the table above.

Grids collapse 3 → 2 → 1 columns and 2 → 1. Compare the 390 and 1280 screenshots for each page to see where.

## Placeholders still to fill

These show as grey boxes or `[bracketed text]` in the designs:

- **Beranda, problem section:** documentary photo, 4:5, of a briefing with a doctor before a shoot.
- **Beranda and Artikel:** article illustrations or photos. The article titles are *proposed topics* and haven't been written yet.
- **Studi kasus:** a screenshot of Klinik Mata Boyolali's Instagram feed.
- **Tentang kami:** a team photo, plus 4 team cards (photo, name, role).
- **Training:** a photo of role-play at the front desk.

Forms have no backend yet. That covers the Education waitlist, the Training interest form and the Artikel newsletter. See the open questions in `SPEC-BRIEF.md`.
