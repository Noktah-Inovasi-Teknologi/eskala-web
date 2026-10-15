<!-- The white quote card that sits on the home hero's cobalt panel. -->
<script setup lang="ts">
defineProps<{ quote: string, name: string, role: string }>()
</script>

<template>
  <figure class="flex max-w-95 flex-col gap-3 rounded-2xl bg-white px-6 py-5.5">
    <blockquote>
      <p class="text-[15px] font-semibold leading-normal text-obsidian-950 sm:text-[17px]">“{{ quote }}”</p>
    </blockquote>
    <figcaption class="text-[13px] leading-[1.45] text-obsidian-700">
      <b class="text-obsidian-950">{{ name }}</b><br>{{ role }}
    </figcaption>
  </figure>
</template>
