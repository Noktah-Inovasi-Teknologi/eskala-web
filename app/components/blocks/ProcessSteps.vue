<script setup lang="ts">
import type { ProcessStep } from "~/types/content"

defineProps<{ steps: ProcessStep[] }>()
</script>

<template>
  <ol
    class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3"
    :class="steps.length >= 6 ? 'xl:grid-cols-6' : 'xl:grid-cols-5'"
  >
    <li
      v-for="(step, i) in steps"
      :key="step.title"
      class="flex min-w-0 flex-col gap-2 border-t-2 pt-3.5 pr-5"
      :class="step.highlight === 'ink' ? 'border-obsidian-950' : step.highlight === 'cobalt' ? 'border-cobalt-500' : 'border-obsidian-400'"
    >
      <b class="text-sm text-accent-strong">{{ String(i + 1).padStart(2, "0") }}</b>
      <strong class="text-lg" :class="step.highlight === 'cobalt' ? 'text-cobalt-500' : 'text-obsidian-950'">{{ step.title }}</strong>
      <span class="text-[15px] leading-normal text-obsidian-700">{{ step.body }}</span>
    </li>
  </ol>
</template>
