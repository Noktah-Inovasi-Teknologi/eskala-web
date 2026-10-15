<script setup lang="ts">
defineProps<{ label: string }>()
const model = defineModel<string>({ default: "" })
</script>

<template>
  <UInput
    v-model="model"
    type="search"
    icon="i-ph-magnifying-glass"
    :placeholder="label"
    :aria-label="label"
    :ui="{
      base: 'min-h-13 rounded-full bg-white ps-11.5 pe-4.5 text-base text-obsidian-950 ring-obsidian-600 placeholder:text-obsidian-600',
      leading: 'ps-4.5',
      leadingIcon: 'size-5 text-obsidian-700',
    }"
  />
</template>
