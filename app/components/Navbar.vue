<script lang="ts" setup>
const open = ref(false);

const items = ref([
  {
    label: "Beranda",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Layanan",
    icon: "i-heroicons-briefcase",
    children: [
      {
        label: "Social Media Management",
        icon: "i-heroicons-chat-bubble-left-right",
        description:
          "Kelola dan optimalkan kehadiran media sosial Anda di berbagai platform.",
        to: "/services/social-media-management",
      },
      {
        label: "Digital Marketing",
        icon: "i-heroicons-cursor-arrow-rays",
        description:
          "Iklan berbayar yang tepat sasaran di Meta, TikTok, dan Google untuk menjangkau lebih banyak pasien.",
        to: "/services/digital-marketing",
      },
    ],
  },
  {
    label: "Cerita Klien",
    icon: "i-heroicons-chart-bar-square",
    description:
      "Lihat bagaimana kami membantu klien kami tumbuh besar dan sukses.",
    to: "/case-study",
  },
  {
    label: "Tentang Kami",
    icon: "i-heroicons-information-circle",
    to: "/about-us",
  },
]);
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
    <!-- Logo/Brand -->
    <div class="flex items-center gap-4 sm:gap-8">
      <div class="flex items-center font-display text-2xl font-bold">
        <p class="text-obsidian-950">Eskala</p>
        <p class="text-copper-500">.</p>
      </div>
      <div
        class="hidden sm:block text-obsidian-500 font-display text-xs italic font-normal"
      >
        Supporting you creatively
      </div>
    </div>

    <!-- Navigation Menu (desktop) -->
    <div class="hidden lg:flex flex-1 justify-center">
      <UNavigationMenu
        color="primary"
        highlight
        :ui="{
          link: 'text-obsidian-700 hover:text-cobalt-600 font-medium text-sm',
          linkLeadingIcon: 'text-obsidian-400 group-hover:text-cobalt-500',
          childLink: 'hover:bg-cobalt-50',
          childLinkLabel: 'text-obsidian-800 font-medium text-sm',
          childLinkDescription: 'text-obsidian-500 text-xs',
        }"
        :items="items"
      />
    </div>

    <!-- WhatsApp Button (desktop) -->
    <UButton
      variant="solid"
      icon="i-simple-icons-whatsapp"
      href="https://wa.me/6282230712718"
      target="_blank"
      external
      color="success"
      class="hidden lg:inline-flex px-4 py-2 rounded-full"
    >
      Mulai Konsultasi
    </UButton>

    <!-- Hamburger (mobile) -->
    <UButton
      icon="i-heroicons-bars-3"
      variant="ghost"
      color="neutral"
      size="xl"
      class="lg:hidden"
      aria-label="Buka menu"
      @click="open = true"
    />

    <!-- Mobile slide-over -->
    <USlideover
      v-model:open="open"
      title="Menu"
      :ui="{ body: 'p-6' }"
    >
      <template #body>
        <div class="flex flex-col gap-2">
          <NuxtLink
            to="/"
            class="font-display font-medium text-obsidian-700 hover:text-cobalt-600 py-2"
            @click="open = false"
          >
            Beranda
          </NuxtLink>

          <p
            class="font-display font-medium text-obsidian-700 pt-2"
          >
            Layanan
          </p>
          <NuxtLink
            to="/services/social-media-management"
            class="font-body text-sm text-obsidian-600 hover:text-cobalt-600 py-2 pl-4"
            @click="open = false"
          >
            Social Media Management
          </NuxtLink>
          <NuxtLink
            to="/services/digital-marketing"
            class="font-body text-sm text-obsidian-600 hover:text-cobalt-600 py-2 pl-4"
            @click="open = false"
          >
            Digital Marketing
          </NuxtLink>

          <NuxtLink
            to="/case-study"
            class="font-display font-medium text-obsidian-700 hover:text-cobalt-600 py-2"
            @click="open = false"
          >
            Cerita Klien
          </NuxtLink>
          <NuxtLink
            to="/about-us"
            class="font-display font-medium text-obsidian-700 hover:text-cobalt-600 py-2"
            @click="open = false"
          >
            Tentang Kami
          </NuxtLink>

          <UButton
            variant="solid"
            icon="i-simple-icons-whatsapp"
            href="https://wa.me/6282230712718"
            target="_blank"
            external
            color="success"
            block
            class="mt-4 rounded-full"
          >
            Mulai Konsultasi
          </UButton>
        </div>
      </template>
    </USlideover>
  </nav>
</template>
