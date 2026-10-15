---
name: "speckit-grill"
description: "Interview the user about a change until the words and the hard decisions are settled — writing CONTEXT.md terms and ADRs the moment they resolve, and a decision ledger (grill.md) the spec must then trace row by row. Run before /speckit-specify when the plan is still fuzzy."
argument-hint: "The change to grill — or 'the repo' to settle vocabulary with no feature in mind"
compatibility: "Requires spec-kit project structure with .specify/ directory"
metadata:
  author: "eskala-web (adapted from noktah-dashboard and venyu, 2026-10-15)"
  source: "mattpocock/skills — grill-with-docs, grilling, domain-modeling (inlined and adapted)"
user-invocable: true
disable-model-invocation: true
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding. The text after `/speckit-grill` is the change to grill. If it is empty, ask for it in one line and stop.

## What this is

`/speckit-grill` is the head of the spec chain:

```text
/speckit-grill → /speckit-specify → /speckit-clarify → /speckit-plan → /speckit-tasks → /speckit-implement
```

It is an interview, run in **rounds**, that ends when you and the user share one understanding of the change. It is **stateful**: while it runs, it writes three kinds of file, each the moment something resolves — never batched at the end.

| What resolved | Where it lands | When |
|---|---|---|
| A **term**: Eskala's own word for a thing | `CONTEXT.md` (the glossary), inline | the moment the term resolves |
| A **decision** that is hard to reverse, surprising without context, AND a real trade-off | an ADR in `docs/adr/`, plus its index line | when the user says yes to "record this as an ADR?" |
| **Every other decision** | `grill.md`, the ledger in the feature directory, one numbered row `G-n` each | the moment the user answers |

The third row is the one the original skill leaves in the conversation and loses. Here it is a file, and `/speckit-specify` must trace every `G-n` into the spec. Nothing settled in the interview exists only in the context window.

This file is deliberately **self-contained**. The upstream skill is a one-line delegation to two other skills (`grilling`, `domain-modeling`) and its most-reported failure is loading one without the other — an undifferentiated question dump with no paper trail. Both disciplines are inlined below. Do not delegate to any other skill to run the interview.

## Step 1 — Setup (silent; do this before the first question)

1. Read `.specify/memory/constitution.md`, `.claude/CLAUDE.md` and `.claude/rules/*.md`. A question whose answer those already fix is **not a question** (only the two starting prices are shown; tokens come from the Eskala Design System; no horizontal scroll from 320 to 2560px; WCAG 2.2 AA; text is copied from `design/reference/*.html`; the WhatsApp CTA is the primary action; the site is in Bahasa Indonesia and addresses the reader as "Anda"). State the rule as settled and move on. A change that needs a principle changed is a constitution amendment first; say so.
2. Read `CONTEXT.md` if it exists. This is the vocabulary you challenge the user against. If it does not exist, the de-facto vocabulary is the *Business Context* section of `.claude/CLAUDE.md`, `.claude/rules/brand.md`, and the **Key Entities** sections of the specs in `specs/`; treat those as the glossary until `CONTEXT.md` is created (Step 3).
3. Read `design/README.md` and `design/SPEC-BRIEF.md`. Every **Open question** in the brief that touches this change's scope is a frontier question of the first round: *settle it now, or leave it open for a later feature?* The user decides; the answer is a ledger row. Then look at the `design/reference/*.html` pages and `design/screenshots/` the change touches: what the design already shows is a fact, not a question — unless the user wants to depart from it (Principle I), which is a decision and a ledger row.
4. Read the parts of the ADRs in `docs/adr/` (if any), the existing specs in `specs/`, and the code in `app/` that the change touches. Note which spec **owns** each behaviour the change would alter. A shipped spec is extended by a new spec (or a v(N+1)), not rewritten, so the history of why things were built stays readable. A spec still in draft (no plan yet) may be revised in place; see *Grilling a drafted spec* below.
5. Decide the **mode**:
   - **Feature mode** (default): the input describes a change. The ledger goes in a feature directory (Step 3).
   - **Repo mode**: the input is about the repo's vocabulary as a whole ("the repo", "help me document the vocabulary", no feature named). No feature directory, no ledger — only `CONTEXT.md` and, rarely, ADRs. Read the code, the design and the brand rules, and ask the user which of the words already in use are the right ones.
