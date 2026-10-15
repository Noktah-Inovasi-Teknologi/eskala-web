<script setup lang="ts">
import { NuxtLink } from "#components"
import type { ArticleSummary } from "~/types/content"

const props = defineProps<{ article: ArticleSummary, label: string }>()
</script>

<template>
  <component
    :is="props.article.to ? NuxtLink : 'div'"
    :to="props.article.to"
    class="relative flex flex-wrap items-center gap-x-12 gap-y-8 overflow-hidden rounded-[28px] bg-cobalt-500 p-5 sm:p-7 [--focus-ring:var(--color-white)]"
  >
    <WingDecor class="-top-[30%] -right-[12%] h-[160%] opacity-35" />
    <MediaPlaceholder
      label="Ilustrasi artikel utama"
      tone="cobalt"
      class="relative h-56 min-w-0 flex-[1_1_460px] rounded-[20px] text-[15px] sm:h-90"
    />
    <div class="relative flex min-w-0 flex-[1_1_420px] flex-col gap-4 sm:pr-3">
      <div class="flex flex-wrap gap-2">
        <Chip tone="accent">{{ label }}</Chip>
        <Tag v-if="!article.to">Segera</Tag>
      </div>
      <span class="text-[clamp(26px,7.7vw,30px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:text-[clamp(30px,3vw,42px)]">{{ article.title }}</span>
      <span class="text-base leading-[1.6] text-cobalt-100 sm:text-[17px]">{{ article.excerpt }}</span>
      <span class="text-sm font-semibold text-cobalt-100">{{ article.readTime }}</span>
    </div>
  </component>
</template>
