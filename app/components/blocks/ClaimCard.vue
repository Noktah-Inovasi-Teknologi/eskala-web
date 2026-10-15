<!-- A claim that breaks the health-advertising rules, struck through, and the version that doesn't. -->
<script setup lang="ts">
defineProps<{
  wrong: string
  right: string
  /** Tilt and offset from sm up; flat and stacked on phones. */
  tilt?: "left" | "right"
}>()
</script>

<template>
  <div
    class="max-w-130 rounded-[14px] bg-white px-6 py-5 shadow-float"
    :class="tilt === 'right' ? 'sm:ml-12 sm:rotate-[0.8deg]' : 'sm:-rotate-1'"
  >
    <p class="text-base font-semibold text-obsidian-600 line-through decoration-error-700 decoration-2 sm:text-[17px]">
      <span class="sr-only">Tidak boleh: </span>{{ wrong }}
    </p>
    <p class="mt-1.5 text-lg font-bold leading-[1.3] text-obsidian-950 sm:text-[21px]">
      <span class="sr-only">Lebih tepat: </span><span class="bg-copper-100 px-1 box-decoration-clone">{{ right }}</span>
    </p>
  </div>
</template>
