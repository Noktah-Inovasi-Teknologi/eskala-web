# Keyword map and FAQ drafts (T036, T037)

## 1. Keyword map (T036, from the Keyword Planner export of 2026-10-16)

**Source**: `planner-export.tsv`, a UTF-8 copy of *Keyword Stats 2026-10-16* (Indonesia, Indonesian, Oct 2025 – Sep 2026). Without ad spend, Keyword Planner reports buckets: **50** means about 10–100 searches a month, and blank means below that.

**What it says**
- **Google search volume for this niche is tiny.** 17 of the 62 phrases register at all, every one in the lowest bucket, and the 62 together come to about **850 searches a month**. The phrases a buyer would type ("jasa digital marketing klinik", "agensi marketing rumah sakit") register nothing.
- **Competition is low everywhere.** Only "harga jasa social media management" is Medium, and it's the only phrase advertisers bid on (top-of-page bid about Rp2.400–3.900).
- **The phrases with volume are questions**: strategi pemasaran rumah sakit, cara promosi klinik, konten edukasi kesehatan, the Permenkes rule. The Artikel FAQ already answers most of them.
- **Ranking first is realistic**, but Google alone brings little traffic in this niche. That fits what prospects say: they find Eskala through **chatbots**. Crawler access, llms.txt, the FAQs and the off-site list carry more weight than title tweaks.
- **FR-012 is settled: "creative agency klinik/kesehatan" has no volume, so the phrase is dropped**, including FAQ B4 (G-28).

| Phrase | Volume | Competition | Page | Used in |
|---|---|---|---|---|
| digital marketing rumah sakit | 50 | Low | Digital Marketing | title already covers it ("Digital Marketing Klinik, Rumah Sakit, dan Dokter") |
| harga jasa social media management | 50 | Medium | Digital Marketing | FAQ D1 (price); the description already shows the starting price |
| google ads klinik | 50 | – | Digital Marketing | page copy and FAQ D2 already name Google Ads |
| iklan rumah sakit | 50 | Low | Digital Marketing | Ads Management copy (no change) |
| strategi pemasaran rumah sakit | 50 | Low | Artikel | proposed title and description (§ 1a) |
| strategi marketing rumah sakit | 50 | Low | Artikel | proposed description |
| manajemen pemasaran rumah sakit | 50 | Low | Artikel | future article topic |
| strategi marketing klinik kecantikan | 50 | Low | Artikel | future article topic |
| cara promosi klinik baru | 50 | Low | Artikel | proposed description; FAQ A3 |
| cara promosi klinik gigi | 50 | Low | Artikel | future article topic |
| cara promosi klinik kecantikan | 50 | Low | Artikel | future article topic |
| promosi klinik kesehatan | 50 | Low | Artikel | FAQ A3 |
| konten edukasi kesehatan | 50 | Low | Artikel | proposed description; FAQ A4 |
| contoh konten edukasi kesehatan | 50 | Low | Artikel | FAQ A4 |
| permenkes iklan dan publikasi pelayanan kesehatan | 50 | Low | Artikel | FAQ A1 |
| pelatihan marketing rumah sakit | 50 | Low | Training | proposed title and description (§ 1a) |
| humas marketing rumah sakit | 50 | Low | Training | proposed description |
| *the other 45 phrases* | – | – | – | no change; kept as natural wording and as chatbot test prompts |

**Alt text**: nothing to change. Image slots are still plain brand panels without images (design decision 2026-10-15), and the share image's alt is set.

### 1a. Proposed title and description changes (T041), for your approval

Only where a phrase with volume isn't already covered. No visible headings or body copy change (FR-011), so there's no design deviation.

