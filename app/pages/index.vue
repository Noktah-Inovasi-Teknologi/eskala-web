<!-- Beranda (design/reference/home.html). Copy is verbatim from the reference. -->
<script setup lang="ts">
import { latestArticles } from "~/data/articles"
import { homeFaqs } from "~/data/faqs"
import { consultLink, pricing } from "~/data/site"
import { popularBadge, tiers } from "~/data/smm"
import { donnyQuote, eckyQuote } from "~/data/testimonials"
import type { Milestone, ProcessStep } from "~/types/content"

usePageSeo({
  title: "Eskala — Digital Marketing untuk Klinik, Rumah Sakit, dan Dokter",
  description: "Partner digital marketing dan komunikasi kesehatan untuk klinik pratama dan utama, rumah sakit, serta dokter. Konsultasi gratis 30 menit lewat WhatsApp.",
  path: "/",
  full: true,
})

const services = [
  {
    tone: "cobalt" as const,
    kicker: "01",
    title: "Digital Marketing",
    body: "Pengelolaan media sosial dan iklan untuk klinik, rumah sakit, dan dokter, dengan medical review sebelum tayang.",
    items: ["Social Media Management", "Ads Management: Meta, Google, TikTok"],
    link: { label: "Lihat Digital Marketing", to: "/digital-marketing" },
  },
  {
    tone: "white" as const,
    kicker: "02",
    tag: "Segera",
    title: "Education",
    body: "Materi belajar komunikasi kesehatan untuk staf, tenaga kesehatan, dan manajemen klinik.",
    items: ["Online Class", "Webinar", "Course Videos & Modules"],
    link: { label: "Lihat rencana Education", to: "/education" },
  },
  {
    tone: "white" as const,
    kicker: "03",
    tag: "Segera",
    title: "Training",
    body: "Pelatihan tatap muka untuk tim klinik dan rumah sakit, dari sesi praktik singkat sampai program di tempat Anda.",
    items: ["Workshop", "Bootcamp", "In-house Training"],
    link: { label: "Lihat rencana Training", to: "/training" },
  },
]

const partnership = [
  { tone: "cobalt-soft" as const, title: "Tim Anda memegang arah", body: "Strategi, prioritas, dan persetujuan akhir tetap di tim internal." },
  { tone: "subtle" as const, title: "Kami menambah kapasitas", body: "Produksi konten, medical review, iklan, dan analisis performa." },
  { tone: "subtle" as const, title: "Satu ritme kerja", body: "Kalender konten bersama, PIC yang jelas, dan meeting evaluasi bulanan." },
  { tone: "copper-soft" as const, title: "Tim medis tetap dilibatkan", body: "Dokter dan tenaga medis Anda meninjau isi sebelum konten tayang." },
]

const steps: ProcessStep[] = [
  { title: "Brief", body: "Tujuan, audiens, dan satu pesan utama.", highlight: "ink" },
  { title: "Angle", body: "Dari nama layanan ke pertanyaan pasien." },
  { title: "Medical review", body: "Klaim dan istilah dicek sebelum produksi.", highlight: "cobalt" },
  { title: "Produksi", body: "Foto, video, desain, dan copy." },
  { title: "QA", body: "Typo, brand, CTA, dan format." },
  { title: "Laporan", body: "Apa yang terjadi, dan langkah berikutnya." },
]

const milestones: Milestone[] = [
  { when: "Bulan 0", what: "Pertemuan awal" },
  { when: "Bulan 1", what: "Mulai produksi" },
  { when: "Bulan 3", what: "Hasil pertama terukur" },
  { when: "Bulan 6", what: "Layanan diperluas" },
  { when: "Bulan 12", what: "Leads tumbuh konsisten" },
  { when: "Bulan 18", what: "Kerja sama berlanjut" },
]

const highlight = "bg-[linear-gradient(transparent_48%,var(--color-copper-500)_48%,var(--color-copper-500)_62%,transparent_62%)]"
</script>

