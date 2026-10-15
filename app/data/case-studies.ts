// The two case studies (design/reference/studi-kasus.html). Proof points per brand rules:
// SMEC Group 10+ cabang; Klinik Mata Boyolali 12 bulan, 2 jt+ views.
import type { Stat } from "~/types/content"

export interface CaseStudy {
  id: string
  /** The filter chip it belongs to. */
  category: "Klinik mata" | "Klinik gigi" | "Klinik umum" | "Rumah sakit"
  variant: "cobalt" | "light"
  chips: { label: string, tone: "accent" | "accent-soft" | "on-cobalt" | "neutral" }[]
  title: string
  body: string
  stats: { value: string, label: string }[]
  /** Quoted in the WhatsApp request for the full document. */
  documentTitle: string
  mediaLabel?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "smec",
    category: "Klinik mata",
    variant: "cobalt",
    chips: [
      { label: "Klinik mata", tone: "accent" },
      { label: "SMEC Group", tone: "on-cobalt" },
      { label: "10+ cabang", tone: "on-cobalt" },
    ],
    title: "Menjaga konsistensi konten di jaringan layanan kesehatan yang terus berkembang",
    body: "Saat jaringan klinik tumbuh melampaui 10 cabang, tantangannya bergeser dari ekspansi ke konsistensi. Eskala mendampingi SMEC Group memproduksi lebih dari 250 konten per bulan dengan identitas brand yang seragam di setiap cabang, mulai dari pemetaan sistem sampai pengelolaan iklan digital.",
    stats: [
      { value: ">4x", label: "ROAS iklan" },
      { value: "250+", label: "Konten per bulan" },
    ],
    documentTitle: "Menjaga Konsistensi Konten di Jaringan Layanan Kesehatan yang Terus Berkembang",
  },
  {
    id: "klinik-mata-boyolali",
    category: "Klinik mata",
    variant: "light",
    chips: [
      { label: "Klinik mata", tone: "accent-soft" },
      { label: "Klinik Mata Boyolali", tone: "neutral" },
      { label: "Klinik utama · 12 bulan", tone: "neutral" },
    ],
    title: "Membangun kehadiran digital klinik baru dari nol",
    body: "Klinik baru sering kesulitan menarik pasien karena belum dikenal, meski layanannya baik. Eskala membantu Klinik Mata Boyolali menyiapkan sistem konten, menyelaraskan produksi dengan operasional klinik, dan menjalankan iklan digital secara bertahap. Dalam 12 bulan, akun Instagram klinik mencatat lebih dari 2 juta views.",
    stats: [
      { value: "2 jt+", label: "Total views" },
      { value: "1,28 jt+", label: "Total reach" },
      { value: "16 rb+", label: "Profile visits" },
    ],
    documentTitle: "Membangun Kehadiran Digital Klinik Baru dari Nol",
    mediaLabel: "Tangkapan layar feed Instagram Klinik Mata Boyolali",
  },
]

export const caseStudyFilters = ["Semua", "Klinik mata", "Klinik gigi", "Klinik umum", "Rumah sakit"] as const

/** Studi kasus › the header strip */
export const caseStudyStats: Stat[] = [
  { value: "10+", label: "Fasilitas kesehatan aktif" },
  { value: "2", label: "Studi kasus tersedia" },
  { value: "+200%", label: "Rata-rata pertumbuhan reach organik", tone: "cobalt" },
  { value: "80%", label: "Klien memperpanjang kontrak", tone: "accent" },
]
