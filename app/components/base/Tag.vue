<script setup lang="ts">
type TagTone = "soon" | "popular" | "popular-soft" | "white-cobalt" | "white-accent"

withDefaults(defineProps<{ tone?: TagTone }>(), { tone: "soon" })

const tones: Record<TagTone, string> = {
  "soon": "bg-copper-100 text-accent-strong",
  "popular": "bg-cobalt-500 text-white",
  "popular-soft": "bg-cobalt-100 text-cobalt-500",
  "white-cobalt": "bg-white text-cobalt-500",
  "white-accent": "bg-white text-accent-strong",
}
</script>

<template>
  <span
    class="inline-flex items-center self-start rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap uppercase tracking-[0.06em]"
    :class="tones[tone]"
  >
    <slot />
  </span>
</template>
