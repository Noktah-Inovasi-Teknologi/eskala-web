<script lang="ts" setup>
useSeoMeta({
  title: "Social Media Management",
  description:
    "Kelola media sosial klinik dan rumah sakit Anda secara profesional. Paket SMM Eskala mulai 4 juta/bulan — photography, videography, copywriting, medical review, dan laporan bulanan.",
  ogTitle: "Social Media Management untuk Faskes | Eskala",
  ogDescription:
    "Hadir konsisten, tumbuh organik. Paket Social Media Management khusus fasilitas kesehatan mulai 4 juta/bulan. Medical review di setiap konten, revisi unlimited.",
  ogUrl: "https://eskala.id/services/social-media-management",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
  twitterTitle: "Social Media Management untuk Faskes | Eskala",
  twitterDescription:
    "SMM profesional untuk klinik dan rumah sakit. Mulai 4 juta/bulan — foto, video, copywriting, medical review, revisi unlimited.",
  twitterImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/services/social-media-management" }],
});

const keyPoints = ref([
  {
    title: "Medical review di setiap konten",
    icon: "i-heroicons-shield-check",
  },
  {
    title: "Revisi unlimited tanpa biaya tambahan",
    icon: "i-heroicons-arrow-path",
  },
  {
    title: "Kontrak per semester, notice 30 hari",
    icon: "i-heroicons-document-text",
  },
  {
    title: "Laporan & review meeting bulanan",
    icon: "i-heroicons-presentation-chart-line",
  },
]);

const whatWeDo = ref([
  {
    icon: "i-heroicons-light-bulb",
    title: "Strategi & Content Pillars",
    description:
      "Audit akun dan kompetitor, lalu menyusun pilar konten yang relevan dengan layanan klinik dan kebutuhan pasien Anda.",
  },
  {
    icon: "i-heroicons-camera",
    title: "Photography & Videography",
    description:
      "Tim produksi datang langsung ke faskes untuk sesi foto dan video, mengikuti standar visual yang Anda inginkan.",
  },
  {
    icon: "i-heroicons-pencil-square",
    title: "Copywriting & Medical Review",
    description:
      "Setiap caption ditulis dengan tone yang manusiawi dan melewati medical review internal sebelum tayang.",
  },
  {
    icon: "i-heroicons-chat-bubble-left-right",
    title: "Community Management & Reporting",
    description:
      "Membalas DM dan komentar pasien dengan tone faskes Anda, lalu merangkum performa dalam laporan bulanan yang jelas.",
  },
]);

const platforms = ref([
  {
    icon: "i-simple-icons-instagram",
    name: "Instagram",
    role: "Etalase utama untuk membangun trust dan referensi pasien.",
  },
  {
    icon: "i-simple-icons-tiktok",
    name: "TikTok",
    role: "Reach organik untuk audiens muda dan edukasi pasien yang ringan.",
  },
  {
    icon: "i-simple-icons-facebook",
    name: "Facebook",
    role: "Penting untuk demografi pasien yang lebih dewasa di kota Anda.",
  },
]);

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
  price: "Biaya per bulan",
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
    price: "Rp 4 Juta",
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
    price: "Rp 6 Juta",
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
    price: "Rp 8 Juta",
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
const packageSMMSubtitles = [
  "Untuk faskes yang baru memulai kehadiran digital.",
  "Untuk faskes yang ingin tumbuh di lebih dari satu platform.",
  "Untuk faskes yang siap mendominasi pasar lokal.",
];

