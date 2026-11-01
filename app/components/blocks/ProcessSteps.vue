<script setup lang="ts">
import type { ProcessStep } from "~/types/content"

defineProps<{ steps: ProcessStep[] }>()

const motion = useMotionOnce(useTemplateRef<HTMLElement>("list"))
</script>

<template>
  <ol
    ref="list"
    class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3"
    :class="[steps.length >= 6 ? 'xl:grid-cols-6' : 'xl:grid-cols-5', motion]"
  >
    <li
      v-for="(step, i) in steps"
      :key="step.title"
      class="motion-draw relative flex min-w-0 flex-col gap-2 border-t-2 border-obsidian-300 pt-3.5 pr-5"
    >
      <!-- The coloured rule sits over a light track, so it can draw itself in. -->
      <span
        class="motion-line absolute inset-x-0 -top-0.5 h-0.5 origin-left"
        :class="step.highlight === 'ink' ? 'bg-obsidian-950' : step.highlight === 'cobalt' ? 'bg-cobalt-500' : 'bg-obsidian-400'"
        aria-hidden="true"
      />
      <b class="text-sm text-accent-strong">{{ String(i + 1).padStart(2, "0") }}</b>
      <strong class="text-lg" :class="step.highlight === 'cobalt' ? 'text-cobalt-500' : 'text-obsidian-950'">{{ step.title }}</strong>
      <span class="text-[15px] leading-normal text-obsidian-700">{{ step.body }}</span>
    </li>
  </ol>
</template>
