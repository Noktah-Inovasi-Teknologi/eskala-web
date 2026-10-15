<!-- An inline result on a cobalt band: "**>4x** ROAS iklan". -->
<script setup lang="ts">
defineProps<{ value: string, label: string }>()
</script>

<template>
  <span class="rounded-[14px] bg-white/14 px-4 py-2.5 text-[15px] text-white">
    <b class="text-[22px]">{{ value }}</b> {{ label }}
  </span>
</template>
