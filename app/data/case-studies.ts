import { ref } from "vue"

export interface CaseStudy {
  id: string
  title: string
  client: string
  category: "opthalmology" | "dental" | "non-healthcare"
  summary: string
  services: string[]
  results: { label: string; value: string }[]
  period: string
  coverImage?: string
}

export const caseStudies = ref<CaseStudy[]>([
  {
    id: "1",
    title: "15 Cabang, Satu Suara: Mengelola Digital Marketing Rumah Sakit Mata Terbesar di Indonesia",
    client: "SMEC Group",
    category: "opthalmology",
    summary:
      "Eskala bermitra dengan SMEC Group, jaringan rumah sakit dan klinik mata dengan lebih dari 15 cabang di seluruh Indonesia, untuk mengatasi tantangan pengelolaan komunikasi digital dalam skala besar. Dengan memahami karakter tiap cabang secara mendalam, Eskala membangun sistem produksi konten yang konsisten, mengelola iklan digital berbasis data, dan menyusun laporan bulanan yang dapat dipresentasikan langsung ke manajemen. Hasilnya, ratusan konten berkualitas setiap bulan, pertumbuhan kehadiran digital yang terukur, dan efisiensi iklan yang signifikan. Ini membuktikan bahwa konsistensi sistem adalah fondasi dari hasil yang berkelanjutan.",
    services: ["Social Media Management", "Digital Marketing"],
    results: [
      { label: "ROAS", value: ">4x" },
      { label: "Jumlah Konten", value: "250+" },
    ],
    period: "Desember 2024 - Sekarang",
  }
])
