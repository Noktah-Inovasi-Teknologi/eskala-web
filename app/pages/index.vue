<script lang="ts" setup>
import type { TimelineItem } from "@nuxt/ui";

const keyPoints = ref([
  {
    title: "Dipercaya 12+ fasilitas kesehatan di Indonesia",
    icon: "i-heroicons-shield-check",
  },
  {
    title:
      "Bersandar pada regulasi kesehatan Indonesia dan standar medis Internasional",
    icon: "i-heroicons-document-check",
  },
  {
    title: "Kontrak fleksibel tanpa komitmen tahunan",
    icon: "i-heroicons-document-text",
  },
  {
    title: "Tim tersertifikasi Meta & Google",
    icon: "i-heroicons-academic-cap",
  },
]);

const keyQuestions = ref([
  {
    number: "01",
    title: "Berapa lama sampai terlihat hasilnya?",
    answer:
      "Bulan 1-3 adalah tahap audit dan membangun fondasi. Momentum pertama (engagement naik, DM pasien mulai berdatangan) biasanya terlihat di bulan 4-6. Pertumbuhan yang compounding terjadi setelah bulan ke-7.",
  },
  {
    number: "02",
    title: "Apakah Eskala memahami regulasi iklan kesehatan?",
    answer:
      "Ya. Setiap konten dan creative iklan melewati medical review internal sebelum tayang, mengacu pada pedoman KKI dan Kemenkes. Kami menolak claim yang bersifat superlatif atau menjanjikan kesembuhan — dan kami akan menjelaskan alasannya kepada tim Anda.",
  },
  {
    number: "03",
    title: "Bagaimana jika kami sudah memiliki tim internal?",
    answer:
      "Kami bekerja dua arah: menggantikan agensi lama, atau bermitra dengan tim internal Anda. Banyak klien menggunakan kami untuk strategi dan produksi, sementara admin sosmed mereka menangani community management. Kami sesuaikan dengan struktur yang sudah ada.",
  },
  {
    number: "04",
    title: "Apakah kontraknya mengikat?",
    answer:
      "Tidak. Kontrak kami berjalan per semester dengan notice period 30 hari. Kami lebih memilih klien yang memperpanjang karena hasil, bukan karena terikat dengan kami. 90% klien kami memperpanjang kontrak setelah 6 bulan pertama.",
  },
]);

const expectedResults = ref([
  {
    number: "01",
    stage: "BULAN 1-3",
    title: "Riset & Strategi",
    description:
      "Kami mulai dengan riset mengenai faskes, target pasien, dan posisi Anda, menyusun strategi, lalu memproduksi konten sejak bulan pertama. Fokusnya ada pada konsistensi, belum pada angka dan metrik lainnya.",
    detail: [
      "Riset dan audit faskes & kompetitor",
      "Pembuatan atau improvisasi Content Pillars",
      "Posting rutin berdasarkan Content Plan",
      "Views dan engagement meningkat 10-30% tiap bulan",
    ],
  },
  {
    number: "02",
    stage: "BULAN 4-6",
    title: "Fondasi & Momentum Awal",
    description:
      "Konten mulai menemukan audience-nya. DM dan konsultasi dari pasien potensial mulai berdatangan secara organik. Iklan bisa mulai dijalankan, tapi hasilnya masih belum stabil dan sangat bergantung pada kualitas konten organik yang sudah ada.",
    detail: [
      "Follower organik naik 3-15% tiap bulan",
      "Data telah cukup untuk optimasi konten dan memulai iklan",
      "1-2 konten viral (±10-50k reach)",
      "DM pasien potensial mulai berdatangan",
    ],
  },
  {
    number: "03",
    stage: "BULAN 7-12",
    title: "Pertumbuhan & Optimasi",
    description:
      "Performa konten mulai stabil dengan pertumbuhan yang compounding. Iklan lebih efisien dan mulai memberikan hasil yang konsisten dan terukur. Rujukan via media sosial mulai menjadi saluran yang konsisten.",
    detail: [
      "ROAS Ads 3-33x tergantung platform dan target",
      "Konsultasi via DM meningkat signifikan",
      "Identitas faskes sudah lebih mudah diingat dan dipercaya pasien",
      "Repeat appointment dari pasien yang datang via media sosial mulai terlihat",
    ],
  },
]);

