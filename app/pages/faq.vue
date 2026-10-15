<!-- FAQ: every page's FAQ group on one page (decided 2026-10-15; spec 001, FR-013). The design has
     no page of its own; the first two groups' headings and answers are the reference pages' own. -->
<script setup lang="ts">
import { faqGroups } from "~/data/faqs"
import type { FaqItem } from "~/types/content"

// A question that sits on two pages is asked once, in its first group.
const seen = new Set<string>()
const groups = faqGroups
  .map(group => ({
    title: group.title,
    items: group.items.filter((item: FaqItem) => !seen.has(item.question) && seen.add(item.question)),
  }))
  .filter(group => group.items.length)

usePageSeo({
  title: "Pertanyaan yang Sering Diajukan",
  path: "/faq",
  faqs: groups.flatMap(group => group.items),
})
</script>

<template>
  <div>
    <PageSection>
      <Heading as="h1" size="hero" class="max-w-195">Pertanyaan yang sering diajukan</Heading>
    </PageSection>

    <PageSection v-for="group in groups" :key="group.title" pad="bottom">
      <Heading class="mb-8">{{ group.title }}</Heading>
      <FaqList :items="group.items" />
    </PageSection>

    <CtaSection
      :pad-top="false"
      title="Konsultasi gratis 30 menit"
      body="Ceritakan kondisi klinik, rumah sakit, atau praktik Anda. Kami akan memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami."
    />
  </div>
</template>
