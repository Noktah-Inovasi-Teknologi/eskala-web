<script lang="ts" setup>
useSeoMeta({
  title: "Digital Marketing",
  description:
    "Optimalkan iklan digital (Meta, TikTok, Google) dan kolaborasi KOC untuk memperluas jangkauan pasien faskes Anda. Fee berbasis persentase ad spend, tanpa biaya tetap besar.",
  ogTitle: "Digital Marketing untuk Fasilitas Kesehatan | Eskala",
  ogDescription:
    "Iklan yang tepat, hasil yang maksimal. Ads Management + KOC Management khusus klinik dan rumah sakit. Fee mulai 15% dari ad spend — transparan, terukur.",
  ogUrl: "https://eskala.id/services/digital-marketing",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
  twitterTitle: "Digital Marketing untuk Fasilitas Kesehatan | Eskala",
  twitterDescription:
    "Ads Management & KOC Management untuk klinik dan RS. Mulai 15% dari ad spend di Meta, TikTok, Google.",
  twitterImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/services/digital-marketing" }],
});

const keyPoints = ref([
  {
    title: "Tim tersertifikasi Meta & Google",
    icon: "i-heroicons-academic-cap",
  },
  {
    title: "Medical review setiap creative iklan",
    icon: "i-heroicons-shield-check",
  },
  {
    title: "Fee berbasis ad spend, transparan",
    icon: "i-heroicons-banknotes",
  },
  {
    title: "Geo-targeting di radius layanan klinik",
    icon: "i-heroicons-map-pin",
  },
]);

const adsCapabilities = ref([
  {
    icon: "i-heroicons-light-bulb",
    title: "Campaign Strategy",
    description:
      "Menyusun struktur kampanye, audience, dan funnel iklan yang sesuai dengan layanan klinik dan tahap pasien Anda.",
  },
  {
    icon: "i-heroicons-clipboard-document-check",
    title: "Creative Brief & Medical Review",
    description:
      "Menyiapkan brief untuk creative iklan, lalu mereview-nya dari sisi regulasi sebelum tayang. Produksi creative tersedia melalui paket VIP.",
  },
  {
    icon: "i-heroicons-map-pin",
    title: "Targeting & Geo-Radius",
    description:
      "Mempersempit audiens ke radius layanan faskes Anda — bukan menghamburkan budget ke kota lain.",
  },
  {
    icon: "i-heroicons-chart-bar",
    title: "Performance Monitoring",
    description:
      "Optimasi mingguan, A/B testing creative, dan laporan ROAS yang dapat dibaca tim non-marketing Anda.",
  },
]);

const platforms = ref([
  {
    icon: "i-simple-icons-meta",
    name: "Meta Ads",
    role: "Facebook & Instagram untuk awareness, edukasi, dan konsultasi DM.",
  },
  {
    icon: "i-simple-icons-tiktok",
    name: "TikTok Ads",
    role: "Reach yang viral untuk audiens muda dan konten format pendek.",
  },
  {
    icon: "i-simple-icons-google",
    name: "Google Ads",
    role: "Menangkap pasien dengan intent aktif yang sedang mencari layanan.",
  },
]);

const kocBenefits = ref([
  "Followers 1K – 100K, masih dipercaya komunitasnya",
  "Pengalaman pengguna nyata, bukan endorsement berbayar",
  "Engagement rate 5–15%, jauh di atas KOL",
  "Biaya jauh lebih efisien per konten",
]);

const kocComparison = ref({
  koc: [
    "Followers: 1K – 100K",
    "Pengalaman pengguna nyata",
    "Engagement rate: 5 – 15%",
    "Biaya terjangkau",
  ],
  kol: [
    "Followers: 100K – 10M+",
    "Endorsement berbayar",
    "Engagement rate: 1 – 3%",
    "Biaya sangat tinggi",
  ],
});

