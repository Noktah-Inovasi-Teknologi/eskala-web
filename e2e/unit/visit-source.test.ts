import assert from "node:assert/strict"
import { test } from "node:test"
import { detectVisitSource, withSourceTag } from "../../app/utils/visit-source.ts"

test("referrer hosts map to their source", () => {
  const cases: [string, string][] = [
    ["https://chatgpt.com/", "ChatGPT"],
    ["https://chat.openai.com/c/1", "ChatGPT"],
    ["https://www.perplexity.ai/search?q=x", "Perplexity"],
    ["https://gemini.google.com/app", "Gemini"],
    ["https://copilot.microsoft.com/", "Copilot"],
    ["https://claude.ai/chat/1", "Claude"],
    ["https://www.google.com/", "Google"],
    ["https://www.google.co.id/", "Google"],
    ["https://www.bing.com/search?q=x", "Bing"],
    ["https://l.instagram.com/?u=x", "Instagram"],
    ["https://www.tiktok.com/@eskala.team", "TikTok"],
    ["https://www.threads.net/@eskala.team", "Threads"],
    ["https://lm.facebook.com/l.php", "Facebook"],
    ["https://lnkd.in/abc", "LinkedIn"],
  ]
  for (const [referrer, source] of cases) assert.equal(detectVisitSource(referrer, null), source, referrer)
})

test("utm_source wins over the referrer", () => {
  assert.equal(detectVisitSource("https://www.google.com/", "chatgpt.com"), "ChatGPT")
  assert.equal(detectVisitSource("", "instagram"), "Instagram")
})

test("own site, empty and unknown referrers have no source", () => {
  assert.equal(detectVisitSource("https://eskala.id/digital-marketing", null), null)
  assert.equal(detectVisitSource("", null), null)
  assert.equal(detectVisitSource("https://example.com/", "newsletter"), null)
  assert.equal(detectVisitSource("not a url", null), null)
})

test("the tag follows the message, once", () => {
  const base = "https://wa.me/6282230712718?text=Halo%20Eskala!"
  const tagged = withSourceTag(base, "ChatGPT", "Studi kasus")
  assert.equal(new URL(tagged).searchParams.get("text"), "Halo Eskala!\n\n(dari ChatGPT, halaman Studi kasus)")
  assert.equal(withSourceTag(tagged, "ChatGPT", "Studi kasus"), tagged)
})

test("a link without text gets the tag alone; an unknown source names only the page", () => {
  const tagged = withSourceTag("https://wa.me/6282230712718", null, "Beranda")
  assert.equal(new URL(tagged).searchParams.get("text"), "(halaman Beranda)")
})
