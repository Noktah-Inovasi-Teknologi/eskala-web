<script lang="ts" setup>
const problems = ref([
  {
    title: "Bisnis tidak terlihat oleh calon pelanggan",
    description: "Sulitnya membangun kepercayaan di mata audiens.",
    detail: [
      "Kurangnya kehadiran online yang konsisten dan profesional.",
      "Konten yang tidak relevan atau kurang menarik bagi target audiens.",
      "Minimnya interaksi dan engagement di platform media sosial.",
    ],
    image: "/images/1.png",
  },
  {
    title: "Tidak memiliki cukup waktu dan sumber daya untuk membuat konten",
    description:
      "Keterbatasan waktu dan tenaga dalam mengelola media sosial secara konsisten.",
    detail: [
      "Kesulitan dalam merencanakan dan menjadwalkan konten secara rutin.",
      "Keterbatasan tim internal dalam hal keahlian pembuatan konten.",
      "Tantangan dalam mengikuti tren dan algoritma media sosial yang terus berubah.",
    ],
    image: "/images/2.png",
  },
  {
    title: "Pernah bekerja dengan agensi, namun mereka tidak dapat diandalkan",
    description:
      "Pengalaman buruk dengan agensi yang tidak memenuhi janji dan ekspektasi.",
    detail: [
      "Kurangnya transparansi dan komunikasi dari agensi.",
      "Agensi kabur dan tidak memenuhi ekspektasi dan janji yang diberikan.",
      "Ketidaksesuaian antara strategi agensi dengan kebutuhan bisnis.",
    ],
    image: "/images/3.png",
  },
]);
const strengths = ref([
  {
    title: "Cepat",
    description:
      "Kami mengerjakan desain konten Anda dengan cepat tanpa mengorbankan kualitas.",
    image: "/images/1.png",
  },
  {
    title: "Responsif",
    description:
      "Kami selalu siap merespons kebutuhan dan perubahan yang Anda butuhkan.",
    image: "/images/2.png",
  },
  {
    title: "Paham Kebutuhan Anda",
    description: "Kami mendengarkan dan memahami kebutuhan bisnis Anda.",
    image: "/images/6.png",
  },
  {
    title: "Fleksibel",
    description:
      "Kami menyesuaikan layanan kami sesuai dengan kebutuhan dan anggaran Anda.",
    image: "/images/4.png",
  },
  {
    title: "Transparan",
    description:
      "Kami memberikan laporan yang jelas dan terbuka tentang kinerja konten Anda.",
    image: "/images/5.png",
  },
  {
    title: "Berkualitas Tinggi",
    description:
      "Kami selalu mengutamakan kualitas dalam setiap konten yang kami buat.",
    image: "/images/3.png",
  },
]);

const processSteps = ref([
  {
    title: "Konsultasi & Analisis",
    description:
      "Kami mendengarkan kebutuhan bisnis Anda dan menganalisis target audiens untuk merancang strategi yang tepat.",
    icon: "i-heroicons-chat-bubble-left-right",
    color: "primary",
  },
  {
    title: "Perencanaan Konten",
    description:
      "Tim kreatif kami merancang kalender konten dan strategi komunikasi yang sesuai dengan brand identity Anda.",
    icon: "i-heroicons-calendar-days",
    color: "primary",
  },
  {
    title: "Produksi Konten",
    description:
      "Pembuatan konten visual dan copywriting yang engaging, profesional, dan sesuai dengan standar industri.",
    icon: "i-heroicons-camera",
    color: "primary",
  },
  {
    title: "Publikasi & Monitoring",
    description:
      "Posting konten secara terjadwal dan monitoring performa untuk optimasi berkelanjutan.",
    icon: "i-heroicons-chart-bar",
    color: "primary",
  },
  {
    title: "Evaluasi & Laporan",
    description:
      "Analisis hasil dan penyusunan laporan komprehensif untuk perbaikan strategi di periode berikutnya.",
    icon: "i-heroicons-document-chart-bar",
    color: "primary",
  },
]);

