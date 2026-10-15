<script setup lang="ts">
import { id } from "@nuxt/ui/locale"
import { contact, socialLinks } from "~/data/site"

// Who Eskala is, on every page (spec 001, FR-006, contract C-6). No parent company here.
useHead({
  script: [{
    key: "schema-site",
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://eskala.id/#organization",
          "name": "Eskala",
          "url": "https://eskala.id/",
          "logo": "https://eskala.id/android-chrome-512x512.png",
          "description": "Partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis.",
          "email": contact.email,
          "telephone": contact.phone,
          "areaServed": { "@type": "Country", "name": "Indonesia" },
          "sameAs": socialLinks.map(link => link.href),
        },
        {
          "@type": "WebSite",
          "@id": "https://eskala.id/#website",
          "url": "https://eskala.id/",
          "name": "Eskala",
          "inLanguage": "id",
          "publisher": { "@id": "https://eskala.id/#organization" },
        },
      ],
    }),
  }],
})
</script>

<template>
  <UApp :locale="id">
    <SiteHeader />
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter />
    <ConsentBar />
  </UApp>
</template>
