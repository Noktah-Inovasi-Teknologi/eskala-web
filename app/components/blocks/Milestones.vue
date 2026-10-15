<!-- The case-study timeline on the cobalt band: a rule with a dot per milestone. -->
<script setup lang="ts">
defineProps<{ items: { when: string, what: string }[] }>()
</script>

<template>
  <ol class="flex flex-wrap gap-x-5 gap-y-6 border-t-3 border-cobalt-100">
    <li
      v-for="item in items"
      :key="item.when"
      class="relative flex min-w-0 flex-[1_1_140px] flex-col gap-1.5 pt-4.5"
    >
      <span class="absolute -top-1.75 left-0 size-3.5 rounded-full border-3 border-cobalt-500 bg-white" aria-hidden="true" />
      <b class="text-[13px] font-bold text-cobalt-100">{{ item.when }}</b>
      <span class="text-base font-bold text-white">{{ item.what }}</span>
    </li>
  </ol>
</template>
