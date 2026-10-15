<script setup lang="ts">
type Variant = "whatsapp" | "primary" | "accent" | "light" | "outline"

const props = withDefaults(defineProps<{
  variant?: Variant
  /** md: the 52px CTA pill · lg: the 56px pill in the CTA band · sm: the 44px nav button */
  size?: "sm" | "md" | "lg"
  to?: string
  type?: "button" | "submit"
  icon?: string
  trailingIcon?: string
  loading?: boolean
  /** Full width below sm, as the design does with every CTA pill. */
  block?: boolean
}>(), { variant: "primary", size: "md", block: true })

const variants: Record<Variant, string> = {
  whatsapp: "bg-success-700 text-white hover:bg-success-hover active:bg-success-active",
  primary: "bg-cobalt-500 text-white hover:bg-cobalt-600 active:bg-cobalt-700",
  accent: "bg-copper-500 text-obsidian-950 hover:bg-copper-600 active:bg-accent-active",
  light: "bg-white text-cobalt-500 hover:bg-cobalt-50 active:bg-cobalt-100",
  outline: "bg-white text-obsidian-950 ring ring-inset ring-obsidian-400 hover:bg-obsidian-100 active:bg-obsidian-200",
}

const sizes = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-13 px-6.5 text-base",
  lg: "min-h-14 px-7 text-[17px]",
}

const external = computed(() => !!props.to && /^https?:/.test(props.to))
const icons = computed(() => props.variant === "whatsapp" && !props.icon ? "i-ph-whatsapp-logo" : props.icon)
</script>

<template>
  <UButton
    :to="to"
    :target="external ? '_blank' : undefined"
    :type="to ? undefined : type"
    :icon="icons"
    :trailing-icon="trailingIcon"
    :loading="loading"
    color="neutral"
    :class="[
      'justify-center gap-2.5 rounded-full font-semibold transition-colors',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring,var(--color-cobalt-500))]',
      sizes[size],
      variants[variant],
      block && size !== 'sm' ? 'w-full sm:w-auto' : '',
    ]"
    :ui="{ leadingIcon: 'size-5 shrink-0', trailingIcon: 'size-4.5 shrink-0' }"
  >
    <slot />
  </UButton>
</template>
