// The article cards in the design. These are proposed topics (design/README.md, Placeholders):
// none is written yet, so none has a `to`.
import type { ArticleSummary } from "~/types/content"

const adRules: ArticleSummary = {
  title: "Apa saja yang tidak boleh ada di iklan klinik?",
  excerpt: "Janji kesembuhan, kata “terbaik”, testimoni pasien, dan diskon tindakan. Ini cara tetap menarik tanpa melanggarnya.",
  readTime: "7 menit baca",
  category: "Aturan iklan",
  categoryTone: "white-cobalt",
  mediaTone: "cobalt",
}

const priceQuestions: ArticleSummary = {
  title: "Cara menjawab pertanyaan harga lewat WhatsApp",
  excerpt: "Template balasan untuk tim CS: menjawab langsung, memberi satu angka pasti, dan menutup dengan pilihan jadwal.",
  readTime: "5 menit baca",
  category: "Komunikasi pasien",
  categoryTone: "white-accent",
  mediaTone: "copper",
}

const whenToAdvertise: ArticleSummary = {
  title: "Kapan klinik perlu mulai beriklan?",
  excerpt: "Iklan bekerja lebih baik saat konten organik sudah berjalan. Tanda-tanda klinik Anda sudah siap.",
  readTime: "6 menit baca",
  category: "Ads Management",
  categoryTone: "white-ink",
  mediaTone: "neutral",
}

/** Beranda › Artikel terbaru */
export const latestArticles: ArticleSummary[] = [adRules, priceQuestions, whenToAdvertise]

/** Artikel › the featured card */
export const featuredArticle = adRules
export const featuredLabel = "Pilihan editor · Aturan iklan"

/** Artikel › the grid */
export const articleGrid: ArticleSummary[] = [
  priceQuestions,
  whenToAdvertise,
  {
    title: "Dokter boleh membuat konten? Bedanya edukasi dan promosi",
    excerpt: "Panduan singkat untuk dokter umum dan spesialis yang ingin aktif di media sosial.",
    readTime: "6 menit baca",
    category: "Aturan iklan",
    categoryTone: "white-cobalt",
    mediaTone: "cobalt",
  },
  {
    title: "Kenapa konten klinik terasa seperti brosur",
    excerpt: "Konten yang membahas layanan jarang menjawab pertanyaan pasien. Cara mengubah sudut pandangnya.",
    readTime: "5 menit baca",
    category: "Media sosial",
    categoryTone: "white-accent",
    mediaTone: "copper",
  },
  {
    title: "Kalender konten kesehatan November 2026",
    excerpt: "Hari Kesehatan Nasional, Hari Diabetes Sedunia, dan Pekan Kesadaran Antimikroba, lengkap dengan ide konten.",
    readTime: "4 menit baca",
    category: "Media sosial",
    categoryTone: "white-ink",
    mediaTone: "neutral",
  },
  {
    title: "Membaca laporan media sosial dalam lima menit",
    excerpt: "Metrik yang perlu dilihat owner, dan yang bisa dilewati.",
    readTime: "5 menit baca",
    category: "Manajemen",
    categoryTone: "white-cobalt",
    mediaTone: "cobalt",
  },
]

export const articleCategories = ["Semua", "Aturan iklan", "Media sosial", "Ads Management", "Komunikasi pasien", "Manajemen"]
