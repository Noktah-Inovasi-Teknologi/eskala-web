<script setup lang="ts">
defineProps<{ name: string, role: string, photo?: string }>()
</script>

<template>
  <div class="flex min-w-0 flex-col gap-3">
    <NuxtImg
      v-if="photo"
      :src="photo"
      :alt="name"
      width="440"
      height="550"
      class="aspect-4/5 w-full rounded-[20px] object-cover"
    />
    <MediaPlaceholder v-else label="Foto" class="aspect-4/5 rounded-[20px] text-obsidian-600" />
    <b class="text-[17px] text-obsidian-950">{{ name }}</b>
    <span class="text-sm text-obsidian-700">{{ role }}</span>
  </div>
</template>
