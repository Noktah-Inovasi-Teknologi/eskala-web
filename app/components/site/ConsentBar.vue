<!-- Consent for Google Analytics (spec 001, FR-019/020, contract C-7). Not in design/: a recorded
     deviation. It sits after the footer and sticks to the bottom of the viewport, so every part of
     the page, WhatsApp buttons included, can be scrolled clear of it. -->
<script setup lang="ts">
const consent = useConsent()
</script>

<template>
  <section
    v-if="consent.enabled && consent.open.value"
    aria-label="Pilihan analitik"
    class="sticky bottom-0 z-40 border-t border-obsidian-300 bg-white"
  >
    <UContainer class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-6">
      <p class="text-sm leading-[1.55] text-obsidian-700 sm:flex-1">
        Boleh kami memakai Google Analytics untuk memahami halaman mana yang membantu Anda? Pilihan ini bisa diubah kapan saja.
        <NuxtLink to="/privacy" class="font-semibold text-cobalt-500 underline hover:text-cobalt-600">Kebijakan privasi</NuxtLink>
      </p>
      <div class="grid shrink-0 grid-cols-2 gap-3">
        <PillButton variant="outline" size="sm" @click="consent.accept()">Terima</PillButton>
        <PillButton variant="outline" size="sm" @click="consent.decline()">Tolak</PillButton>
      </div>
    </UContainer>
  </section>
</template>
