<!-- Studi kasus (design/reference/studi-kasus.html). Route kept at /case-study (ADR-0001). -->
<script setup lang="ts">
import { caseStudies, caseStudyFilters, caseStudyStats } from "~/data/case-studies"
import { caseStudyFaqs } from "~/data/faqs"
import { eckyQuote } from "~/data/testimonials"

usePageSeo({
  title: "Studi Kasus Digital Marketing Klinik dan Rumah Sakit",
  path: "/case-study",
  faqs: caseStudyFaqs,
})

const filter = ref<(typeof caseStudyFilters)[number]>("Semua")
const shown = computed(() => filter.value === "Semua" ? caseStudies : caseStudies.filter(c => c.category === filter.value))
</script>

<template>
  <div>
    <!-- Header -->
    <UContainer class="pt-10 pb-10 sm:pt-12 lg:pt-16 lg:pb-12">
      <div class="flex max-w-195 flex-col gap-4.5">
        <Heading as="h1" size="hero">Studi kasus</Heading>
        <Lede>Dokumentasi kerja kami bersama fasilitas kesehatan: kondisi awal, strategi yang dijalankan, dan hasil yang terukur. Dokumen lengkap setiap studi kasus bisa diminta lewat WhatsApp.</Lede>
      </div>
      <StatStrip :stats="caseStudyStats" class="mt-10" />
      <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2.5" role="group" aria-label="Saring studi kasus">
          <FilterChip v-for="f in caseStudyFilters" :key="f" :active="filter === f" @click="filter = f">{{ f }}</FilterChip>
        </div>
        <span class="text-sm text-obsidian-600" aria-live="polite">Menampilkan {{ shown.length }} studi kasus</span>
      </div>
    </UContainer>

    <!-- Cards -->
    <UContainer class="flex flex-col gap-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <CaseStudyCard
        v-for="c in shown"
        :key="c.id"
        :variant="c.variant"
        :chips="c.chips"
        :title="c.title"
        :body="c.body"
        :stats="c.stats"
        :document-title="c.documentTitle"
        :media-label="c.mediaLabel"
      />
      <div v-if="!shown.length" class="flex flex-col items-start gap-3 rounded-3xl border border-obsidian-300 bg-obsidian-100 p-6 sm:p-8">
        <p class="text-lg font-bold text-obsidian-950">Belum ada studi kasus untuk {{ filter.toLowerCase() }}.</p>
        <PillButton variant="outline" size="sm" @click="filter = 'Semua'">Lihat semua studi kasus</PillButton>
      </div>
    </UContainer>

    <!-- Kata klien -->
    <PageSection tone="copper-soft" bordered>
      <div class="flex flex-wrap items-center gap-x-16 gap-y-8">
        <Heading class="flex-[1_1_320px]">Kata klien kami</Heading>
        <QuoteBlock v-bind="eckyQuote" variant="plain" class="flex-[1_1_600px]" />
      </div>
    </PageSection>

    <!-- FAQ (spec 001, G-23: not in the design) -->
    <PageSection>
      <Heading class="mb-8">Pertanyaan seputar studi kasus</Heading>
      <FaqList :items="caseStudyFaqs" />
    </PageSection>

    <CtaSection
      :pad-top="false"
      title="Ingin hasil seperti ini untuk tempat Anda?"
      body="Konsultasi gratis 30 menit. Kami melihat kondisi digital klinik, rumah sakit, atau praktik Anda saat ini, lalu memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami."
    />
  </div>
</template>
