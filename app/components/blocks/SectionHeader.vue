<!-- A section's heading block: the title (and its lede) on the left, an aside on the right,
     bottom-aligned, wrapping to one column on phones. -->
<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  lede?: string
  /** Width cap for the title block. */
  titleClass?: string
  ledeClass?: string
  /** stack: lede under the title · split: lede at the right, as the design's section intros do */
  layout?: "split" | "stack"
  tone?: "ink" | "white"
}>(), { layout: "split", tone: "ink", titleClass: "max-w-160", ledeClass: "max-w-115" })
</script>

<template>
  <div class="mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
    <div class="flex flex-col gap-4" :class="titleClass">
      <slot name="eyebrow" />
      <Heading :tone="tone">
        <slot name="title">{{ title }}</slot>
      </Heading>
      <Lede v-if="lede && layout === 'stack'" :tone="tone === 'white' ? 'on-dark' : 'default'">{{ lede }}</Lede>
    </div>
    <Lede v-if="lede && layout === 'split'" :class="ledeClass" :tone="tone === 'white' ? 'on-dark' : 'default'">{{ lede }}</Lede>
    <slot name="aside" />
  </div>
</template>
