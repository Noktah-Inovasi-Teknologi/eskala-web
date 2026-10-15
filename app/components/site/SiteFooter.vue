<script setup lang="ts">
import { contact, footerNav, legalNav, tagline } from "~/data/site"

const year = new Date().getFullYear()
const consent = useConsent()
</script>

<template>
  <footer class="border-t border-obsidian-300">
    <UContainer class="flex flex-wrap items-start gap-x-16 gap-y-8 py-12 text-[15px]">
      <div class="flex max-w-90 flex-[1_1_300px] flex-col gap-3">
        <BrandLogo size="sm" />
        <span class="text-sm text-obsidian-600 italic">{{ tagline }}</span>
        <span class="leading-[1.6]">Partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter di seluruh Indonesia.</span>
      </div>

      <nav v-for="group in footerNav" :key="group.title" :aria-label="group.title" class="flex shrink-0 flex-col">
        <b class="mb-1 text-obsidian-950">{{ group.title }}</b>
        <NuxtLink
          v-for="link in group.links"
          :key="link.to"
          :to="link.to"
          class="inline-flex min-h-11 items-center whitespace-nowrap text-obsidian-700 transition-colors hover:text-cobalt-500"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex shrink-0 flex-col">
        <b class="mb-1 text-obsidian-950">Kontak</b>
        <span class="inline-flex min-h-11 items-center">{{ contact.phone }}</span>
        <a :href="`mailto:${contact.email}`" class="inline-flex min-h-11 items-center text-obsidian-700 underline transition-colors hover:text-cobalt-500">{{ contact.email }}</a>
        <span class="inline-flex min-h-11 items-center">{{ contact.area }}</span>
      </div>

      <div class="flex shrink-0 flex-col">
        <b class="mb-1 text-obsidian-950">Media sosial</b>
        <SocialLinks />
      </div>

      <div class="flex basis-full flex-wrap items-center gap-x-6 gap-y-2 border-t border-obsidian-300 pt-6 text-[13px] text-obsidian-600">
        <span>© {{ year }} Eskala</span>
        <span class="grow" />
        <NuxtLink
          v-for="link in legalNav"
          :key="link.to"
          :to="link.to"
          class="inline-flex min-h-11 items-center whitespace-nowrap underline transition-colors hover:text-cobalt-500"
        >
          {{ link.label }}
        </NuxtLink>
        <button
          v-if="consent.enabled"
          type="button"
          class="inline-flex min-h-11 cursor-pointer items-center whitespace-nowrap underline transition-colors hover:text-cobalt-500"
          @click="consent.reopen()"
        >
          Pengaturan cookie
        </button>
      </div>
    </UContainer>
  </footer>
</template>
