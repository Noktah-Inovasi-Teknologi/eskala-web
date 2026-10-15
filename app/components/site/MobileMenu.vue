<!-- The burger and the full-screen menu below lg (design/reference/mobile-menu.html). -->
<script setup lang="ts">
import { consultLink, contact, mainNav, pricing, socialHandle } from "~/data/site"

// Classes from the header (lg:hidden) go on the burger, not on the modal.
defineOptions({ inheritAttrs: false })

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <UModal
    v-model:open="open"
    fullscreen
    title="Menu"
    description="Halaman Eskala dan cara menghubungi kami"
    :close="false"
    :ui="{ header: 'sr-only', body: 'flex flex-1 flex-col p-0 sm:p-0', content: 'bg-white' }"
  >
    <button
      type="button"
      aria-label="Buka menu"
      class="inline-flex size-11 items-center justify-center rounded-full border border-obsidian-400 bg-white text-obsidian-950 transition-colors hover:bg-obsidian-100"
      v-bind="$attrs"
    >
      <UIcon name="i-ph-list" class="size-5.5" />
    </button>

    <template #body>
      <div class="flex items-center justify-between border-b border-obsidian-300 px-5 py-3 sm:px-6">
        <BrandLogo to="/" />
        <button
          type="button"
          aria-label="Tutup menu"
          class="inline-flex size-11 items-center justify-center rounded-full border border-obsidian-400 bg-white text-obsidian-950 transition-colors hover:bg-obsidian-100"
          @click="open = false"
        >
          <UIcon name="i-ph-x" class="size-5.5" />
        </button>
      </div>

      <nav aria-label="Menu" class="flex flex-col px-5 pt-2 sm:px-6">
        <NuxtLink
          v-for="link in mainNav"
          :key="link.to"
          :to="link.to"
          class="flex items-center justify-between border-b border-obsidian-300 py-4.5 text-xl font-bold text-obsidian-950"
        >
          {{ link.label }}
          <UIcon name="i-ph-arrow-right" class="size-4.5" />
        </NuxtLink>
      </nav>

      <div class="mt-auto flex flex-col gap-3.5 border-t border-obsidian-300 bg-obsidian-100 px-5 pt-6 pb-8 sm:px-6">
        <span class="text-sm text-obsidian-700">
          {{ pricing.smm.from }} <b class="text-obsidian-950">{{ pricing.smm.amount }}</b> per bulan untuk Social Media Management
        </span>
        <PillButton variant="whatsapp" :to="consultLink" class="w-full">Konsultasi gratis 30 menit</PillButton>
        <span class="text-center text-[13px] text-obsidian-600">{{ socialHandle }} · {{ contact.email }}</span>
      </div>
    </template>
  </UModal>
</template>
