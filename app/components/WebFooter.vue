<script lang="ts" setup>
const footerLinks = [
  {
    label: 'Layanan',
    children: [
      { label: 'Social Media Management', to: '/services/social-media-management' },
      { label: 'Ads Management', to: '/services/ads-management' },
      { label: 'KOL Management', to: '/services/kol-management' },
      { label: 'Creative Service', to: '/services/creative-service' }
    ]
  },
  {
    label: 'Perusahaan',
    children: [
      { label: 'Tentang Kami', to: '/about' },
      { label: 'Karya Kami', to: '/showcases' }
    ]
  },
  {
    label: 'Support',
    children: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Kontak', to: '/contact' },
    ]
  }
]

const socialLinks = [
  { icon: 'i-simple-icons-instagram', to: 'https://instagram.com/eskala.u', label: 'Instagram' },
  { icon: 'i-simple-icons-tiktok', to: 'https://tiktok.com/@eskala.u', label: 'TikTok' },
  { icon: 'i-simple-icons-facebook', to: 'https://facebook.com/eskala.u', label: 'Facebook' },
  { icon: 'i-simple-icons-youtube', to: 'https://youtube.com/@eskala.u', label: 'YouTube' }
]
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
              Partner terpercaya untuk transformasi digital bisnis Anda. Kami menghadirkan solusi komprehensif untuk semua kebutuhan marketing digital.
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

          <!-- Social Links -->
          <div class="flex gap-4">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :icon="social.icon"
              :to="social.to"
              :aria-label="social.label"
              color="neutral"
              variant="ghost"
              size="sm"
              target="_blank"
              class="hover:text-primary"
            />
          </div>
        </div>

        <!-- Footer Links -->
        <div class="lg:col-span-3 grid md:grid-cols-3 gap-12">
          <div v-for="section in footerLinks" :key="section.label">
            <h4 class="font-semibold text-gray-900 mb-6">{{ section.label }}</h4>
            <ul class="space-y-4">
              <li v-for="link in section.children" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-gray-600 hover:text-primary transition-colors"
                >
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
        <NuxtLink to="/privacy" class="text-gray-500 hover:text-primary transition-colors">
          Privacy Policy
        </NuxtLink>
        <NuxtLink to="/terms" class="text-gray-500 hover:text-primary transition-colors">
          Terms of Service
        </NuxtLink>
      </div>
    </template>
  </UFooter>
</template>