<template>
  <div>
    <!-- Hero -->
    <UContainer class="pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-22">
      <div class="flex flex-wrap items-center gap-10 lg:gap-14">
        <div class="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
          <Eyebrow>
            <span>Digital marketing kesehatan</span>
            <span class="text-accent-strong">Klinik pratama &amp; utama · Rumah sakit · Dokter umum &amp; spesialis</span>
          </Eyebrow>
          <Heading as="h1" size="hero-home">Membumikan <span class="text-cobalt-500">kesehatan</span></Heading>
          <Lede size="lg" class="max-w-135">Eskala membantu klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis berkomunikasi dengan pasien di seluruh Indonesia, bersama tim marketing yang sudah Anda miliki.</Lede>
          <PricePill />
          <div class="flex flex-wrap items-center gap-x-7 gap-y-4">
            <PillButton variant="whatsapp" :to="consultLink">Konsultasi gratis 30 menit</PillButton>
            <ArrowLink to="#layanan">Lihat layanan</ArrowLink>
          </div>
        </div>
        <div class="flex min-w-0 flex-[1_1_440px] justify-end">
          <WingPanel class="aspect-square w-full max-w-150">
            <FloatingQuote v-bind="donnyQuote" class="absolute right-5 bottom-5 left-5 sm:right-8 sm:bottom-8 sm:left-8" />
          </WingPanel>
        </div>
      </div>
    </UContainer>

    <!-- Masalah -->
    <PageSection>
      <div class="flex flex-wrap items-start gap-10 lg:gap-14">
        <div class="flex min-w-0 flex-[1_1_600px] flex-col gap-7">
          <Eyebrow>Keluhan yang sering kami dengar</Eyebrow>
          <Heading size="display">“Kontennya sudah rutin. <span class="text-cobalt-500">Tapi rasanya masih seperti brosur.”</span></Heading>
          <Lede class="max-w-140">Biasanya bukan soal desain. Kontennya terlalu fokus pada layanan, sementara pasien datang dengan pertanyaan. Karena itu kami mulai dengan mengenal klinik dan pasien Anda sebelum produksi.</Lede>
        </div>
        <!-- Photo pending: briefing with a doctor before a shoot. Its caption returns with the photo. -->
        <MediaPlaceholder label="Foto dokumenter, 4:5 — briefing dengan dokter sebelum shooting" class="aspect-4/5 min-w-65 flex-[0_1_380px] rounded-3xl" />
      </div>
    </PageSection>

    <!-- Layanan -->
    <PageSection id="layanan" tone="subtle" bordered class="scroll-mt-4">
      <SectionHeader
        title="Layanan Eskala"
        lede="Digital Marketing sudah berjalan untuk lebih dari 10 fasilitas kesehatan. Education dan Training sedang kami siapkan."
      />
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="s in services" :key="s.title" v-bind="s" :wing="s.tone === 'cobalt'" />
      </div>
    </PageSection>

    <!-- Bekerja bersama tim marketing -->
    <PageSection pad="top">
      <div class="flex flex-wrap items-start gap-x-16 gap-y-10">
        <div class="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
          <Heading>Bekerja bersama tim marketing Anda</Heading>
          <Lede>Banyak klien kami sudah punya tim marketing atau humas sendiri. Eskala bergabung sebagai tambahan tenaga untuk tim tersebut.</Lede>
        </div>
        <div class="grid min-w-0 flex-[1_1_560px] gap-4 sm:grid-cols-2">
          <FeatureCard v-for="p in partnership" :key="p.title" v-bind="p" size="sm" title-as="span" />
        </div>
      </div>
    </PageSection>

    <!-- Alur -->
    <PageSection>
      <SectionHeader title="Alur produksi konten" lede="Medical review dilakukan sebelum produksi, bukan setelah konten jadi." lede-class="max-w-105" />
      <ProcessSteps :steps="steps" />
    </PageSection>

    <!-- Bahasa pasien -->
    <PageSection tone="dark">
      <div class="flex flex-wrap items-start gap-x-18 gap-y-12">
        <div class="flex min-w-0 max-w-125 flex-[1_1_420px] flex-col gap-6.5">
          <Eyebrow tone="on-dark" rule>Bahasa pasien</Eyebrow>
          <Heading size="display" tone="white">Istilah medis yang <span class="text-cobalt-400">mudah dipahami pasien</span></Heading>
          <p class="text-base leading-[1.65] sm:text-lg">Kami menyederhanakan istilah medis tanpa mengubah artinya. Setiap penjelasan dicek tim medis klinik Anda sebelum tayang.</p>
        </div>
        <div class="flex min-w-0 flex-[1_1_540px] flex-col">
          <div class="border-b border-obsidian-800 pb-8">
            <p class="text-[clamp(20px,2vw,28px)] font-semibold text-obsidian-500"><span :class="highlight">Katarak senilis</span></p>
            <p class="mt-2.5 text-[clamp(26px,3vw,42px)] font-extrabold leading-[1.14] tracking-[-0.02em] text-white">Lensa mata keruh karena usia. Rasanya seperti melihat lewat kaca berembun.</p>
          </div>
          <div class="flex flex-wrap gap-x-10 pt-6.5 sm:pl-[min(80px,8%)]">
            <div class="min-w-0 flex-[1_1_220px] pb-5.5">
              <p class="text-[17px] font-semibold text-obsidian-500"><span :class="highlight">Hipertensi derajat 1</span></p>
              <p class="mt-2 text-xl font-bold leading-[1.3] text-white sm:text-[21px]">Tekanan darah tinggi, tahap awal.</p>
            </div>
            <div class="min-w-0 flex-[1_1_220px] pb-5.5 sm:mt-8">
              <p class="text-base font-semibold text-obsidian-500"><span :class="highlight">Karies media</span></p>
              <p class="mt-2 text-lg font-bold leading-[1.35] text-white">Gigi berlubang yang sudah melewati lapisan terluar.</p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>

    <!-- Aturan iklan -->
    <PageSection tone="subtle" bordered>
      <div class="flex flex-wrap items-center gap-10 lg:gap-14">
        <div class="flex min-w-0 max-w-125 flex-[1_1_420px] flex-col gap-6">
          <Heading size="display">Sesuai aturan <span class="text-cobalt-500">iklan kesehatan</span></Heading>
          <Lede>Iklan layanan kesehatan tidak boleh memuat janji kesembuhan, kata “terbaik”, testimoni pasien, atau diskon tindakan (Permenkes 1787/2010). Kami membantu klinik tetap menarik tanpa melanggar aturan tersebut.</Lede>
        </div>
        <WingPanel class="min-w-0 flex-[1_1_560px] px-5 py-8 sm:px-10 sm:py-12" wing-class="-top-[25%] -right-[30%] h-[150%] opacity-90">
          <div class="relative flex flex-col gap-5.5">
            <ClaimCard wrong="Pasti sembuh total." right="Bisa ditangani. Hasil tiap pasien berbeda." />
            <ClaimCard tilt="right" wrong="Diskon 50% operasi katarak." right="Jadwal pemeriksaan katarak bulan ini." />
          </div>
        </WingPanel>
      </div>
    </PageSection>

    <!-- Studi kasus -->
    <PageSection id="studi-kasus" tone="cobalt" wing>
      <div class="flex max-w-190 flex-col gap-5.5">
        <Eyebrow tone="on-cobalt">Studi kasus · sejak 2024</Eyebrow>
        <Heading size="display" tone="white">SMEC Group, jaringan klinik mata dengan 10+ cabang</Heading>
        <div class="flex flex-wrap gap-3">
          <StatChip value=">4x" label="ROAS iklan" />
          <StatChip value="250+" label="konten per bulan" />
        </div>
        <ArrowLink to="/case-study" tone="light" class="self-start">Lihat semua studi kasus</ArrowLink>
      </div>
      <Milestones :items="milestones" class="mt-16" />
    </PageSection>

    <!-- Kata klien -->
    <PageSection>
      <div class="flex flex-wrap items-center gap-x-16 gap-y-10">
        <Heading class="flex-[1_1_360px]">Kata klien kami</Heading>
        <QuoteBlock v-bind="eckyQuote" class="flex-[1_1_560px]" />
      </div>
    </PageSection>

    <!-- Paket -->
    <PageSection id="paket" class="scroll-mt-4" pad="bottom">
      <SectionHeader
        title="Paket Social Media Management"
        lede="Paket dibedakan dari kedalaman evaluasi dan dukungan, bukan hanya jumlah konten. Rincian harga tiap paket kami kirim dalam proposal."
        layout="stack"
        title-class="max-w-160 flex-[1_1_480px]"
      >
        <template #aside>
          <PriceBadge :label="pricing.smm.from" :value="pricing.smm.amount" sub="per bulan, per akun" />
        </template>
      </SectionHeader>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <TierCard
          v-for="tier in tiers"
          :key="tier.name"
          :name="tier.name"
          :description="tier.summary"
          :badge="tier.popular ? popularBadge : undefined"
          badge-tone="popular-soft"
          :highlighted="tier.popular"
        />
      </div>
      <ArrowLink to="/digital-marketing#paket" class="mt-6">Bandingkan fitur semua paket</ArrowLink>
    </PageSection>

    <!-- FAQ -->
    <PageSection id="faq" class="scroll-mt-4 border-t border-obsidian-300">
      <Heading class="mb-8">Pertanyaan yang sering diajukan</Heading>
      <FaqList :items="homeFaqs" />
    </PageSection>

    <!-- Artikel -->
    <PageSection tone="subtle" class="border-t">
      <SectionHeader
        title="Artikel terbaru"
        lede="Panduan praktis untuk tim marketing klinik, rumah sakit, dan dokter."
        layout="stack"
      >
        <template #aside>
          <ArrowLink to="/articles">Lihat semua artikel</ArrowLink>
        </template>
      </SectionHeader>
      <div class="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard v-for="article in latestArticles" :key="article.title" :article="article" />
      </div>
    </PageSection>

    <CtaSection
      title="Konsultasi gratis 30 menit"
      body="Ceritakan kondisi klinik, rumah sakit, atau praktik Anda. Kami akan memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami."
    />
  </div>
</template>
