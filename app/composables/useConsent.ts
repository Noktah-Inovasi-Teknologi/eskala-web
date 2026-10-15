// The visitor's consent choice for Google Analytics, and GA4 itself (spec 001, FR-019–FR-021,
// research R7/R8). GA4 loads only after "Terima"; with no `gaId` configured, all of this is inert.

type Choice = "granted" | "denied"

const STORAGE_KEY = "eskala-consent"
const MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000 // 6 months, then ask again

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    [disable: `ga-disable-${string}`]: boolean | undefined
  }
}

function readChoice(): Choice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null") as { value?: Choice, at?: string } | null
    if (!saved?.value || !saved.at || Date.now() - Date.parse(saved.at) > MAX_AGE_MS) return null
    return saved.value
  }
  catch {
    return null
  }
}

function saveChoice(value: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: new Date().toISOString() }))
  }
  catch {
    // Storage blocked: the choice holds for this page view only.
  }
}

function loadGa(id: string) {
  window[`ga-disable-${id}`] = false
  if (window.gtag) return
  window.dataLayer = window.dataLayer ?? []
  // gtag.js reads the `arguments` object itself, so this must not be an arrow function.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag("js", new Date())
  window.gtag("config", id)
  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

function stopGa(id: string) {
  window[`ga-disable-${id}`] = true
  const domains = ["", `; domain=${location.hostname}`, `; domain=.${location.hostname.replace(/^www\./, "")}`]
  for (const name of document.cookie.split(";").map(part => part.split("=")[0]!.trim()).filter(name => name.startsWith("_ga"))) {
    for (const domain of domains) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
  }
}

export function useConsent() {
  const gaId = useRuntimeConfig().public.gaId as string
  const enabled = !!gaId
  const choice = useState<Choice | null>("consent-choice", () => null)
  const open = useState("consent-open", () => false)

  /** Client start-up: restore the saved choice, start GA4 if granted, show the bar if unset. */
  function init() {
    if (!enabled) return
    choice.value = readChoice()
    open.value = choice.value === null
    if (choice.value === "granted") loadGa(gaId)
  }

  function decide(value: Choice) {
    choice.value = value
    open.value = false
    saveChoice(value)
    if (value === "granted") loadGa(gaId)
    else stopGa(gaId)
  }

  /** Reports a tracked action (contract C-1); does nothing without consent. */
  function track(name: string, params: Record<string, string | undefined>) {
    if (choice.value !== "granted" || !window.gtag) return
    window.gtag("event", name, params)
  }

  return {
    enabled,
    open: readonly(open),
    init,
    accept: () => decide("granted"),
    decline: () => decide("denied"),
    reopen: () => { open.value = true },
    track,
  }
}
