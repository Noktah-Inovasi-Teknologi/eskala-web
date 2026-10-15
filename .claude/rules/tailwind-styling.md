# Tailwind CSS Styling Guidelines (redesign 2026)

The visual target is `design/screenshots/` and `design/reference/*.html`. Every value below comes from those files.

## General Principles

- Use Tailwind utility classes and theme tokens. No inline styles and no hardcoded hex values.
- Design mobile-first. Check every page at 390, 640, 768, 1024, 1280, 1536 and 2560 widths.
- Prefer Nuxt UI components (`UButton`, `UAccordion`, `UIcon`, form inputs), styled to match the design.

## Typography

All text is Plus Jakarta Sans (`font-body`; `font-display` now resolves to the same font). The "ESKALA" wordmark uses `font-wordmark` (Livvic 900) and nothing else does.

```
H1        font-extrabold tracking-[-0.035em] leading-none text-obsidian-950
          fluid size: home ≈ text-[clamp(52px,7vw,104px)]; other pages ≈ text-[clamp(44px,5.4vw,80px)]
H2        font-extrabold tracking-[-0.03em] leading-[1.08] text-[clamp(32px,3.6vw,50px)] text-obsidian-950
H3        text-xl/2xl font-bold text-obsidian-950
Eyebrow   text-[13px] font-semibold uppercase tracking-[0.09em] text-obsidian-700   (or text-accent-strong); no copper rule on the website
Lede      text-base sm:text-lg 3xl:text-[19px] leading-[1.65] text-obsidian-700
Body      text-base text-obsidian-700
Accent    one word or phrase in a heading can be text-cobalt-500 (e.g. "Membumikan <kesehatan>")
```

Use eyebrows sparingly. Many sections in the design have none.

## Colors

```
Light section    bg-white or bg-obsidian-100
Dark section     bg-obsidian-950 or bg-cobalt-950; headings text-white, body text-obsidian-300/400, accents text-cobalt-400
Cobalt panel     bg-cobalt-500 with the copper wing (hero panels, featured service card)
Borders          border-obsidian-300 (cards), border-obsidian-400 (inputs, outline buttons)
Copper text      text-accent-strong, never text-copper-500 on a white background
Errors           text-error-700 on white; bg-error-50 + border-error-200 for a message block
Price tag        bg-copper-500 text-obsidian-950 rounded-full, inside a bg-copper-100 pill
```

## Layout & Spacing

- **Container**: `UContainer`. Its width is `max-w-[1280px]`, then `2xl:max-w-[1440px]` and `3xl:max-w-[1600px]`, with `px-5 sm:px-6`. Section backgrounds stay full-bleed outside the container.
- **Section padding**: `py-12 sm:py-16 md:py-20 lg:py-24` (48, 64, 80, 96px; the design system's `section-pad-y` steps). This replaces the old "always `py-24`" rule.
- **Two-column gaps**: `gap-10 lg:gap-16`.
- **Grids**:
  - 3 columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
  - 2 columns: `grid-cols-1 lg:grid-cols-2`.
- **CTA section**: leave clear space above it (`pt-24`) when it follows a coloured band.

## Components

```
Card              rounded-3xl border border-obsidian-300 bg-white p-6 sm:p-8
Highlighted tier  border-2 border-cobalt-500 bg-cobalt-50   ("Paling dipilih")
Inner card, dark  bg-white/10 to bg-white/15, rounded-2xl   (stats and chips on dark bands)
Dark CTA band     rounded-3xl bg-cobalt-950 px-14 py-18 (px-6 py-10 below sm) + copper wing, overflow-hidden
Quote on panel    rounded-[14px] bg-white px-6 py-5 shadow-float, slight rotation (none below sm)
Price badge       bg-copper-500 text-obsidian-950 rounded-3xl shadow-float-accent, slight rotation (none below sm)
                  Define shadow-float / shadow-float-accent as --shadow-* theme tokens (values in design/tokens.css).
                  These are the only shadows: cards stay flat, with borders.
Pill button       inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6.5 text-base font-semibold   (DS type-button-lg)
  WhatsApp        bg-success-700 hover:bg-success-hover active:bg-success-active text-white + i-ph-whatsapp-logo   (full width below sm)
  Primary         bg-cobalt-500 hover:bg-cobalt-600 text-white
  Nav outline     min-h-11 rounded-full border border-obsidian-400 px-5 text-sm font-semibold
Arrow link        inline-flex items-center gap-2 font-semibold text-cobalt-500 + i-ph-arrow-right
Input             min-h-12 rounded-xl border border-obsidian-400 px-3.5 text-base
Segera tag        rounded-full bg-copper-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-accent-strong
"Paling dipilih"  same shape; bg-cobalt-500 text-white on the Digital Marketing tiers, bg-cobalt-100 text-cobalt-500 on the home summary
```

## Navigation

- **At `lg` and above**: the mark and wordmark, then the 6 links, then the outline "Konsultasi gratis" button.
- **Below `lg`**: the links are replaced by a 44px round burger button. It opens the full-screen menu shown in `design/reference/mobile-menu.html`.
- **Below `sm`**: the outline CTA is hidden as well, so only the logo and burger show.

## Tables

The SMM comparison table sits in an `overflow-x-auto` wrapper with the table at `min-w-[760px]`. Below `md`, show the hint line "Geser tabel ke samping untuk melihat semua paket." The page itself must never scroll sideways.

## Breakpoints

```
base  < 640    phones
sm    640
md    768
lg    1024     nav expands
xl    1280     main design width
2xl   1536     container 1440
3xl   1920     container 1600 (custom: --breakpoint-3xl: 120rem)
```

## Avoid

- Inline styles and hardcoded hex values.
- Poppins and `font-[...]` arbitrary font classes.
- The old `──────── Label` decorative section labels.
- Copper (`copper-500`) as text on white.
- Decorative rotations below `sm`. The design removes them on phones.
