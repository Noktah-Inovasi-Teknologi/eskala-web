<script setup lang="ts">
import type { Stat } from "~/types/content"

defineProps<{ stats: Stat[] }>()

// Deviation (Principle I): the reference stacks these on phones, leaving stray left rules
// from its auto-fit grid. Here they sit 2 × 2 below lg and 4 across from lg.
const cell = (i: number) => [
  i % 2 === 1 ? "border-l pl-5" : "pl-0",
  i >= 2 ? "border-t lg:border-t-0" : "",
  i >= 1 ? "lg:border-l lg:pl-5" : "",
]
</script>

<template>
  <dl class="grid grid-cols-2 border-y border-obsidian-300 lg:grid-cols-4">
    <div
      v-for="(stat, i) in stats"
      :key="stat.label"
      class="flex flex-col-reverse justify-end gap-1.5 border-obsidian-300 py-6 pr-5"
      :class="cell(i)"
    >
      <dt class="text-[15px] text-obsidian-700">{{ stat.label }}</dt>
      <dd
        class="text-[clamp(32px,10vw,44px)] font-extrabold leading-none tracking-[-0.04em] sm:text-[44px]"
        :class="stat.tone === 'cobalt' ? 'text-cobalt-500' : stat.tone === 'accent' ? 'text-accent-strong' : 'text-obsidian-950'"
      >
        {{ stat.value }}
      </dd>
    </div>
  </dl>
</template>
