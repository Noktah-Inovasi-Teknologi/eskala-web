<!-- The cobalt panel with the cropped copper wing: hero panels, the rules panel, the fee panel.
     Size, padding and layout come from the caller; `wing-class` places the wing. -->
<script setup lang="ts">
withDefaults(defineProps<{
  wingClass?: string
  /** The wing glides in on page load. Hero panels only. */
  land?: boolean
}>(), { wingClass: "-top-[6%] -right-[18%] h-[128%]" })
</script>

<template>
  <div class="relative overflow-hidden rounded-3xl bg-cobalt-500 [--focus-ring:var(--color-white)]">
    <WingDecor :class="[wingClass, { 'motion-wing-land': land }]" />
    <slot />
  </div>
</template>
