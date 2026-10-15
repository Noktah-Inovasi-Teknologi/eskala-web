<script setup lang="ts">
import { NuxtLink } from "#components"
import type { ArticleSummary } from "~/types/content"

// An article with no `to` isn't written yet: the card shows "Segera" and isn't a link.
const props = defineProps<{ article: ArticleSummary }>()
</script>

<template>
  <component
    :is="props.article.to ? NuxtLink : 'div'"
    :to="props.article.to"
    class="group flex min-w-0 flex-col gap-4"
  >
    <div class="relative">
      <MediaPlaceholder label="Ilustrasi atau foto artikel" :tone="article.mediaTone" class="h-50 rounded-[20px]" />
      <Chip :tone="article.categoryTone" class="absolute top-3.5 left-3.5">{{ article.category }}</Chip>
      <Tag v-if="!article.to" class="absolute top-3.5 right-3.5">Segera</Tag>
    </div>
    <span
      class="text-xl font-extrabold leading-tight tracking-[-0.01em] text-obsidian-950"
      :class="{ 'group-hover:text-cobalt-500': article.to }"
    >{{ article.title }}</span>
    <span class="text-[15px] leading-[1.6] text-obsidian-700">{{ article.excerpt }}</span>
    <span class="text-[13px] font-semibold text-obsidian-600">{{ article.readTime }}</span>
  </component>
</template>
