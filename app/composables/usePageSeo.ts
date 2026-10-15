const SITE = "https://eskala.id"
const IMAGE = `${SITE}/android-chrome-512x512.png`

/**
 * Title, description, canonical and social tags for a page. Titles take the "… — Eskala" form
 * from the reference pages; `full` is for the two pages whose title is written out whole.
 */
export function usePageSeo(options: { title: string, description: string, path: string, full?: boolean }) {
  const url = `${SITE}${options.path}`
  const fullTitle = options.full ? options.title : `${options.title} — Eskala`

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: fullTitle,
    ogDescription: options.description,
    ogUrl: url,
    ogType: "website",
    ogImage: IMAGE,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: options.description,
    twitterImage: IMAGE,
  })
  useHead({
    link: [{ rel: "canonical", href: url }],
    ...(options.full ? { titleTemplate: "%s" } : {}),
  })
}