const packageDMSections = [
  {
    title: "STRUKTUR FEE & CAKUPAN",
    keys: ["fee", "platformLimit", "platformScope"] as const,
  },
  {
    title: "PENGELOLAAN IKLAN",
    keys: [
      "campaignSetup",
      "creativeBriefReview",
      "abTesting",
      "geoTargeting",
      "weeklyOptimization",
    ] as const,
  },
  {
    title: "KOC MANAGEMENT",
    keys: ["kocSourcing", "kocCampaign"] as const,
  },
  {
    title: "PELAPORAN",
    keys: ["monthlyReport", "monthlyReviewMeeting"] as const,
  },
];

const featureLabels: Record<string, string> = {
  fee: "Fee management",
  platformLimit: "Maks. Platform",
  platformScope: "Cakupan Platform",
  campaignSetup: "Campaign Setup & Strategy",
  creativeBriefReview: "Creative Brief & Medical Review",
  abTesting: "A/B Testing Creative",
  geoTargeting: "Geo-Targeting Radius Klinik",
  weeklyOptimization: "Optimasi Mingguan",
  kocSourcing: "Sourcing & Seleksi KOC",
  kocCampaign: "Campaign KOC Terkelola",
  monthlyReport: "Laporan Bulanan",
  monthlyReviewMeeting: "Review Meeting Bulanan",
};

const packageDMRaw = ref([
  {
    fee: "15% ad spend",
    platformLimit: "1",
    platformScope: "Meta saja",
    campaignSetup: true,
    creativeBriefReview: true,
    abTesting: false,
    geoTargeting: true,
    weeklyOptimization: true,
    kocSourcing: false,
    kocCampaign: false,
    monthlyReport: "Basic",
    monthlyReviewMeeting: true,
  },
  {
    fee: "20% ad spend",
    platformLimit: "Maks. 2",
    platformScope: "Meta + 1 platform",
    campaignSetup: true,
    creativeBriefReview: true,
    abTesting: true,
    geoTargeting: true,
    weeklyOptimization: true,
    kocSourcing: true,
    kocCampaign: false,
    monthlyReport: "Detailed",
    monthlyReviewMeeting: true,
  },
  {
    fee: "25% ad spend",
    platformLimit: "Multi",
    platformScope: "Meta + TikTok + Google",
    campaignSetup: true,
    creativeBriefReview: true,
    abTesting: true,
    geoTargeting: true,
    weeklyOptimization: true,
    kocSourcing: true,
    kocCampaign: true,
    monthlyReport: "Detailed + KOC Insights",
    monthlyReviewMeeting: true,
  },
]);

const packageDMTitles = ["Starter", "Standard", "Premium"];
const packageDMSubtitles = [
  "Untuk faskes yang baru pertama kali menjalankan iklan.",
  "Untuk faskes yang siap memperluas channel iklan.",
  "Untuk faskes yang ingin all-in di paid + KOC.",
];

const expectedResults = ref([
  {
    number: "01",
    stage: "BULAN 1",
    title: "Setup & Learning",
    description:
      "Memasang pixel & konversi, riset audiens, menyiapkan struktur kampanye, dan menjalankan iklan pertama untuk mengumpulkan data.",
    detail: [
      "Pixel & event tracking terpasang",
      "Audience & geo-radius didefinisikan",
      "Kampanye pertama tayang dalam minggu kedua",
      "Baseline biaya per leads mulai terukur",
    ],
  },
  {
    number: "02",
    stage: "BULAN 2-3",
    title: "Optimization",
    description:
      "Melakukan A/B testing creative, on-boarding KOC, dan mengoptimasi struktur kampanye sampai ROAS mulai stabil.",
    detail: [
      "A/B testing creative & headline",
      "KOC pertama mulai berkolaborasi",
      "Cost per leads turun 20-40% vs bulan 1",
      "ROAS mulai stabil di angka yang sehat",
    ],
  },
  {
    number: "03",
    stage: "BULAN 4+",
    title: "Scaling",
    description:
      "Setelah ROAS stabil, kami menaikkan budget secara bertahap, menambah platform, dan memperluas audiens via lookalike.",
    detail: [
      "Budget di-scale sesuai kapasitas faskes",
      "Platform tambahan mulai dijalankan",
      "Lookalike & retargeting audience aktif",
      "Volume leads konsisten dari paid channel",
    ],
  },
]);

