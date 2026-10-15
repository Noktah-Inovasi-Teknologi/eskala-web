<script setup lang="ts">
// The design's content card in all its grounds: service cards, format cards, timeline phases,
// "untuk siapa", pembeda, nilai, Ads platforms, the DM dark-band examples.
type Tone = "white" | "subtle" | "subtle-plain" | "cobalt-soft" | "copper-soft" | "cobalt" | "dark"

const props = withDefaults(defineProps<{
  tone?: Tone
  /** lg: 32px padding · md: 28px · sm: 24px and a 20px radius (the small info cards) */
  size?: "lg" | "md" | "sm"
  /** The small label above the title: a number ("01"), a format ("Workshop"), a period ("Bulan 1–3"). */
  kicker?: string
  kickerTone?: "accent" | "muted" | "cobalt" | "on-dark"
  /** Kicker set in tracked caps, as the DM example cards do. */
  kickerCaps?: boolean
  tag?: string
  tagTone?: "soon" | "popular" | "popular-soft" | "white-cobalt" | "white-accent"
  title: string
  /** h3 by default; the small info cards use a bold span instead. */
  titleAs?: "h3" | "span"
  body?: string
  items?: string[]
  link?: { label: string, to: string }
  /** The copper wing behind a cobalt card. */
  wing?: boolean
}>(), { tone: "white", size: "lg", titleAs: "h3" })

const grounds: Record<Tone, string> = {
  "white": "bg-white border border-obsidian-300",
  "subtle": "bg-obsidian-100 border border-obsidian-300",
  "subtle-plain": "bg-obsidian-100",
  "cobalt-soft": "bg-cobalt-100",
  "copper-soft": "bg-copper-100",
  "cobalt": "bg-cobalt-500 [--focus-ring:var(--color-white)]",
  "dark": "bg-obsidian-900 [--focus-ring:var(--color-cobalt-400)]",
}

const onColour = computed(() => props.tone === "cobalt" || props.tone === "dark")
const tinted = computed(() => props.tone === "cobalt-soft" || props.tone === "copper-soft")

const kickerClass = computed(() => {
  const tone = props.kickerTone ?? (onColour.value ? "on-dark" : "accent")
  return {
    accent: "text-accent-strong",
    muted: "text-obsidian-700",
    cobalt: "text-cobalt-500",
    "on-dark": "text-copper-200",
  }[tone]
})

const sizes = {
  lg: "gap-3.5 rounded-3xl p-6 sm:p-8",
  md: "gap-3 rounded-3xl p-5.5 sm:p-7",
  sm: "gap-2 rounded-[20px] p-6",
}
</script>

<template>
  <div class="relative flex min-w-0 flex-col overflow-hidden" :class="[grounds[tone], sizes[size]]">
    <WingDecor v-if="wing" class="-right-[45%] -bottom-[40%] h-[120%] opacity-50" />

    <div v-if="kicker || tag" class="relative flex items-center justify-between gap-3">
      <span
        v-if="kicker"
        class="font-bold"
        :class="[kickerClass, kickerCaps ? 'text-[13px] uppercase tracking-[0.06em]' : 'text-sm']"
      >{{ kicker }}</span>
      <Tag v-if="tag" :tone="tagTone">{{ tag }}</Tag>
    </div>

    <component
      :is="titleAs"
      class="relative font-extrabold"
      :class="[
        size === 'sm' ? 'text-[17px] font-bold' : size === 'md' ? 'text-[21px]' : 'text-[22px] sm:text-2xl',
        onColour ? 'text-white' : 'text-obsidian-950',
      ]"
    >{{ title }}</component>

    <p
      v-if="body"
      class="relative leading-[1.6]"
      :class="[
        size === 'lg' ? 'text-base' : 'text-[15px]',
        tone === 'cobalt' ? 'text-cobalt-100' : tone === 'dark' ? 'text-obsidian-300' : tinted ? 'text-obsidian-800' : 'text-obsidian-700',
      ]"
    >{{ body }}</p>

    <BulletList v-if="items?.length" class="relative" :items="items" :tone="onColour ? 'light' : 'default'" />

    <slot />

    <ArrowLink v-if="link" :to="link.to" :tone="onColour ? 'light' : 'default'" class="relative mt-auto">
      {{ link.label }}
    </ArrowLink>
  </div>
</template>
