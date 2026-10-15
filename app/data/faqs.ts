import type { FaqItem } from "~/types/content"

const contract: FaqItem = {
  question: "Apakah kontraknya mengikat?",
  answer: "Tidak. Kontrak fleksibel, tanpa komitmen tahunan.",
}

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
  contract,
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
  contract,
]
