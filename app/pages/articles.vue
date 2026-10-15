<!-- Artikel (design/reference/artikel.html). No article is written yet (decided 2026-10-15):
     the cards show the proposed topics, tagged Segera, and aren't links. "Muat artikel lainnya"
     returns when there is more to load. -->
<script setup lang="ts">
import { articleCategories, articleGrid, featuredArticle, featuredLabel } from "~/data/articles"
import { articleFaqs } from "~/data/faqs"

usePageSeo({
  title: "Artikel Strategi Pemasaran Klinik dan Rumah Sakit",
  path: "/articles",
  faqs: articleFaqs,
})

const category = ref("Semua")
const query = ref("")

const all = [featuredArticle, ...articleGrid]
const filtering = computed(() => category.value !== "Semua" || query.value.trim() !== "")
const shown = computed(() => {
  const q = query.value.trim().toLowerCase()
  return (filtering.value ? all : articleGrid).filter(a =>
    (category.value === "Semua" || a.category === category.value)
    && (!q || `${a.title} ${a.excerpt}`.toLowerCase().includes(q)),
  )
})

function reset() {
  category.value = "Semua"
  query.value = ""
}

const { status, send } = useWhatsAppHandoff("newsletter")
function subscribe(email: string) {
  send("Halo Eskala! Saya ingin berlangganan artikel baru lewat email.", [["Email", email]])
}
</script>

<template>
  <div>
    <!-- Header -->
    <UContainer class="pt-10 pb-10 sm:pt-12 lg:pt-16">
      <div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
        <div class="flex max-w-175 flex-col gap-4.5">
          <Heading as="h1" size="hero">Artikel</Heading>
          <Lede>Panduan praktis seputar media sosial, iklan, dan komunikasi pasien untuk klinik, rumah sakit, dan dokter.</Lede>
        </div>
        <SearchField v-model="query" label="Cari artikel" class="w-full flex-[0_1_380px]" />
      </div>
      <div class="mt-7 flex flex-wrap gap-2.5" role="group" aria-label="Saring artikel">
        <FilterChip v-for="c in articleCategories" :key="c" :active="category === c" @click="category = c">{{ c }}</FilterChip>
      </div>
    </UContainer>

    <UContainer v-if="!filtering" class="pb-12 sm:pb-16">
      <FeaturedArticle :article="featuredArticle" :label="featuredLabel" />
    </UContainer>

    <UContainer class="pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div v-if="shown.length" class="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard v-for="article in shown" :key="article.title" :article="article" />
      </div>
      <div v-else class="flex flex-col items-start gap-3 rounded-3xl border border-obsidian-300 bg-obsidian-100 p-6 sm:p-8" aria-live="polite">
        <p class="text-lg font-bold text-obsidian-950">
          <template v-if="query.trim()">Belum ada artikel untuk “{{ query.trim() }}”. Coba kata lain, atau lihat semua artikel.</template>
          <template v-else>Belum ada artikel untuk kategori ini.</template>
        </p>
        <PillButton variant="outline" size="sm" @click="reset">Lihat semua artikel</PillButton>
      </div>
    </UContainer>

    <!-- Newsletter -->
    <PageSection tone="copper-soft" bordered pad="compact">
      <div class="flex flex-wrap items-center gap-x-12 gap-y-6">
        <div class="flex min-w-0 flex-[1_1_420px] flex-col gap-2.5">
          <h2 class="text-[clamp(26px,7.7vw,28px)] font-extrabold tracking-[-0.02em] text-obsidian-950 sm:text-[clamp(28px,3vw,38px)]">Artikel baru, langsung ke email Anda</h2>
          <p class="text-base leading-[1.6]">Satu email setiap bulan untuk tim marketing klinik dan rumah sakit.</p>
        </div>
        <div class="flex min-w-0 flex-[1_1_440px] flex-col gap-3">
          <NewsletterForm :status="status" @submit="subscribe" />
          <p v-if="status === 'sent'" role="status" class="text-[15px] text-success-700">Pesan WhatsApp Anda sudah siap. Tekan kirim di WhatsApp, lalu kami kirim artikel baru ke email Anda.</p>
        </div>
      </div>
    </PageSection>

    <!-- FAQ (spec 001, G-23: not in the design) -->
    <PageSection>
      <Heading class="mb-8">Pertanyaan seputar promosi dan aturan iklan</Heading>
      <FaqList :items="articleFaqs" />
    </PageSection>

    <CtaSection
      :pad-top="false"
      title="Konsultasi gratis 30 menit"
      body="Ceritakan kondisi klinik Anda. Kami akan memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami."
    />
  </div>
</template>
