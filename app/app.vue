<script setup lang="ts">
import { id } from "@nuxt/ui/locale"
</script>

<template>
  <UApp :locale="id">
    <SiteHeader />
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter />
  </UApp>
</template>
