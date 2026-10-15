<script setup lang="ts">
import { whatsappLink } from "~/data/site"

const props = defineProps<{
  /** cobalt: the featured card with the wing (SMEC) · light: the card with a media panel (Boyolali) */
  variant: "cobalt" | "light"
  chips: { label: string, tone: "accent" | "accent-soft" | "on-cobalt" | "neutral" }[]
  title: string
  body: string
  stats: { value: string, label: string }[]
  /** The case's title, quoted in the WhatsApp message that asks for the full document. */
  documentTitle: string
  mediaLabel?: string
}>()

const documentLink = computed(() =>
  whatsappLink(`Halo Eskala! Saya tertarik untuk melihat dokumen penuh studi kasus "${props.documentTitle}". Boleh saya minta detailnya?`),
)
const onCobalt = computed(() => props.variant === "cobalt")
</script>

<template>
  <article
    class="relative flex flex-wrap items-start gap-x-14 gap-y-10 overflow-hidden rounded-[28px] p-6 sm:p-12"
    :class="onCobalt ? 'bg-cobalt-500 [--focus-ring:var(--color-white)]' : 'border border-obsidian-300 bg-obsidian-100'"
  >
    <WingDecor v-if="onCobalt" class="-top-[25%] -right-[14%] h-[150%] opacity-30" />
    <MediaPlaceholder
      v-if="mediaLabel"
      :label="mediaLabel"
      tone="cobalt"
      class="aspect-4/3 min-w-0 flex-[1_1_420px] rounded-[20px]"
    />
    <div class="relative flex min-w-0 flex-[1_1_520px] flex-col gap-4.5">
      <div class="flex flex-wrap gap-2">
        <Chip v-for="chip in chips" :key="chip.label" :tone="chip.tone">{{ chip.label }}</Chip>
      </div>
      <Heading size="feature" :tone="onCobalt ? 'white' : 'ink'">{{ title }}</Heading>
      <p class="text-base leading-[1.65] sm:text-[17px]" :class="onCobalt ? 'text-cobalt-100' : 'text-obsidian-700'">{{ body }}</p>
      <div class="flex flex-wrap gap-3">
        <StatTile v-for="stat in stats" :key="stat.label" v-bind="stat" :tone="onCobalt ? 'on-cobalt' : 'light'" />
      </div>
      <PillButton :to="documentLink" :variant="onCobalt ? 'light' : 'primary'" icon="i-ph-file-arrow-down" class="self-start">
        Minta dokumen lengkap
      </PillButton>
    </div>
  </article>
</template>