const items = ref<TimelineItem[]>([
  {
    date: "Bulan 0",
    header: "Pendekatan Awal",
    description:
      "Eskala mendekati Klinik Utama Gresik (KUG), salah satu cabang dari SMEC Group. Kami berhasil mendapatkan audiensi dengan tim Digital Marketing mereka dan mempresentasikan proposal kami. Mereka setuju untuk memberikan kesempatan trial selama 1 bulan — tantangan yang kami terima dengan penuh percaya diri sebagai startup yang siap membuktikan diri.",
    icon: "i-heroicons-hand-raised",
  },
  {
    date: "Bulan 1",
    header: "Produksi Dimulai",
    description:
      "Content production untuk KUG resmi berjalan. Tim kami langsung membangun pipeline konten, menyesuaikan dengan brand guidelines, dan memastikan ritme posting yang konsisten sejak hari pertama.",
    icon: "i-heroicons-rocket-launch",
  },
  {
    date: "Bulan 3",
    header: "Kepercayaan Terbukti",
    description:
      "Konten KUG berjalan lancar dengan peningkatan engagement dan reach yang terukur. Klien sangat puas, hingga SMEC Group mulai mempercayakan 2 cabang tambahan kepada kami, termasuk cabang yang sebelumnya ditangani agensi lain yang performanya kurang memuaskan.",
    icon: "i-heroicons-trophy",
  },
  {
    date: "Bulan 6",
    header: "Ekspansi Besar",
    description:
      "Cabang terus bertambah hingga total 7 cabang. Untuk pertama kalinya, kami dipercaya menangani akun level rumah sakit — RS SMEC Balikpapan — serta akun pusat SMEC Group. Di titik ini, kami juga mulai menjalankan kampanye Ads untuk beberapa cabang, menambah channel pertumbuhan baru di samping strategi konten organik.",
    icon: "i-heroicons-arrow-trending-up",
  },
  {
    date: "Bulan 12",
    header: "Leads Membanjir",
    description:
      "Kampanye Ads menghasilkan volume leads yang melampaui kapasitas customer care klien. Konten organik terus memperkuat brand authority di seluruh akun yang dikelola, menciptakan efek compounding bersama paid channel.",
    icon: "i-heroicons-fire",
  },
  {
    date: "Bulan 18",
    header: "Dominasi Pasar",
    description:
      "Dengan performa Ads yang terbukti, SMEC Group meningkatkan budget iklan secara signifikan. Strategi paid dan organik bekerja beriringan, memperkuat posisi mereka sebagai salah satu fasilitas eye-care terdepan di Indonesia. Apa yang dimulai sebagai trial 1 bulan dengan satu cabang, telah berkembang menjadi kemitraan digital multi-cabang berskala penuh.",
    icon: "i-heroicons-star",
  },
]);

const services = ref([
  {
    label: "Social Media Management",
    shortDescription:
      "Kelola seluruh aspek media sosial Anda dari strategi hingga eksekusi dengan pendekatan yang komprehensif dan terukur.",
    link: "/services/social-media-management",
    icon: "i-heroicons-chat-bubble-left-right",
    tagline: "Hadir Konsisten, Tumbuh Organik",
    information:
      "Cocok untuk faskes yang sudah memiliki media sosial tetapi belum memiliki strategi konten yang konsisten.",
    description:
      "Kalender konten bulanan untuk media sosial klinik Anda. Kami menyusun, memproduksi, dan mem-publish konten dari awal hingga akhir.",
    point: [
      "Content pillars yang konsisten",
      "Community management harian",
      "Backup konten untuk kebutuhan mendadak",
      "Laporan performa bulanan",
    ],
  },
  {
    label: "Digital Marketing",
    shortDescription:
      "Cocok untuk faskes yang sudah memiliki konten organik stabil dan siap memperluas jangkauan pasien berbayar.",
    link: "/services/digital-marketing",
    icon: "i-heroicons-cursor-arrow-rays",
    tagline: "Iklan yang Tepat, Hasil yang Maksimal",
    information:
      "Cocok untuk faskes yang sudah memiliki konten organik stabil dan siap memperluas jangkauan pasien berbayar.",
    description:
      "Jangkau audiens dengan digital marketing dan iklan yang tertarget. Tersedia untuk platform Meta, TikTok, dan Google untuk menjangkau pasien potensial di area layanan faskes Anda.",
    point: [
      "Geo-targeting dalam radius jangkauan faskes",
      "Optimasi iklan untuk hasil terbaik",
      "A/B testing target pasien",
      "Laporan performa iklan dan ROAS",
    ],
  },
]);

