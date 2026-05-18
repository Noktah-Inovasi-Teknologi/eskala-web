<script setup lang="ts">
import { caseStudies } from "~/data/case-studies";

useSeoMeta({
  title: "Studi Kasus — Eskala",
  twitterCard: "summary_large_image",
  description:
    "Lihat dokumentasi nyata perjalanan fasilitas kesehatan bersama Eskala — mulai dari konteks awal, strategi yang diterapkan, hingga hasil yang terukur.",
  ogTitle: "Studi Kasus — Eskala",
  ogDescription:
    "Bukan cuma klaim. Ini cerita nyata klien kami. Lihat bagaimana Eskala membantu klinik, rumah sakit, dan brand kesehatan tumbuh di dunia digital.",
  ogUrl: "https://eskala.id/case-study",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
  twitterTitle: "Studi Kasus — Eskala",
  twitterDescription:
    "Dokumentasi nyata perjalanan fasilitas kesehatan bersama Eskala. Strategi, eksekusi, dan hasil yang terukur.",
  twitterImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/case-study" }],
});

const achievement = computed(() => [
  {
    label: "Fasilitas kesehatan aktif",
    value: "10+",
  },
  {
    label: "Studi kasus tersedia",
    value: String(caseStudies.value.length),
  },
  {
    label: "Rata-rata pertumbuhan reach organik",
    value: "+200%",
  },
  {
    label: "Klien perpanjang kontrak",
    value: "80%",
  },
]);

const caseStudyCategories = [
  { label: "Semua", value: "all" },
  { label: "Ophthalmology", value: "ophthalmology" },
  { label: "Dental", value: "dental" },
  { label: "Non-Faskes", value: "non-healthcare" },
];

const getCategoryLabel = (value: string) =>
  caseStudyCategories.find((c) => c.value === value)?.label ?? value;

const selectedCategory = ref<string>("all");
const page = ref(1);
const itemsPerPage = 3;

const filteredCaseStudies = computed(() =>
  selectedCategory.value === "all"
    ? caseStudies.value
    : caseStudies.value.filter((c) => c.category === selectedCategory.value),
);

const paginatedCaseStudies = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  return filteredCaseStudies.value.slice(start, start + itemsPerPage);
});

const caseStudyWhatsAppUrl = (title: string) => {
  const msg = `Halo Eskala! Saya tertarik untuk melihat dokumen penuh studi kasus "${title}". Boleh saya mendapatkan detailnya?`
  return `https://wa.me/6282230712718?text=${encodeURIComponent(msg)}`
}

const displayText = computed(() => {
  const total = filteredCaseStudies.value.length;
  if (total === 0) return "Tidak ada studi kasus ditemukan";
  const start = (page.value - 1) * itemsPerPage + 1;
  const end = Math.min(page.value * itemsPerPage, total);
  return `Menampilkan ${start}–${end} dari ${total} studi kasus`;
});

watch(selectedCategory, () => {
  page.value = 1;
});
</script>

