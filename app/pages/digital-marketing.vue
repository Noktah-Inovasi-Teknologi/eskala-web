<!-- Digital Marketing (design/reference/digital-marketing.html): Social Media Management and
     Ads Management on one page. Anchors: #smm, #paket, #ads-management. -->
<script setup lang="ts">
import { digitalMarketingFaqs } from "~/data/faqs"
import { consultLink, pricing } from "~/data/site"
import { comparison, popularBadge, tiers } from "~/data/smm"

usePageSeo({
  title: "Digital Marketing Klinik, Rumah Sakit, dan Dokter",
  description: "Social Media Management dan Ads Management untuk klinik, rumah sakit, dan dokter, dengan medical review sebelum tayang. Mulai dari Rp2,5 juta per bulan.",
  path: "/digital-marketing",
})

const phases = [
  { tone: "subtle-plain" as const, kicker: "Bulan 1–3", kickerTone: "muted" as const, title: "Riset & strategi", body: "Riset klinik dan target pasien, penyusunan strategi, dan produksi konten sejak bulan pertama. Fokusnya pada konsistensi posting." },
  { tone: "cobalt-soft" as const, kicker: "Bulan 4–6", kickerTone: "cobalt" as const, title: "Fondasi & momentum awal", body: "Konten mulai menemukan audiensnya. DM dan konsultasi dari calon pasien mulai datang secara organik. Iklan bisa dimulai, tapi hasilnya belum stabil." },
  { tone: "cobalt" as const, kicker: "Bulan 7–12", kickerTone: "on-dark" as const, title: "Pertumbuhan & optimasi", body: "Performa konten mulai stabil, iklan lebih efisien, dan media sosial mulai rutin mendatangkan pasien." },
]

const examples = [
  { tone: "dark" as const, kicker: "Starter", title: "Carousel informasi umum", body: "Topik dasar yang relevan dengan layanan dan sudah ditinjau pihak klinis. Template konsisten, 3–5 poin, dan CTA informasional." },
  { tone: "cobalt" as const, kicker: "Standard", title: "Carousel cerita dan video pendek", body: "Berangkat dari pertanyaan yang sering muncul. Dua angle edukatif diuji, dengan variasi hook dan CTA." },
  { tone: "white" as const, kicker: "Premium", title: "Seri konten edukatif", body: "Memakai pola pertanyaan pasien yang dianonimkan dan audit kompetitor publik untuk menemukan celah topik. Performa tiap format dibandingkan untuk rencana bulan berikutnya." },
]

