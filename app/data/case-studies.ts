import { ref } from "vue"

export interface CaseStudy {
  id: string
  title: string
  client: string
  category: "ophthalmology" | "dental" | "non-healthcare"
  summary: string
  services: string[]
  results: { label: string; value: string }[]
  period: string
  coverImage?: string
}

export const caseStudies = ref<CaseStudy[]>([
  {
    id: "1",
    title: "Menjaga Konsistensi Konten di Jaringan Layanan Kesehatan yang Terus Berkembang",
    client: "SMEC Group",
    category: "ophthalmology",
    summary:
      "Ketika sebuah jaringan layanan kesehatan tumbuh melampaui 15 cabang, tantangan terbesarnya bukan lagi soal ekspansi, melainkan soal konsistensi. Studi kasus ini mengulas bagaimana Eskala mendampingi SMEC Group mengelola produksi lebih dari 250 konten per bulan di seluruh jaringannya, sambil menjaga identitas brand yang seragam di setiap cabang. Dari pemetaan sistem hingga pengelolaan iklan digital, pendampingan ini menunjukkan bahwa volume tinggi dan kualitas yang terjaga bukan dua hal yang harus saling mengorbankan.",
    services: ["Social Media Management", "Digital Marketing"],
    results: [
      { label: "ROAS", value: ">4x" },
      { label: "Jumlah Konten", value: "250+" },
    ],
    period: "Desember 2024 - Sekarang",
  },
  {
        id: "2",
    title: "Membangun Kehadiran Digital Klinik Baru dari Nol",
    client: "Klinik Mata Boyolali",
    category: "ophthalmology",
    summary:
      "Klinik baru menghadapi paradoks yang tidak banyak disadari: kualitas layanan yang baik tidak cukup untuk mendatangkan pasien jika klinik itu belum dikenal. Studi kasus ini menelusuri bagaimana Eskala mendampingi Klinik Utama Boyolali membangun kehadiran digital dari titik nol, mulai dari menata sistem konten, menyesuaikan proses produksi dengan ritme operasional klinik, hingga menjalankan iklan digital secara bertahap. Dalam 12 bulan, akun KMB membukukan lebih dari 2 juta views.",
    services: ["Social Media Management", "Digital Marketing"],
    results: [
      { label: "Total Views", value: "2 juta+" },
      { label: "Total Reach", value: "1,28 juta+" },
      { label: "Profile Visits", value: "16 ribu+" },
    ],
    period: "Maret 2025 - Sekarang",
  }
  
])
