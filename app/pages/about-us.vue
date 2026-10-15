<!-- Tentang kami (design/reference/tentang-kami.html). Route kept at /about-us (ADR-0001).
     The team section shows once `team` has real people; the design has only placeholders. -->
<script setup lang="ts">
import { tagline } from "~/data/site"

usePageSeo({
  title: "Tentang Eskala — Partner Komunikasi Kesehatan",
  description: "Eskala adalah partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter di seluruh Indonesia.",
  path: "/about-us",
  full: true,
})

const pillars = [
  { label: "Visi", rule: "border-copper-500", labelClass: "text-copper-200", bodyClass: "text-[22px] font-bold leading-[1.4] text-white", body: "Menjadi partner komunikasi kesehatan yang dipercaya fasilitas dan tenaga kesehatan di seluruh Indonesia." },
  { label: "Misi", rule: "border-cobalt-400", labelClass: "text-cobalt-300", bodyClass: "text-lg leading-[1.6]", body: "Menggabungkan pemahaman dunia kesehatan, kreativitas, eksekusi yang rapi, dan evaluasi berbasis data, melalui digital marketing, edukasi, dan training, untuk membantu fasilitas dan tenaga kesehatan berkomunikasi dengan benar." },
  { label: "Purpose", rule: "border-obsidian-800", labelClass: "text-obsidian-500", bodyClass: "text-lg leading-[1.6]", body: "Supaya layanan kesehatan yang baik bisa dipahami dan dipercaya orang." },
]

const differentiators = [
  { tone: "cobalt-soft" as const, title: "Memahami konteks kesehatan", body: "Kami memahami layanan medis, bahasa pasien, dan aturan iklan kesehatan. Setiap konten melewati medical review." },
  { tone: "subtle" as const, title: "Produksi yang rapi", body: "Konten tetap konsisten walau permintaan datang dari banyak pihak dan banyak cabang. Ada SOP, QC, dan satu jalur feedback." },
  { tone: "copper-soft" as const, title: "Evaluasi yang bisa ditindaklanjuti", body: "Laporan kami menjelaskan apa yang terjadi dan apa langkah berikutnya, bukan hanya daftar angka." },
]

const values = [
  { title: "Patient-aware communication", body: "Berpikir dari kebutuhan dan pemahaman pasien, tanpa memberi diagnosis atau nasihat medis." },
  { title: "Accuracy before attention", body: "Menarik perhatian tanpa mengorbankan akurasi klaim, visual, dan copy medis." },
  { title: "Consistency by design", body: "Kualitas tidak bergantung pada siapa yang mengerjakan." },
  { title: "Responsive, with boundaries", body: "Adaptif dan responsif dalam batas kapasitas yang jelas." },
  { title: "Learn from evidence", body: "Memakai data untuk memperbaiki konten, dan membedakan data, interpretasi, dan hipotesis." },
]

/** Real team members only: name, role and a photo path under public/. */
const team: { name: string, role: string, photo?: string }[] = []
</script>

<template>
  <div>
    <!-- Hero -->
    <UContainer class="pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-22">
      <div class="flex flex-wrap items-center gap-10 lg:gap-14">
        <div class="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
          <Eyebrow>Tentang Eskala</Eyebrow>
          <Heading as="h1" size="hero">Supaya layanan kesehatan yang baik <span class="text-cobalt-500">dipahami dan dipercaya</span></Heading>
          <Lede size="lg" class="max-w-140">Eskala adalah partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter di seluruh Indonesia. Kami bekerja bersama tim marketing dan tenaga medis di tempat Anda.</Lede>
        </div>
        <div class="relative min-w-0 max-w-140 flex-[1_1_420px]">
          <MediaPlaceholder label="Foto tim di sesi briefing atau produksi" class="aspect-5/4 rounded-3xl" />
          <PriceBadge shape="tag" label="Tagline" :value="tagline" class="absolute right-3 -bottom-5 sm:-right-3.5 sm:-bottom-5.5" />
        </div>
      </div>
    </UContainer>

    <!-- Visi, misi, purpose -->
    <PageSection tone="dark">
      <div class="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="p in pillars" :key="p.label" class="flex flex-col gap-3.5 border-t-3 pt-5.5" :class="p.rule">
          <span class="text-[13px] font-bold uppercase tracking-[0.09em]" :class="p.labelClass">{{ p.label }}</span>
          <p :class="p.bodyClass">{{ p.body }}</p>
        </div>
      </div>
    </PageSection>

    <!-- Pembeda -->
    <PageSection>
      <Heading class="mb-10 max-w-190">Yang membedakan cara kerja kami</Heading>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="d in differentiators" :key="d.title" v-bind="d" />
      </div>
    </PageSection>

    <!-- Janji -->
    <PageSection tone="subtle" bordered>
      <div class="flex flex-wrap gap-x-16 gap-y-10">
        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-3.5">
          <Heading>Yang kami janjikan</Heading>
          <Lede>Cara kerja yang rapi, komunikasi yang akurat, dan evaluasi berdasarkan tujuan yang disepakati bersama.</Lede>
        </div>
        <div class="flex min-w-0 flex-[1_1_520px] flex-col gap-3.5 rounded-3xl border border-obsidian-300 bg-white p-6 sm:p-8">
          <b class="text-lg text-obsidian-950">Yang tidak kami janjikan</b>
          <p class="text-base leading-[1.65]">Konten viral, jumlah followers, leads, pasien, atau revenue tertentu. Hasil seperti itu dipengaruhi banyak hal di luar konten, jadi kami tidak menjanjikannya sejak awal.</p>
        </div>
      </div>
    </PageSection>

    <!-- Nilai -->
    <PageSection>
      <Heading class="mb-10">Nilai kami</Heading>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <FeatureCard
          v-for="(v, i) in values"
          :key="v.title"
          size="sm"
          title-as="span"
          :kicker="String(i + 1).padStart(2, '0')"
          :title="v.title"
          :body="v.body"
        />
      </div>
    </PageSection>

    <!-- Tim (hidden until the team is real) -->
    <PageSection v-if="team.length" class="border-t border-obsidian-300">
      <SectionHeader title="Tim Eskala" lede="Strategi, konten, desain, video, dan iklan dalam satu tim." />
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TeamCard v-for="member in team" :key="member.name" v-bind="member" />
      </div>
    </PageSection>

    <CtaSection
      :pad-top="false"
      title="Konsultasi gratis 30 menit"
      body="Ceritakan kondisi klinik Anda. Kami akan memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami."
    />
  </div>
</template>
