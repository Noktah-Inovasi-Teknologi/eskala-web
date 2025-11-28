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
        icon: "i-heroicons-hashtag",
        description: "Kelola dan optimalisasi kehadiran media sosial Anda di berbagai platform.",
        to: "/services/social-media-management",
      },
      {
        label: "Ads Management",
        icon: "i-heroicons-megaphone",
        description: "Buat dan kelola kampanye iklan dengan wawasan berbasis data.",
        to: "/services/ads-management",
      },
      {
        label: "KOL Management",
        icon: "i-heroicons-user-group",
        description: "Terhubung dengan key opinion leaders dan kelola kemitraan influencer.",
        to: "/services/kol-management",
      },
    ],
  },
  {
    label: "Portfolio",
    icon: "i-heroicons-chart-bar-square",
    children: [
      {
        label: "Klien",
        icon: "i-heroicons-building-office",
        description: "Lihat daftar klien yang telah mempercayai layanan kami.",
        to: "/portfolios/clients",
      },
      {
        label: "Karya Kami",
        icon: "i-heroicons-photo",
        description: "Jelajahi portofolio dan hasil karya terbaik kami.",
        to: "/portfolios/showcases",
      },
      {
        label: "Pencapaian",
        icon: "i-heroicons-trophy",
        description: "Prestasi dan penghargaan yang telah kami raih.",
        to: "/portfolios/achievements",
      },
    ],
  },
    {
    label: "Tentang Kami",
    icon: "i-heroicons-information-circle",
    to: "/about-us",
  },
  {
    label: "Instagram",
    icon: "i-simple-icons-instagram",
    badge: "170",
    to: "https://instagram.com/eskala.u",
    target: "_blank",
  },
]);
</script>

<template>
  <nav class="flex items-center justify-between px-4 py-2">
    <!-- Logo/Brand -->
    <div class="font-poppins text-xl font-bold">
      Eskala
    </div>
    
    <!-- Navigation Menu -->
    <div class="flex-1 flex justify-center">
      <UNavigationMenu color="secondary" :items="items" />
    </div>
    
    <!-- WhatsApp Button -->
    <UButton 
      color="success" 
      variant="solid"
      icon="i-simple-icons-whatsapp"
      to="https://wa.me/6285706034321"
      target="_blank"
      external
    >
      Hubungi Kami
    </UButton>
  </nav>
</template>