const platforms = [
  { tone: "cobalt-soft" as const, title: "Meta Ads", body: "Awareness dan jangkauan lokal, engagement, atau hasil lain sesuai objective kampanye." },
  { tone: "subtle" as const, title: "Google Ads", body: "Menjangkau orang yang sedang mencari layanan atau informasi kesehatan tertentu lewat kata kunci." },
  { tone: "copper-soft" as const, title: "TikTok Ads", body: "Distribusi video berbayar untuk menjangkau audiens sesuai tujuan kampanye." },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <UContainer class="pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
      <div class="flex flex-wrap items-center gap-10 lg:gap-14">
        <div class="flex min-w-0 flex-[1_1_520px] flex-col gap-6.5">
          <Eyebrow>
            <span>Digital Marketing</span>
            <span class="text-accent-strong">Klinik pratama &amp; utama · Rumah sakit · Dokter umum &amp; spesialis</span>
          </Eyebrow>
          <Heading as="h1" size="hero">Media sosial dan iklan untuk <span class="text-cobalt-500">klinik, rumah sakit, dan dokter</span></Heading>
          <Lede size="lg" class="max-w-135">Kami mengelola konten dan iklan bersama tim marketing dan tenaga medis Anda. Setiap konten melewati medical review sebelum tayang.</Lede>
          <PricePill />
          <div class="flex flex-wrap items-center gap-x-7 gap-y-4">
            <PillButton variant="whatsapp" :to="consultLink">Konsultasi gratis 30 menit</PillButton>
            <ArrowLink to="#paket">Lihat paket</ArrowLink>
          </div>
        </div>
        <WingPanel
          class="flex min-h-115 min-w-0 flex-[1_1_440px] flex-col justify-end gap-4.5 p-5 sm:p-10"
          wing-class="-top-[15%] -right-[25%] h-[125%]"
        >
          <PriceBadge
            shape="circle"
            :label="pricing.smm.from"
            :value="pricing.smm.amountShort"
            sub="per bulan"
            class="absolute top-5 right-5 sm:top-7 sm:right-7"
          />
          <ShortcutCard title="Social Media Management" :sub="pricing.smm.sentence" to="#smm" />
          <ShortcutCard title="Ads Management" sub="Meta, Google & TikTok Ads" to="#ads-management" />
        </WingPanel>
      </div>
    </UContainer>

    <!-- Dua layanan -->
    <PageSection tone="subtle" bordered>
      <Heading class="mb-10 max-w-190">Dua layanan yang bisa dipakai terpisah atau bersama</Heading>
      <div class="grid gap-5 lg:grid-cols-2">
        <FeatureCard
          id="smm"
          class="scroll-mt-4"
          title="Social Media Management"
          body="Konten Instagram, TikTok, dan platform lain yang dirancang dari pertanyaan pasien."
          :items="['Riset klinik, target pasien, dan pilar konten', 'Content plan bulanan', 'Foto, video, editing, dan copywriting', 'Medical review dan QA sebelum tayang', 'Laporan dan meeting evaluasi bulanan']"
        />
        <FeatureCard
          id="iklan"
          title="Ads Management"
          body="Iklan Meta, Google, dan TikTok untuk layanan klinik, dikelola tim bersertifikat."
          :items="['Objective, targeting, dan budget', 'Creative brief dan pengecekan komunikasi kesehatan', 'Monitoring dan optimasi', 'Laporan hasil iklan']"
          :link="{ label: 'Fee mulai dari 10% dari biaya iklan', to: '#ads-management' }"
        />
      </div>
      <p class="mt-7 max-w-190 text-base leading-[1.65]">Kebanyakan klinik memulai dengan Social Media Management, lalu menambah Ads Management setelah konten organiknya berjalan.</p>
    </PageSection>

    <!-- Timeline -->
    <PageSection pad="top">
      <SectionHeader title="Kapan hasilnya mulai terlihat?" lede="Gambaran umum untuk klinik yang baru mulai. Setiap klinik bisa berbeda." lede-class="max-w-110" />
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="p in phases" :key="p.title" v-bind="p" size="md" />
      </div>
    </PageSection>

    <!-- Paket -->
    <PageSection id="paket" class="scroll-mt-4" pad="top">
      <SectionHeader
        title="Paket Social Media Management"
        lede="Paket dibedakan dari kedalaman evaluasi dan dukungan, bukan hanya jumlah konten. Rincian harga tiap paket kami kirim dalam proposal setelah konsultasi."
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
          :role="tier.role"
          :quote="tier.quote"
          :description="tier.description"
          :badge="tier.popular ? popularBadge : undefined"
          :highlighted="tier.popular"
          tinted
        />
      </div>
    </PageSection>

    <!-- Perbandingan fitur -->
    <PageSection>
      <h3 class="mb-5 text-2xl font-extrabold text-obsidian-950">Perbandingan fitur</h3>
      <ComparisonTable
        caption="Perbandingan fitur paket Social Media Management"
        :columns="tiers.map(t => t.name)"
        :popular="tiers.findIndex(t => t.popular)"
        :groups="comparison"
      />
      <p class="mt-4 text-sm leading-[1.6] text-obsidian-600">Fitur, kuota, dan batas layanan mengikuti penawaran yang disepakati. Permintaan tambahan dihitung setelah brief dan bahan lengkap diterima.</p>
    </PageSection>

    <!-- Satu topik, tiga paket -->
    <PageSection tone="dark">
      <SectionHeader
        lede="Topiknya sama. Yang berbeda adalah cara menentukan ide, kedalaman brief, dan cara mengevaluasinya."
        tone="white"
        title-class="max-w-175"
        lede-class="max-w-105"
      >
        <template #eyebrow>
          <Eyebrow tone="on-dark-muted">Contoh topik</Eyebrow>
        </template>
        <template #title>“Kapan perlu memeriksakan mata?” di tiap paket</template>
      </SectionHeader>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          v-for="e in examples"
          :key="e.kicker"
          v-bind="e"
          size="md"
          kicker-caps
          :kicker-tone="e.tone === 'white' ? 'accent' : 'on-dark'"
        />
      </div>
    </PageSection>

    <!-- Ads Management -->
    <PageSection id="ads-management" class="scroll-mt-4">
      <SectionHeader
        title="Ads Management"
        lede="Iklan klinik di Meta, Google, dan TikTok, dari perencanaan objective dan targeting sampai optimasi dan laporan. Setiap materi iklan dicek sesuai aturan komunikasi kesehatan dan kebijakan platform."
        layout="stack"
        title-class="max-w-165 flex-[1_1_480px]"
      >
        <template #aside>
          <PriceBadge :label="pricing.ads.from" :value="pricing.ads.amount" sub="dari total biaya iklan" />
        </template>
      </SectionHeader>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="p in platforms" :key="p.title" v-bind="p" size="md" />
      </div>
      <div class="mt-5 flex flex-wrap gap-5">
        <WingPanel class="flex min-w-0 flex-[1_1_520px] flex-col gap-4.5 p-6 sm:p-9" wing-class="-top-[20%] -right-[30%] h-[140%] opacity-45">
          <h3 class="relative text-[22px] font-extrabold text-white">Cara fee dihitung</h3>
          <div class="relative self-start rounded-2xl bg-white px-5.5 py-4.5 text-base font-bold leading-normal text-obsidian-950 sm:text-lg">Fee = persentase paket × (ad spend + pajak)</div>
          <p class="relative text-base leading-[1.65] text-cobalt-100">Budget iklan dibayarkan ke platform dan terpisah dari fee pengelolaan. Paket Starter, Standard, dan Premium berbeda pada persentase fee dan target biaya per hasil (CPR) di tiap platform. Rinciannya ada di proposal.</p>
        </WingPanel>
        <div class="flex min-w-0 flex-[1_1_420px] flex-col gap-4 rounded-3xl border border-obsidian-300 bg-white p-6 sm:p-9">
          <h3 class="text-[22px] font-extrabold text-obsidian-950">Disepakati sebelum iklan tayang</h3>
          <BulletList :items="['Objective dan hasil yang dihitung, misalnya percakapan, lead, atau klik', 'Audiens, lokasi, dan budget', 'Akses akun dan pemilik materi iklan', 'Tracking: pixel, tag, dan landing page', 'Klaim yang boleh dipakai di materi iklan']" />
        </div>
      </div>
      <p class="mt-5 max-w-205 text-[15px] leading-[1.6]">Keberhasilan iklan diukur dari hasil yang disepakati di awal. CTR, CPC, dan CPM kami pakai untuk membaca performa, bukan sebagai satu-satunya ukuran.</p>
    </PageSection>

    <!-- FAQ -->
    <PageSection class="border-t border-obsidian-300">
      <Heading class="mb-8">Pertanyaan seputar Digital Marketing</Heading>
      <FaqList :items="digitalMarketingFaqs" />
    </PageSection>

    <CtaSection
      :pad-top="false"
      title="Pilih paket setelah konsultasi"
      body="Ceritakan kondisi klinik, rumah sakit, atau praktik Anda. Kami bantu menentukan paket yang sesuai, dan memberi 2–3 rekomendasi meskipun Anda belum memutuskan bekerja sama."
    />
  </div>
</template>
