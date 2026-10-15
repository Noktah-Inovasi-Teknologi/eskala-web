<script setup lang="ts">
withDefaults(defineProps<{ items: string[], tone?: "default" | "light" }>(), { tone: "default" })
</script>

<template>
  <ul class="mt-1 flex flex-col gap-2 text-[15px]" :class="tone === 'light' ? 'text-white' : 'text-obsidian-800'">
    <li v-for="item in items" :key="item" class="flex gap-2.5">
      <span class="mt-1.75 size-2 shrink-0 rounded-full bg-copper-500" aria-hidden="true" />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
