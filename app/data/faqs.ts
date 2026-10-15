import type { FaqItem } from "~/types/content"

// One group per page; each covers its own page's topic only, and /faq compiles them all
// (spec 001, FR-013/014). The design's questions come first, verbatim; the ones after them were
// approved on 2026-10-16 (specs/001-search-visibility/keywords/keyword-map.md § 2).

/** Beranda › Pertanyaan yang sering diajukan */
export const homeFaqs: FaqItem[] = [
  {
    question: "Berapa lama sampai hasilnya terlihat?",
    answer: "Tiga bulan pertama untuk riset, strategi, dan produksi rutin. Pertumbuhan organik biasanya mulai terlihat di bulan 4–6, dan iklan bisa dioptimasi di bulan 7–12.",
  },
  {
    question: "Apakah Eskala paham aturan iklan kesehatan?",
    answer: "Ya. Setiap konten dicek terhadap aturan iklan layanan kesehatan dan etika profesi, lalu melewati medical review sebelum tayang.",
  },
  {
    question: "Kami sudah punya tim marketing. Apakah Eskala tetap dibutuhkan?",
    answer: "Eskala bekerja sebagai perpanjangan tim marketing Anda. Tim internal tetap memegang arah dan persetujuan, sementara kami menambah kapasitas produksi, medical review, dan analisis performa.",
  },
  {
    question: "Apa yang dikerjakan Eskala?",
    answer: "Eskala adalah partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis. Kami mengelola media sosial lewat Social Media Management dan iklan lewat Ads Management. Program Education dan Training segera hadir.",
  },
  {
    question: "Apakah Eskala melayani fasilitas kesehatan di seluruh Indonesia?",
    answer: "Ya. Eskala melayani klinik pratama dan utama, rumah sakit, serta dokter di seluruh Indonesia.",
  },
  {
    question: "Apa yang dibahas di konsultasi gratis 30 menit?",
    answer: "Anda menceritakan kondisi klinik, rumah sakit, atau praktik Anda lewat WhatsApp. Kami memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami.",
  },
]

/** Digital Marketing › Pertanyaan seputar Digital Marketing */
export const digitalMarketingFaqs: FaqItem[] = [
  {
    question: "Apakah jumlah followers dijamin naik?",
    answer: "Tidak. Kami memantau pertumbuhan followers dan memberi rekomendasi, tapi tidak menjanjikan angka karena banyak faktor di luar konten yang berpengaruh.",
  },
  {
    question: "Apakah tim Eskala membalas DM pasien?",
    answer: "Hanya di paket Premium, berdasarkan SOP, jam layanan, dan template yang disepakati. Pertanyaan medis diteruskan ke klinik, dan kami tidak meminta data kesehatan pribadi pasien.",
  },
  {
    question: "Bagaimana kalau klinik butuh konten mendadak?",
    answer: "Starter paling lambat H-3, Standard H-3 hingga H-1, dan Premium hingga hari H, sesuai kapasitas tim. Waktu pengerjaan dihitung setelah brief dan bahan lengkap diterima.",
  },
  {
    question: "Apakah Ads Management termasuk dalam paket Social Media Management?",
    answer: "Tidak. Ads Management adalah layanan terpisah. Fee pengelolaannya dihitung dari persentase total biaya iklan (ad spend ditambah pajak), terpisah dari budget iklan yang dibayarkan ke platform.",
  },
  {
    question: "Apakah kontraknya mengikat?",
    answer: "Tidak. Kontrak fleksibel, tanpa komitmen tahunan.",
  },
  {
    question: "Berapa biaya Social Media Management untuk klinik?",
    answer: "Mulai dari Rp2,5 juta per bulan, per akun. Rincian harga tiap paket kami kirim dalam proposal setelah konsultasi.",
  },
  {
    question: "Berapa fee Ads Management?",
    answer: "Fee mulai dari 10% dari total biaya iklan. Fee dihitung dari persentase paket dikali ad spend (anggaran iklan) ditambah pajak. Budget iklan dibayarkan ke platform dan terpisah dari fee pengelolaan.",
  },
  {
    question: "Apa saja yang termasuk dalam Social Media Management?",
    answer: "Riset klinik, target pasien, dan pilar konten; content plan bulanan; foto, video, editing, dan copywriting; medical review dan QA sebelum tayang; serta laporan dan meeting evaluasi bulanan. Kontennya untuk Instagram, TikTok, dan platform lain.",
  },
  {
    question: "Apa bedanya paket Starter, Standard, dan Premium?",
    answer: "Paket dibedakan dari kedalaman evaluasi dan dukungan. Starter menjaga konten tetap aktif dan konsisten. Standard menambah evaluasi performa dan rekomendasi berdasarkan data. Premium menambah analisis lebih dalam, insight kompetitor dari data publik, dan pengelolaan DM.",
  },
  {
    question: "Kapan klinik sebaiknya mulai beriklan?",
    answer: "Kebanyakan klinik memulai dengan Social Media Management, lalu menambah Ads Management setelah konten organiknya berjalan. Iklan bisa dimulai di bulan 4–6, dan biasanya lebih efisien di bulan 7–12.",
  },
  {
    question: "Bagaimana keberhasilan iklan diukur?",
    answer: "Dari hasil yang disepakati sebelum iklan tayang, misalnya percakapan, lead, atau klik. Angka seperti biaya per klik kami pakai untuk membaca performa, tetapi tidak menjadi satu-satunya ukuran.",
  },
]