const vipService = ref({
  title: "VIP",
  description:
    "Penanganan kreatif lengkap all-in-one. Bundel Social Media Management dengan layanan kreatif premium untuk bisnis yang menginginkan kualitas terbaik.",
  link: "/services/vip",
  icon: "i-heroicons-sparkles",
  tagline: "Semua Kebutuhan Kreatif, Satu Tim Ahli",
  includes: [
    "Full Social Media Management",
    "Graphic Design",
    "Video Production",
    "Copywriting",
    "Photography",
  ],
});

const packageSMMSections = [
  {
    title: "FOKUS & OUTPUT KONTEN",
    keys: ["feed", "shortVideo", "maxSocialMedia"] as const,
  },
  {
    title: "PRODUKSI & EKSEKUSI",
    keys: [
      "photography",
      "videography",
      "contentEdit",
      "copywriting",
      "revision",
    ] as const,
  },
  {
    title: "STRATEGI & PERENCANAAN",
    keys: [
      "monthlyContentPlan",
      "medicalReview",
      "contentPillars",
      "communityManagement",
      "competitorAnalysis",
    ] as const,
  },
  {
    title: "LAPORAN & EVALUASI",
    keys: ["monthlyReport", "monthlyReviewMeeting"] as const,
  },
];

const featureLabels: Record<string, string> = {
  mainFocus: "Fokus Utama",
  feed: "Feed (Post/Carousel)",
  shortVideo: "Short Video (Reels)",
  maxSocialMedia: "Maks. Platform",
  photography: "Fotografi",
  videography: "Videografi",
  contentEdit: "Editing Konten",
  copywriting: "Copywriting",
  revision: "Revisi",
  monthlyContentPlan: "Content Plan Bulanan",
  medicalReview: "Medical Review",
  contentPillars: "Content Pillars",
  communityManagement: "Community Management",
  competitorAnalysis: "Competitor Analysis",
  monthlyReport: "Laporan Bulanan",
  monthlyReviewMeeting: "Review Meeting Bulanan",
};

const packageSMMRaw = ref([
  {
    mainFocus: "Konsistensi kehadiran faskes",
    feed: 8,
    shortVideo: 4,
    maxSocialMedia: "1",
    photography: true,
    videography: true,
    contentEdit: true,
    copywriting: true,
    revision: "Unlimited",
    monthlyContentPlan: true,
    medicalReview: true,
    contentPillars: false,
    communityManagement: false,
    competitorAnalysis: false,
    monthlyReport: "Basic",
    monthlyReviewMeeting: true,
  },
  {
    mainFocus: "Konsistensi kehadiran faskes",
    feed: 10,
    shortVideo: 7,
    maxSocialMedia: "2 (Mirroring)",
    photography: true,
    videography: true,
    contentEdit: true,
    copywriting: true,
    revision: "Unlimited",
    monthlyContentPlan: true,
    medicalReview: true,
    contentPillars: true,
    communityManagement: false,
    competitorAnalysis: false,
    monthlyReport: "Detailed",
    monthlyReviewMeeting: true,
  },
  {
    mainFocus: "Konsistensi kehadiran faskes",
    feed: 16,
    shortVideo: 8,
    maxSocialMedia: "3",
    photography: true,
    videography: true,
    contentEdit: true,
    copywriting: true,
    revision: "Unlimited",
    monthlyContentPlan: true,
    medicalReview: true,
    contentPillars: true,
    communityManagement: true,
    competitorAnalysis: true,
    monthlyReport: "Detailed + Competitor Analysis",
    monthlyReviewMeeting: true,
  },
]);

const packageSMMTitles = ["Starter", "Standard", "Premium"];