<template>
  <div>
    <UContainer
      id="section-hero"
      class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 sm:py-16 md:py-20 lg:py-24 items-center relative"
    >
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Studi kasus
        </p>
        <div class="flex flex-col md:flex-row gap-6 md:gap-8 md:items-end">
          <div class="flex flex-col">
            <h1 class="font-display text-obsidian-950 font-bold text-4xl sm:text-5xl lg:text-7xl">
              Bukan cuma klaim,
            </h1>
            <h1 class="font-display text-cobalt-500 font-bold text-4xl sm:text-5xl lg:text-7xl">
              <span class="text-obsidian-950">Ini</span> cerita klien kami.
            </h1>
          </div>
          <p class="font-body text-lg text-obsidian-700 font-light md:basis-1/3 md:shrink-0">
            Setiap studi kasus di bawah ini adalah dokumentasi nyata dari
            perjalanan fasilitas kesehatan dan bisnis lainnya bersama Eskala.
            Studi kasus berisikan informasi yang lengkap dengan konteks awal,
            strategi yang kami terapkan, dan hasil yang terukur. Tersedia untuk
            diunduh melalui WhatsApp.
          </p>
        </div>
      </div>
      <div
        class="w-full grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-obsidian-300 border-obsidian-300 border rounded-3xl overflow-hidden"
      >
        <div
          v-for="(item, index) in achievement"
          :key="index"
          class="flex flex-col p-8 gap-2"
          :class="{ 'bg-obsidian-950': index === 2 }"
        >
          <h2
            class="font-display font-bold text-2xl sm:text-3xl lg:text-4xl"
            :class="index === 2 ? 'text-amber-500' : 'text-obsidian-950'"
          >
            {{ item.value }}
          </h2>
          <p
            class="font-body text-sm font-semibold"
            :class="index === 2 ? 'text-obsidian-400' : 'text-obsidian-700'"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
      <USeparator class="w-full" color="obsidian" />
      <div class="flex flex-col">
        <div class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p>{{ displayText }}</p>
          <UTabs v-model="selectedCategory" :items="caseStudyCategories" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <UCard
            v-for="item of paginatedCaseStudies"
            :key="item.id"
            class="mt-8"
          >
            <div class="flex gap-4">
              <div class="w-full flex flex-col gap-4">
                <UBadge
                  class="w-fit rounded-full"
                  color="secondary"
                  size="lg"
                  variant="soft"
                  >{{ getCategoryLabel(item.category) }}</UBadge
                >
                <h3 class="font-display text-2xl font-bold text-obsidian-950">
                  {{ item.title }}
                </h3>
                <p class="font-body text-sm text-obsidian-700">
                  {{ item.summary }}
                </p>
                <div class="flex gap-2">
                  <UBadge
                    v-for="tag in item.results"
                    :key="tag.label"
                    class="w-fit rounded-full"
                    color="obsidian"
                    size="md"
                    variant="soft"
                  >
                    {{ tag.value }} {{ tag.label }}
                  </UBadge>
                </div>
                <USeparator class="w-full" color="obsidian" />
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p
                      class="font-semibold tracking-widest text-obsidian-500 text-sm"
                    >
                      KLIEN
                    </p>
                    <p class="font-bold text-obsidian-950">{{ item.client }}</p>
                  </div>
                  <UButton
                    :href="caseStudyWhatsAppUrl(item.title)"
                    color="success"
                    size="sm"
                    class="rounded-full px-4"
                    target="_blank"
                    ><Icon class="text-lg" name="i-mdi-whatsapp" /> Request
                    Dokumen Penuh
                  </UButton>
                </div>
              </div>
            </div>
          </UCard>
        </div>
        <UPagination
          v-model:page="page"
          class="mt-8 w-full flex flex-wrap justify-center"
          :total="filteredCaseStudies.length"
          :items-per-page="itemsPerPage"
        />
      </div>
    </UContainer>

    <UContainer id="section-call-to-action" class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div class="border border-cobalt-200 bg-cobalt-50 rounded-2xl p-6 sm:p-10 lg:p-14 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
          <div class="flex flex-col gap-4 flex-1">
            <p class="font-display font-semibold text-xs tracking-widest text-cobalt-500 uppercase">
              SIAP UNTUK BERDISKUSI?
            </p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-obsidian-950 leading-tight">
              Ingin hasil seperti ini <span class="text-cobalt-500">untuk faskes Anda?</span>
            </h2>
          </div>
          <div class="md:basis-2/5">
            <p class="font-body text-lg text-obsidian-700 font-light leading-relaxed">
              Konsultasi 30 menit gratis — kami mendengarkan kondisi digital faskes Anda saat ini, lalu merekomendasikan 2-3 solusi, dengan atau tanpa bekerja sama dengan kami.
            </p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <UButton
            href="https://wa.me/6282230712718"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            class="px-4 rounded-full justify-center"
            color="success"
          >
            <Icon name="i-mdi-whatsapp" class="text-lg" />
            Hubungi via WhatsApp
            <Icon name="i-heroicons-arrow-top-right-on-square" class="text-lg" />
          </UButton>
          <UButton
            href="mailto:core@eskala.id"
            size="xl"
            class="px-4 rounded-full justify-center"
            color="neutral"
            variant="outline"
          >
            <Icon name="i-heroicons-envelope" class="text-lg" />
            Kirim brief melalui email
            <Icon name="i-heroicons-arrow-top-right-on-square" class="text-lg" />
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
