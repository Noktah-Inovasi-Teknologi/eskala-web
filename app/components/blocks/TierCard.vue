<script setup lang="ts">
defineProps<{
  name: string
  /** "Untuk konsistensi" — the tier's purpose, in tracked copper caps. */
  role?: string
  badge?: string
  /** popular: the solid cobalt badge (Digital Marketing) · popular-soft: the tinted one (home summary) */
  badgeTone?: "popular" | "popular-soft"
  quote?: string
  description: string
  /** The "Paling dipilih" tier: a 2px cobalt border, and the cobalt-50 ground when `tinted`. */
  highlighted?: boolean
  tinted?: boolean
}>()
</script>

<template>
  <div
    class="flex min-w-0 flex-col gap-4 rounded-3xl p-6 sm:p-8"
    :class="highlighted
      ? ['border-2 border-cobalt-500', tinted ? 'bg-cobalt-50' : 'bg-white']
      : 'border border-obsidian-300 bg-white'"
  >
    <div v-if="role || badge" class="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
      <span v-if="role" class="text-[13px] font-bold uppercase tracking-[0.06em] text-accent-strong">{{ role }}</span>
      <span v-else class="text-[22px] font-extrabold text-obsidian-950">{{ name }}</span>
      <Tag v-if="badge" :tone="badgeTone ?? 'popular'">{{ badge }}</Tag>
    </div>
    <span v-if="role || !badge" class="text-[22px] font-extrabold text-obsidian-950">{{ name }}</span>
    <q v-if="quote" class="block text-base leading-[1.55] text-obsidian-950 italic [quotes:none]">{{ quote }}</q>
    <p class="text-[15px] leading-[1.6] text-obsidian-700">{{ description }}</p>
  </div>
</template>