| OK | Page | Field | Now | Proposed | Why |
|---|---|---|---|---|---|
| ☑ | Artikel | title | Artikel Digital Marketing Kesehatan untuk Klinik dan Rumah Sakit — Eskala | Artikel Strategi Pemasaran Klinik dan Rumah Sakit — Eskala | "strategi pemasaran rumah sakit" has volume; the current title has no searched phrase |
| ☑ | Artikel | description | Panduan praktis seputar media sosial, iklan, dan komunikasi pasien untuk klinik, rumah sakit, dan dokter. | Panduan strategi pemasaran klinik dan rumah sakit: cara promosi klinik baru, konten edukasi kesehatan, dan aturan iklan kesehatan. | three searched topics; 130 characters |
| ☑ | Training | title | Training Komunikasi untuk Klinik dan Rumah Sakit — Eskala | Training: Pelatihan Marketing Rumah Sakit dan Klinik — Eskala | "pelatihan marketing rumah sakit" has volume; "Training" stays as the product name |
| ☑ | Training | description | Workshop, Bootcamp, dan In-house Training komunikasi untuk tim klinik dan rumah sakit, berbasis praktik. Segera hadir. | Pelatihan marketing dan humas untuk tim klinik dan rumah sakit lewat Workshop, Bootcamp, dan In-house Training berbasis praktik. Segera hadir. | adds "pelatihan marketing" and "humas"; 142 characters |

Beranda, Digital Marketing, Education, Studi kasus, Tentang kami, FAQ, Privacy and Terms stay as they are: either no phrase for them has volume, or their titles already cover it.

## 2. FAQ drafts (T037), for your approval

Drafted **before** the volumes arrive, from the seed list's questions and the test prompts. They may be reordered or trimmed once the map exists.

**Approved 2026-10-16** ("approve all"): ☑ rows are on the site. B4 waits for FR-012 volume; B2, A1, A2 and T2 shipped without their placeholder sentences.

**How to approve:** tick **OK** on each question, or write changes next to it. Only ticked answers go on the site (T038). Every answer uses facts already on the site or in the brand rules; the **Source** column says where. Anything the repo can't support is a `[PLACEHOLDER: …]` for you to fill or strike. Nothing in the answers is a promise of results (health-advertising rule 5).

Each page's FAQ covers its own topic only (G-20). /faq compiles them all.

### Beranda: general questions (existing 3 kept, contract question moves to Digital Marketing per G-23, 3 new)

| OK | # | Question | Answer | Source | For |
|---|---|---|---|---|---|
| ☑ | B1 | Apa yang dikerjakan Eskala? | Eskala adalah partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis. Kami mengelola media sosial lewat Social Media Management dan iklan lewat Ads Management. Program Education dan Training segera hadir. | brand.md, CONTEXT.md | "agensi digital marketing kesehatan", P01, P17 |
| ☑ | B2 | Apakah Eskala melayani fasilitas kesehatan di seluruh Indonesia? | Ya. Eskala melayani klinik pratama dan utama, rumah sakit, serta dokter di seluruh Indonesia. [PLACEHOLDER: how work runs for facilities far from the team, e.g. online briefs and meetings, and how photo and video production is arranged] | footer "Melayani seluruh Indonesia" | E01, E04, national positioning |
| ☑ | B3 | Apa yang dibahas di konsultasi gratis 30 menit? | Anda menceritakan kondisi klinik, rumah sakit, atau praktik Anda lewat WhatsApp. Kami memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami. | CTA band (every page) | P22 |
| ✗ | B4 *(dropped 2026-10-16: no volume, FR-012)* | Apakah Eskala sebuah creative agency? | Eskala adalah partner digital marketing dan komunikasi kesehatan. Kami mengerjakan foto, video, desain, dan copywriting seperti creative agency, khusus untuk layanan kesehatan dan dengan medical review sebelum konten tayang. | digital-marketing.html (SMM list) | P13, E05; FR-012's one allowed FAQ answer |

### Digital Marketing: service, price, ads (existing 5 kept, plus the contract question already there; 6 new)

