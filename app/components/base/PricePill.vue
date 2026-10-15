<script setup lang="ts">
import { pricing } from "~/data/site"

withDefaults(defineProps<{ to?: string }>(), { to: "#paket" })
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-3 self-start rounded-full bg-copper-100 py-2.5 pr-4.5 pl-2.5 text-[15px] font-semibold text-obsidian-950"
  >
    <span class="rounded-full bg-copper-500 px-3 py-1.5 font-extrabold">{{ pricing.smm.tag }}</span>
    <span>per bulan untuk Social Media Management</span>
  </NuxtLink>
</template>