6. Check the working directory is writable and note `git status --porcelain` — you will diff against it at the end to prove the files moved.

Do not narrate this step. The user's first message from you is the first round.

## Step 2 — The interview

Map the change as a **design tree**: every decision branches into the decisions that hang off it. The **frontier** is every decision whose prerequisites are already settled — the questions you can ask *now* without guessing at answers you have not heard. Ask the **whole frontier in one round**, number each question, and give your recommended answer. Then **wait** for the user's answers before the next round.

Format a round exactly like this:

```text
❓ **Q1** - **<question title>**: <question body — may be several paragraphs, may offer choices>

➡️ <your recommended answer, one or two sentences, with the reason>

---

❓ **Q2** - **<question title>**: <question body>

➡️ <your recommended answer>
```

Rules of the interview:

- **Plain language.** The user decides for the business, not for the code. Ask about outcomes and choices in plain words — what a clinic owner sees, what happens when they tap, what the page must never say. Keep component names, routes and code mechanics in the ledger's *Facts looked up* section, not in the questions.
- **The boundary is always in the first round.** In feature mode, Q1 of round 1 is: *which spec owns this — a new spec, or v(N+1) of spec NNN — and what does it deliberately not include?* Recommend an answer from Step 1.4. Its answer is ledger row `G-1`.
- **Each round reshapes the tree.** Settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier after every round. A question whose answer depends on another question still open in *this* round belongs to a *later* round.
- **Facts are your job; decisions are the user's.** Never ask the user for anything the repo or the design can answer. When a frontier question needs a fact (what the reference page shows at 390px, which component renders the nav, what a route returns), look it up — with Grep/Read directly or an `Explore` agent for a broad sweep — and do not block on it: ask the rest of the frontier now, and ask the questions downstream of the lookup next round.
- **Challenge against the glossary.** When the user uses a word that conflicts with `CONTEXT.md` (or the de-facto vocabulary), call it out immediately: *"The glossary says **Digital Marketing** is SMM plus Ads Management; you seem to mean SMM alone. Which is it?"*
- **Sharpen fuzzy language.** When a word is vague or overloaded, propose the precise canonical term: *"You said 'paket': do you mean an SMM tier (Starter, Standard, Premium) or an Ads Management fee package? Those are priced differently and one of them is never published."*
- **Stress-test with concrete scenarios.** When relationships between concepts are being discussed, invent specific edge cases that force the boundary: a dokter spesialis with no clinic, a hospital that wants only Ads Management, someone who joins the Education waitlist twice, a visitor on a 320px phone with the comparison table.
- **Cross-reference with the design and the code.** When the user states how something works, check whether `design/` and `app/` agree. Surface every contradiction: *"The reference footer has no Privacy link, but you just said it must be one tap away. Which is right?"*
- **Precision is kept.** Numbers, ordering guarantees, exact copy, and negative requirements ("never", "must not", "exactly one") are recorded **verbatim** in the ledger. Do not soften an answer when you write it down.
- **No question cap.** `/speckit-clarify` has one (five); this skill does not. The session ends when the frontier is empty, not when a quota is hit. Keep rounds tight — four to seven questions is typical; a fifteen-question round means the tree was not pruned.
- **Never act on the design.** This skill writes glossary terms, ADRs and the ledger. It writes no code, no spec, no plan.

## Step 3 — Writing as you go

### 3a. Terms → `CONTEXT.md`

When a term resolves, write it to `CONTEXT.md` **right then**, in this format:

```md
**Term**:
One or two sentences: what it IS, not what it does.
_Avoid_: the other words people reach for
```