const faqItems = ref([
  {
    number: "01",
    title: "Berapa minimum ad budget yang disarankan?",
    answer:
      "Untuk hasil yang dapat diukur dan dioptimasi, kami menyarankan budget iklan minimal Rp 5 juta per bulan per platform. Di bawah angka itu, data yang terkumpul biasanya belum cukup untuk pengambilan keputusan optimasi.",
  },
  {
    number: "02",
    title: "Apakah pembuatan ad creative termasuk?",
    answer:
      "Tidak, kecuali Anda mengambil paket Eskala VIP yang memang sudah termasuk produksi creative. Untuk paket Digital Marketing standar, kami menyiapkan brief dan medical review, sementara produksi creative dilakukan oleh tim internal Anda atau agensi creative pilihan Anda.",
  },
  {
    number: "03",
    title: "Bagaimana proses approval creative dengan tim medis kami?",
    answer:
      "Setiap creative iklan kami review terlebih dahulu dari sisi regulasi (KKI & Kemenkes), lalu kami kirimkan ke tim medis Anda untuk approval final sebelum tayang. Proses ini biasanya selesai dalam 1-2 hari kerja.",
  },
  {
    number: "04",
    title: "Bisakah kami tetap menjalankan iklan internal sambil pakai Eskala?",
    answer:
      "Bisa. Banyak klien kami yang memiliki tim internal untuk konten organik, sementara kami fokus mengelola paid channel. Kami akan berkoordinasi agar pesan iklan dan konten organik tetap selaras.",
  },
]);
</script>

