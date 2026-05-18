<script lang="ts" setup>
useSeoMeta({
  title: "FAQ — Eskala",
  description:
    "Temukan jawaban atas pertanyaan umum seputar layanan Eskala — Social Media Management, Digital Marketing, kontrak, harga, dan cara kerja kami bersama faskes Anda.",
  ogTitle: "FAQ — Eskala",
  twitterCard: "summary_large_image",
  ogDescription:
    "Pertanyaan umum seputar Social Media Management, Digital Marketing, kontrak, medical review, dan cara kerja Eskala bersama klinik dan rumah sakit.",
  ogUrl: "https://eskala.id/faq",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
  twitterTitle: "FAQ — Eskala",
  twitterDescription:
    "Jawaban atas pertanyaan umum tentang layanan Eskala untuk fasilitas kesehatan Indonesia.",
  twitterImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/faq" }],
});

interface FaqItem {
  label: string
  answer: string
  category: string
}

const categories = [
  { label: "Tentang Eskala", value: "general" },
  { label: "Layanan & Harga", value: "services" },
  { label: "Proses & Eksekusi", value: "process" },
  { label: "Kontrak & Fleksibilitas", value: "contract" },
];

const selectedCategory = ref("general");

const allFaqs = ref<FaqItem[]>([
  // Tentang Eskala
  {
    label: "Apa itu Eskala?",
    answer:
      "Eskala adalah digital marketing agency berbasis di Yogyakarta, spesialis membantu fasilitas kesehatan: klinik, rumah sakit, dan brand kesehatan untuk tumbuh di dunia digital melalui Social Media Management dan Digital Marketing.",
    category: "general",
  },
  {
    label: "Apa yang membedakan Eskala dari agensi lain?",
    answer:
      "Kami bukan vendor generik. Setiap konten melewati medical review oleh tim ahli kami yang mengacu pada pedoman KKI dan Kemenkes. Kami menawarkan revisi unlimited, eksekusi cepat, dan kontrak fleksibel per semester. Tim kami tersertifikasi Meta & Google.",
    category: "general",
  },
  {
    label: "Siapa klien ideal Eskala?",
    answer:
      "Faskes yang media sosialnya belum dikelola secara optimal, klinik atau RS yang ingin memperluas jangkauan pasien secara digital, atau brand kesehatan yang siap berinvestasi dalam partnership marketing profesional. Eskala kurang cocok untuk faskes yang belum beroperasi.",
    category: "general",
  },
  {
    label: "Di mana Eskala beroperasi?",
    answer:
      "Eskala berbasis di Yogyakarta, namun melayani fasilitas kesehatan di seluruh Indonesia secara remote. Produksi konten, strategi, dan pelaporan dilakukan secara digital.",
    category: "general",
  },
  // Layanan & Harga
  {
    label: "Apa saja layanan yang ditawarkan Eskala?",
    answer:
      "Eskala menawarkan dua layanan utama: Social Media Management dan Digital Marketing (Ads Management mulai 10% dari ad spend).",
    category: "services",
  },
  {
    label: "Berapa harga paket Social Media Management?",
    answer:
      "Ada tiga tier: **Starter** untuk 1 platform dengan fokus konsistensi posting — **Standard** untuk 2 platform dengan content pillars dan detailed reporting — **Premium** untuk 3 platform dengan community management dan competitor analysis. Semua tier termasuk fotografi, videografi, medical review, dan revisi unlimited.",
    category: "services",
  },
  {
    label: "Bagaimana sistem harga Digital Marketing?",
    answer:
      "Fee dihitung berdasarkan persentase dari total ad spend: **Starter 10%**, **Standard 15%**, **Premium 20%**. Anda dapat memilih satu platform di antara Meta, TikTok, atau Google. Mencakup campaign setup, A/B testing, geo-targeting, optimasi mingguan, medical review untuk creative, serta laporan bulanan dan monthly review meeting. Tidak ada retainer tetap yang besar di awal.",
    category: "services",
  },
  // Proses & Eksekusi
  {
    label: "Berapa lama sampai terlihat hasilnya?",
    answer:
      "Bulan 1-3 adalah tahap riset dan membangun fondasi. Momentum pertama (engagement naik, DM pasien mulai berdatangan) biasanya terlihat di bulan 4-6. Pertumbuhan compounding terjadi setelah bulan ke-7.",
    category: "process",
  },
  {
    label: "Apa itu medical review dan bagaimana prosesnya?",
    answer:
      "Setiap konten dan iklan yang kami buat, telah melewati review oleh tim ahli kami sebelum dipublikasikan, mengacu pada pedoman KKI dan Kemenkes. Kami siap berdiskusi dengan tim medis Anda untuk memastikan setiap konten sejalan dengan standar yang berlaku.",
    category: "process",
  },
  {
    label: "Apakah revisi konten dibatasi?",
    answer:
      "Tidak. Semua paket Eskala menawarkan revisi tak hingga tanpa biaya tambahan. Kami percaya hasil terbaik lahir dari kolaborasi, bukan pembatasan revisi.",
    category: "process",
  },
  {
    label: "Apakah Eskala mengerjakan fotografi dan videografi di lokasi?",
    answer:
      "Ya, semua paket SMM sudah mencakup fotografi dan videografi. Untuk klien di luar Yogyakarta, kami koordinasikan jadwal kunjungan atau alternatif produksi yang sesuai.",
    category: "process",
  },
  // Kontrak & Fleksibilitas
  {
    label: "Apakah kontrak Eskala mengikat jangka panjang?",
    answer:
      "Tidak. Kontrak berjalan per semester (6 bulan) dengan notice period 30 hari. Kami lebih memilih klien yang memperpanjang karena puas dengan hasil, bukan karena terikat. 80% klien kami memperpanjang kontrak setelah 6 bulan pertama.",
    category: "contract",
  },
  {
    label: "Bagaimana jika kami sudah punya tim media sosial internal?",
    answer:
      "Kami bekerja dua arah: menggantikan agensi lama, atau bermitra dengan tim internal Anda. Banyak klien menggunakan Eskala untuk strategi dan produksi, sementara tim admin mereka menangani community management. Kami sesuaikan dengan struktur yang sudah ada.",
    category: "contract",
  },
  {
    label: "Apakah ada biaya konsultasi awal?",
    answer:
      "Konsultasi awal sepenuhnya gratis.",
    category: "contract",
  },
]);

