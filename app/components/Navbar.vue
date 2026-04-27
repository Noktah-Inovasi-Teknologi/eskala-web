<script lang="ts" setup>
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
          "Optimalisasi iklan berbayar dan kolaborasi KOC untuk ROI yang maksimal.",
        to: "/services/digital-marketing",
      },
      // {
      //   label: "VIP",
      //   icon: "i-heroicons-sparkles",
      //   description: "Penanganan kreatif lengkap all-in-one untuk bisnis premium.",
      //   to: "/services/vip",
      //   badge: "Premium",
      // },
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
    <div class="flex items-center gap-8">
      <div class="flex items-center font-[Poppins] text-2xl font-bold">
        <p class="text-obsidian-950">Eskala</p>
        <p class="text-copper-500">.</p>
      </div>
      <div class="text-obsidian-500 font-[Poppins] text-xs italic font-normal">
        Supporting you creatively
      </div>
    </div>

    <!-- Navigation Menu -->
    <div class="flex-1 flex justify-center">
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

    <!-- WhatsApp Button -->
    <UButton
      variant="solid"
      icon="i-simple-icons-whatsapp"
      href="https://wa.me/6282230712718"
      target="_blank"
      external
      color="success"
      class="px-4 py-2 rounded-full"
    >
      Mulai Konsultasi
    </UButton>
  </nav>
</template>