const services = ref([
  {
    title: "End-to-End Social Media Management",
    description:
      "Kelola seluruh aspek media sosial Anda dari strategi hingga eksekusi dengan pendekatan yang komprehensif dan terukur.",
    link: "/services/social-media-management",
    icon: "i-heroicons-users",
  },
  {
    title: "Ads Management",
    description:
      "Optimalisasi iklan berbayar di berbagai platform untuk memaksimalkan ROI dan jangkauan target audiens Anda.",
    link: "/services/ads-management",
    icon: "i-heroicons-megaphone",
  },
  {
    title: "KOL Management",
    description:
      "Manajemen kolaborasi dengan Key Opinion Leaders untuk meningkatkan kredibilitas dan reach brand Anda.",
    link: "/services/kol-management",
    icon: "i-heroicons-star",
  },
  {
    title: "All-in-One Creative Service",
    description:
      "Layanan kreatif lengkap mulai dari desain visual, copywriting, hingga video production untuk semua kebutuhan konten Anda.",
    link: "/services/creative-service",
    icon: "i-heroicons-paint-brush",
  },
]);

const pricingTabs = ref([
  {
    label: "Social Media Management",
    slot: "social-media",
    plans: [
      {
        name: "Starter",
        price: "Rp 2.500.000",
        period: "/bulan",
        features: [
          { name: "2 Platform Media Sosial", included: true },
          { name: "10 Post per Bulan", included: true },
          { name: "Basic Analytics Report", included: true },
          { name: "Community Management", included: false },
          { name: "Content Strategy", included: false },
          { name: "Dedicated Account Manager", included: false },
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "Rp 4.500.000",
        period: "/bulan",
        features: [
          { name: "4 Platform Media Sosial", included: true },
          { name: "20 Post per Bulan", included: true },
          { name: "Advanced Analytics Report", included: true },
          { name: "Community Management", included: true },
          { name: "Content Strategy", included: true },
          { name: "Dedicated Account Manager", included: false },
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Rp 8.000.000",
        period: "/bulan",
        features: [
          { name: "Unlimited Platform", included: true },
          { name: "40 Post per Bulan", included: true },
          { name: "Comprehensive Analytics", included: true },
          { name: "Community Management", included: true },
          { name: "Content Strategy", included: true },
          { name: "Dedicated Account Manager", included: true },
        ],
        popular: false,
      },
    ],
  },
  {
    label: "Ads Management",
    slot: "ads",
    plans: [
      {
        name: "Basic",
        price: "Rp 3.000.000",
        period: "/bulan",
        features: [
          { name: "1 Platform Advertising", included: true },
          { name: "Budget Management", included: true },
          { name: "Basic Targeting", included: true },
          { name: "Creative Development", included: false },
          { name: "A/B Testing", included: false },
          { name: "Advanced Analytics", included: false },
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "Rp 5.500.000",
        period: "/bulan",
        features: [
          { name: "3 Platform Advertising", included: true },
          { name: "Budget Management", included: true },
          { name: "Advanced Targeting", included: true },
          { name: "Creative Development", included: true },
          { name: "A/B Testing", included: true },
          { name: "Advanced Analytics", included: false },
        ],
        popular: true,
      },
      {
        name: "Scale",
        price: "Rp 9.500.000",
        period: "/bulan",
        features: [
          { name: "All Platform Advertising", included: true },
          { name: "Budget Management", included: true },
          { name: "Advanced Targeting", included: true },
          { name: "Creative Development", included: true },
          { name: "A/B Testing", included: true },
          { name: "Advanced Analytics", included: true },
        ],
        popular: false,
      },
    ],
  },
  {
    label: "KOL Management",
    slot: "kol",
    plans: [
      {
        name: "Micro",
        price: "Rp 4.000.000",
        period: "/campaign",
        features: [
          { name: "1-2 Micro Influencer", included: true },
          { name: "Campaign Planning", included: true },
          { name: "Content Guidelines", included: true },
          { name: "Performance Tracking", included: true },
          { name: "Macro Influencer Access", included: false },
          { name: "Celebrity Endorsement", included: false },
        ],
        popular: false,
      },
      {
        name: "Macro",
        price: "Rp 12.000.000",
        period: "/campaign",
        features: [
          { name: "1-3 Macro Influencer", included: true },
          { name: "Campaign Planning", included: true },
          { name: "Content Guidelines", included: true },
          { name: "Performance Tracking", included: true },
          { name: "Micro Influencer Access", included: true },
          { name: "Celebrity Endorsement", included: false },
        ],
        popular: true,
      },
      {
        name: "Mega",
        price: "Rp 25.000.000",
        period: "/campaign",
        features: [
          { name: "1 Mega Influencer", included: true },
          { name: "Campaign Planning", included: true },
          { name: "Content Guidelines", included: true },
          { name: "Performance Tracking", included: true },
          { name: "Multi-tier Influencer Mix", included: true },
          { name: "Celebrity Endorsement", included: true },
        ],
        popular: false,
      },
    ],
  },
  {
    label: "Creative Service",
    slot: "creative",
    plans: [
      {
        name: "Essential",
        price: "Rp 3.500.000",
        period: "/project",
        features: [
          { name: "Graphic Design (10 designs)", included: true },
          { name: "Basic Copywriting", included: true },
          { name: "2 Revision Rounds", included: true },
          { name: "Video Production", included: false },
          { name: "Photography Session", included: false },
          { name: "Brand Identity Package", included: false },
        ],
        popular: false,
      },
      {
        name: "Premium",
        price: "Rp 7.500.000",
        period: "/project",
        features: [
          { name: "Graphic Design (20 designs)", included: true },
          { name: "Advanced Copywriting", included: true },
          { name: "Unlimited Revisions", included: true },
          { name: "Video Production (1 video)", included: true },
          { name: "Photography Session", included: true },
          { name: "Brand Identity Package", included: false },
        ],
        popular: true,
      },
      {
        name: "Complete",
        price: "Rp 15.000.000",
        period: "/project",
        features: [
          { name: "Unlimited Designs", included: true },
          { name: "Strategic Copywriting", included: true },
          { name: "Unlimited Revisions", included: true },
          { name: "Video Production (3 videos)", included: true },
          { name: "Photography Session", included: true },
          { name: "Brand Identity Package", included: true },
        ],
        popular: false,
      },
    ],
  },
]);
</script>

<template>
  <div>
    <UContainer
      id="section-hero"
      class="flex py-20 items-center relative min-h-screen"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center w-full">
        <!-- Left Side - Enhanced Copywriting -->
        <div class="space-y-8">
          <!-- Badge -->
          <UBadge color="primary" variant="soft" size="lg" class="inline-flex">
            🚀 Tingkatkan Brand Awareness Anda
          </UBadge>

          <!-- Main Headline -->
          <div class="space-y-6">
            <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
              <span class="text-gray-900">Keahlian Anda</span><br />
              <span class="text-primary">mengubah hidup.</span><br />
              <span class="text-gray-700 text-4xl lg:text-5xl"
                >Konten Anda harus membuktikannya.</span
              >
            </h1>
          </div>

          <!-- Enhanced Subhead -->
          <p
            class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
          >
            Kami membantu bisnis di Indonesia menjadi
            <span class="font-semibold text-primary">trusted entity</span>
            melalui pengelolaan media sosial yang strategis dan komunikatif.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <UButton size="xl" class="px-8 py-4">
              Mulai Konsultasi Gratis
            </UButton>
            <UButton variant="outline" size="xl" class="px-8 py-4">
              Lihat Portfolio Kami
            </UButton>
          </div>

          <!-- Enhanced Metrics -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary">50%</div>
              <div class="text-sm text-gray-600 font-medium">
                Pertumbuhan Rerata Selama 6 Bulan
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary">3-6</div>
              <div class="text-sm text-gray-600 font-medium">Bulan ROI</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary">25+</div>
              <div class="text-sm text-gray-600 font-medium">Klien Tetap</div>
            </div>
          </div>
        </div>

        <!-- Right Side - Video Placeholder -->
        <div class="flex justify-center">
          <UCard class="w-full max-w-lg">
            <div
              class="aspect-2/1 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <div class="text-center space-y-2">
                <UIcon
                  name="i-heroicons-play-circle"
                  class="text-6xl text-gray-400"
                />
                <p class="text-gray-500">Video Placeholder</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Enhanced Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#section-pain-problem" class="block group">
          <div
            class="flex flex-col items-center space-y-2 group-hover:scale-110 transition-transform"
          >
            <span class="text-sm text-gray-500 font-medium"
              >Scroll untuk lanjut</span
            >
            <div
              class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-primary transition-colors"
            >
              <div
                class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-primary transition-colors"
              ></div>
            </div>
          </div>
        </a>
      </div>
    </UContainer>
    <UContainer id="section-pain-problem" class="flex flex-col gap-16 py-16">
      <div class="text-center max-w-2xl mx-auto">
        <p>
          Dari klien-klien kami, kami berhasil mengumpulkan tiga masalah utama
          yang sering mereka hadapi.
        </p>
      </div>
      <h2 class="text-center text-5xl font-[Poppins]">
        Masalah yang Sering Dihadapi
      </h2>
      <div class="flex flex-col gap-4">
        <UCard
          v-for="item in problems"
          :key="item.title"
          class="p-4 transition-all duration-500 ease-in-out overflow-hidden group cursor-pointer hover:shadow-lg"
          :ui="{
            body: 'flex flex-col sm:flex-row items-center gap-6',
          }"
        >
          <div class="">
            <img :src="item.image" alt="Problem Illustration" />
          </div>
          <div class="basis-3/2 flex flex-col justify-center">
            <h3
              class="text-3xl font-semibold mb-0 group-hover:mb-4 transition-all duration-500 ease-in-out"
            >
              {{ item.title }}
            </h3>
            <div
              class="max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 overflow-hidden"
            >
              <USeparator class="mb-4" />
              <p class="mb-4">
                {{ item.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="detail in item.detail"
                  :key="detail"
                  color="secondary"
                >
                  {{ detail }}
                </UBadge>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
    <UContainer id="section-strength" class="flex flex-col gap-16 py-16">
      <div class="flex flex-row text-center max-w-2xl mx-auto">
        <div>
          <p>
            Punya masalah yang sama dengan klien-klien kami? Tenang, kami siap
            membantu. Tapi, apa yang membuat
            <span class="text-primary font-bold">kami berbeda</span>?
          </p>
        </div>
      </div>
      <h2 class="text-center text-5xl font-[Poppins]">Poin Plus Kami</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="item in strengths"
          :key="item.title"
          class="p-4 flex flex-col items-center text-center group cursor-pointer"
        >
          <div class="mb-4 group-hover:animate-bounce">
            <img :src="item.image" alt="Strength Illustration" />
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-3xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </UCard>
      </div>
    </UContainer>
    <UContainer id="section-social-proof" class="flex flex-col gap-16 py-16">
      <div class="text-center">
        <h2 class="text-5xl font-[Poppins] mb-4">Apa Kata Klien Kami</h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side - Image -->
        <div class="flex justify-center">
          <div class="w-80 h-80 relative">
            <img
              src="/images/u1.png"
              alt="Dr. Eddy - Direktur SMEC Group"
              class="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <!-- Right Side - Testimonial -->
        <div class="space-y-6">
          <!-- Opening Quote -->
          <div class="text-6xl text-primary opacity-50">"</div>

          <!-- Testimonial Content -->
          <div class="space-y-6 -mt-4">
            <p class="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Eskala benar-benar mengubah cara kami berkomunikasi dengan pasien.
              Konten mereka tidak hanya profesional, tetapi juga mudah dipahami
              dan membangun kepercayaan. Dalam 6 bulan bekerja sama, tingkat
              kepercayaan pasien terhadap klinik kami meningkat drastis.
            </p>

            <div class="space-y-2">
              <h4 class="text-2xl font-semibold text-gray-900">Dr. Eddy</h4>
              <p class="text-lg text-gray-600">
                Direktur Sabang Merauke Eye Center (SMEC) Group
              </p>
            </div>
          </div>

          <!-- Closing Quote -->
          <div class="text-6xl text-primary opacity-50 text-right">"</div>
        </div>
      </div>
    </UContainer>
    <UContainer id="section-process" class="flex flex-col gap-16 py-16">
      <div class="text-center">
        <h2 class="text-5xl font-[Poppins] mb-4">Proses Kerja Kami</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Kami mengikuti proses yang terstruktur dan transparan untuk memastikan
          hasil terbaik bagi bisnis Anda
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <UTimeline :items="processSteps" size="3xl" />
      </div>
    </UContainer>
    <UContainer id="section-service" class="flex flex-col gap-16 py-16">
      <div class="text-center">
        <h2 class="text-5xl font-[Poppins] mb-4">Layanan Kami</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Solusi lengkap untuk semua kebutuhan digital marketing dan konten
          kreatif bisnis Anda
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <UCard
          v-for="service in services"
          :key="service.title"
          class="p-6 hover:border-primary transition-all duration-300 group relative"
        >
          <!-- Arrow Button -->
          <div class="absolute top-6 right-6">
            <NuxtLink :to="service.link">
              <UButton
                variant="outline"
                size="sm"
                trailing-icon="i-heroicons-arrow-top-right-on-square"
                class="hover:border-primary hover:text-primary hover:scale-110 hover:cursor-pointer transition-all duration-300"
              >
                Cek Lebih Lanjut
              </UButton>
            </NuxtLink>
          </div>

          <!-- Service Content -->
          <div class="space-y-4 pr-12">
            <div class="flex items-center gap-4">
              <UIcon :name="service.icon" class="text-3xl text-primary" />
              <h3
                class="text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors"
              >
                {{ service.title }}
              </h3>
            </div>

            <p class="text-gray-600 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
    <UContainer id="section-pricelist" class="flex flex-col gap-16 py-16">
      <div class="text-center">
        <h2 class="text-5xl font-[Poppins] mb-4">Paket Harga</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket
          dapat disesuaikan dengan budget dan target yang diinginkan.
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <UTabs :items="pricingTabs" class="w-full overflow-visible">
          <template #social-media>
            <div class="grid lg:grid-cols-3 gap-8 mt-12">
              <UCard
                v-for="plan in pricingTabs[0]?.plans"
                :key="plan.name"
                :class="[
                  'p-8 relative flex flex-col h-full',
                  plan.popular
                    ? 'border-2 border-primary shadow-lg scale-105'
                    : 'border border-gray-200',
                ]"
                :ui="{ body: 'flex flex-col' }"
              >
                <!-- Popular Badge -->
                <div
                  v-if="plan.popular"
                  class="absolute top-4 left-0 right-0 flex justify-center"
                >
                  <UBadge color="primary" size="lg" class="px-4 py-1">
                    Terpopuler
                  </UBadge>
                </div>

                <!-- Plan Header -->
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
                  <div class="mb-6">
                    <span class="text-4xl font-bold text-primary">{{
                      plan.price
                    }}</span>
                    <span class="text-gray-600 ml-2">{{ plan.period }}</span>
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-4 mb-8 grow">
                  <div
                    v-for="feature in plan.features"
                    :key="feature.name"
                    class="flex items-center gap-3"
                  >
                    <UIcon
                      :name="
                        feature.included
                          ? 'i-heroicons-check-circle'
                          : 'i-heroicons-x-circle'
                      "
                      :class="
                        feature.included ? 'text-green-500' : 'text-red-400'
                      "
                      class="text-xl shrink-0"
                    />
                    <span
                      :class="
                        feature.included ? 'text-gray-900' : 'text-gray-400'
                      "
                    >
                      {{ feature.name }}
                    </span>
                  </div>
                </div>

              </UCard>
            </div>
          </template>

          <template #ads>
            <div class="grid lg:grid-cols-3 gap-8 mt-12">
              <UCard
                v-for="plan in pricingTabs[1]?.plans"
                :key="plan.name"
                :class="[
                  'p-8 relative flex flex-col h-full',
                  plan.popular
                    ? 'border-2 border-primary shadow-lg scale-105'
                    : 'border border-gray-200',
                ]"
                :ui="{ body: 'flex flex-col' }"
              >
                <!-- Popular Badge -->
                <div
                  v-if="plan.popular"
                  class="absolute top-4 left-0 right-0 flex justify-center"
                >
                  <UBadge color="primary" size="lg" class="px-4 py-1">
                    Terpopuler
                  </UBadge>
                </div>

                <!-- Plan Header -->
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
                  <div class="mb-6">
                    <span class="text-4xl font-bold text-primary">{{
                      plan.price
                    }}</span>
                    <span class="text-gray-600 ml-2">{{ plan.period }}</span>
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-4 mb-8 grow">
                  <div
                    v-for="feature in plan.features"
                    :key="feature.name"
                    class="flex items-center gap-3"
                  >
                    <UIcon
                      :name="
                        feature.included
                          ? 'i-heroicons-check-circle'
                          : 'i-heroicons-x-circle'
                      "
                      :class="
                        feature.included ? 'text-green-500' : 'text-red-400'
                      "
                      class="text-xl shrink-0"
                    />
                    <span
                      :class="
                        feature.included ? 'text-gray-900' : 'text-gray-400'
                      "
                    >
                      {{ feature.name }}
                    </span>
                  </div>
                </div>

              </UCard>
            </div>
          </template>

          <template #kol>
            <div class="grid lg:grid-cols-3 gap-8 mt-12">
              <UCard
                v-for="plan in pricingTabs[2]?.plans"
                :key="plan.name"
                :class="[
                  'p-8 relative flex flex-col h-full',
                  plan.popular
                    ? 'border-2 border-primary shadow-lg scale-105'
                    : 'border border-gray-200',
                ]"
                :ui="{ body: 'flex flex-col' }"
              >
                <!-- Popular Badge -->
                <div
                  v-if="plan.popular"
                  class="absolute top-4 left-0 right-0 flex justify-center"
                >
                  <UBadge color="primary" size="lg" class="px-4 py-1">
                    Terpopuler
                  </UBadge>
                </div>

                <!-- Plan Header -->
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
                  <div class="mb-6">
                    <span class="text-4xl font-bold text-primary">{{
                      plan.price
                    }}</span>
                    <span class="text-gray-600 ml-2">{{ plan.period }}</span>
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-4 mb-8 grow">
                  <div
                    v-for="feature in plan.features"
                    :key="feature.name"
                    class="flex items-center gap-3"
                  >
                    <UIcon
                      :name="
                        feature.included
                          ? 'i-heroicons-check-circle'
                          : 'i-heroicons-x-circle'
                      "
                      :class="
                        feature.included ? 'text-green-500' : 'text-red-400'
                      "
                      class="text-xl shrink-0"
                    />
                    <span
                      :class="
                        feature.included ? 'text-gray-900' : 'text-gray-400'
                      "
                    >
                      {{ feature.name }}
                    </span>
                  </div>
                </div>

              </UCard>
            </div>
          </template>

          <template #creative>
            <div class="grid lg:grid-cols-3 gap-8 mt-12">
              <UCard
                v-for="plan in pricingTabs[3]?.plans"
                :key="plan.name"
                :class="[
                  'p-8 relative flex flex-col h-full',
                  plan.popular
                    ? 'border-2 border-primary shadow-lg scale-105'
                    : 'border border-gray-200',
                ]"
                :ui="{ body: 'flex flex-col' }"
              >
                <!-- Popular Badge -->
                <div
                  v-if="plan.popular"
                  class="absolute top-4 left-0 right-0 flex justify-center"
                >
                  <UBadge color="primary" size="lg" class="px-4 py-1">
                    Terpopuler
                  </UBadge>
                </div>

                <!-- Plan Header -->
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
                  <div class="mb-6">
                    <span class="text-4xl font-bold text-primary">{{
                      plan.price
                    }}</span>
                    <span class="text-gray-600 ml-2">{{ plan.period }}</span>
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-4 mb-8 grow">
                  <div
                    v-for="feature in plan.features"
                    :key="feature.name"
                    class="flex items-center gap-3"
                  >
                    <UIcon
                      :name="
                        feature.included
                          ? 'i-heroicons-check-circle'
                          : 'i-heroicons-x-circle'
                      "
                      :class="
                        feature.included ? 'text-green-500' : 'text-red-400'
                      "
                      class="text-xl shrink-0"
                    />
                    <span
                      :class="
                        feature.included ? 'text-gray-900' : 'text-gray-400'
                      "
                    >
                      {{ feature.name }}
                    </span>
                  </div>
                </div>

              </UCard>
            </div>
          </template>
        </UTabs>
      </div>
      
      <!-- Single CTA Button -->
      <div class="text-center mt-12">
        <UButton size="xl" class="px-12 py-4">
          Hubungi Kami untuk Konsultasi
        </UButton>
        <p class="text-gray-600 mt-4">
          Tidak yakin paket mana yang cocok? Tim kami siap membantu menentukan solusi terbaik untuk bisnis Anda.
        </p>
      </div>
    </UContainer>
    <UContainer id="section-call-to-action" class="flex flex-col gap-16 py-16">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-5xl font-[Poppins] mb-6">Siap Transformasi Digital Bisnis Anda?</h2>
        <p class="text-xl text-gray-600 mb-12 leading-relaxed">
          Jangan biarkan kompetitor unggul dalam dunia digital. Bergabunglah dengan puluhan klien yang telah merasakan pertumbuhan eksponensial bersama Eskala.
        </p>

        <!-- Benefits Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-rocket-launch" class="text-2xl text-primary" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Konsultasi Gratis</h3>
            <p class="text-gray-600">Analisis mendalam strategi digital yang tepat untuk bisnis Anda</p>
          </div>
          <div class="text-center">
            <div class="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-clock" class="text-2xl text-primary" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Mulai Dalam 24 Jam</h3>
            <p class="text-gray-600">Tim kami siap mengeksekusi strategi yang telah disepakati dengan cepat</p>
          </div>
          <div class="text-center">
            <div class="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-shield-check" class="text-2xl text-primary" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Garansi Hasil</h3>
            <p class="text-gray-600">Kami berkomitmen pada hasil nyata atau uang kembali dalam 30 hari</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <UButton size="xl" class="px-10 py-4">
            <UIcon name="i-heroicons-phone" class="mr-2" />
            Konsultasi Gratis Sekarang
          </UButton>
          <UButton variant="outline" size="xl" class="px-10 py-4">
            <UIcon name="i-heroicons-envelope" class="mr-2" />
            Kirim Brief Project
          </UButton>
        </div>

        <!-- Contact Info -->
        <!-- <div class="mt-8 pt-8 border-t border-gray-200">
          <p class="text-gray-600 mb-4">Atau hubungi kami langsung:</p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-phone" class="text-primary" />
              <span>+62 812-3456-7890</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-envelope" class="text-primary" />
              <span>hello@eskala.id</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-map-pin" class="text-primary" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div> -->

        <!-- Social Proof -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-500 mb-4">Dipercaya oleh 25+ klien tetap di seluruh Indonesia</p>
          <div class="flex justify-center items-center gap-2">
            <div class="flex">
              <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-lg" />
              <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-lg" />
              <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-lg" />
              <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-lg" />
              <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
