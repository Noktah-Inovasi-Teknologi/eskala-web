<script setup lang="ts">
defineProps<{ active?: boolean }>()
defineEmits<{ click: [] }>()
</script>

<template>
  <button
    type="button"
    :aria-pressed="active"
    class="inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-semibold transition-colors"
    :class="active
      ? 'border-cobalt-500 bg-cobalt-500 text-white'
      : 'border-obsidian-400 bg-white text-obsidian-950 hover:bg-obsidian-100'"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
