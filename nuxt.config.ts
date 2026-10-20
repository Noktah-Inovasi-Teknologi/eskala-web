import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  // Folders under app/components (base/, blocks/, site/) only organise; names stay the file names.
  components: [{ path: "~/components", pathPrefix: false }],
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "id" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s — Eskala",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "theme-color", content: "#1D4ED8" },
        { property: "og:site_name", content: "Eskala" },
        { property: "og:locale", content: "id_ID" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },
  fonts: {
    families: [
      { name: "Plus Jakarta Sans", provider: "google", weights: [400, 500, 600, 700, 800], styles: ["normal", "italic"] },
    ],
  },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/ui"],
  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "obsidian",
      ],
    },
  },
  // GA4 measurement ID: public, not a secret, so it ships with the code and survives any deploy.
  // Production builds only, so `nuxt dev` never reports to the live property; NUXT_PUBLIC_GA_ID
  // overrides it (the UI sweep sets a test ID). Empty: no consent bar and no GA4 (spec 001, FR-019).
  runtimeConfig: { public: { gaId: process.env.NODE_ENV === "production" ? "G-GT2D6YXFFP" : "" } },
  nitro: { prerender: { routes: ["/sitemap.xml", "/llms.txt"] } },
  // Old URLs (design/SPEC-BRIEF.md, ADR-0001, spec 001 FR-002). /case-study and /about-us keep their URLs.
  routeRules: {
    "/services/social-media-management": { redirect: { to: "/digital-marketing#smm", statusCode: 301 } },
    "/services/digital-marketing": { redirect: { to: "/digital-marketing#ads-management", statusCode: 301 } },
    "/services/ads-management": { redirect: { to: "/digital-marketing#ads-management", statusCode: 301 } },
    "/services/kol-management": { redirect: { to: "/digital-marketing", statusCode: 301 } },
    "/services/creative-service": { redirect: { to: "/digital-marketing", statusCode: 301 } },
    "/services/eskala-vip": { redirect: { to: "/digital-marketing", statusCode: 301 } },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