- One `CONTEXT.md` at the repo root (this repo is one bounded context: Eskala's public website and the services it sells). If a `CONTEXT-MAP.md` ever exists at the root, it names the contexts and where each `CONTEXT.md` lives; infer which one the term belongs to, and ask if unclear.
- Create the file lazily — on the first resolved term — with a title, a one-or-two-sentence description of the context, and a `## Language` section. Group terms under subheadings when natural clusters exist (Services, Audience, Pricing, Site).
- **Be opinionated.** When several words exist for one concept, pick the best and list the rest under `_Avoid_`.
- **Only project-specific terms.** General web concepts (route, component, breakpoint) do not belong, however often the code uses them. A term may be in Bahasa when that is the word on the site (e.g. **Konsultasi gratis**, **Segera hadir**); product names stay in English (**Social Media Management**, **Ads Management**).
- **No implementation detail, ever.** `CONTEXT.md` is a glossary and nothing else: not a spec, not a scratch pad, not a list of decisions. Component names, routes and file paths do not appear in it.
- A term already in the glossary that the session **sharpens** is edited in place — the glossary is the one document here that is not append-only.

### 3b. Decisions that pass the three gates → an ADR

Offer an ADR only when **all three** hold:

1. **Hard to reverse** — changing your mind later costs something real (published URLs, a form provider holding sign-ups, a content format every article is written in).
2. **Surprising without context** — a future reader will look at the code and wonder "why on earth did they do it this way?"
3. **A real trade-off** — there were genuine alternatives and one was picked for specific reasons.

If any is missing, skip it: an easy-to-reverse decision will just be reversed; an unsurprising one needs no explanation; a decision with no alternative is "we did the obvious thing". Most sessions produce **zero** ADRs. That is working as designed.

When all three hold, ask: *"This passes the three gates. Record it as ADR-00NN, «title»?"* On yes, write it **now**:

- File: `docs/adr/NNNN-slug.md`, where `NNNN` is the highest existing number plus one (scan `docs/adr/`; the first ADR is `0001`). Create `docs/adr/` lazily with the first one.
- Shape (MADR-lite): `# NNNN. Title`, then `- Status: Accepted`, `- Date: YYYY-MM-DD`, `- Deciders: Eskala team`, `- See also:` links to the ADRs, specs or rules files it touches; then `## Context`, `## Decision`, `## Consequences` (Positive / Negative or Costs / Neutral), `## Alternatives considered`.
- Add its line to the index in `docs/adr/README.md` (create it with the first ADR) under the right heading (Site structure · Content & copy · Delivery & integrations · Cross-cutting), with a one-line italic gloss.
- If it reverses or redefines an accepted ADR, it **supersedes** it: say so in the new ADR and change only the old ADR's status line. If it extends one without contradiction, append a dated **Amendment** section to the old ADR instead of writing a new one. Never edit what an accepted ADR decided or why.
- When it changes how the site is put together, add a one-line pointer to it from `.claude/CLAUDE.md` in the relevant section.

A structural decision the user makes in the interview and declines to record is still written to the ledger, with "ADR declined" and the reason, so the next reader knows it was offered.

### 3c. Everything else → `grill.md`, the ledger

Every answered question that is not a term and not an ADR is a **ledger row**. Write it the moment the user answers.

**Location.** Feature mode only. On the first row:

- Allocate the feature directory the way `/speckit-specify` does: a 2–4 word short name from the input (action-noun, e.g. `redesign-home`, `education-waitlist`), the next 3-digit number after scanning `specs/`, `specs/NNN-short-name/`. If the boundary answer (`G-1`) says this is v(N+1) of an existing spec, the short name carries the suffix (`home-v2`).
- Create `specs/NNN-short-name/grill.md` and persist `{"feature_directory": "specs/NNN-short-name"}` to `.specify/feature.json` — exactly what `/speckit-specify` will read to find the directory instead of allocating a new one.
- Do **not** create `spec.md`, and do not create a git branch (branches are the user's to make; changes reach `main` through pull requests).

**Grilling a drafted spec.** When `.specify/feature.json` names a directory that already has a `spec.md` but no `plan.md` and no `grill.md`, and the input is about that feature, grill *that* feature: write `grill.md` in the same directory, set **Owning spec** to it, and treat the draft spec as one more input to challenge (its decisions are frontier questions, not settled facts, unless the user confirms them). `/speckit-specify` then revises the draft in place to trace every `G-n`. A spec that already has a `plan.md` is not re-grilled; propose a v(N+1) instead.

**Format:**

```md
# Grill ledger: <Feature name>

**Session**: YYYY-MM-DD · **Status**: open
**Input**: "<the user's argument, verbatim>"
**Owning spec**: <new spec NNN | vN+1 of spec NNN> — see G-1

Every row below is traced into spec.md by /speckit-specify, once, as a
requirement, scenario, edge case or assumption — or dropped there with a
reason. Numbers, ordering, exact copy and negatives are copied verbatim.

## Decisions

### G-1 — <question title>
- **Decision**: <the user's answer, precise; numbers, ordering, copy, negatives verbatim>
- **Why**: <one line — the reason the user gave, or the recommendation they accepted>
- **Lands in**: <requirement | scenario | edge case | assumption | design deviation | CONTEXT.md «Term» | ADR-00NN | ADR declined: reason>

### G-2 — …

## Brief open questions in scope
- <SPEC-BRIEF question n> — settled (see G-n) | left open: <why, and which feature should settle it>

## Facts looked up (not decisions)
- <the design and codebase facts the session relied on, one line each, with the file>
```

- A row is appended, never rewritten. If the user changes their mind later in the session, add a new row that says "supersedes G-n" — the ledger keeps its history.
- A decision that departs from `design/` lands as **design deviation**; `/speckit-specify` carries it into the spec and `/speckit-plan` records it, as Principle I requires.
- A term that resolves *and* is a decision gets both: the glossary entry and a ledger row whose "Lands in" says `CONTEXT.md «Term»`.

## Step 4 — Closing

The session is done when the **frontier is empty**: every branch of the design tree visited, nothing left silently assumed. Then:

1. Say, in a few lines, what you now believe the change is, and ask the user to confirm you have reached a shared understanding. Do not close until they do.
2. Mark the ledger `**Status**: closed` with the date.
3. **Prove the files moved.** Run `git status --porcelain` and compare with Step 1.6. List every file this session created or changed: `CONTEXT.md`, each ADR and the index, `grill.md`, `.specify/feature.json`. If the interview happened but no file changed, that is the known failure of this skill running inside an orchestration layer — say so plainly, and write the ledger from the conversation before reporting.
4. Report and stop. Do not run `/speckit-specify` yourself.

## Completion Report

Report to the user:

- **Mode** — feature (`specs/NNN-short-name/`) or repo
- **Ledger** — path, number of rows, how many are "Lands in: ADR" / "CONTEXT.md" / "design deviation" / requirement-shaped
- **Glossary** — terms added, terms sharpened (name each)
- **ADRs** — written (number, title) or "none qualified" (the normal outcome)
- **Brief open questions** — settled / left open
- **Files changed** — the list from Step 4.3
- **Next** — exactly one line: `/speckit-specify <the same input>` in **this same conversation**, so the spec is synthesised from a session that is still in context.

## It's working if

- `CONTEXT.md` changes *during* the session, term by term, not in one lump at the end.
- The glossary reads as pure vocabulary — Eskala's words with tight definitions — and contains no implementation detail or spec-like prose.
- Questions the design or the codebase can answer got answered by reading them, not asked of the user.
- Few or no ADRs came out, and the ones that did are decisions someone would be annoyed to re-litigate.
- A word the user used was challenged because the glossary defines it differently.
- Every answer is a numbered row in `grill.md`, and `/speckit-specify` can cite each one.

## Done When

- [ ] Frontier empty and the user has confirmed a shared understanding
- [ ] Every resolved term is in `CONTEXT.md`; every qualifying decision is an ADR with an index line; every other decision is a `G-n` row in `grill.md`
- [ ] Every in-scope open question from `design/SPEC-BRIEF.md` is settled or left open with a reason
- [ ] `.specify/feature.json` points at the feature directory (feature mode)
- [ ] `git status` shows the files this report claims were written
- [ ] Completion reported with the exact next command
