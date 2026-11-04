import { contact, pricing, publicPages, socialHandle, whatsappLink } from "../../app/data/site"

// A plain-text summary of Eskala for AI assistants (llmstxt.org; spec 001, FR-004, contract C-5).
// Every fact is read from app/data/site.ts. Prerendered at build.
export default defineEventHandler((event) => {
  setHeader(event, "Content-Type", "text/plain; charset=utf-8")
  return [
    "# Eskala",
    "",
    "> Eskala adalah partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis. Eskala bekerja bersama tim marketing internal, dan QA memeriksa setiap konten untuk klaim medis dan aturan iklan kesehatan. Melayani seluruh Indonesia.",
    "",
    "## Layanan",
    "",
    `- Social Media Management (paket Starter, Standard, Premium): ${pricing.smm.sentence}.`,
    `- Ads Management (Meta dan TikTok): ${pricing.ads.sentence}.`,
    "- Education (Online Class, Webinar, Course Videos, Modules): segera hadir.",
    "- Training (Workshop, Bootcamp, In-house Training): segera hadir.",
    "- Kontrak fleksibel, tanpa komitmen tahunan. Kontrak minimal 3 bulan.",
    "",
    "## Kontak",
    "",
    `- Konsultasi gratis 30 menit lewat WhatsApp: ${contact.phone} (${whatsappLink()})`,
    `- Email: ${contact.email}`,
    `- Instagram, TikTok, dan Threads: ${socialHandle}`,
    "",
    "## Halaman",
    "",
    ...publicPages.map(page => `- [${page.name}](https://eskala.id${page.path}): ${page.description}`),
    "",
  ].join("\n")
})
