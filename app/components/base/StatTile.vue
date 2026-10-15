<script setup lang="ts">
// Deviation (Principles I, III): the reference sets the on-cobalt label in cobalt-100, which is
// 4.18:1 on the tile's white/12 layer. White clears 4.5:1.
withDefaults(defineProps<{
  value: string
  label: string
  /** on-cobalt: the translucent tile on the cobalt case card · light: white tile on a light card */
  tone?: "on-cobalt" | "light"
}>(), { tone: "light" })
</script>

<template>
  <div
    class="flex flex-[1_1_150px] flex-col gap-1 rounded-[18px] px-5 py-4.5"
    :class="tone === 'on-cobalt' ? 'bg-white/12' : 'bg-white'"
  >
    <span
      class="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em]"
      :class="tone === 'on-cobalt' ? 'text-white' : 'text-obsidian-950'"
    >{{ value }}</span>
    <span
      class="text-sm font-semibold"
      :class="tone === 'on-cobalt' ? 'text-white' : 'text-obsidian-700'"
    >{{ label }}</span>
  </div>
</template>
