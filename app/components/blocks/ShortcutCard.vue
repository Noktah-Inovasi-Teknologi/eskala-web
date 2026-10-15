<!-- The white link cards on the Digital Marketing hero panel. -->
<script setup lang="ts">
defineProps<{ title: string, sub: string, to: string }>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="relative flex max-w-117 items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5.5 text-obsidian-950 transition-colors hover:bg-cobalt-50"
  >
    <span class="flex flex-col gap-1">
      <b class="text-lg leading-tight">{{ title }}</b>
      <span class="text-sm leading-tight text-obsidian-700">{{ sub }}</span>
    </span>
    <UIcon name="i-ph-arrow-right" class="size-4.5 shrink-0 text-cobalt-500" />
  </NuxtLink>
</template>
