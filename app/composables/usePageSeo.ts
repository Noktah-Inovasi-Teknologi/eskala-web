import { publicPage, publicPages } from "~/data/site"
import type { FaqItem } from "~/types/content"

const SITE = "https://eskala.id"
const IMAGE = `${SITE}/og-image.png`
const IMAGE_ALT = "Logo Eskala dengan sayap tembaga dan tulisan Membumikan kesehatan"

/**
 * Title, description, canonical, social tags and structured data for a page. The description and
 * the page name come from `publicPages` (one copy). Titles take the "… — Eskala" form from the
 * reference pages; `full` is for the two pages whose title is written out whole. `faqs` adds a
 * FAQPage, `schema` adds extra JSON-LD nodes (spec 001, contract C-6).
 */
export function usePageSeo(options: { title: string, path: string, full?: boolean, faqs?: FaqItem[], schema?: object[] }) {
  const page = publicPage(options.path)
  if (!page) throw new Error(`usePageSeo: ${options.path} is not in publicPages`)
  const url = `${SITE}${page.path}`
  const fullTitle = options.full ? options.title : `${options.title} — Eskala`

  useSeoMeta({
    title: options.title,
    description: page.description,
    ogTitle: fullTitle,
    ogDescription: page.description,
    ogUrl: url,
    ogType: "website",
    ogImage: IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: IMAGE_ALT,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: page.description,
    twitterImage: IMAGE,
    twitterImageAlt: IMAGE_ALT,
  })

  const graph: object[] = [...(options.schema ?? [])]
  if (page.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "itemListElement": [publicPages[0]!, page].map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${SITE}${crumb.path}`,
      })),
    })
  }
  if (options.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": options.faqs.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    })
  }

  useHead({
    link: [{ rel: "canonical", href: url }],
    script: graph.length
      ? [{ key: "schema-page", type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }]
      : [],
    ...(options.full ? { titleTemplate: "%s" } : {}),
  })
}
