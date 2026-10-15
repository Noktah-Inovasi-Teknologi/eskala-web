<script setup lang="ts">
const props = withDefaults(defineProps<{
  to: string
  /** light: white, for cobalt and dark grounds */
  tone?: "default" | "light"
}>(), { tone: "default" })

const external = computed(() => /^https?:/.test(props.to))
</script>

<template>
  <NuxtLink
    :to="to"
    :target="external ? '_blank' : undefined"
    class="inline-flex min-h-11 items-center gap-2 font-semibold transition-colors"
    :class="tone === 'light' ? 'text-white hover:text-cobalt-100' : 'text-cobalt-500 hover:text-cobalt-600'"
  >
    <slot />
    <UIcon name="i-ph-arrow-right" class="size-4.5 shrink-0" />
  </NuxtLink>
</template>
