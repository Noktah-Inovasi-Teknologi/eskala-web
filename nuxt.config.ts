import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  hub: {
    database: true,
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxthub/core"],
  vite: {
    plugins: [tailwindcss()],
  },
});
