# Baseline and progress (SC-008, FR-025, FR-026)

Fill in the **Before** columns ahead of Release 1 going live, and the **8 weeks** columns 8 weeks after. These are tracked goals, not pass/fail gates (G-21).

- Release 1 live on: ____
- 8-week re-measure due: ____

## 1. Chatbot answers ([test prompts](keywords/test-prompts.md))

For each prompt and chatbot: does the answer name Eskala (✓/✗)? If not, who is named instead? Use a new chat each time.

| # | ChatGPT before | Gemini before | Perplexity before | Named instead (before) | ChatGPT 8 wk | Gemini 8 wk | Perplexity 8 wk | Named instead (8 wk) |
|---|---|---|---|---|---|---|---|---|
| P01 | | | | | | | | |
| P02 | | | | | | | | |
| P03 | | | | | | | | |
| P04 | | | | | | | | |
| P05 | | | | | | | | |
| P06 | | | | | | | | |
| P07 | | | | | | | | |
| P08 | | | | | | | | |
| P09 | | | | | | | | |
| P10 | | | | | | | | |
| P11 | | | | | | | | |
| P12 | | | | | | | | |
| P13 | | | | | | | | |
| P14 | | | | | | | | |
| P15 | | | | | | | | |
| P16 | | | | | | | | |
| P17 | | | | | | | | |
| P18 | | | | | | | | |
| P19 | | | | | | | | |
| P20 | | | | | | | | |
| P21 | | | | | | | | |
| P22 | | | | | | | | |
| E01 | | | | | | | | |
| E02 | | | | | | | | |
| E03 | | | | | | | | |
| E04 | | | | | | | | |
| E05 | | | | | | | | |
| **Named in** | __ / 27 | __ / 27 | __ / 27 | | __ / 27 | __ / 27 | __ / 27 | |

## 2. Visits (last 28 days)

Cloudflare Web Analytics → eskala.id → **Referrers**. After Release 1, GA4 → Reports → Acquisition → Traffic acquisition (session source).

| Source | Before | 8 weeks |
|---|---|---|
| All visits | | |
| ChatGPT (chatgpt.com) | | |
| Perplexity | | |
| Gemini | | |
| Copilot / Bing | | |
| Google search | | |
| Instagram / TikTok / Threads | | |
| WhatsApp taps (`whatsapp_click`, GA4, consenting visitors only) | n/a | |
| Form sends (`form_submit`) | n/a | |

## 3. Search Console (last 28 days)

Search Console → **Performance** → Search results. Before Release 1 there may be no data yet, because the property is new (O-3); write "no data" and start from the first full 28 days.

| Measure | Before | 8 weeks |
|---|---|---|
| Total impressions | | |
| Total clicks | | |
| Average position, all queries | | |
| Pages indexed (Indexing → Pages) | __ / 10 | __ / 10 |

Target keywords come from `keywords/keyword-map.md` (Release 2). Until then, track the healthcare queries Search Console already shows.

| Query | Impressions before | Position before | Impressions 8 wk | Position 8 wk |
|---|---|---|---|---|
| | | | | |

## 4. Monthly check (FR-025, FR-026)

Once a month, from Indonesia:

1. Open a **private window** (no Google sign-in) and go to google.co.id.
2. Search each target keyword (from the keyword map; until then: "digital marketing klinik", "jasa social media klinik", "agensi marketing rumah sakit", "digital marketing dokter", "creative agency kesehatan").
3. For each search, write Eskala's position (or "not in top 20") and every result ranked above it.
4. Ask the 27 test prompts in ChatGPT, Gemini and Perplexity, and fill a copy of table 1.
5. Pick the next two or three improvements and ship each as a small follow-up (G-27).

| Month | Search | Eskala position | Ranked above Eskala |
|---|---|---|---|
| | | | |
