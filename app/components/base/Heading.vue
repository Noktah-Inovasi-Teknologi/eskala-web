<script setup lang="ts">
// Heading sizes from design/tokens.css and the reference pages. Below sm each size
// scales with the viewport, so the longest word still fits at 320px.
type Size = "hero-home" | "hero" | "display" | "section" | "feature" | "card"

withDefaults(defineProps<{
  as?: "h1" | "h2" | "h3"
  size?: Size
  tone?: "ink" | "white"
}>(), { as: "h2", size: "section", tone: "ink" })

const sizes: Record<Size, string> = {
  "hero-home": "text-[clamp(40px,13.3vw,52px)] sm:text-[clamp(52px,7vw,104px)] leading-[0.98] tracking-[-0.035em]",
  "hero": "text-[clamp(34px,11.3vw,44px)] sm:text-[clamp(44px,5.6vw,80px)] leading-[1.02] tracking-[-0.035em]",
  "display": "text-[clamp(30px,9vw,36px)] sm:text-[clamp(36px,4.4vw,60px)] leading-[1.05] tracking-[-0.03em]",
  "section": "text-[clamp(28px,8.2vw,32px)] sm:text-[clamp(32px,3.6vw,50px)] leading-[1.08] tracking-[-0.03em]",
  "feature": "text-[clamp(26px,7.7vw,30px)] sm:text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.025em]",
  "card": "text-xl sm:text-2xl leading-tight",
}
</script>

<template>
  <component
    :is="as"
    class="font-extrabold"
    :class="[sizes[size], tone === 'white' ? 'text-white' : 'text-obsidian-950']"
  >
    <slot />
  </component>
</template>
