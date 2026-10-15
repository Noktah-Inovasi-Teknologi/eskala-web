// Social Media Management tiers and the feature comparison (design/reference/digital-marketing.html).
// No tier prices, ever (constitution IV): only the starting price in data/site.ts.
import type { ComparisonGroup } from "~/types/content"

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
    description: "Eksekusi terstruktur dan QC untuk menjaga kehadiran klinik di media sosial.",
    summary: "Menjaga media sosial klinik tetap aktif, akurat, dan konsisten.",
  },
  {
    name: "Standard",
    role: "Untuk optimasi",
    quote: "“Bantu kami memahami performa konten dan menentukan variasi yang layak diuji.”",
    description: "Semua di Starter, ditambah evaluasi performa dan rekomendasi berdasarkan data.",
    summary: "Ditambah evaluasi performa konten dan rekomendasi variasi yang layak diuji.",
    popular: true,
  },
  {
    name: "Premium",
    role: "Untuk pertumbuhan",
    quote: "“Bantu kami membaca pola audiens dan kompetitor untuk menentukan langkah berikutnya.”",
    description: "Semua di Standard, ditambah analisis lebih dalam, insight kompetitor, dan pengelolaan DM.",
    summary: "Ditambah insight audiens dan kompetitor, plus pengelolaan DM dan komentar.",
  },
]

export const popularBadge = "Paling dipilih"

export const comparison: ComparisonGroup[] = [
  {
    title: "Dasar",
    rows: [
      { feature: "Media sosial aktif sesuai kalender", cells: [true, true, true] },
      { feature: "Konsistensi jadwal, visual, bahasa, dan CTA", cells: [true, true, true] },
      { feature: "QA konten dan tindak lanjut revisi", cells: [true, true, true] },
      { feature: "Pemantauan pertumbuhan followers", cells: ["Dipantau, tanpa jaminan angka", true, true] },
    ],
  },
  {
    title: "Evaluasi dan insight",
    rows: [
      { feature: "Analisis views, reach, profile visits", cells: [false, true, true] },
      { feature: "Analisis konten terbaik dan kurang efektif", cells: [false, true, true] },
      { feature: "Variasi konten", cells: [false, "Eksperimen format dan angle yang terencana", "Variasi berdasarkan insight dan performa"] },
      { feature: "Insight kompetitor (data publik)", cells: [false, false, true] },
      { feature: "Analisis perbandingan antarperiode, format, atau cabang", cells: [false, false, true] },
      { feature: "Deep insight: data, pola, hipotesis, rekomendasi", cells: [false, false, true] },
    ],
  },
  {
    title: "Komunitas dan permintaan tambahan",
    rows: [
      { feature: "Balas DM dan komentar sesuai SOP", cells: [false, false, true] },
      { feature: "Rekomendasi dari pola pertanyaan DM", cells: [false, false, true] },
      { feature: "Permintaan konten di luar jadwal", cells: ["Paling lambat H-3", "H-3 hingga H-1", "Hingga hari H"] },
    ],
  },
]