const expectedResults = ref([
  {
    number: "01",
    stage: "BULAN 1-3",
    title: "Riset & Pilar Konten",
    description:
      "Audit akun, riset pasien dan kompetitor, lalu menyusun pilar konten. Produksi mulai berjalan di bulan pertama dengan fokus pada konsistensi posting.",
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
    title: "Engagement & DM Pasien",
    description:
      "Konten mulai menemukan audience-nya. DM dan konsultasi dari pasien potensial mulai berdatangan secara organik di samping pertumbuhan follower yang konsisten.",
    detail: [
      "Follower organik naik 3-15% tiap bulan",
      "1-2 konten viral (±10-50k reach)",
      "DM pasien potensial mulai berdatangan",
      "Tone & visual identity faskes mulai dikenali",
    ],
  },
  {
    number: "03",
    stage: "BULAN 7-12",
    title: "Pertumbuhan Compounding",
    description:
      "Performa konten stabil dengan pertumbuhan yang compounding. Media sosial menjadi saluran rujukan pasien yang konsisten, bukan sekadar pelengkap.",
    detail: [
      "Konsultasi via DM meningkat signifikan",
      "Identitas faskes lebih mudah diingat & dipercaya",
      "Repeat appointment via media sosial mulai terlihat",
      "Reach total compounding 5-10x dari bulan awal",
    ],
  },
]);

