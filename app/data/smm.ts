// Social Media Management tiers and the feature comparison. The comparison, the Ads list and the
// "dibanding mengerjakan sendiri" table below are the copy the site ships with; digital-marketing.vue shows
// the live copy (server/api/service-points.get.ts) instead when it can be read.
// No tier prices, ever (constitution IV): only the starting price in data/site.ts.
import type { ComparisonGroup, ComparisonRow } from "~/types/content"

export interface Tier {
  name: "Starter" | "Standard" | "Premium"
  role: string
  quote: string
  /** The full description (Digital Marketing). */
  description: string
  /** The short line on the home page summary. */
  summary: string
  popular?: boolean
}

export const tiers: Tier[] = [
  {
    name: "Starter",
    role: "Untuk konsistensi",
    quote: "“Bantu kami menjaga komunikasi digital tetap aktif, akurat, dan konsisten.”",
    description: "Konten terjadwal, QA atas setiap konten, dan laporan bulanan dengan analisis views, reach, dan konten terbaik.",
    summary: "Menjaga media sosial klinik tetap aktif, akurat, dan konsisten, dengan laporan bulanan.",
  },
  {
    name: "Standard",
    role: "Untuk optimasi",
    quote: "“Bantu kami menentukan variasi konten yang layak diuji.”",
    description: "Semua di Starter, ditambah lebih banyak konten, Facebook, dan variasi format dan angle yang terencana.",
    summary: "Ditambah konten dan Facebook, serta variasi yang terencana untuk diuji.",
    popular: true,
  },
  {
    name: "Premium",
    role: "Untuk pertumbuhan",
    quote: "“Bantu kami membaca pola audiens dan kompetitor untuk menentukan langkah berikutnya.”",
    description: "Semua di Standard, ditambah insight kompetitor dan audiens, analisis perbandingan, deep insight, dan balasan DM.",
    summary: "Ditambah insight audiens dan kompetitor, plus balasan DM dan komentar.",
  },
]

export const popularBadge = "Paling dipilih"

export const comparison: ComparisonGroup[] = [
  {
    title: "Konten",
    rows: [
      { feature: "Konten per bulan", cells: ["4 Post, 4 Story, 4 Short Video", "5 Post, 5 Story, 6 Short Video", "6 Post, 6 Story, 8 Short Video"] },
      { feature: "Platform", cells: ["Platform utama", "Ditambah Facebook, disalin dari platform utama", "Ditambah Facebook, dibuat khusus"] },
      { feature: "Maksimal sesi syuting per bulan, jika kami yang syuting", cells: ["2", "3", "4"] },
      { feature: "Tayang sesuai kalender, dengan visual dan bahasa yang konsisten", cells: [true, true, true] },
      { feature: "Variasi format dan angle", cells: [false, "Eksperimen yang terencana", "Berdasarkan insight dan performa"] },
    ],
  },
  {
    title: "Kualitas",
    rows: [
      { feature: "QA memeriksa setiap konten untuk klaim medis dan aturan iklan kesehatan", cells: [true, true, true] },
      { feature: "Revisi tanpa batas", cells: [true, true, true] },
    ],
  },
  {
    title: "Evaluasi dan insight",
    rows: [
      { feature: "Laporan bulanan yang mudah dibaca direktur", cells: [true, true, true] },
      { feature: "Pemantauan pertumbuhan followers", cells: ["Dipantau, tanpa jaminan angka", true, true] },
      { feature: "Analisis views, reach, profile visits, serta konten terbaik dan kurang efektif", cells: [true, true, true] },
      { feature: "Insight kompetitor (data publik)", cells: [false, false, true] },
      { feature: "Insight audiens", cells: [false, false, true] },
      { feature: "Analisis perbandingan antarperiode, format, atau cabang", cells: [false, false, true] },
      { feature: "Deep insight: data, pola, hipotesis, rekomendasi", cells: [false, false, true] },
    ],
  },
  {
    title: "Komunitas",
    rows: [
      { feature: "Balas DM dan komentar sesuai SOP", cells: [false, false, true] },
      { feature: "Rekomendasi dari pola pertanyaan DM", cells: [false, false, true] },
    ],
  },
  {
    title: "Layanan",
    rows: [
      { feature: "Satu tim dan satu kontak untuk Anda", cells: [true, true, true] },
      { feature: "Dibalas dalam 4 jam kerja", cells: [true, true, true] },
      { feature: "Permintaan konten di luar jadwal", cells: ["Paling lambat H-3", "H-3 hingga H-1", "Hingga hari H"] },
    ],
  },
  {
    title: "Kerja sama",
    rows: [
      { feature: "Kontrak minimal", cells: ["3 bulan", "3 bulan", "3 bulan"] },
      { feature: "Akun dan konten tetap milik Anda saat kerja sama berakhir", cells: [true, true, true] },
      { feature: "Bisa dipakai untuk banyak cabang dalam satu brand", cells: [true, true, true] },
    ],
  },
  {
    title: "Tambahan",
    rows: [
      { feature: "Konten dan platform tambahan, halaman website, video company profile, liputan acara", cells: ["Harga terpisah", "Harga terpisah", "Harga terpisah"] },
    ],
  },
]

/** The Ads Management points (scope: ads). */
export const adsPoints: string[] = [
  "Iklan Meta dan TikTok",
  "Fee ditagih setelah periode berakhir, mengikuti hasil, tanpa pembayaran di muka",
  "Fee mulai dari 10% dari belanja iklan",
  "Anggaran iklan dibayarkan langsung ke platform, tanpa markup dari kami",
  "Anda bisa mengisi saldo iklan sendiri langsung di platform",
  "Konten iklan tambahan di luar kuota, harga terpisah",
  "Laporan hasil iklan setiap bulan",
]

/** "Dibanding mengerjakan sendiri" (scope: compare): the columns, then one row per point. */
export const compareColumns = ["Tim sendiri", "Freelancer", "Eskala"]

export const compare: ComparisonRow[] = [
  { feature: "Siapa yang mengerjakan", cells: ["Satu orang, tergantung tim Anda", "Satu orang, per pekerjaan", "Satu tim, dari perencanaan sampai QA"] },
  { feature: "Pemeriksaan klaim medis dan aturan iklan kesehatan", cells: ["Tergantung Anda", "Tergantung Anda", "Setiap konten, oleh QA"] },
  { feature: "Saat ada yang keluar", cells: ["Anda mencari orang baru", "Anda mencari orang baru", "Pekerjaan tetap berjalan"] },
  { feature: "Laporan bulanan untuk direktur", cells: ["Tergantung Anda", "Tergantung Anda", true] },
  { feature: "Biaya per bulan", cells: ["Mulai dari upah minimum", "Tergantung pekerjaan", "Mulai dari Rp2,5 juta"] },
  { feature: "Bisa bersama tim Anda", cells: ["Tim Anda tetap ada", "Tergantung pekerjaan", "Ya, tim Anda tetap ada, kami menambah kapasitas"] },
]
