// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  hub: {
    database: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthub/core'
  ]
})