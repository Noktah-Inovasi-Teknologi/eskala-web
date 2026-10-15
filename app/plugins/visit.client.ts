import { publicPage, socialLinks } from "~/data/site"

// One listener for every link on the site (spec 001, research R9): remembers where the visit
// started, appends the source tag to WhatsApp messages, and reports tracked actions after consent.

/** header, menu, footer, or the heading of the card or section the link sits in. */
function clickLocation(link: Element): string {
  if (link.closest("[role=dialog]")) return "menu"
  if (link.closest("header")) return "header"
  if (link.closest("footer")) return "footer"
  const heading = link.closest("article, section")?.querySelector("h1, h2, h3")?.textContent?.replace(/\s+/g, " ").trim()
  return heading ? heading.slice(0, 60) : "page"
}

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const consent = useConsent()
  // After hydration: the server renders no consent bar, so showing it earlier is a mismatch.
  nuxtApp.hook("app:mounted", () => consent.init())
  rememberVisitSource(document.referrer, new URLSearchParams(location.search).get("utm_source"))

  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
    if (!link) return
    const path = router.currentRoute.value.path
    const pageName = publicPage(path)?.name ?? path
    const source = currentVisitSource()
    const base = { page_name: pageName, location: clickLocation(link), visit_source: source ?? undefined }

    if (link.href.startsWith("https://wa.me/")) {
      link.href = withSourceTag(link.href, source, pageName)
      if (link.dataset.track === "document_request") consent.track("document_request", { ...base, case_study: link.dataset.caseStudy })
      else consent.track("whatsapp_click", base)
    }
    else if (link.href.startsWith("mailto:")) {
      consent.track("email_click", base)
    }
    else {
      const social = socialLinks.find(item => link.href.startsWith(item.href))
      if (social) consent.track("social_click", { ...base, network: social.label.toLowerCase() })
    }
  }, { capture: true })
})
