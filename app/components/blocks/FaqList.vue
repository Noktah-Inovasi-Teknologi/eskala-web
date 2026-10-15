<script setup lang="ts">
import type { FaqItem } from "~/types/content"

defineProps<{ items: FaqItem[] }>()
</script>

<template>
  <div class="border-b border-obsidian-300">
    <div
      v-for="item in items"
      :key="item.question"
      class="flex flex-wrap gap-x-12 gap-y-2 border-t border-obsidian-300 py-5 sm:py-6"
    >
      <h3 class="flex-[1_1_320px] text-[17px] font-extrabold leading-[1.35] text-obsidian-950 sm:text-[19px]">
        {{ item.question }}
      </h3>
      <p class="flex-[1_1_480px] text-base leading-[1.65] text-obsidian-700">{{ item.answer }}</p>
    </div>
  </div>
</template>
