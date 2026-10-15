<script setup lang="ts">
import { socialHandle, socialLinks } from "~/data/site"
</script>

<template>
  <ul class="flex flex-col">
    <li v-for="link in socialLinks" :key="link.label">
      <a
        :href="link.href"
        target="_blank"
        rel="noopener"
        :aria-label="`${link.label} Eskala (${socialHandle})`"
        class="inline-flex min-h-11 items-center gap-2.5 text-obsidian-700 transition-colors hover:text-cobalt-500"
      >
        <UIcon :name="link.icon" class="size-5 shrink-0" />
        <span>{{ socialHandle }}</span>
      </a>
    </li>
  </ul>
</template>
