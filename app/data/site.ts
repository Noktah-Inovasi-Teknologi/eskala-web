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
