import { whatsappLink } from "~/data/site"

/**
 * The forms have no backend yet (decided 2026-10-15): a valid submission opens WhatsApp with the
 * answers as the visitor's message. Swap `send` for a real endpoint later; the forms stay as they are.
 */
export function useWhatsAppHandoff() {
  const status = ref<"idle" | "sending" | "sent" | "failed">("idle")

  function send(intro: string, lines: [label: string, value: string | string[] | undefined][]) {
    const body = lines
      .map(([label, value]) => [label, Array.isArray(value) ? value.join(", ") : value?.trim()] as const)
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
    const link = whatsappLink([intro, "", ...body].join("\n"))
    const opened = window.open(link, "_blank", "noopener")
    if (!opened) window.location.href = link
    status.value = "sent"
  }

  return { status, send }
}