const filteredFaqs = computed(() =>
  allFaqs.value.filter((f) => f.category === selectedCategory.value),
);
</script>

<template>
  <div>
    <!-- Hero -->
    <UContainer id="section-hero" class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 sm:py-16 md:py-20 lg:py-24 items-center relative">
      <div class="flex flex-col gap-8 max-w-4xl text-center items-center">
        <p class="font-display text-copper-500 font-medium">──────── FAQ</p>
        <h1 class="font-display text-obsidian-950 font-bold text-4xl sm:text-5xl lg:text-7xl">
          Pertanyaan yang sering kami terima.
        </h1>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Belum menemukan jawaban yang Anda cari? Hubungi kami langsung, kami senang berdiskusi.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch sm:items-center">
        <UButton
          href="https://wa.me/6282230712718"
          target="_blank"
          size="xl"
          class="px-4 rounded-full justify-center"
          color="success"
        >
          <Icon name="i-mdi-whatsapp" class="text-lg" />
          Tanya via WhatsApp
        </UButton>
        <UButton
          href="mailto:core@eskala.id"
          size="xl"
          class="px-4 rounded-full justify-center"
          color="neutral"
          variant="link"
        >
          atau kirim email
          <Icon name="i-heroicons-arrow-top-right-on-square" class="text-sm" />
        </UButton>
      </div>
      <USeparator color="obsidian" />
    </UContainer>

    <!-- FAQ -->
    <div id="section-faq" class="">
      <UContainer class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">──────── Pertanyaan & Jawaban</p>
          <h2 class="font-display text-obsidian-950 font-bold text-3xl sm:text-4xl lg:text-5xl">
            Hal-hal yang biasanya <span class="text-cobalt-500">ditanyakan faskes</span> sebelum mulai.
          </h2>
        </div>
        <UTabs v-model="selectedCategory" :items="categories" />
        <UAccordion :items="filteredFaqs" class="w-full">
          <template #body="{ item }">
            {{ item.answer }}
          </template>
        </UAccordion>
      </UContainer>
    </div>

    <!-- CTA -->
    <UContainer id="section-call-to-action" class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div class="border border-cobalt-200 bg-cobalt-50 rounded-2xl p-6 sm:p-10 lg:p-14 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
          <div class="flex flex-col gap-4 flex-1">
            <p class="font-display font-semibold text-xs tracking-widest text-cobalt-500 uppercase">
              MASIH ADA PERTANYAAN?
            </p>
            <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-obsidian-950 leading-tight">
              Jadwalkan konsultasi gratis <span class="text-cobalt-500">dengan kami</span>.
            </h2>
          </div>
          <div class="md:basis-2/5">
            <p class="font-body text-lg text-obsidian-700 font-light leading-relaxed">
              Konsultasi 30 menit gratis dan tanpa komitmen. Kami akan mendengarkan masalah Anda, lalu merekomendasikan 2-3 solusi yang dapat Anda jalankan dengan atau tanpa Eskala.
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
