---
name: eskala-copy
description: "How eskala.id's copy is written: who reads it, the voice, the health-advertising limits, and the rules for every string the design doesn't already give — form labels and errors, success and empty states, alt text, aria-labels, page titles and meta descriptions, WhatsApp pre-filled text. Load before writing or changing any text a visitor sees or hears, and when reviewing copy."
argument-hint: "Optional: a string, a component, or a page to write copy for"
metadata:
  author: "eskala-web (adapted from venyu-copy and noktah-dashboard's copy-editor, 2026-10-15)"
  origin: "CLAUDE.md copy rules, .claude/rules/brand.md, the approved reference pages, docs/unfamiliar-terms-checklist.md"
user-invocable: true
---

## User Input

```text
$ARGUMENTS
```

If it names a string, a component or a page, write or review that copy by the rules below. Otherwise, load these rules and follow them in the work at hand.

## Where copy comes from

1. **The design first.** If `design/reference/*.html` has the text, copy it **exactly** (constitution Principle I). Don't polish it, shorten it or fix its style. The reference pages were approved as written, including the few lines that bend the style rules below ("…bukan hanya daftar angka"). A line you believe is wrong (a city named, a banned claim, a price that isn't a starting price) is a **finding** for the user, recorded as a design deviation if they agree; never a silent fix.
2. **This skill for everything else.** The design shows a static page. It doesn't say what a field's error says, what a screen reader hears for the burger, what the page title is, or what the waitlist form shows after it is sent. Write those by the rules here, in the design's voice.
3. **Facts only from the repo.** Prices, numbers, client names and quotes come from `.claude/rules/brand.md` and the reference pages. Never invent a number, a client, a promise or a quote; write `[PLACEHOLDER: what is needed]` and ask.

## Who reads eskala.id

Eskala sells digital marketing to healthcare facilities, and the site has one job: get a facility to book a **free 30-minute consultation over WhatsApp**.

| Who | Where they are when they read | What the copy must do |
|---|---|---|
| **Clinic owner** (klinik pratama or utama), often a doctor | on a phone, between patients or at night, arriving from Instagram or TikTok | say what Eskala does and what it costs to start in one screen; one obvious next step |
| **Marketing manager** at a clinic chain or a hospital | at a desk, comparing agencies, maybe forwarding the page to a director | show how Eskala works *with* their team, the process, the proof; nothing that sounds like it replaces them |
| **Dokter umum or spesialis** with a personal practice | on a phone | the same, with their own case in mind (a doctor, not a facility) |
| **Someone on the Education or Training waitlist** | on a phone, interested but not buying | what they're signing up for, and what happens next |

What makes them hesitate: health advertising rules (Permenkes 1787/2010) and their licence, medical accuracy, being locked into a long contract, an agency that takes over their brand, and not knowing the price. Good copy answers these with specifics, not with reassurance words.

## Voice

- **Bahasa Indonesia, addressing the reader as *Anda*** (capital A), the way the reference pages do. Often no pronoun is needed ("Ceritakan kebutuhan tim Anda", "Kirim minat").
- **Professional, warm, plain.** A capable colleague explaining something over coffee, not a brochure. No selling words ("terbaik", "nomor satu", "revolusioner"), no exclamation marks in site copy, no emoji.
- **Headings say the thing directly**, the way a person would say it out loud.
- **Product names stay in English**: Digital Marketing, Social Media Management, Ads Management, Education, Training, Online Class, Webinar, Course Videos, Modules, Workshop, Bootcamp, In-house Training, and the tiers Starter, Standard, Premium.
- **Everyday words over jargon.** Explain a marketing or medical term the first time it appears on a page (see `docs/unfamiliar-terms-checklist.md`): *ad spend (anggaran iklan)*, *KKI (Konsil Kedokteran Indonesia)*. Abbreviations nobody outside an agency says (SMM, DM, CTR, ROAS) stay out of visible copy, except where the design itself shows them.

## The rules

1. **Avoid the four tics** (CLAUDE.md): "X. Y." fragment pairs; "X, bukan Y" constructions; stacked parallel phrases (three matching clauses in a row); an eyebrow over every heading.
2. **Never say a city.** Positioning is national: "seluruh Indonesia", never a city where Eskala works or serves clients. (Legal text, such as the court of jurisdiction in Syarat & Ketentuan, is not positioning.) Never call Eskala a "tim kreatif kesehatan".
3. **Audience wording is fixed**: "klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis". Don't shorten it to "faskes" in a heading, and don't add groups the design doesn't name.
4. **Prices: only the two starting prices**, in these words: "Mulai dari Rp2,5 juta per bulan" (Social Media Management) and "Fee mulai dari 10% dari total biaya iklan" (Ads Management). Never a tier price, a per-tier fee or a CPR target — not in copy, alt text, meta descriptions or structured data. "Rincian harga tiap paket kami kirim dalam proposal" is the way to say there is more.
5. **Health-advertising limits.** Eskala's own copy must pass the rules it sells. Never: "dijamin", "pasti berhasil", "100%", "tanpa rasa sakit", "terbaik", a promised number of followers or patients, or a comparison naming a competitor. Results are past facts about named clients ("2 jt+ views dalam 12 bulan"), never promises.
6. **Testimonials are verbatim**, and only Donny Putra N.H. (Manager Digital Marketing, SMEC Group) and the Ecky Dental quote. Never paraphrase, trim or translate a quote; never use dr. Sukardi's.
7. **Noktah** appears only where it is genuinely needed, such as the legal entity on Privacy or Terms (constitution IV). Never in marketing copy, headings or CTAs.
8. **One name per thing.** Before adding a word, grep the reference pages and `app/` for how the same thing is already said, and use that. See *Decided words*.
9. **Field labels are nouns; buttons are a verb plus the thing.** *Nama*, *Nama klinik*, *WhatsApp atau email*. *Kirim minat*, *Daftar*, *Konsultasi gratis 30 menit*. Never "Submit", "OK" or "Klik di sini".
10. **A placeholder is an example, marked as one**: *Contoh: Klinik Pratama Sehat*. It never replaces the label.
11. **Errors say what happened and the way out**, next to the field, in plain words: *Isi nama klinik Anda*, *Format email belum benar, contoh: nama@klinik.com*, *Formulir belum terkirim. Periksa koneksi Anda, lalu coba lagi, atau hubungi kami lewat WhatsApp.* Never a status code, never "Terjadi kesalahan" alone.
12. **Success says what was saved and what happens next**: *Terima kasih, minat Anda sudah kami terima. Kami hubungi lewat WhatsApp atau email saat program dibuka.* No "Berhasil!".
13. **Empty and no-result states** say what is missing and offer one action: *Belum ada artikel untuk "{kata kunci}". Coba kata lain, atau lihat semua artikel.*
14. **No full stop after a fragment.** Labels, buttons and chips have none; a full sentence ends with one.
15. **Local formats.** Money is `Rp2,5 juta` / `Rp2,5 jt` exactly as the design writes it (no space after Rp). Short counts use the design's forms: `10+ cabang`, `2 jt+`, `1,28 jt+`, `16 rb+`, `+200%`. Dates in words: *15 Oktober 2026*. Phone: *+62 822-3071-2718*.

