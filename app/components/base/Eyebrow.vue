<script setup lang="ts">
withDefaults(defineProps<{
  tone?: "default" | "accent" | "on-dark" | "on-dark-muted" | "on-cobalt"
  /** The copper rule before the label; only the home page's dark band uses it. */
  rule?: boolean
}>(), { tone: "default" })

const tones = {
  "default": "text-obsidian-700",
  "accent": "text-accent-strong",
  "on-dark": "text-obsidian-300",
  "on-dark-muted": "text-obsidian-500",
  "on-cobalt": "text-cobalt-100",
}
</script>

<template>
  <p
    class="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.09em]"
    :class="tones[tone]"
  >
    <span v-if="rule" class="block h-0.75 w-9 rounded-xs bg-copper-500" aria-hidden="true" />
    <slot />
  </p>
</template>