| OK | # | Question | Answer | Source | For |
|---|---|---|---|---|---|
| ☑ | D1 | Berapa biaya Social Media Management untuk klinik? | Mulai dari Rp2,5 juta per bulan, per akun. Rincian harga tiap paket kami kirim dalam proposal setelah konsultasi. | digital-marketing.html (Paket) | "biaya digital marketing klinik", P05 |
| ☑ | D2 | Berapa fee Ads Management? | Fee mulai dari 10% dari total biaya iklan. Fee dihitung dari persentase paket dikali ad spend (anggaran iklan) ditambah pajak. Budget iklan dibayarkan ke platform dan terpisah dari fee pengelolaan. | digital-marketing.html (Cara fee dihitung) | "jasa iklan klinik", "meta/google/tiktok ads klinik" |
| ☑ | D3 | Apa saja yang termasuk dalam Social Media Management? | Riset klinik, target pasien, dan pilar konten; content plan bulanan; foto, video, editing, dan copywriting; medical review dan QA sebelum tayang; serta laporan dan meeting evaluasi bulanan. Kontennya untuk Instagram, TikTok, dan platform lain. | digital-marketing.html (SMM card) | "jasa social media management klinik", "jasa kelola instagram klinik", P02, P03 |
| ☑ | D4 | Apa bedanya paket Starter, Standard, dan Premium? | Paket dibedakan dari kedalaman evaluasi dan dukungan. Starter menjaga konten tetap aktif dan konsisten. Standard menambah evaluasi performa dan rekomendasi berdasarkan data. Premium menambah analisis lebih dalam, insight kompetitor dari data publik, dan pengelolaan DM. | digital-marketing.html (tiers) | P02 |
| ☑ | D5 | Kapan klinik sebaiknya mulai beriklan? | Kebanyakan klinik memulai dengan Social Media Management, lalu menambah Ads Management setelah konten organiknya berjalan. Iklan bisa dimulai di bulan 4–6, dan biasanya lebih efisien di bulan 7–12. | digital-marketing.html (hero note, timeline) | P09, P20; article "Kapan klinik perlu mulai beriklan?" |
| ☑ | D6 | Bagaimana keberhasilan iklan diukur? | Dari hasil yang disepakati sebelum iklan tayang, misalnya percakapan, lead, atau klik. Angka seperti biaya per klik kami pakai untuk membaca performa, tetapi tidak menjadi satu-satunya ukuran. | digital-marketing.html (Disepakati sebelum iklan tayang) | P09 |

Note: D1–D6 are six; one can drop if you want the page shorter (D4 repeats the tier cards most).

### Studi kasus: proof (4 new; the page has no FAQ yet, a design deviation, G-23)

| OK | # | Question | Answer | Source | For |
|---|---|---|---|---|---|
| ☑ | S1 | Apa yang Eskala kerjakan bersama SMEC Group? | SMEC Group adalah jaringan klinik mata dengan 10+ cabang. Eskala mendampingi produksi lebih dari 250 konten per bulan dengan identitas brand yang seragam di setiap cabang, dari pemetaan sistem sampai pengelolaan iklan digital. ROAS iklannya (pendapatan dari iklan dibanding biaya iklan) lebih dari 4x. | case-studies.ts, brand.md proof points | P12, "marketing klinik mata" |
| ☑ | S2 | Bagaimana Eskala membantu klinik baru? | Klinik Mata Boyolali adalah contohnya. Kami menyiapkan sistem konten, menyelaraskan produksi dengan operasional klinik, dan menjalankan iklan digital secara bertahap. Dalam 12 bulan, akun Instagram klinik mencatat 2 jt+ views, 1,28 jt+ reach, dan 16 rb+ profile visits. | case-studies.ts | "cara promosi klinik baru" |
| ☑ | S3 | Apakah klinik saya bisa mendapat hasil yang sama? | Studi kasus menunjukkan hasil yang sudah terjadi pada klien tertentu. Hasil di klinik Anda dipengaruhi banyak hal di luar konten, jadi kami tidak menjanjikan angka. Di konsultasi gratis, kami membahas kondisi klinik Anda dan tujuan yang disepakati bersama. | tentang-kami.html (Yang tidak kami janjikan) | health-ad rule 5 |
| ☑ | S4 | Bisakah saya melihat dokumen studi kasus lengkap? | Bisa. Tekan "Minta dokumen lengkap" di kartu studi kasus, dan WhatsApp terbuka dengan pesan permintaannya. Kami kirimkan detailnya lewat WhatsApp. | CaseStudyCard | P12 |

### Artikel: questions prospects search (4 new; no FAQ in the design, G-23)