## Strings the design doesn't show

| Element | Shape | Example |
|---|---|---|
| Page title (`<title>`) | `<what the page is> — Eskala`; home is `Eskala — <line>` | Studi Kasus Digital Marketing Klinik dan Rumah Sakit — Eskala |
| Meta description | one or two sentences, ≤155 characters, says who it's for and what they get; no price but the starting price | Eskala membantu klinik, rumah sakit, dan dokter membangun komunikasi digital yang sesuai aturan iklan kesehatan. |
| Alt text | what the image shows that matters here; a decorative image (the copper wing) has `alt=""` and `aria-hidden` | Tim Eskala meninjau draf konten bersama tim marketing klinik |
| Icon-only control | `aria-label` naming the act | Buka menu · Tutup menu · Instagram Eskala (@eskala.team) |
| Link that opens WhatsApp or a new tab | its words say where it goes | Chat via WhatsApp |
| WhatsApp `?text=` | the visitor's own first message, in their voice, naming what they want; this is the one place "Halo Eskala!" is fine | Halo Eskala! Saya ingin konsultasi gratis 30 menit untuk klinik saya. |
| Form field | label (noun) + optional hint (limit, unit, or why it's asked) | Nomor WhatsApp — *Kami hanya menghubungi Anda soal program ini* |
| Form error | see rule 11 | Isi nomor WhatsApp atau email |
| Form success | see rule 12 | |
| Coming soon | the design's *Segera hadir* tag and its own lines; don't add promises or dates | |
| 404 | what happened + the way back | Halaman ini tidak ada. Kembali ke beranda atau konsultasi gratis lewat WhatsApp. |

## Decided words

| Thing | Write | Not |
|---|---|---|
| the primary CTA | Konsultasi gratis 30 menit (nav: Konsultasi gratis) | Hubungi kami, Konsultasi sekarang, Free consultation |
| the starting price | Mulai dari Rp2,5 juta per bulan | Harga mulai, Start from, mulai Rp 2.500.000 |
| the Ads fee | Fee mulai dari 10% dari total biaya iklan | biaya admin, komisi |
| the most-chosen tier badge | Paling dipilih | Terpopuler, Best seller, Rekomendasi |
| not launched yet | Segera hadir (tag: Segera) | Coming soon, Akan datang |
| the content check | medical review (explained once per page) | review dokter, cek medis |
| who Eskala works with | tim marketing Anda / tim internal | karyawan Anda, staf Anda |
| what Eskala is | partner komunikasi kesehatan / partner digital marketing | agensi, vendor, tim kreatif kesehatan |
| the contract | Kontrak fleksibel, tanpa komitmen tahunan (minimum 6 bulan, per Syarat & Ketentuan) | kontrak tahunan, tanpa minimum |
| where Eskala works | seluruh Indonesia | any city |

`CONTEXT.md`, once it exists (`/speckit-grill` writes it), is the glossary for *what* a thing is; this table is the word on screen. If they disagree, the glossary wins and the disagreement is a finding.

## Before you're done

- [ ] Text the design has was copied exactly; nothing in it was "improved".
- [ ] *Anda*, plain and warm; no exclamation marks, no emoji, no selling words.
- [ ] None of the four tics; no city; the audience wording as fixed.
- [ ] Only the two starting prices, anywhere — copy, alt, meta, JSON-LD.
- [ ] No health-ad red flag (rule 5); testimonials verbatim and only the two allowed.
- [ ] Labels are nouns, buttons verb + thing, placeholders marked *Contoh:*.
- [ ] Every error says the way out; every success says what happens next.
- [ ] Jargon explained once per page; words match *Decided words*.
- [ ] Every icon-only control has an `aria-label`; decorative images are `alt=""` + `aria-hidden`.
- [ ] It fits at 320px without breaking a word.

## Sources

- `.claude/CLAUDE.md` (*Copy Rules*, *Business Context*) and `.claude/rules/brand.md` — the decisions this skill applies.
- `design/reference/*.html` — the approved voice; the formats above are read from it.
- `docs/unfamiliar-terms-checklist.md` — terms to explain or avoid.
- Structure and element patterns adapted from venyu's `venyu-copy` skill and noktah-dashboard's `copy-editor` agent (its health-claims list), both in this owner's repos.
