import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  fonts: {
    families: [
      { name: "Poppins", provider: "google" },
      { name: "Plus Jakarta Sans", provider: "google" },
    ],
  },
  modules: ["@nuxt/fonts", "@nuxt/ui"],
  ui: {
    colorMode: false,
    theme: {
      colors: ["primary", "secondary", "success", "info", "warning", "error", "obsidian"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
