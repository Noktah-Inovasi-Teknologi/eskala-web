<script setup lang="ts">
type ChipTone = "accent" | "accent-soft" | "on-cobalt" | "neutral" | "white-cobalt" | "white-accent" | "white-ink"

withDefaults(defineProps<{ tone?: ChipTone }>(), { tone: "neutral" })

const tones: Record<ChipTone, string> = {
  "accent": "bg-copper-500 font-extrabold text-obsidian-950",
  "accent-soft": "bg-copper-100 font-extrabold text-accent-strong",
  "on-cobalt": "bg-white/16 text-white",
  "neutral": "bg-obsidian-300 text-obsidian-800",
  "white-cobalt": "bg-white text-cobalt-500",
  "white-accent": "bg-white text-accent-strong",
  "white-ink": "bg-white text-obsidian-950",
}
</script>

<template>
  <span class="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap" :class="tones[tone]">
    <slot />
  </span>
</template>
