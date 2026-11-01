// Size limit for the production build: the entry JS and CSS every page loads, gzipped.
// Run after `pnpm build`. A regression fails here instead of showing up later in Lighthouse.
import { readFileSync } from "node:fs"
import { gzipSync } from "node:zlib"

const PUBLIC = ".output/public"
const BUDGET = { js: 145_000, css: 32_000 }

const html = readFileSync(`${PUBLIC}/index.html`, "utf8")
const js = html.match(/<script type="module" src="(\/_nuxt\/[^"]+\.js)"/)?.[1]
const css = html.match(/<link rel="stylesheet" href="(\/_nuxt\/[^"]+\.css)"/)?.[1]
if (!js || !css) throw new Error(`No entry script or stylesheet in ${PUBLIC}/index.html: run \`pnpm build\` first`)

const gzip = (path: string) => gzipSync(readFileSync(`${PUBLIC}${path}`)).length
const rows = [
  { name: "entry JS (gzip)", size: gzip(js), limit: BUDGET.js },
  { name: "entry CSS (gzip)", size: gzip(css), limit: BUDGET.css },
]

let failed = false
for (const row of rows) {
  const ok = row.size <= row.limit
  failed ||= !ok
  console.log(`${ok ? "ok  " : "OVER"} ${row.name}: ${row.size.toLocaleString("en")} B (limit ${row.limit.toLocaleString("en")})`)
}
if (failed) process.exit(1)