| OK | # | Question | Answer | Source | For |
|---|---|---|---|---|---|
| ☑ | A1 | Apa saja yang tidak boleh ada di iklan klinik? | Di antaranya janji kesembuhan, kata "terbaik", testimoni pasien, dan diskon tindakan, sesuai aturan iklan dan publikasi pelayanan kesehatan (Permenkes 1787/2010). [PLACEHOLDER: confirm this list is complete enough to publish as an answer, or link the full article once it exists] | artikel.html (featured article teaser), brand.md | "permenkes iklan dan publikasi pelayanan kesehatan", "aturan iklan klinik", P06, P07 |
| ☑ | A2 | Bolehkah dokter membuat konten di media sosial? | Boleh, selama kontennya edukasi dan tidak berupa promosi diri. [PLACEHOLDER: the rule and its source, e.g. Kode Etik Kedokteran Indonesia (KODEKI) and the relevant article, and what counts as promotion; Eskala's medical reviewer should confirm] | artikel.html (article teaser: "Bedanya edukasi dan promosi") | "etika promosi dokter", P04, P14 |
| ☑ | A3 | Bagaimana cara promosi klinik baru di media sosial? | Mulailah dari konsistensi: konten rutin yang menjawab pertanyaan calon pasien, dengan jadwal, visual, dan bahasa yang seragam. Iklan bekerja lebih baik setelah konten organik berjalan. Studi kasus Klinik Mata Boyolali menunjukkan cara kami membangun kehadiran digital klinik baru dari nol. | digital-marketing.html (timeline, comparison), case-studies.ts | "cara promosi klinik baru", "cara promosi klinik", P10 |
| ☑ | A4 | Konten edukasi kesehatan seperti apa yang cocok untuk klinik? | Konten yang berangkat dari pertanyaan pasien, misalnya "Kapan perlu memeriksakan mata?", dan sudah ditinjau pihak klinis sebelum tayang. Konten yang hanya membahas layanan jarang menjawab pertanyaan itu, jadi kurang dicari dan kurang dipercaya. | digital-marketing.html (Contoh topik), artikel.html (brosur teaser) | "konten edukasi kesehatan", "ide konten edukasi kesehatan", P21 |

### Tentang kami: who Eskala is and how it works (3 new; no FAQ in the design, G-23)

| OK | # | Question | Answer | Source | For |
|---|---|---|---|---|---|
| ☑ | T1 | Apa yang dijanjikan Eskala, dan apa yang tidak? | Kami menjanjikan cara kerja yang rapi, komunikasi yang akurat, dan evaluasi berdasarkan tujuan yang disepakati bersama. Konten viral, jumlah followers, leads, pasien, atau revenue tertentu tidak kami janjikan, karena hasil seperti itu dipengaruhi banyak hal di luar konten. | tentang-kami.html | P19 |
| ☑ | T2 | Apa itu medical review? | Pemeriksaan setiap konten sebelum tayang untuk akurasi klaim, visual, dan copy medis, lalu dicek terhadap aturan iklan kesehatan dan etika profesi. [PLACEHOLDER: who does the review, e.g. a doctor or health professional on the team or at the client, and their qualification] | tentang-kami.html (nilai 02), Beranda FAQ | P08, E03 |
| ☑ | T3 | Siapa yang mengerjakan konten di Eskala? | Strategi, konten, desain, video, dan iklan dikerjakan dalam satu tim, dengan SOP, QC, dan satu jalur feedback supaya konten tetap konsisten walau permintaan datang dari banyak pihak dan banyak cabang. | tentang-kami.html (Tim, Produksi yang rapi) | P11 |

## 3. Placeholders to fill before approval

| # | What's needed |
|---|---|
| B2 | How work is coordinated for facilities far from the team, and how photo and video production is arranged |
| A1 | Confirmation that the four examples are a fair answer, or a link to the full article |
| A2 | The professional-ethics rule for doctors' content and its source (with the medical reviewer's check) |
| T2 | Who performs medical review and their qualification |

Without these, B2, A1, A2 and T2 can ship without the placeholder sentence, or be left out.