/** Studi kasus › Pertanyaan seputar studi kasus */
export const caseStudyFaqs: FaqItem[] = [
  {
    question: "Apa yang Eskala kerjakan bersama SMEC Group?",
    answer: "SMEC Group adalah jaringan klinik mata dengan 10+ cabang. Eskala mendampingi produksi lebih dari 250 konten per bulan dengan identitas brand yang seragam di setiap cabang, dari pemetaan sistem sampai pengelolaan iklan digital. ROAS iklannya (pendapatan dari iklan dibanding biaya iklan) lebih dari 4x.",
  },
  {
    question: "Bagaimana Eskala membantu klinik baru?",
    answer: "Klinik Mata Boyolali adalah contohnya. Kami menyiapkan sistem konten, menyelaraskan produksi dengan operasional klinik, dan menjalankan iklan digital secara bertahap. Dalam 12 bulan, akun Instagram klinik mencatat 2 jt+ views, 1,28 jt+ reach, dan 16 rb+ profile visits.",
  },
  {
    question: "Apakah klinik saya bisa mendapat hasil yang sama?",
    answer: "Studi kasus menunjukkan hasil yang sudah terjadi pada klien tertentu. Hasil di klinik Anda dipengaruhi banyak hal di luar konten, jadi kami tidak menjanjikan angka. Di konsultasi gratis, kami membahas kondisi klinik Anda dan tujuan yang disepakati bersama.",
  },
  {
    question: "Bisakah saya melihat dokumen studi kasus lengkap?",
    answer: "Bisa. Tekan \"Minta dokumen lengkap\" di kartu studi kasus, dan WhatsApp terbuka dengan pesan permintaannya. Kami kirimkan detailnya lewat WhatsApp.",
  },
]

/** Artikel › Pertanyaan seputar promosi dan aturan iklan */
export const articleFaqs: FaqItem[] = [
  {
    question: "Apa saja yang tidak boleh ada di iklan klinik?",
    answer: "Di antaranya janji kesembuhan, kata \"terbaik\", testimoni pasien, dan diskon tindakan, sesuai aturan iklan dan publikasi pelayanan kesehatan (Permenkes 1787/2010).",
  },
  {
    question: "Bolehkah dokter membuat konten di media sosial?",
    answer: "Boleh, selama kontennya edukasi dan tidak berupa promosi diri.",
  },
  {
    question: "Bagaimana cara promosi klinik baru di media sosial?",
    answer: "Mulailah dari konsistensi: konten rutin yang menjawab pertanyaan calon pasien, dengan jadwal, visual, dan bahasa yang seragam. Iklan bekerja lebih baik setelah konten organik berjalan. Studi kasus Klinik Mata Boyolali menunjukkan cara kami membangun kehadiran digital klinik baru dari nol.",
  },
  {
    question: "Konten edukasi kesehatan seperti apa yang cocok untuk klinik?",
    answer: "Konten yang berangkat dari pertanyaan pasien, misalnya \"Kapan perlu memeriksakan mata?\", dan sudah ditinjau pihak klinis sebelum tayang. Konten yang hanya membahas layanan jarang menjawab pertanyaan itu, jadi kurang dicari dan kurang dipercaya.",
  },
]

/** Tentang kami › Pertanyaan tentang Eskala */
export const aboutFaqs: FaqItem[] = [
  {
    question: "Apa yang dijanjikan Eskala, dan apa yang tidak?",
    answer: "Kami menjanjikan cara kerja yang rapi, komunikasi yang akurat, dan evaluasi berdasarkan tujuan yang disepakati bersama. Konten viral, jumlah followers, leads, pasien, atau revenue tertentu tidak kami janjikan, karena hasil seperti itu dipengaruhi banyak hal di luar konten.",
  },
  {
    question: "Apa itu medical review?",
    answer: "Pemeriksaan setiap konten sebelum tayang untuk akurasi klaim, visual, dan copy medis, lalu dicek terhadap aturan iklan kesehatan dan etika profesi.",
  },
  {
    question: "Siapa yang mengerjakan konten di Eskala?",
    answer: "Strategi, konten, desain, video, dan iklan dikerjakan dalam satu tim, dengan SOP, QC, dan satu jalur feedback supaya konten tetap konsisten walau permintaan datang dari banyak pihak dan banyak cabang.",
  },
]

/** /faq: every page's group, in nav order (spec 001, FR-013). */
export const faqGroups: { title: string, items: FaqItem[] }[] = [
  { title: "Pertanyaan umum", items: homeFaqs },
  { title: "Pertanyaan seputar Digital Marketing", items: digitalMarketingFaqs },
  { title: "Pertanyaan seputar studi kasus", items: caseStudyFaqs },
  { title: "Pertanyaan seputar promosi dan aturan iklan", items: articleFaqs },
  { title: "Pertanyaan tentang Eskala", items: aboutFaqs },
]
