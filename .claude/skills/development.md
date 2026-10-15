# Skill: Development Workflow

## Starting Development

```bash
pnpm dev
```
Starts the development server at `http://localhost:3000`

## Building for Production

```bash
pnpm build      # Build for Cloudflare Workers (server-side)
pnpm generate   # Static site generation
pnpm preview    # Preview production build locally
```

## Common Tasks

### Install Dependencies
```bash
pnpm install
```

### Add New Package
```bash
pnpm add [package-name]
pnpm add -D [dev-package-name]
```

### Type Checking
```bash
pnpm nuxi typecheck
```

### Prepare Nuxt (regenerate types)
```bash
pnpm nuxi prepare
```

## Project Modules

Active Nuxt modules (from `nuxt.config.ts`):
- `@nuxt/fonts` — loads Plus Jakarta Sans and Livvic. The redesign retires Poppins; update `nuxt.config.ts` `fonts.families` accordingly.
- `@nuxt/ui` — UI component library (Heroicons, Simple Icons included)

Note: `@nuxt/content` is **NOT** in use. Don't install it unless the Artikel decision in `design/SPEC-BRIEF.md` (open question 4) says to.

## File Watching

Nuxt automatically watches for changes in:
- `app/pages/` — New routes (file-based routing)
- `app/components/` — New components (auto-imported)
- `app/composables/` — New composables (auto-imported)
- `nuxt.config.ts` — Requires dev server restart
- `app/assets/css/main.css` — Theme/color changes (hot reload)

## Troubleshooting

If changes don't appear:
1. Clear Nuxt cache: `rm -rf .nuxt`
2. Restart dev server: `pnpm dev`

If types are wrong or missing:
1. Run `pnpm nuxi prepare` to regenerate `.nuxt/types`
2. Restart the TypeScript server in your IDE (VS Code: Ctrl+Shift+P → "TypeScript: Restart TS Server")

If fonts don't load:
- Check `nuxt.config.ts` `fonts.families` array
- Ensure `@import "@nuxt/ui"` is in `app/assets/css/main.css`

## Deployment

Deployed to Cloudflare Workers via Wrangler. The build target is configured for Cloudflare compatibility. Run `pnpm build` and then deploy with Wrangler CLI.