<template>
  <div>
    <UContainer
      id="section-hero"
      class="flex flex-col gap-12 py-24 items-center relative"
    >
      <div class="flex flex-col gap-8 max-w-4xl text-center items-center">
        <p class="font-display text-copper-500 font-medium">
          ──────── Digital Marketing
        </p>
        <div class="flex flex-col">
          <h1 class="font-display text-obsidian-950 font-bold text-7xl">
            Iklan yang tepat,
          </h1>
          <h1 class="font-display text-cobalt-500 font-bold text-7xl">
            hasil yang maksimal.
          </h1>
        </div>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Kami mengelola iklan Meta, TikTok, dan Google serta kolaborasi KOC
          untuk menjangkau pasien dalam radius layanan faskes Anda. Fee
          berbasis persentase ad spend — Anda hanya membayar lebih saat budget
          iklan ikut bertumbuh.
        </p>
      </div>
      <div class="flex gap-12 items-center">
        <UButton
          href="https://wa.me/6282230712718"
          target="_blank"
          size="xl"
          class="px-4 rounded-full"
          color="success"
        >
          <Icon name="i-mdi-whatsapp" class="text-lg" />
          Jadwalkan konsultasi gratis dengan kami
        </UButton>
        <UButton
          href="#section-package"
          size="xl"
          class="px-4 rounded-full"
          color="neutral"
          variant="link"
        >
          atau lihat paket layanan kami
          <Icon name="i-heroicons-arrow-down" class="text-sm" />
        </UButton>
      </div>
      <USeparator color="obsidian" />
      <div class="flex justify-between gap-12">
        <div
          v-for="point in keyPoints"
          :key="point.title"
          class="flex items-center gap-4"
        >
          <Icon :name="point.icon" class="text-copper-500 text-4xl" />
          <p class="text-obsidian-950 font-medium text-sm">{{ point.title }}</p>
        </div>
      </div>
      <USeparator color="obsidian" />
    </UContainer>

    <UContainer id="section-ads-management" class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Ads Management
        </p>
        <h2 class="font-display text-obsidian-950 font-bold text-5xl">
          <span class="text-cobalt-500">Empat hal</span> yang kami kerjakan setiap bulan.
        </h2>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Pengelolaan iklan yang berkelanjutan, bukan sekadar setup-and-forget.
          Setiap kampanye dipantau dan dioptimasi mingguan agar budget Anda
          bekerja semaksimal mungkin.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="item in adsCapabilities"
          :key="item.title"
          class="flex flex-col gap-6 rounded-3xl border border-obsidian-200 p-8"
        >
          <div
            class="w-12 h-12 rounded-2xl bg-cobalt-50 flex items-center justify-center"
          >
            <Icon :name="item.icon" class="text-cobalt-500 text-2xl" />
          </div>
          <h3 class="font-display text-2xl font-semibold text-obsidian-950">
            {{ item.title }}
          </h3>
          <p class="font-body text-obsidian-700 font-light">
            {{ item.description }}
          </p>
        </div>
      </div>
    </UContainer>

    <UContainer id="section-platforms" class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Platform yang kami jalankan
        </p>
        <h2 class="font-display text-obsidian-950 font-bold text-5xl">
          Tiga platform iklan, <span class="text-cobalt-500">satu funnel pasien</span>.
        </h2>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Kami fokus pada platform yang punya track record menghasilkan pasien
          untuk faskes di Indonesia, bukan menyebar budget ke setiap channel
          baru.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="platform in platforms"
          :key="platform.name"
          class="flex flex-col gap-6 rounded-3xl border border-obsidian-200 p-8"
        >
          <Icon :name="platform.icon" class="text-copper-500 text-4xl" />
          <h3 class="font-display text-2xl font-semibold text-obsidian-950">
            {{ platform.name }}
          </h3>
          <p class="font-body text-obsidian-700 font-light">
            {{ platform.role }}
          </p>
        </div>
      </div>
    </UContainer>

    <div id="section-koc" class="bg-obsidian-100">
      <UContainer class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── KOC Management
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            <span class="text-cobalt-500">KOC, bukan KOL</span> — autentik dan efisien.
          </h2>
        </div>
        <div class="flex gap-12">
          <div class="flex flex-col gap-8 basis-1/2">
            <p class="font-body text-lg text-obsidian-700 font-light">
              Key Opinion Customer (KOC) adalah pasien atau pengguna nyata yang
              merekomendasikan layanan Anda kepada komunitasnya. Engagement-nya
              jauh lebih tinggi dari KOL berbayar, dan trust-nya lebih relevan
              untuk keputusan medis pasien.
            </p>
            <div class="flex flex-col gap-4">
              <div
                v-for="benefit in kocBenefits"
                :key="benefit"
                class="flex items-center gap-4"
              >
                <Icon
                  name="i-heroicons-check-circle"
                  class="text-copper-500 text-2xl shrink-0"
                />
                <p class="font-body text-obsidian-700">{{ benefit }}</p>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row gap-0 rounded-3xl border border-obsidian-200 bg-white overflow-hidden basis-1/2"
          >
            <div class="flex flex-col gap-6 p-8 basis-1/2">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-cobalt-500" />
                <h3
                  class="font-display text-lg font-semibold text-obsidian-950"
                >
                  KOC
                </h3>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  v-for="item in kocComparison.koc"
                  :key="item"
                  class="flex items-start gap-3"
                >
                  <Icon
                    name="i-heroicons-check-circle"
                    class="text-cobalt-500 text-lg shrink-0 mt-0.5"
                  />
                  <p class="font-body text-sm text-obsidian-700">{{ item }}</p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-6 p-8 basis-1/2 border-t border-obsidian-200 md:border-t-0 md:border-l"
            >
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-obsidian-300" />
                <h3
                  class="font-display text-lg font-semibold text-obsidian-400"
                >
                  KOL
                </h3>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  v-for="item in kocComparison.kol"
                  :key="item"
                  class="flex items-start gap-3"
                >
                  <Icon
                    name="i-heroicons-minus-circle"
                    class="text-obsidian-300 text-lg shrink-0 mt-0.5"
                  />
                  <p class="font-body text-sm text-obsidian-400">{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div id="section-package" class="bg-obsidian-950">
      <UContainer class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Paket layanan kami
          </p>
          <div class="flex gap-8">
            <h2 class="font-display text-obsidian-50 font-bold text-5xl">
              <span class="text-cobalt-400">Tiga paket</span> dengan fee berbasis ad spend.
            </h2>
            <p class="font-body text-lg text-obsidian-300 font-light">
              Anda hanya membayar persentase dari ad spend, jadi biaya
              management ikut bertumbuh seiring skala kampanye Anda. Tidak ada
              retainer tetap yang besar di awal.
            </p>
          </div>
        </div>
        <div
          class="bg-obsidian-950 border border-obsidian-700 rounded-2xl overflow-x-auto"
        >
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-obsidian-700">
                <th class="text-left p-6 w-1/4"></th>
                <th
                  v-for="(_, i) in packageDMRaw"
                  :key="i"
                  :class="[
                    'text-left p-6 border-l border-obsidian-700',
                    i === 1 && 'bg-cobalt-950/40 border-t-2 border-t-cobalt-500',
                  ]"
                >
                  <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                      <span class="text-3xl font-semibold text-obsidian-50">{{
                        packageDMTitles[i]
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
                      packageDMSubtitles[i]
                    }}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="section in packageDMSections"
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
                    v-for="(pkg, i) in packageDMRaw"
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
            href="https://wa.me/6282230712718"
            target="_blank"
            size="xl"
            class="px-4 rounded-full text-obsidian-950"
            color="secondary"
          >
            <Icon name="i-mdi-whatsapp" class="text-lg" />
            Diskusikan strategi iklan Anda
          </UButton>
          <UButton
            to="/services/social-media-management"
            size="xl"
            class="px-4 rounded-full"
            color="secondary"
            variant="link"
          >
            atau lihat paket Social Media Management kami
            <Icon name="i-heroicons-arrow-right" class="text-sm" />
          </UButton>
        </div>
      </UContainer>
    </div>

    <div id="section-expected-results" class="bg-obsidian-950">
      <UContainer class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Ekspektasi hasil
          </p>
          <h2 class="font-display text-obsidian-50 font-bold text-5xl">
            <span class="text-cobalt-400">Tiga fase</span> dari setup hingga scaling.
          </h2>
          <p class="font-body text-lg text-obsidian-300 font-light">
            Iklan digital butuh fase pembelajaran sebelum bisa di-scale dengan
            sehat. Berikut timeline realistis berdasarkan pengalaman kami
            menjalankan paid channel untuk faskes di Indonesia.
          </p>
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
            <p class="font-body text-obsidian-300 font-light">
              {{ result.description }}
            </p>
            <USeparator color="obsidian" />
            <div class="flex flex-col gap-4">
              <div
                v-for="detail in result.detail"
                :key="detail"
                class="flex flex-col"
              >
                <div class="flex items-center gap-4">
                  <Icon
                    name="i-heroicons-check"
                    class="text-secondary text-xl"
                  />
                  <p class="font-body text-obsidian-300 basis-4/5 text-sm">
                    {{ detail }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <div id="section-faq" class="bg-obsidian-100">
      <UContainer class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Pertanyaan yang sering kami terima
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            Hal-hal yang biasanya <span class="text-cobalt-500">ditanyakan klinik</span> sebelum mulai beriklan.
          </h2>
        </div>
        <div class="flex flex-col gap-12">
          <div
            v-for="question in faqItems"
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
      </UContainer>
    </div>

    <UContainer id="section-call-to-action" class="flex flex-col gap-12 py-24">
      <div
        class="border border-cobalt-200 bg-cobalt-50 rounded-2xl p-10 lg:p-14 flex flex-col gap-12"
      >
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
              Mulai jangkau pasien <span class="text-cobalt-500">di sekitar klinik Anda</span>.
            </h2>
          </div>
          <div class="basis-2/5">
            <p
              class="font-body text-lg text-obsidian-700 font-light leading-relaxed"
            >
              Konsultasi 30 menit untuk membahas potensi iklan digital faskes
              Anda — kami audit funnel, lalu memberikan tiga rekomendasi
              strategi yang bisa Anda jalankan.
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-center gap-8">
          <UButton
            href="https://wa.me/6282230712718"
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
