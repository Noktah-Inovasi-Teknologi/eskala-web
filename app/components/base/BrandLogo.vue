<script setup lang="ts">
import { NuxtLink } from "#components"
const props = withDefaults(defineProps<{
  size?: "sm" | "md"
  tone?: "light" | "dark"
  /** Makes the logo a link (the header links it home). */
  to?: string
}>(), { size: "md", tone: "light" })

const mark = computed(() => props.tone === "dark" ? "/brand/wing-white.svg" : "/brand/wing-cobalt.svg")
</script>

<template>
  <component
    :is="to ? NuxtLink : 'span'"
    :to="to"
    class="inline-flex min-h-11 items-center gap-2.5"
  >
    <img
      :src="mark"
      alt=""
      width="270"
      height="360"
      class="w-auto"
      :class="size === 'sm' ? 'h-6' : 'h-7'"
    >
    <span
      class="font-wordmark font-extrabold uppercase leading-none tracking-[0.005em]"
      :class="[
        size === 'sm' ? 'text-xl' : 'text-2xl',
        tone === 'dark' ? 'text-white' : 'text-cobalt-500',
      ]"
    >Eskala</span>
  </component>
</template>
