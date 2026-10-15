<!-- Training (design/reference/training.html). Segera hadir: the page collects training interest. -->
<script setup lang="ts">
import { consultLink, whatsappLink } from "~/data/site"
import type { InterestField, ProcessStep } from "~/types/content"

// No #kontak band on this page: the header's button opens WhatsApp instead.
definePageMeta({ navCta: consultLink })

usePageSeo({
  title: "Training Komunikasi untuk Klinik dan Rumah Sakit",
  description: "Workshop, Bootcamp, dan In-house Training komunikasi untuk tim klinik dan rumah sakit, berbasis praktik. Segera hadir.",
  path: "/training",
})

const formats = [
  { tone: "white" as const, kicker: "Workshop", title: "Satu topik, langsung praktik", body: "Sesi singkat untuk satu kebutuhan, misalnya menjawab pertanyaan biaya atau menangani keluhan.", items: ["Peserta dari berbagai klinik", "Cocok untuk mencoba lebih dulu"] },
  { tone: "white" as const, kicker: "Bootcamp", title: "Program intensif beberapa sesi", body: "Beberapa topik dalam satu rangkaian, dengan latihan dan evaluasi di setiap sesi.", items: ["Untuk staf baru atau tim yang ingin naik level", "Peserta dari berbagai klinik"] },
  { tone: "cobalt" as const, kicker: "In-house Training", title: "Di tempat Anda, untuk tim Anda", body: "Materi disesuaikan dengan layanan, pasien, dan situasi di klinik Anda.", items: ["Contoh kasus dari klinik sendiri", "Jadwal mengikuti operasional klinik"] },
]

const steps: ProcessStep[] = [
  { title: "Diskusi kebutuhan", body: "Masalah komunikasi yang paling sering muncul di klinik.", highlight: "ink" },
  { title: "Observasi", body: "Melihat langsung alur pasien dan percakapan sehari-hari." },
  { title: "Materi khusus", body: "Skrip dan contoh disusun dari kasus klinik Anda.", highlight: "cobalt" },
  { title: "Sesi praktik", body: "Role-play dan umpan balik langsung." },
  { title: "Evaluasi", body: "Catatan perkembangan dan rekomendasi lanjutan." },
]

const fields: InterestField[] = [
  { name: "name", label: "Nama", placeholder: "Nama lengkap", required: "Isi nama Anda", autocomplete: "name" },
  { name: "contact", label: "WhatsApp atau email", type: "contact", placeholder: "08xx / nama@klinik.id", required: "Isi nomor WhatsApp atau email" },
  { name: "clinic", label: "Nama klinik", placeholder: "Nama klinik", autocomplete: "organization" },
  { name: "size", label: "Jumlah staf yang akan ikut", type: "select", items: ["1–5", "6–15", "16–30", "Lebih dari 30"] },
]
const choices = ["Workshop", "Bootcamp", "In-house Training", "Belum tahu"]

const askLink = whatsappLink("Halo Eskala! Saya ingin bertanya tentang Training.")

const { status, send } = useWhatsAppHandoff()
function onSubmit(data: Record<string, string | string[]>) {
  send("Halo Eskala! Saya ingin mengajukan minat training.", [
    ["Nama", data.name],
    ["WhatsApp atau email", data.contact],
    ["Klinik", data.clinic],
    ["Jumlah staf", data.size],
    ["Format", data.choices],
  ])
}
</script>

<template>
  <div>
    <!-- Hero -->
    <UContainer class="pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-22">
      <div class="flex flex-wrap items-center gap-10 lg:gap-14">
        <div class="flex min-w-0 flex-[1_1_520px] flex-col gap-6.5">
          <Tag>Segera hadir</Tag>
          <Heading as="h1" size="hero">Training komunikasi untuk <span class="text-cobalt-500">klinik dan rumah sakit</span></Heading>
          <Lede size="lg" class="max-w-135">Pelatihan tatap muka yang berfokus pada praktik: cara menyambut, menjelaskan, dan menjawab pasien. Programnya sedang kami siapkan.</Lede>
          <div class="flex flex-wrap items-center gap-x-7 gap-y-4">
            <PillButton variant="primary" to="#daftar" trailing-icon="i-ph-arrow-right">Ajukan minat training</PillButton>
            <ArrowLink :to="askLink">Tanya via WhatsApp</ArrowLink>
          </div>
        </div>
        <WingPanel class="aspect-square w-full max-w-140 min-w-0 flex-[1_1_440px]" wing-class="-top-[8%] -right-[20%] h-[128%]">
          <div class="absolute top-6 left-5 w-[min(260px,78%)] bg-white p-3 pb-10 shadow-float sm:top-8 sm:left-7 sm:-rotate-3">
            <MediaPlaceholder label="Foto: role-play di meja depan" tone="neutral-strong" class="h-[min(180px,40vw)]" />
            <span class="absolute bottom-3 left-3.5 text-sm font-bold text-obsidian-800">Simulasi menyambut pasien</span>
          </div>
          <div class="absolute right-5 bottom-6 max-w-[min(280px,80%)] border-l-5 border-copper-500 bg-white px-5 py-4.5 sm:right-7 sm:bottom-8 sm:rotate-2">
            <p class="text-[15px] leading-normal text-obsidian-800"><b class="text-obsidian-950">Berbasis praktik.</b> Peserta melatih percakapan nyata dari klinik masing-masing.</p>
          </div>
        </WingPanel>
      </div>
    </UContainer>

    <!-- Format -->
    <PageSection tone="subtle" bordered>
      <Heading class="mb-10">Tiga format training</Heading>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="f in formats" :key="f.kicker" v-bind="f" :wing="f.tone === 'cobalt'" />
      </div>
    </PageSection>

    <!-- Alur In-house -->
    <PageSection>
      <SectionHeader title="Alur In-house Training" lede="Rencana alur yang akan kami gunakan. Detailnya bisa berubah saat program dibuka." lede-class="max-w-110" />
      <ProcessSteps :steps="steps" />
    </PageSection>

    <!-- Daftar -->
    <PageSection id="daftar" class="scroll-mt-4" pad="bottom">
      <div class="flex flex-wrap items-start gap-x-18 gap-y-12">
        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-4.5">
          <Heading>Ajukan minat training</Heading>
          <Lede>Ceritakan kebutuhan tim Anda. Kami hubungi saat program dibuka, dan klinik yang mendaftar lebih dulu kami ajak berdiskusi soal materinya.</Lede>
        </div>
        <InterestForm
          class="flex-[1_1_560px]"
          :fields="fields"
          choices-label="Format yang diminati"
          :choices="choices"
          submit-label="Kirim minat"
          note="Data Anda hanya dipakai untuk mengirim kabar tentang program ini."
          :status="status"
          sent-message="Pesan WhatsApp Anda sudah siap. Tekan kirim di WhatsApp, lalu kami hubungi saat program dibuka."
          @submit="onSubmit"
        />
      </div>
    </PageSection>
  </div>
</template>
