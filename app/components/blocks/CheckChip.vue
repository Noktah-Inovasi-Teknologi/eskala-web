<!-- A checkbox shaped as a pill, for the topic and format choices on the forms. -->
<script setup lang="ts">
defineProps<{ label: string, value: string }>()
const model = defineModel<string[]>({ default: () => [] })
</script>

<template>
  <label
    class="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-obsidian-400 bg-white px-3.5 text-[15px] font-medium text-obsidian-800 transition-colors has-checked:border-cobalt-500 has-checked:bg-cobalt-50 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-cobalt-500"
  >
    <input v-model="model" type="checkbox" :value="value" class="size-4.5 shrink-0 accent-cobalt-500 focus-visible:outline-none">
    {{ label }}
  </label>
</template>
