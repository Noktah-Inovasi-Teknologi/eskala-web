<script setup lang="ts">
// A client quote, verbatim (brand rules: only Donny Putra N.H. and the Ecky Dental quote).
defineProps<{
  quote: string
  name: string
  role: string
  /** rule: copper-50 ground with the copper left rule (home) · plain: white card on a copper band (Studi kasus) */
  variant?: "rule" | "plain"
}>()
</script>

<template>
  <figure
    class="flex min-w-0 flex-col gap-4.5 p-6 sm:p-8"
    :class="variant === 'plain' ? 'rounded-3xl bg-white' : 'rounded-r-3xl border-l-6 border-copper-500 bg-copper-50'"
  >
    <blockquote>
      <p class="text-lg font-semibold leading-normal text-obsidian-950 sm:text-xl">“{{ quote }}”</p>
    </blockquote>
    <figcaption class="text-sm leading-normal text-obsidian-700">
      <b class="text-obsidian-950">{{ name }}</b><br>{{ role }}
    </figcaption>
  </figure>
</template>
