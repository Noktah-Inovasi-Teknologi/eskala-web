<!-- A full-bleed section ground with the content in the container. Padding follows
     section-pad-y: 48 → 64 (sm) → 80 (md) → 96px (lg). -->
<script setup lang="ts">
type Tone = "white" | "subtle" | "dark" | "cobalt" | "copper-soft"

withDefaults(defineProps<{
  tone?: Tone
  /** The 1px rules above and below a tinted band. */
  bordered?: boolean
  /** Which edges get the section padding. */
  pad?: "both" | "top" | "bottom" | "compact" | "none"
  /** The decorative wing for a cobalt band. */
  wing?: boolean
}>(), { tone: "white", pad: "both" })

const tones: Record<Tone, string> = {
  "white": "bg-white",
  "subtle": "bg-obsidian-100 border-obsidian-300",
  "dark": "bg-obsidian-950 text-obsidian-300 [--focus-ring:var(--color-cobalt-400)]",
  "cobalt": "bg-cobalt-500 [--focus-ring:var(--color-white)]",
  "copper-soft": "bg-copper-50 border-copper-200",
}

const pads = {
  both: "py-12 sm:py-16 md:py-20 lg:py-24",
  top: "pt-12 sm:pt-16 md:pt-20 lg:pt-24",
  bottom: "pb-12 sm:pb-16 md:pb-20 lg:pb-24",
  /** The newsletter band: 72px at lg in the reference. */
  compact: "py-12 sm:py-16 lg:py-18",
  none: "",
}
</script>

<template>
  <section class="relative" :class="[tones[tone], { 'border-y': bordered, 'overflow-hidden': wing }]">
    <WingDecor v-if="wing" class="-top-[25%] -right-[14%] h-[150%] opacity-35" />
    <UContainer class="relative" :class="pads[pad]">
      <slot />
    </UContainer>
  </section>
</template>
