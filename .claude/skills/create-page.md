# Skill: Create New Page

## When to Use
When the user asks to create a new page or route in the application.

## Steps

1. **Determine the route path**
   - Pages go in `app/pages/`
   - Nested routes use folder structure (e.g., `services/new-service.vue`)
   - Use kebab-case for file names

2. **Create the page file**

   Follow the established section pattern from `app/pages/index.vue`:

   ```vue
   <script setup lang="ts">
   definePageMeta({
     title: 'Page Title',
   })
   </script>

   <template>
     <div>
       <!-- Hero Section -->
       <UContainer id="section-hero" class="flex flex-col gap-12 py-24">
         <div class="flex flex-col gap-8">
           <p class="font-display text-copper-500 font-medium">──────── Section label</p>
           <h1 class="font-display text-obsidian-950 font-bold text-7xl">
             Page heading
           </h1>
           <p class="font-body text-xl text-obsidian-950">
             Supporting description.
           </p>
         </div>
       </UContainer>

       <!-- Content Section (light background) -->
       <UContainer id="section-content" class="flex flex-col gap-12 py-24 bg-obsidian-100">
         <div class="flex flex-col gap-8">
           <p class="font-display text-copper-500 font-medium">──────── Label</p>
           <h2 class="font-display text-obsidian-950 font-bold text-5xl">
             Section heading
           </h2>
           <p class="font-body text-lg text-obsidian-700 font-light">
             Description text.
           </p>
         </div>
         <!-- Content here -->
       </UContainer>

       <!-- Dark Section -->
       <UContainer id="section-dark" class="flex flex-col gap-12 py-24 bg-obsidian-950">
         <div class="flex flex-col gap-8">
           <p class="font-display text-copper-500 font-medium">──────── Label</p>
           <h2 class="font-display text-obsidian-50 font-bold text-5xl">
             Dark section heading
           </h2>
           <p class="font-body text-lg text-obsidian-300 font-light">
             Description.
           </p>
         </div>
       </UContainer>

       <!-- CTA Section -->
       <UContainer id="section-cta" class="flex flex-col gap-12 py-24">
         <div class="border border-cobalt-200 bg-cobalt-50 rounded-2xl p-10 lg:p-14 flex flex-col gap-12">
           <div class="flex gap-12 items-center">
             <div class="flex flex-col gap-4 flex-1">
               <p class="font-display font-semibold text-xs tracking-widest text-cobalt-500 uppercase">
                 SIAP UNTUK BERDISKUSI?
               </p>
               <h2 class="font-display font-bold text-5xl text-obsidian-950 leading-tight">
                 Konsultasi <span class="text-cobalt-500">30 menit</span>, tanpa biaya
               </h2>
             </div>
             <div class="basis-2/5">
               <p class="font-body text-lg text-obsidian-600 font-light leading-relaxed">
                 Kami akan mendengarkan masalah Anda dan merekomendasikan solusi terbaik.
               </p>
             </div>
           </div>
           <div class="flex flex-row justify-center gap-8">
             <UButton
               href="https://wa.me/6285706034321"
               target="_blank"
               rel="noopener noreferrer"
               size="xl"
               class="px-4 rounded-full"
               color="success"
             >
               <Icon name="i-mdi-whatsapp" />
               Hubungi via WhatsApp
               <Icon name="i-heroicons-arrow-top-right-on-square" />
             </UButton>
             <UButton
               href="mailto:core@eskala.id"
               size="xl"
               class="px-4 rounded-full"
               color="neutral"
               variant="outline"
             >
               <Icon name="i-heroicons-envelope" />
               Kirim brief melalui email
               <Icon name="i-heroicons-arrow-top-right-on-square" />
             </UButton>
           </div>
         </div>
       </UContainer>
     </div>
   </template>
   ```

3. **Add navigation link** (if needed)
   - Update `app/components/Navbar.vue` — add to the `children` array under "Layanan"
   - Update `app/components/WebFooter.vue` — add to `footerLinks` under "Layanan"

4. **Test the route**
   - Run `pnpm dev` and navigate to the new route
   - Verify layout and colors match other pages

## Key Rules

- Use `UContainer` with `id` attribute for each section (enables anchor links)
- Use `py-24` for all sections (no `py-16 md:py-24`)
- Use `font-display` for headings (Poppins), `font-body` for paragraphs (Plus Jakarta Sans)
- Use copper decorative labels (`──────── Label`) before every section heading
- Dark sections: `bg-obsidian-950` with `text-obsidian-50` headings and `text-obsidian-300` body
- Light sections: `bg-obsidian-100` or `bg-obsidian-200`
- Neutral sections: no background class (white/default)
