<script setup lang="ts">
withDefaults(defineProps<{
  /** md: section lede (18px) · lg: hero lede (20px) */
  size?: "md" | "lg"
  tone?: "default" | "on-dark" | "on-cobalt"
}>(), { size: "md", tone: "default" })

const tones = {
  "default": "text-obsidian-700",
  "on-dark": "text-obsidian-300",
  "on-cobalt": "text-cobalt-100",
}
</script>

<template>
  <p
    :class="[
      size === 'lg' ? 'text-[17px] sm:text-xl leading-[1.6]' : 'text-base sm:text-lg 3xl:text-[19px] leading-[1.65]',
      tones[tone],
    ]"
  >
    <slot />
  </p>
</template>