interface Testimonial {
  quote: string;
  name: string;
  position: string;
}

function getAcronym(name: string): string {
  const namePart = name.split(",")[0] ?? "";
  const words = namePart
    .split(/\s+/)
    .filter((w) => w.length >= 2 && /^[A-Z]/.test(w) && !w.includes("."));
  return words
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

const testimonials = ref<Testimonial[]>([
  {
    quote:
      "Eskala benar-benar mendengarkan kami, ini hal yang jarang saya temukan pada agensi lain. Tim mereka datang langsung ke klinik, berdiskusi dengan perawat, dan memahami pasien kami terlebih dahulu sebelum memproduksi satu pun konten.",
    name: "dr. Sukardi, MARS, FISQua",
    position: "Direktur Utama, PT Sumatera Cahaya Mandiri (SMEC Group)",
  },
  {
    quote:
      "Selama bekerja dengan Eskala, saya melihat peningkatan yang signifikan dalam engagement media sosial kami. Konten yang mereka buat benar-benar ngena ke audiens kami, revenue kami meningkat sangat signifikan karena pasien akhirnya mengetahui keberadaan klinik kami.",
    name: "dr. Ekhtiyanto Cahyadi Khusnul Yakin, Sp.KG",
    position: "Owner & Dokter Spesialis Konservasi Gigi, Ecky Dental Center",
  },
]);
</script>

<template>
  <div>
    <UContainer
      id="section-hero"
      class="flex flex-col gap-12 pt-24 items-center relative"
    >
      <div class="flex gap-12 items-center">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Untuk fasilitas kesehatan di Indonesia
          </p>
          <div class="flex flex-col">
            <h1 class="font-display text-obsidian-950 font-bold text-7xl">
              Gaungkan kualitas pelayanan Anda,
            </h1>
            <h1 class="font-display text-cobalt-500 font-bold text-7xl">
              genggam hati pasien Anda.
            </h1>
          </div>
          <p class="font-body text-obsidian-950 mt-8 text-xl">
            Eskala adalah tim kreatif berbasis di Yogyakarta. Kami bekerja
            berdampingan dengan tim internal dan klinis Anda, untuk menciptakan
            konten digital yang sesuai standar medis, dan dapat membangun
            kepercayaan pasien terhadap fasilitas kesehatan Anda.
          </p>
        </div>
        <div>
          <div
            class="flex flex-col p-8 gap-8 rounded-3xl border border-copper-200 bg-copper-50"
          >
            <Icon
              name="i-heroicons-chat-bubble-left"
              class="text-copper-500 text-4xl"
            />
            <p class="font-body font-medium text-2xl text-obsidian-950">
              "Saya ingin faskes lebih mengerti dan lebih masuk dalam dunia
              pasien. Kita bisa lakukan itu secara digital."
            </p>
            <div class="flex gap-3 items-center">
              <div
                class="w-9 h-9 rounded-full bg-copper-500 flex items-center justify-center text-white font-semibold text-sm shrink-0"
              >
                DP
              </div>
              <div class="flex flex-col">
                <p class="font-semibold text-obsidian-900">Donny Putra N.H.</p>
                <p class="text-sm text-obsidian-600">
                  Manager Digital Marketing SMEC Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-12 items-center">
        <UButton
          href="https://wa.me/6285706034321"
          size="xl"
          class="px-4 rounded-full"
          color="neutral"
        >
          <div class="w-2 h-2 bg-copper-500 rounded-full"></div>
          Jadwalkan konsultasi gratis dengan kami
        </UButton>
        <UButton
          :to="{ path: '/cases' }"
          target="_blank"
          size="xl"
          class="px-4 rounded-full"
          color="neutral"
          variant="link"
        >
          atau pelajari cerita klien kami
          <Icon name="i-heroicons-arrow-top-right-on-square" class="text-sm" />
        </UButton>
      </div>
      <USeparator color="obsidian" />
      <div class="flex justify-between gap-12">
        <div
          v-for="point in keyPoints"
          :key="point.title"
          class="flex items-center gap-4"
        >
          <Icon :name="point.icon" class="text-primary text-4xl" />
          <p class="text-obsidian-950 font-medium text-sm">{{ point.title }}</p>
        </div>
      </div>
      <USeparator color="obsidian" />
    </UContainer>
    <div id="section-key-question" class="bg-obsidian-100">
    <UContainer class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Pertanyaan yang sering kami terima
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            <span class="text-cobalt-500">Empat pertanyaan</span> yang hampir selalu muncul pada audiensi pertama.
          </h2>
        </div>
        <div class="flex flex-col gap-12">
          <div
            v-for="question in keyQuestions"
            :key="question.title"
            class="flex flex-col gap-12"
          >
            <USeparator color="obsidian" />
            <div class="flex justify-between gap-12">
              <p class="font-display text-4xl font-bold italic text-copper-500">
                {{ question.number }}
              </p>
              <h3
                class="font-display text-2xl font-semibold text-obsidian-950 basis-2/5"
              >
                {{ question.title }}
              </h3>
              <div class="flex flex-col gap-8 basis-3/5">
                <p
                  class="font-display font-semibold text-sm text-cobalt-500 tracking-widest"
                >
                  JAWABAN KAMI
                </p>
                <p class="font-body text-lg text-obsidian-700 font-light">
                  {{ question.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
    </div>
    <UContainer id="section-services" class="flex gap-12 py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Layanan yang kami tawarkan
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            <span class="text-cobalt-500">Dua layanan utama</span> kami yang sesuai dengan kebutuhan Anda.
          </h2>
          <p class="font-body text-lg text-obsidian-700 font-light">
            Klik untuk melihat detailnya. Sebagian besar klinik memulai dengan
            layanan SMM, lalu menambahkan Digital Marketing ketika konten
            organik mereka sudah cukup matang.
          </p>
        </div>
      </div>
      <UAccordion :items="services" class="w-full">
        <template #body="{ item }">
          <div class="flex flex-col gap-8">
            <p class="text-obsidian-700 text-lg">{{ item.description }}</p>
            <UBadge
              color="secondary"
              size="lg"
              class="px-4 py-2 rounded-full"
              variant="subtle"
            >
              <Icon name="i-heroicons-check-badge" class="text-3xl" />{{
                item.information
              }}
            </UBadge>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="point in item.point"
                :key="point"
                class="flex gap-2 items-center"
              >
                <div class="w-2 h-2 bg-copper-500 rounded-full" />
                <p class="text-obsidian-700">{{ point }}</p>
              </div>
            </div>
          </div>
        </template>
      </UAccordion>
    </UContainer>
    <div id="section-expected-results" class="bg-obsidian-950">
    <UContainer class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Ekspektasi hasil
          </p>
          <h2 class="font-display text-obsidian-50 font-bold text-5xl">
            <span class="text-cobalt-400">Hasil yang dapat Anda harapkan</span> setelah bekerja sama dengan kami.
          </h2>
          <p class="font-body text-lg text-obsidian-300 font-light">
            Pengelolaan media sosial faskes dapat dianalogikan sebagai lomba
            maraton, bukan sprint. Butuh waktu yang tidak sebentar untuk
            membangun kehadiran online yang kuat dan mendapatkan kepercayaan
            pasien. Berikut adalah timeline output realistis berdasarkan
            pengalaman kami bersama faskes di Indonesia.
          </p>
        </div>
      </div>
      <div class="flex gap-12 content-stretch">
        <div
          v-for="result in expectedResults"
          :key="result.title"
          class="flex flex-col gap-8 rounded-3xl border border-obsidian-700 bg-obsidian-900 p-8 basis-1/3"
        >
          <div class="flex items-center justify-between gap-8">
            <p
              class="font-display text-copper-500 tracking-widest font-semibold text-sm"
            >
              {{ result.stage }}
            </p>
            <p class="text-obsidian-300 font-semibold">{{ result.number }}</p>
          </div>
          <h3 class="font-display text-2xl font-bold text-obsidian-50">
            {{ result.title }}
          </h3>
          <p class="font-body text-obsidian-300">{{ result.description }}</p>
          <USeparator color="obsidian" />
          <div class="flex flex-col gap-4">
            <div v-for="detail in result.detail" class="flex flex-col">
              <div class="flex items-center gap-4">
                <Icon name="i-heroicons-check" class="text-secondary text-xl" />
                <p class="text-obsidian-300 basis-4/5 text-sm">{{ detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
    </div>
    <div id="section-case-study" class="bg-obsidian-200">
    <UContainer class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Studi kasus
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            1,5 tahun bersama <span class="text-cobalt-500">SMEC Group</span>.
          </h2>
          <p class="font-body text-lg text-obsidian-700 font-light">
            SMEC Group adalah salah satu grup fasilitas kesehatan mata terbesar
            di Indonesia dengan lebih dari 10 cabang di seluruh Indonesia. Kami
            telah bekerja sama dengan SMEC Group sejak tahun 2024 untuk
            mengelola media sosial dan iklan mereka, dan membantu mereka
            membangun kehadiran online yang kuat, serta meningkatkan engagement
            dan kepercayaan pasien melalui konten yang konsisten dan berkualitas
            tinggi.
          </p>
        </div>
      </div>
      <div class="">
        <UTimeline
          :items="items"
          color="primary"
          :default-value="items.length"
          size="3xl"
        >
          <template #description="{ item }">
            <div
              class="mt-8 flex flex-col gap-4 p-8 rounded-3xl border border-obsidian-300 bg-obsidian-50"
            >
              <h3 class="font-display text-3xl font-bold text-obsidian-950">
                {{ item.header }}
              </h3>
              <p class="text-obsidian-700 text-lg">{{ item.description }}</p>
            </div>
          </template>
          <template #date="{ item }">
            <p
              class="ml-8 text-copper-500 font-display font-semibold text-sm tracking-widest"
            >
              {{ item.date?.toUpperCase() }}
            </p>
          </template>
        </UTimeline>
        <div class="w-full flex justify-center">
          <UButton
            :to="{ path: '/cases' }"
            target="_blank"
            size="xl"
            class="px-4 rounded-full"
            color="neutral"
            variant="link"
          >
            pelajari cerita klien lainnya dalam studi kasus kami
            <Icon
              name="i-heroicons-arrow-top-right-on-square"
              class="text-sm"
            />
          </UButton>
        </div>
      </div>
    </UContainer>
    </div>
    <div id="section-package" class="bg-obsidian-950">
    <UContainer class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Paket layanan kami
          </p>
          <div class="flex gap-8">
            <h2 class="font-display text-obsidian-50 font-bold text-5xl">
              End-to-end Social Media Management
            </h2>
            <p class="font-body text-lg text-obsidian-300 font-light">
              Kelola sosial media klinik Anda secara menyeluruh: strategi
              konten, produksi visual, posting, hingga monitoring. Dari awal
              hingga akhir, tinggal terima beres.
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-obsidian-950 border border-obsidian-700 rounded-xl overflow-hidden"
      >
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-obsidian-700">
              <th class="text-left p-6 w-1/4"></th>
              <th
                v-for="(pkg, i) in packageSMMRaw"
                :key="i"
                :class="[
                  'text-left p-6 border-l border-obsidian-700',
                  i === 1 && 'bg-cobalt-950/40 border-t-2 border-t-cobalt-500',
                ]"
              >
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl font-semibold text-obsidian-50">{{
                      packageSMMTitles[i]
                    }}</span>
                    <UBadge
                      v-if="i === 1"
                      label="POPULER"
                      color="secondary"
                      variant="solid"
                      class="text-obsidian-950 font-display tracking-widest font-bold"
                    />
                  </div>
                  <span class="text-sm text-obsidian-300">{{
                    pkg.mainFocus
                  }}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="section in packageSMMSections"
              :key="section.title"
            >
              <tr class="border-b border-obsidian-700 bg-obsidian-900">
                <td
                  colspan="4"
                  class="px-6 py-3 text-obsidian-50 text-xs font-semibold tracking-widest"
                >
                  {{ section.title }}
                </td>
              </tr>
              <tr
                v-for="key in section.keys"
                :key="key"
                class="border-b border-obsidian-700 hover:bg-obsidian-900"
              >
                <td class="px-6 py-4 text-obsidian-50 text-sm font-medium">
                  {{ featureLabels[key] }}
                </td>
                <td
                  v-for="(pkg, i) in packageSMMRaw"
                  :key="i"
                  :class="[
                    'px-6 py-4 border-l border-obsidian-700',
                    i === 1 && 'bg-cobalt-950/40',
                  ]"
                >
                  <UIcon
                    v-if="pkg[key] === true"
                    name="i-heroicons-check"
                    class="text-copper-500 text-2xl"
                  />
                  <UIcon
                    v-else-if="pkg[key] === false"
                    name="i-heroicons-minus"
                    class="text-obsidian-300 text-2xl"
                  />
                  <span v-else class="text-obsidian-50 text-sm">{{
                    pkg[key]
                  }}</span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="flex gap-12 justify-center">
        <UButton
          href="https://wa.me/6285706034321"
          size="xl"
          class="px-4 rounded-full"
          color="secondary"
        >
          <div class="w-2 h-2 bg-cobalt-500 rounded-full"></div>
          <p class="text-obsidian-950">
            Butuh layanan Digital Marketing / Ads? Cek paket kami
          </p>
          <Icon
            name="i-heroicons-arrow-top-right-on-square"
            class="text-sm text-obsidian-950"
          />
        </UButton>
        <UButton
          :to="{ path: '/cases' }"
          target="_blank"
          size="xl"
          class="px-4 rounded-full"
          color="secondary"
          variant="link"
        >
          atau pelajari detail paket layanan social media management kami
          <Icon name="i-heroicons-arrow-top-right-on-square" class="text-sm" />
        </UButton>
      </div>
    </UContainer>
    </div>
    <UContainer id="section-testimonials" class="flex gap-12 py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Apa kata klien kami
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="flex flex-col p-8 gap-8 rounded-3xl border border-copper-200 bg-copper-50"
          >
            <Icon
              name="i-heroicons-chat-bubble-left"
              class="text-copper-500 text-4xl"
            />
            <p class="font-body font-medium text-2xl text-obsidian-950">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex gap-3 items-center">
              <div
                class="w-9 h-9 rounded-full bg-copper-500 flex items-center justify-center text-white font-semibold text-sm shrink-0"
              >
                {{ getAcronym(testimonial.name) }}
              </div>
              <div class="flex flex-col">
                <p class="font-semibold text-obsidian-900">
                  {{ testimonial.name }}
                </p>
                <p class="text-sm text-obsidian-600">
                  {{ testimonial.position }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
    <UContainer id="section-call-to-action" class="flex flex-col gap-12 py-24">
      <div
        class="border border-cobalt-200 bg-cobalt-50 rounded-2xl p-10 lg:p-14 flex flex-col gap-12"
      >
        <!-- Top: subtitle+title (left) and description (right) -->
        <div class="flex gap-12 items-center">
          <div class="flex flex-col gap-4 flex-1">
            <p
              class="font-display font-semibold text-xs tracking-widest text-cobalt-500 uppercase"
            >
              SIAP UNTUK BERDISKUSI?
            </p>
            <h2
              class="font-display font-bold text-5xl text-obsidian-950 leading-tight"
            >
              Konsultasi <span class="text-cobalt-500">30 menit</span>, tanpa
              biaya
            </h2>
          </div>
          <div class="basis-2/5">
            <p
              class="font-body text-lg text-obsidian-600 font-light leading-relaxed"
            >
              Kami akan mendengarkan masalah Anda, melakukan audit, lalu
              merekomendasikan tiga solusi, dengan atau tanpa bekerja sama
              dengan kami.
            </p>
          </div>
        </div>
        <!-- Buttons -->
        <div class="flex flex-row justify-center gap-8">
          <UButton
            href="https://wa.me/6285706034321"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            class="px-4 rounded-full"
            color="success"
          >
            <Icon name="i-mdi-whatsapp" class="text-lg" />
            Hubungi via WhatsApp
            <Icon
              name="i-heroicons-arrow-top-right-on-square"
              class="text-lg"
            />
          </UButton>
          <UButton
            href="mailto:core@eskala.id"
            size="xl"
            class="px-4 rounded-full"
            color="neutral"
            variant="outline"
          >
            <Icon name="i-heroicons-envelope" class="text-lg" />

            Kirim brief melalui email
            <Icon
              name="i-heroicons-arrow-top-right-on-square"
              class="text-lg"
            />
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
