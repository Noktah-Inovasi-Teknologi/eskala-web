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
</script>

<template>
  <div>
    <UContainer id="section-hero" class="flex py-20 items-center relative min-h-screen">
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
              <span class="text-gray-900">Keahlian Anda</span><br/>
              <span class="text-primary">mengubah hidup.</span><br/>
              <span class="text-gray-700 text-4xl lg:text-5xl">Konten Anda harus membuktikannya.</span>
            </h1>
          </div>

          <!-- Enhanced Subhead -->
          <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
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
              <div class="text-sm text-gray-600 font-medium">Pertumbuhan Rerata Selama 6 Bulan</div>
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
            <div class="aspect-2/1 bg-gray-100 rounded-lg flex items-center justify-center">
              <div class="text-center space-y-2">
                <UIcon name="i-heroicons-play-circle" class="text-6xl text-gray-400" />
                <p class="text-gray-500">Video Placeholder</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Enhanced Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#section-pain-problem" class="block group">
          <div class="flex flex-col items-center space-y-2 group-hover:scale-110 transition-transform">
            <span class="text-sm text-gray-500 font-medium">Scroll untuk lanjut</span>
            <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-primary transition-colors">
              <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-primary transition-colors"></div>
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
            <h2 class="text-center text-5xl font-[Poppins]">Masalah yang Sering Dihadapi</h2>
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
          <div class="text-6xl text-primary opacity-50">
            "
          </div>
          
          <!-- Testimonial Content -->
          <div class="space-y-6 -mt-4">
            <p class="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Eskala benar-benar mengubah cara kami berkomunikasi dengan pasien. Konten mereka tidak hanya profesional, tetapi juga mudah dipahami dan membangun kepercayaan. Dalam 6 bulan bekerja sama, tingkat kepercayaan pasien terhadap klinik kami meningkat drastis.
            </p>
            
            <div class="space-y-2">
              <h4 class="text-2xl font-semibold text-gray-900">Dr. Eddy</h4>
              <p class="text-lg text-gray-600">Direktur Sabang Merauke Eye Center (SMEC) Group</p>
            </div>
          </div>
          
          <!-- Closing Quote -->
          <div class="text-6xl text-primary opacity-50 text-right">
            "
          </div>
        </div>
      </div>
    </UContainer>
    <div id="section-categories"></div>
    <div id="section-pricing"></div>
    <div id="section-call-to-action"></div>
  </div>
</template>
