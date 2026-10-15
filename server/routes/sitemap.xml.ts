import { publicPages } from "../../app/data/site"

// Every public page, never /dev/* (spec 001, FR-001, contract C-3). Prerendered at build.
export default defineEventHandler((event) => {
  setHeader(event, "Content-Type", "application/xml; charset=utf-8")
  const urls = publicPages.map(page => `  <url><loc>https://eskala.id${page.path}</loc></url>`).join("\n")
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
