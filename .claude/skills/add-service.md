# Skill: Add New Service

> **Redesign 2026:** the markup examples below predate the redesign. For layout, typography, colours and copy, follow `design/` and `.claude/CLAUDE.md`. Use this skill for workflow steps only.

## When to Use
When adding a new service page to the website.

## Current Services (redesign 2026)

| Service | Proposed URL | Status |
|---------|--------------|--------|
| Digital Marketing (Social Media Management and Ads Management on one page) | `/digital-marketing` | Live |
| Education (Online Class, Webinar, Course Videos, Modules) | `/education` | Segera hadir, waitlist |
| Training (Workshop, Bootcamp, In-house Training) | `/training` | Segera hadir, interest form |

The routes are proposals; see `design/SPEC-BRIEF.md`. Ads Management is a sub-service of Digital Marketing, with its own section `#ads-management` and its own fee. KOL Management, KOC Management, Creative Service and "Eskala VIP" do not exist. Show only starting prices.

## Steps

1. **Create the service page**
   - Create `app/pages/services/[service-name].vue`
   - Use `eskala-vip.vue` or `digital-marketing.vue` as reference (they exist but need redesigning to match the `index.vue` style)
   - The `index.vue` is the gold standard for layout patterns

2. **Update navigation**
   - Add to Services dropdown in `app/components/Navbar.vue` → `items` array → `children` under "Layanan"
   - Add to `footerLinks` in `app/components/WebFooter.vue` under the "Layanan" section

3. **Update home page** (if the service should appear in the services accordion)
   - Add entry to `services` ref in `app/pages/index.vue`

4. **Service page structure**

   Follow the `index.vue` section pattern:

   ```vue
   <script setup lang="ts">
   definePageMeta({ title: 'Service Name - Eskala' })
   </script>

   <template>
     <div>
       <!-- Hero -->
       <UContainer id="section-hero" class="flex flex-col gap-12 py-24">
         <div class="flex flex-col gap-8">
           <p class="font-display text-copper-500 font-medium">──────── Untuk faskes di Indonesia</p>
           <h1 class="font-display text-obsidian-950 font-bold text-7xl">
             Service headline
           </h1>
           <p class="font-body text-xl text-obsidian-950">
             Description
           </p>
         </div>
       </UContainer>

       <!-- What's included -->
       <!-- Pricing tiers -->
       <!-- Process/timeline -->
       <!-- CTA -->
     </div>
   </template>
   ```

5. **Add static assets** (if needed)
   - Place images in `public/images/`
   - Use descriptive names: `service-[name]-hero.webp`

## Pricing Tier Format

All services use **Starter / Standard / Premium** naming (not Basic/Professional/Enterprise):

| Tier | Notes |
|------|-------|
| Starter | Entry-level, essential features |
| Standard | Mid-tier, badge "Paling dipilih" |
| Premium | Full-featured, maximum output |

The Standard tier carries the badge "Paling dipilih" (see `design/reference/digital-marketing.html`).

## Pricing Table Pattern

For SMM-style comparison tables (dark background, `bg-obsidian-950`):
- Section header rows: `bg-obsidian-900`
- Popular column: `bg-cobalt-950/40` with `border-t-2 border-t-cobalt-500`
- Check icon: `i-heroicons-check` in `text-copper-500`
- Minus icon: `i-heroicons-minus` in `text-obsidian-300`

## Navigation Entry Format

```ts
// In Navbar.vue items array, under "Layanan" children:
{
  label: "Service Name",
  icon: "i-heroicons-[icon-name]",
  description: "Short description in Bahasa Indonesia.",
  to: "/services/service-name",
}

// In WebFooter.vue footerLinks, under "Layanan" children:
{ label: "Service Name", to: "/services/service-name" }
```
