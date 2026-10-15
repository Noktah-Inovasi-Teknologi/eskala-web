// Where a visit started, and the tag that names it in pre-filled WhatsApp messages (spec 001,
// FR-016/017, contract C-2). No imports, so `node --test` can load it directly.

export type VisitSource =
  | "ChatGPT" | "Perplexity" | "Gemini" | "Copilot" | "Claude" | "Google" | "Bing"
  | "Instagram" | "TikTok" | "Threads" | "Facebook" | "LinkedIn"

// First match wins: Gemini before Google, Copilot before Bing.
const RULES: [VisitSource, RegExp][] = [
  ["ChatGPT", /^((chat\.)?openai\.com|chatgpt\.com|chatgpt)$/],
  ["Perplexity", /^(perplexity\.ai|perplexity)$/],
  ["Gemini", /^((gemini|bard)\.google\.com|gemini)$/],
  ["Copilot", /^(copilot\.microsoft\.com|copilot\.cloud\.microsoft|copilot)$/],
  ["Claude", /^(claude\.ai|claude)$/],
  ["Google", /^(google\.[a-z.]+|google)$/],
  ["Bing", /^(bing\.com|bing)$/],
  ["Instagram", /^((l\.)?instagram\.com|instagram|ig)$/],
  ["TikTok", /^(tiktok\.com|tiktok)$/],
  ["Threads", /^(threads\.(net|com)|threads)$/],
  ["Facebook", /^((m|l|lm)\.facebook\.com|facebook\.com|fb\.me|facebook|fb)$/],
  ["LinkedIn", /^(linkedin\.com|lnkd\.in|linkedin)$/],
]

function match(value: string): VisitSource | null {
  const host = value.trim().toLowerCase().replace(/^www\./, "")
  if (!host) return null
  return RULES.find(([, pattern]) => pattern.test(host))?.[0] ?? null
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname
  }
  catch {
    return ""
  }
}

/** The named source of a visit: `utm_source` first (ChatGPT adds `chatgpt.com`), then the referrer's host. */
export function detectVisitSource(referrer: string, utmSource: string | null): VisitSource | null {
  return (utmSource && match(hostOf(`https://${utmSource}`) || utmSource)) || match(hostOf(referrer))
}

const STORAGE_KEY = "eskala-source"

/** The source remembered for this tab; null when unknown or storage is blocked. */
export function currentVisitSource(): VisitSource | null {
  try {
    return (sessionStorage.getItem(STORAGE_KEY) as VisitSource | null) || null
  }
  catch {
    return null
  }
}

/** Remembers where the visit started; a later page in the same tab never overwrites it. */
export function rememberVisitSource(referrer: string, utmSource: string | null): void {
  try {
    if (sessionStorage.getItem(STORAGE_KEY) !== null) return
    sessionStorage.setItem(STORAGE_KEY, detectVisitSource(referrer, utmSource) ?? "")
  }
  catch {
    // Storage blocked: the tag names only the page.
  }
}

/** "(dari ChatGPT, halaman Studi kasus)", or "(halaman Studi kasus)" when the source is unknown. */
export function sourceTag(source: VisitSource | null, pageName: string): string {
  return source ? `(dari ${source}, halaman ${pageName})` : `(halaman ${pageName})`
}

/** A wa.me link with the source tag appended to its pre-filled text, once. */
export function withSourceTag(link: string, source: VisitSource | null, pageName: string): string {
  const url = new URL(link)
  const text = url.searchParams.get("text") ?? ""
  if (/\((dari [^,()]+, )?halaman [^()]+\)$/.test(text)) return link
  const tag = sourceTag(source, pageName)
  url.searchParams.set("text", text ? `${text}\n\n${tag}` : tag)
  return url.toString()
}
