<!-- From lg: logo, the six links, the outline "Konsultasi gratis" button.
     Below lg: the links fold into a 44px burger that opens MobileMenu. Below sm the button hides too. -->
<script setup lang="ts">
import { mainNav } from "~/data/site"

const route = useRoute()
const navCta = computed(() => route.meta.navCta ?? "#kontak")
const isActive = (to: string) => route.path === to || route.path.startsWith(`${to}/`)
</script>

<template>
  <header class="border-b border-obsidian-300 bg-white">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2.5 focus:font-semibold focus:text-cobalt-500"
    >Langsung ke konten</a>
    <UContainer>
      <nav aria-label="Utama" class="flex items-center gap-x-10 py-3 sm:py-4.5">
        <BrandLogo to="/" />
        <ul class="hidden flex-1 flex-wrap gap-x-7.5 gap-y-2 text-[15px] font-medium lg:flex">
          <li v-for="link in mainNav" :key="link.to">
            <NuxtLink
              :to="link.to"
              :aria-current="isActive(link.to) ? 'page' : undefined"
              class="inline-flex min-h-11 items-center transition-colors"
              :class="isActive(link.to)
                ? 'text-cobalt-500 underline decoration-copper-500 decoration-2 underline-offset-6'
                : 'text-obsidian-950 hover:text-cobalt-500'"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="ml-auto flex items-center gap-3 lg:ml-0">
          <PillButton :to="navCta" variant="outline" size="sm" class="hidden sm:inline-flex">Konsultasi gratis</PillButton>
          <MobileMenu class="lg:hidden" />
        </div>
      </nav>
    </UContainer>
  </header>
</template>
