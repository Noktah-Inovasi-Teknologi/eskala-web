<!-- A result number that counts up once when it scrolls into view. The server sends the final value, so
     search engines and visitors without JS see it. Numbers under 10 fade up instead of counting. -->
<script setup lang="ts">
const props = defineProps<{ value: string }>()

// "+200%" → "+", 200, "%". Decimals such as "1,28 jt+" don't match, so they fade.
const parts = props.value.match(/^(\D*)(\d+)(\D*)$/)
const target = parts ? Number(parts[2]) : 0
const counts = target >= 10
const format = (n: number) => `${parts?.[1]}${n}${parts?.[3]}`
const shown = ref<string>()

const motion = useMotionOnce(useTemplateRef<HTMLElement>("el"), {
  onArm: () => { if (counts) shown.value = format(0) },
  onPlay: () => {
    if (!counts) return
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1100)
      shown.value = t < 1 ? format(Math.round(target * (1 - (1 - t) ** 3))) : undefined
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  },
})
</script>

<template>
  <span ref="el" class="relative inline-block" :class="[motion, { 'motion-fade': !counts }]">
    <template v-if="shown === undefined">{{ value }}</template>
    <!-- The invisible final value holds the width, so nothing around the count moves. -->
    <template v-else><span class="invisible">{{ value }}</span><span class="absolute inset-y-0 left-0 whitespace-nowrap tabular-nums">{{ shown }}</span></template>
  </span>
</template>
