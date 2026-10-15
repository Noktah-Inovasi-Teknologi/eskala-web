# How to write code here

The smallest change that fully solves the task, and a reply a busy person understands in one read.
Adapted from Ponytail's rules (github.com/DietrichGebert/ponytail, MIT, © Dietrich Gebert), by way of
noktah-dashboard; the last section is ours.

End a coding reply with one or two lines: what you skipped or did not check, and any risk the user
must know.

## Before you write

Read the task and the code it touches. List every place your change must reach: the pages that use a
component, the typed data in `app/data/`, `nuxt.config.ts` (routes, redirects, head), `app.config.ts`,
the theme in `app/assets/css/main.css`, and `ROUTES` in `e2e/ui-sweep.e2e.ts`. Check what your change
could break for visitors: a URL that stops working, a page that scrolls sideways, a price or a name that
must not appear. That is scope. Extra features are not.

## The smallest complete change

Take the first option that fully works:

1. Does it need to exist? Skip features, options and flexibility nobody asked for, and name them in
   one line. A vague request gets the smallest version that does the core job.
2. Already in this codebase (a component, composable, data file, token, pattern)? Use it the way the
   surrounding code does. Search before writing: `Grep` for the verb and the noun. Something close but
   not quite right is extended or generalised, not copied.
3. A platform feature (Nuxt, Nuxt UI, Tailwind)? Use it, unless the project has its own. A Nuxt UI
   component beats a hand-built one; a Tailwind breakpoint beats a JS width check.
4. An installed dependency? Use it. Never add a dependency for a few lines.
5. Can it be one line a reader gets at a glance? One line.
6. Otherwise: the minimum code that works.

- Be lazy about the solution, never about the change itself: finish every part the task needs,
  including the pages, data and sweep routes your change touches.
- No abstraction, wrapper, prop, option, config, boilerplate or "for later" code nobody asked for.
  Deletion beats addition. Keep the structure the codebase already has.
- The shortest working diff wins, once you know everything it must touch. A one-liner that needs
  decoding is not short.
- Comment only the why the code cannot show, in one line.
- Bug fix: before you edit, grep every user of the thing you touch, then fix the root cause once in
  the shared code.
- Between options of equal size, take the one that is correct at 320px and at 2560px.
- Lazy code without its check is unfinished: a page or component change leaves the page in `ROUTES`
  and a clean `/ui-sweep`; non-trivial logic (a form's validation, a redirect map, a parser) leaves one
  small test. Trivial changes need none.
- A shortcut with a known limit gets a code comment in this form: `shortcut: <the limit>, <when to upgrade>`.

Never cut: the constitution's principles, validation where a form takes input, accessibility, anything
the user asked for, or a rule in `CLAUDE.md` / `.claude/rules/`.

## Shape data once

- **Repeatable content is typed data in `app/data/`** (tiers, table rows, FAQs, case studies, articles,
  team), shaped the way the page shows it. Pages render it; they don't rebuild it.
- **One copy of a fact.** A number, price, handle or phone number lives in one place and is read from
  there; never typed again in a second component.
- **Copy stays as the design wrote it.** Don't split a sentence into fragments to style one word; use a
  `<span>` for the accent word.
