// The service token and the base URL are server-only runtime config: they never reach the browser or wrangler.toml.
import type { H3Event } from "h3"

const FRESH_MS = 10 * 60_000
const KEEP_S = 30 * 24 * 3600

// Cloudflare Cache API: fresh for 10 minutes; when the source fails, the last copy (kept 30 days)
// is served. shortcut: the cache is per data centre and may be evicted; the page then falls back to app/data/smm.ts.
export async function cachedHubGet(event: H3Event, path: string) {
  const cache = (globalThis as { caches?: { default?: Cache } }).caches?.default
  const key = new Request(`https://eskala.id/__hub-cache${path}`)
  const hit = await cache?.match(key).catch(() => undefined)
  const age = hit ? Date.now() - Number(hit.headers.get("x-cached-at")) : Infinity
  if (hit && age < FRESH_MS) return await hit.json()

  const config = useRuntimeConfig(event)
  const base = String(config.hubApiBase).replace(/\/+$/, "")
  let res: Response | undefined
  if (base) {
    try {
      res = await fetch(base + path, {
        headers: {
          "Accept": "application/json",
          "CF-Access-Client-Id": config.accessClientId,
          "CF-Access-Client-Secret": config.accessClientSecret,
        },
      })
    }
    catch { /* falls through to the last copy */ }
  }

  if (res?.ok) {
    const body = await res.text()
    await cache?.put(key, new Response(body, {
      headers: { "content-type": "application/json", "cache-control": `max-age=${KEEP_S}`, "x-cached-at": String(Date.now()) },
    })).catch(() => {})
    return JSON.parse(body)
  }
  if (hit) return await hit.json()
  throw createError({ statusCode: 503, statusMessage: "unavailable" })
}
