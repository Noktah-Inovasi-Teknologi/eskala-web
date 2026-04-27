<script setup lang="ts">
import { caseStudies } from "~/data/case-studies";

useSeoMeta({
  title: "Studi Kasus",
  description:
    "Lihat dokumentasi nyata perjalanan fasilitas kesehatan bersama Eskala — mulai dari konteks awal, strategi yang diterapkan, hingga hasil yang terukur.",
  ogTitle: "Studi Kasus — Eskala Digital Marketing Agency",
  ogDescription:
    "Bukan cuma klaim. Ini cerita nyata klien kami. Lihat bagaimana Eskala membantu klinik, rumah sakit, dan brand kesehatan tumbuh di dunia digital.",
  ogUrl: "https://eskala.id/case-study",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
  twitterTitle: "Studi Kasus — Eskala Digital Marketing Agency",
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
  { label: "Opthalmology", value: "opthalmology" },
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
      class="flex flex-col gap-12 py-24 items-center relative"
    >
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Studi kasus
        </p>
        <div class="flex gap-8">
          <div class="flex flex-col">
            <h1 class="font-display text-obsidian-950 font-bold text-7xl">
              Bukan cuma klaim,
            </h1>
            <h1 class="font-display text-cobalt-500 font-bold text-7xl">
              <span class="text-obsidian-950">Ini</span> cerita klien kami.
            </h1>
          </div>
          <p class="font-body text-lg text-obsidian-700 font-light basis-1/3">
            Setiap studi kasus di bawah ini adalah dokumentasi nyata dari
            perjalanan fasilitas kesehatan dan bisnis lainnya bersama Eskala.
            Studi kasus berisikan informasi yang lengkap dengan konteks awal,
            strategi yang kami terapkan, dan hasil yang terukur. Tersedia untuk
            diunduh melalui WhatsApp.
          </p>
        </div>
      </div>
      <div
        class="w-full grid grid-cols-4 divide-x divide-obsidian-300 border-obsidian-300 border rounded-3xl"
      >
        <div
          v-for="(item, index) in achievement"
          :key="index"
          class="flex flex-col p-8 gap-2"
          :class="{ 'bg-obsidian-950': index === 2 }"
        >
          <h2
            class="font-display font-bold text-4xl"
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
        <div class="w-full flex justify-between items-center">
          <p>{{ displayText }}</p>
          <UTabs v-model="selectedCategory" :items="caseStudyCategories" />
        </div>
        <div class="grid grid-cols-3 gap-4">
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
                <div class="flex justify-between">
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
          class="mt-8 w-full flex justify-center"
          :total="filteredCaseStudies.length"
          :items-per-page="itemsPerPage"
        />
      </div>
    </UContainer>
  </div>
</template>
