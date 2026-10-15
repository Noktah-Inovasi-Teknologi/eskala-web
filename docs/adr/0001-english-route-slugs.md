# 0001. English route slugs, services at the root

- Status: Accepted
- Date: 2026-10-15
- Deciders: Eskala team
- See also: `design/README.md` (*Pages and routes*), `design/SPEC-BRIEF.md` (open question 1, *Old → new URLs*)

## Context

The 2026 redesign renames and regroups the site's pages. The site is in Bahasa Indonesia and its nav
labels are Indonesian ("Studi kasus", "Tentang kami", "Artikel"), but its product names are English
("Digital Marketing", "Education", "Training"). The design handoff proposed Indonesian slugs that match
the nav labels (`/studi-kasus`, `/tentang-kami`, `/artikel`). The live site already uses English slugs
(`/case-study`, `/about-us`), with the services under `/services/`.

URLs are hard to take back once published: they end up in search indexes, social posts, WhatsApp
messages and other sites' links, and each rename leaves a redirect to keep forever.

## Decision

Route slugs are English. Services sit at the root, not under `/services/`.

| Page | Route |
|---|---|
| Beranda | `/` |
| Digital Marketing | `/digital-marketing` (anchors `#smm`, `#paket`, `#ads-management`) |
| Education | `/education` |
| Training | `/training` |
| Studi kasus | `/case-study` |
| Artikel | `/articles`, detail `/articles/[slug]` |
| Tentang kami | `/about-us` |

`/services/social-media-management` and `/services/digital-marketing` redirect (301) into
`/digital-marketing`. Nav labels and page copy stay Indonesian, as the design has them.

## Consequences

**Positive**
- `/case-study` and `/about-us` keep their URLs, so their search ranking and existing links carry over
  with no redirect.
- One language for every slug, matching the English product names.

**Negative / Costs**
- A slug doesn't always match the label a visitor tapped ("Studi kasus" → `/case-study`).
- Slightly weaker keyword match in the URL for Indonesian searches such as "studi kasus digital
  marketing klinik". Titles, headings and copy carry those words instead.

**Neutral**
- The two `/services/*` redirects are needed either way, because those pages merge into one.

## Alternatives considered

- **Indonesian slugs matching the nav labels** (`/studi-kasus`, `/tentang-kami`, `/artikel`), as the
  design proposed. Rejected: it renames two live URLs and adds two permanent redirects in exchange for
  a small search benefit.
- **Keep `/services/` as a prefix** (`/services/digital-marketing`). Rejected: with three services and a
  flat nav, the prefix adds length and no grouping a visitor sees.
