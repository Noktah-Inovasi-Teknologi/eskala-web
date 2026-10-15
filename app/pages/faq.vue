<!-- FAQ: both FAQ sets on one page (decided 2026-10-15; the design has no page of its own).
     Headings and answers are the reference pages' own. -->
<script setup lang="ts">
import { digitalMarketingFaqs, homeFaqs } from "~/data/faqs"

usePageSeo({
  title: "Pertanyaan yang Sering Diajukan",
  description: "Jawaban atas pertanyaan yang sering diajukan tentang layanan Eskala, aturan iklan kesehatan, paket, dan kontrak.",
  path: "/faq",
})

// The contract question sits in both sets; ask it once.
const dmOnly = digitalMarketingFaqs.filter(item => !homeFaqs.some(h => h.question === item.question))
</script>

<template>
  <div>
    <PageSection>
      <Heading as="h1" size="hero" class="mb-10 max-w-195">Pertanyaan yang sering diajukan</Heading>
      <FaqList :items="homeFaqs" />
    </PageSection>

    <PageSection pad="bottom">
      <Heading class="mb-8">Pertanyaan seputar Digital Marketing</Heading>
      <FaqList :items="dmOnly" />
    </PageSection>

    <CtaSection
      :pad-top="false"
      title="Konsultasi gratis 30 menit"
      body="Ceritakan kondisi klinik, rumah sakit, atau praktik Anda. Kami akan memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami."
    />
  </div>
</template>
