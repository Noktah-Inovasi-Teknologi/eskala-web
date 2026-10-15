export interface NavLink {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export const contact = {
  email: "core@eskala.id",
  phone: "+62 822-3071-2718",
  whatsappNumber: "6282230712718",
  area: "Melayani seluruh Indonesia",
} as const

export const tagline = "Membumikan kesehatan"

/** The only two prices the site may show (constitution IV). */
export const pricing = {
  smm: {
    from: "Mulai dari",
    amount: "Rp2,5 juta",
    amountShort: "Rp2,5 jt",
    tag: "Mulai dari Rp2,5 juta",
    sentence: "Mulai dari Rp2,5 juta per bulan",
    /** The same starting price as a number, for structured data (IDR per month). */
    minPerMonth: 2_500_000,
  },
  ads: {
    from: "Fee mulai dari",
    amount: "10%",
    sentence: "Fee mulai dari 10% dari total biaya iklan",
  },
} as const

/** A wa.me link, with the visitor's first message pre-filled when given. */
export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Every "Konsultasi gratis" WhatsApp CTA opens with this message (eskala-copy: the visitor's voice). */
export const consultLink = whatsappLink("Halo Eskala! Saya ingin konsultasi gratis 30 menit.")

/** The main nav, in the design's order. Routes follow ADR-0001. */
export const mainNav: NavLink[] = [
  { label: "Digital Marketing", to: "/digital-marketing" },
  { label: "Education", to: "/education" },
  { label: "Training", to: "/training" },
  { label: "Studi kasus", to: "/case-study" },
  { label: "Artikel", to: "/articles" },
  { label: "Tentang kami", to: "/about-us" },
]

export const footerNav: { title: string, links: NavLink[] }[] = [
  {
    title: "Layanan",
    links: [
      { label: "Digital Marketing", to: "/digital-marketing" },
      { label: "Education", to: "/education" },
      { label: "Training", to: "/training" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Studi kasus", to: "/case-study" },
      { label: "Artikel", to: "/articles" },
      { label: "Tentang kami", to: "/about-us" },
    ],
  },
]

export interface PublicPage {
  path: string
  /** The page's name in breadcrumbs and in the WhatsApp source tag. */
  name: string
  /** Meta description (eskala-copy: ≤155 characters, only the starting prices). */
  description: string
}

/**
 * Every public page, in nav order. The sitemap, llms.txt, breadcrumbs and the source tag read
 * this list; /dev/* is never in it (spec 001, FR-001).
 */
export const publicPages: PublicPage[] = [
  { path: "/", name: "Beranda", description: "Partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter. Konsultasi gratis 30 menit lewat WhatsApp." },
  { path: "/digital-marketing", name: "Digital Marketing", description: "Social Media Management dan Ads Management untuk klinik, rumah sakit, dan dokter, dengan medical review sebelum tayang. Mulai dari Rp2,5 juta per bulan." },
  { path: "/education", name: "Education", description: "Online Class, Webinar, Course Videos, dan Modules komunikasi kesehatan untuk staf, tenaga kesehatan, dan manajemen klinik. Segera hadir." },
  { path: "/training", name: "Training", description: "Pelatihan marketing dan humas untuk tim klinik dan rumah sakit lewat Workshop, Bootcamp, dan In-house Training berbasis praktik. Segera hadir." },
  { path: "/case-study", name: "Studi kasus", description: "Hasil kerja Eskala bersama SMEC Group dan Klinik Mata Boyolali: kondisi awal, strategi yang dijalankan, dan hasil yang terukur." },
  { path: "/articles", name: "Artikel", description: "Panduan strategi pemasaran klinik dan rumah sakit: cara promosi klinik baru, konten edukasi kesehatan, dan aturan iklan kesehatan." },
  { path: "/about-us", name: "Tentang kami", description: "Eskala adalah partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter di seluruh Indonesia." },
  { path: "/faq", name: "FAQ", description: "Jawaban atas pertanyaan yang sering diajukan tentang layanan Eskala, aturan iklan kesehatan, paket, dan kontrak." },
  { path: "/privacy", name: "Kebijakan privasi", description: "Kebijakan Privasi Eskala — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda sebagai klien atau pengunjung situs eskala.id." },
  { path: "/terms", name: "Syarat layanan", description: "Syarat dan Ketentuan Eskala — aturan penggunaan layanan Social Media Management dan Digital Marketing. Baca sebelum memulai kerja sama." },
]

/** The public page at a path, ignoring a trailing slash; undefined for /dev/* and unknown paths. */
export function publicPage(path: string): PublicPage | undefined {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path
  return publicPages.find(page => page.path === clean)
}

export const legalNav: NavLink[] = [
  { label: "Kebijakan privasi", to: "/privacy" },
  { label: "Syarat layanan", to: "/terms" },
]

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/eskala.team", icon: "i-ph-instagram-logo" },
  { label: "TikTok", href: "https://www.tiktok.com/@eskala.team", icon: "i-ph-tiktok-logo" },
  { label: "Threads", href: "https://www.threads.net/@eskala.team", icon: "i-ph-threads-logo" },
]

export const socialHandle = "@eskala.team"
