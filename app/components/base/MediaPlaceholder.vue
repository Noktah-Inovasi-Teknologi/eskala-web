<script setup lang="ts">
// Where a photo or illustration will go (design/README.md, Placeholders). Until it arrives the
// panel is a plain brand tint with no text (decided 2026-10-15); `label` says what belongs here.
withDefaults(defineProps<{
  label: string
  tone?: "neutral" | "neutral-strong" | "cobalt" | "copper"
}>(), { tone: "neutral" })

const tones = {
  "neutral": "bg-obsidian-300",
  "neutral-strong": "bg-obsidian-400",
  "cobalt": "bg-cobalt-100",
  "copper": "bg-copper-100",
}
</script>

<template>
  <div aria-hidden="true" :data-placeholder="label" :class="tones[tone]" />
</template>
