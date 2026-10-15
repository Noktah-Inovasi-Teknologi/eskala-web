import { publicPage, whatsappLink } from "~/data/site"

export type HandoffForm = "education_waitlist" | "training_interest" | "newsletter"

/**
 * The forms have no backend yet (decided 2026-10-15): a valid submission opens WhatsApp with the
 * answers as the visitor's message, ending with the source tag (spec 001, FR-016). Swap `send`
 * for a real endpoint later; the forms stay as they are.
 */
export function useWhatsAppHandoff(form: HandoffForm) {
  const status = ref<"idle" | "sending" | "sent" | "failed">("idle")
  const route = useRoute()
  const { track } = useConsent()

  function send(intro: string, lines: [label: string, value: string | string[] | undefined][]) {
    const body = lines
      .map(([label, value]) => [label, Array.isArray(value) ? value.join(", ") : value?.trim()] as const)
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
    const pageName = publicPage(route.path)?.name ?? route.path
    const source = currentVisitSource()
    const link = withSourceTag(whatsappLink([intro, "", ...body].join("\n")), source, pageName)
    track("form_submit", { page_name: pageName, form, visit_source: source ?? undefined })
    const opened = window.open(link, "_blank", "noopener")
    if (!opened) window.location.href = link
    status.value = "sent"
  }

  return { status, send }
}