const faqItems = ref([
  {
    number: "01",
    title: "Berapa lama sampai hasilnya terlihat?",
    answer:
      "Bulan 1-3 adalah tahap audit dan membangun fondasi. Momentum pertama (engagement naik, DM pasien mulai berdatangan) biasanya terlihat di bulan 4-6. Pertumbuhan yang compounding terjadi setelah bulan ke-7.",
  },
  {
    number: "02",
    title: "Apakah Eskala paham regulasi konten kesehatan?",
    answer:
      "Ya. Setiap konten melewati medical review internal sebelum tayang, mengacu pada pedoman KKI dan Kemenkes. Kami menolak claim superlatif atau yang menjanjikan kesembuhan — dan akan menjelaskan alasannya kepada tim Anda.",
  },
  {
    number: "03",
    title: "Apakah kami harus menyiapkan fotografer sendiri?",
    answer:
      "Tidak. Tim produksi kami datang langsung ke faskes Anda untuk sesi foto dan video sesuai jadwal yang disepakati. Anda hanya perlu memastikan akses ke ruangan dan talent (dokter/perawat) yang akan diliput.",
  },
  {
    number: "04",
    title: "Apakah kontraknya mengikat?",
    answer:
      "Tidak. Kontrak kami berjalan per semester dengan notice period 30 hari. Kami lebih memilih klien yang memperpanjang karena hasil, bukan karena terikat dengan kami. 90% klien kami memperpanjang setelah 6 bulan pertama.",
  },
]);

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
      "Selama bekerja dengan Eskala, saya melihat peningkatan yang signifikan dalam engagement media sosial kami. Konten yang mereka buat benar-benar ngena ke audiens kami, dan pasien akhirnya mengetahui keberadaan klinik kami.",
    name: "dr. Ekhtiyanto Cahyadi Khusnul Yakin, Sp.KG",
    position: "Owner & Dokter Spesialis Konservasi Gigi, Ecky Dental Center",
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
          ──────── Social Media Management
        </p>
        <div class="flex flex-col">
          <h1 class="font-display text-obsidian-950 font-bold text-7xl">
            Hadir konsisten,
          </h1>
          <h1 class="font-display text-cobalt-500 font-bold text-7xl">
            tumbuh organik.
          </h1>
        </div>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Media sosial sering kali jadi wajah pertama yang dilihat pasien
          sebelum mereka menginjakkan kaki di klinik Anda. Kami menyusun
          strategi, memproduksi konten, dan mengelola kehadiran digital faskes
          Anda dari awal hingga akhir — dengan pemahaman mendalam tentang
          standar medis Indonesia.
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

    <UContainer id="section-what-we-do" class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Apa yang kami kelola
        </p>
        <h2 class="font-display text-obsidian-950 font-bold text-5xl">
          <span class="text-cobalt-500">Empat pilar</span> di balik setiap konten yang tayang.
        </h2>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Kami tidak hanya membuat konten yang bagus secara visual, tetapi
          juga konten yang aman secara medis dan relevan dengan pasien Anda.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="item in whatWeDo"
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
          ──────── Platform yang kami tumbuhkan
        </p>
        <h2 class="font-display text-obsidian-950 font-bold text-5xl">
          Tiga platform utama, <span class="text-cobalt-500">satu strategi terpadu</span>.
        </h2>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Kami fokus pada platform yang benar-benar menghasilkan pasien untuk
          faskes, bukan sekadar mengejar kehadiran di semua tempat.
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

    <div id="section-package" class="bg-obsidian-950">
      <UContainer class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Paket layanan kami
          </p>
          <div class="flex gap-8">
            <h2 class="font-display text-obsidian-50 font-bold text-5xl">
              <span class="text-cobalt-400">Tiga paket</span> untuk setiap tahap pertumbuhan faskes Anda.
            </h2>
            <p class="font-body text-lg text-obsidian-300 font-light">
              Semua paket sudah termasuk produksi, copywriting, medical
              review, content plan bulanan, revisi unlimited, dan review
              meeting bulanan. Tidak ada biaya tersembunyi.
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
                  v-for="(_, i) in packageSMMRaw"
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
                      packageSMMSubtitles[i]
                    }}</span>
                  </div>
                </th>
              </tr>
              <tr class="border-b border-obsidian-700">
                <td class="px-6 py-4 text-obsidian-50 text-sm font-medium">
                  {{ featureLabels.price }}
                </td>
                <td
                  v-for="(pkg, i) in packageSMMRaw"
                  :key="i"
                  :class="[
                    'px-6 py-4 border-l border-obsidian-700',
                    i === 1 && 'bg-cobalt-950/40',
                  ]"
                >
                  <span class="text-obsidian-50 font-display text-xl font-semibold">{{ pkg.price }}</span>
                  <span class="text-obsidian-400 text-sm"> / bulan</span>
                </td>
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
            href="https://wa.me/6282230712718"
            target="_blank"
            size="xl"
            class="px-4 rounded-full text-obsidian-950"
            color="secondary"
          >
            <Icon name="i-mdi-whatsapp" class="text-lg" />
            Diskusikan paket yang sesuai
          </UButton>
          <UButton
            to="/services/digital-marketing"
            size="xl"
            class="px-4 rounded-full"
            color="secondary"
            variant="link"
          >
            atau lihat paket Digital Marketing kami
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
            <span class="text-cobalt-400">Maraton, bukan sprint</span> — timeline realistis.
          </h2>
          <p class="font-body text-lg text-obsidian-300 font-light">
            Membangun kehadiran organik faskes butuh waktu, tetapi hasilnya
            berlapis dan compounding. Berikut yang dapat Anda harapkan dari
            bulan ke bulan berdasarkan pengalaman kami bersama klien faskes.
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
            <p class="font-body text-obsidian-300 font-light">{{ result.description }}</p>
            <USeparator color="obsidian" />
            <div class="flex flex-col gap-4">
              <div v-for="detail in result.detail" :key="detail" class="flex flex-col">
                <div class="flex items-center gap-4">
                  <Icon name="i-heroicons-check" class="text-secondary text-xl" />
                  <p class="font-body text-obsidian-300 basis-4/5 text-sm">{{ detail }}</p>
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
            Hal-hal yang biasanya <span class="text-cobalt-500">ditanyakan klinik</span> sebelum mulai.
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

    <UContainer id="section-testimonials" class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Apa kata klien kami
        </p>
        <h2 class="font-display text-obsidian-950 font-bold text-5xl">
          Cerita <span class="text-cobalt-500">dari klien</span> kami.
        </h2>
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
    </UContainer>

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
              Kalau bukan sekarang mulai, <span class="text-cobalt-500">lalu kapan?</span>
            </h2>
          </div>
          <div class="basis-2/5">
            <p
              class="font-body text-lg text-obsidian-700 font-light leading-relaxed"
            >
              Konsultasi 30 menit untuk membahas kondisi media sosial faskes
              Anda saat ini, lalu kami merekomendasikan tiga langkah konkret —
              dengan atau tanpa bekerja sama dengan kami.
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
