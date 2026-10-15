<!-- The cobalt panel with the cropped copper wing: hero panels, the rules panel, the fee panel.
     Size, padding and layout come from the caller; `wing-class` places the wing. -->
<script setup lang="ts">
withDefaults(defineProps<{ wingClass?: string }>(), { wingClass: "-top-[6%] -right-[18%] h-[128%]" })
</script>

<template>
  <div class="relative overflow-hidden rounded-3xl bg-cobalt-500 [--focus-ring:var(--color-white)]">
    <WingDecor :class="wingClass" />
    <slot />
  </div>
</template>
