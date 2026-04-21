<script lang="ts" setup>
interface FooterLink {
  label: string
  to: string
  icon?: string
}

interface FooterSection {
  label: string
  children: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Layanan",
    children: [
      {
        label: "Social Media Management",
        to: "/services/social-media-management",
      },
      { label: "Digital Marketing", to: "/services/digital-marketing" },
      { label: "VIP", to: "/services/vip" },
    ],
  },

  {
    label: "Dukungan",
    children: [
      { label: "FAQ", to: "/faq" },
      { label: "Tentang Kami", to: "/about" },
    ],
  },
  {
    label: "Sosial Media",
    children: [
      {
        icon: "i-simple-icons-instagram",
        label: "Instagram",
        to: "https://instagram.com/eskala.u",
      },
      {
        icon: "i-simple-icons-tiktok",
        label: "TikTok",
        to: "https://tiktok.com/@eskala.u",
      },
      {
        icon: "i-simple-icons-facebook",
        label: "Facebook",
        to: "https://facebook.com/eskala.u",
      },
      {
        icon: "i-simple-icons-youtube",
        label: "YouTube",
        to: "https://youtube.com/@eskala.u",
      },
    ],
  },
];
</script>

<template>
  <UFooter class="px-6">
    <template #top>
      <div class="grid lg:grid-cols-4 gap-12 mx-auto max-w-7xl">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Eskala</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Partner kreatif untuk bisnis kesehatan Anda. Kami membantu klinik,
              rumah sakit, dan brand kesehatan tumbuh di dunia digital melalui
              Social Media Management dan Digital Marketing yang terukur.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-envelope" class="text-primary" />
              <span class="text-sm text-gray-600">core@eskala.id</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-phone" class="text-primary" />
              <span class="text-sm text-gray-600">+62 857-0603-4321</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-map-pin" class="text-primary" />
              <span class="text-sm text-gray-600">Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="lg:col-span-3 grid md:grid-cols-3 gap-12">
          <div v-for="section in footerLinks" :key="section.label">
            <h4 class="font-semibold text-gray-900 mb-6">
              {{ section.label }}
            </h4>
            <ul class="space-y-4">
              <li v-for="link in section.children" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <UIcon v-if="link.icon" :name="link.icon" class="size-4 shrink-0" />
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-sm text-gray-500">
        © {{ 2024 }} Eskala. All rights reserved.
      </p>
    </template>

    <template #right>
      <div class="flex gap-8 text-sm">
        <NuxtLink
          to="/privacy"
          class="text-gray-500 hover:text-primary transition-colors"
        >
          Privacy Policy
        </NuxtLink>
        <NuxtLink
          to="/terms"
          class="text-gray-500 hover:text-primary transition-colors"
        >
          Terms of Service
        </NuxtLink>
      </div>
    </template>
  </UFooter>
</template>
