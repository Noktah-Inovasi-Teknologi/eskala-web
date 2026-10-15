<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  value: string
  sub?: string
  /** card: the tilted copper card beside a section heading · circle: the DM hero sticker · tag: the small Tentang kami label */
  shape?: "card" | "circle" | "tag"
}>(), { shape: "card" })
</script>

<template>
  <div
    v-if="shape === 'circle'"
    class="flex size-47.5 shrink-0 flex-col items-center justify-center rounded-full bg-copper-500 text-center text-obsidian-950 shadow-float sm:-rotate-10"
  >
    <span class="text-[13px] font-extrabold uppercase tracking-[0.08em]">{{ label }}</span>
    <span class="text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em]">{{ value }}</span>
    <span v-if="sub" class="text-sm font-bold">{{ sub }}</span>
  </div>
  <div
    v-else-if="shape === 'tag'"
    class="rounded-[18px] bg-copper-500 px-5.5 py-4.5 text-obsidian-950 shadow-float-accent sm:-rotate-3"
  >
    <span class="block text-[13px] font-extrabold uppercase tracking-[0.06em]">{{ label }}</span>
    <span class="block text-2xl font-extrabold">{{ value }}</span>
  </div>
  <div
    v-else
    class="flex shrink-0 flex-col gap-1 self-start rounded-3xl bg-copper-500 px-8.5 pt-6.5 pb-7 text-obsidian-950 shadow-float-accent sm:-rotate-2 sm:self-end"
  >
    <span class="text-sm font-extrabold uppercase tracking-[0.08em]">{{ label }}</span>
    <span class="text-[clamp(40px,13vw,52px)] font-extrabold leading-none tracking-[-0.04em] sm:text-[clamp(52px,5.4vw,76px)]">{{ value }}</span>
    <span v-if="sub" class="text-base font-bold">{{ sub }}</span>
  </div>
</template>
