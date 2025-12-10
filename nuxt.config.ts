import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  fonts: {
    google: {
      families: {
        Poppins: [400, 500, 600, 700]
      }
    }
  },
  modules: ["@nuxt/content", "@nuxt/ui"],
  ui: {
    colorMode: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
