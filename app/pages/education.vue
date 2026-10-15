<!-- Education (design/reference/education.html). Segera hadir: the page collects a waitlist. -->
<script setup lang="ts">
import { consultLink } from "~/data/site"
import type { InterestField } from "~/types/content"

// No #kontak band on this page: the header's button opens WhatsApp instead.
definePageMeta({ navCta: consultLink })

usePageSeo({
  title: "Education: Kelas Komunikasi Kesehatan untuk Klinik dan Rumah Sakit",
  description: "Online Class, Webinar, Course Videos, dan Modules komunikasi kesehatan untuk staf, tenaga kesehatan, dan manajemen klinik. Segera hadir.",
  path: "/education",
})

const formats = [
  { tone: "cobalt-soft" as const, tag: "Langsung", tagTone: "white-cobalt" as const, title: "Online Class", body: "Kelas interaktif dengan fasilitator, latihan, dan tanya jawab." },
  { tone: "subtle-plain" as const, tag: "Langsung", tagTone: "white-cobalt" as const, title: "Webinar", body: "Satu sesi online tentang satu topik, terbuka untuk banyak peserta." },
  { tone: "copper-soft" as const, tag: "Mandiri", tagTone: "white-accent" as const, title: "Course Videos", body: "Video rekaman yang bisa ditonton kapan saja, sesuai waktu tim Anda." },
  { tone: "subtle-plain" as const, tag: "Mandiri", tagTone: "white-accent" as const, title: "Modules", body: "Materi tertulis dan lembar kerja yang bisa dipakai ulang di klinik." },
]

const audiences = [
  { title: "Staf front office dan CS", body: "Yang setiap hari menjawab pertanyaan pasien di meja depan, telepon, dan WhatsApp." },
  { title: "Tenaga kesehatan", body: "Dokter, perawat, dan tenaga medis yang menjelaskan diagnosis dan tindakan ke pasien." },
  { title: "Manajemen klinik dan rumah sakit", body: "Yang menentukan arah komunikasi, standar layanan, dan pemasaran klinik." },
]

const fields: InterestField[] = [
  { name: "name", label: "Nama", placeholder: "Nama lengkap", required: "Isi nama Anda", autocomplete: "name" },
  { name: "contact", label: "WhatsApp atau email", type: "contact", placeholder: "08xx / nama@klinik.id", required: "Isi nomor WhatsApp atau email" },
  { name: "role", label: "Peran Anda", type: "select", items: ["Staf front office / CS", "Tenaga kesehatan", "Manajemen / pimpinan", "Lainnya"] },
  { name: "clinic", label: "Nama klinik", placeholder: "Opsional", autocomplete: "organization" },
]
const topics = ["Komunikasi dengan pasien", "Menjelaskan biaya", "Aturan iklan kesehatan", "Media sosial untuk tenaga kesehatan", "Edukasi pra- dan pasca-tindakan", "Lainnya"]

const { status, send } = useWhatsAppHandoff()
function onSubmit(data: Record<string, string | string[]>) {
  send("Halo Eskala! Saya ingin mendapat kabar pertama tentang Education.", [
    ["Nama", data.name],
    ["WhatsApp atau email", data.contact],
    ["Peran", data.role],
    ["Klinik", data.clinic],
    ["Topik", data.choices],
  ])
}
</script>

<template>
  <div>
    <!-- Hero (dark) -->
    <section class="relative overflow-hidden bg-obsidian-950 text-obsidian-300 [--focus-ring:var(--color-cobalt-400)]">
      <UContainer class="py-12 sm:py-16 md:py-20 lg:pt-22 lg:pb-24">
        <div class="flex flex-wrap items-center gap-x-18 gap-y-12">
          <div class="flex min-w-0 flex-[1_1_520px] flex-col gap-6.5">
            <Tag>Segera hadir</Tag>
            <Heading as="h1" size="hero" tone="white">Edukasi komunikasi kesehatan untuk <span class="text-cobalt-400">klinik dan rumah sakit</span></Heading>
            <p class="max-w-135 text-[17px] leading-[1.65] sm:text-[19px]">Online Class, Webinar, Course Videos, dan Modules untuk staf, tenaga kesehatan, dan manajemen klinik. Programnya sedang kami siapkan.</p>
            <PillButton variant="accent" to="#daftar" trailing-icon="i-ph-arrow-right" class="self-start">Daftar untuk kabar pertama</PillButton>
          </div>
          <div class="flex min-w-0 flex-[1_1_440px] flex-col">
            <div class="border-b border-obsidian-800 pb-7">
              <p class="text-xl font-semibold text-obsidian-500 sm:text-[22px]">
                <span class="bg-[linear-gradient(transparent_48%,var(--color-copper-500)_48%,var(--color-copper-500)_62%,transparent_62%)]">Edukasi pra-tindakan</span>
              </p>
              <p class="mt-2.5 text-[clamp(26px,2.6vw,36px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">Menjelaskan persiapan operasi dengan kalimat yang bisa diulang pasien di rumah.</p>
            </div>
            <p class="mt-5.5 text-[15px] leading-[1.6] text-obsidian-500">Contoh jenis materi yang sedang kami susun.</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Format -->
    <PageSection>
      <SectionHeader title="Empat format belajar" lede="Bisa diikuti sendiri atau bersama tim, dari mana saja." title-class="max-w-150" />
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard v-for="f in formats" :key="f.title" v-bind="f" size="md" />
      </div>
    </PageSection>

    <!-- Untuk siapa -->
    <PageSection tone="subtle" bordered>
      <Heading class="mb-10">Untuk siapa</Heading>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="a in audiences" :key="a.title" v-bind="a" />
      </div>
    </PageSection>

    <!-- Daftar -->
    <PageSection id="daftar" class="scroll-mt-4">
      <div class="flex flex-wrap items-start gap-x-18 gap-y-12">
        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-4.5">
          <Heading>Dapatkan kabar pertama</Heading>
          <Lede>Tinggalkan kontak Anda. Kami kabari saat kelas pertama dibuka, dan jawaban Anda membantu kami menentukan topik yang dibuat lebih dulu.</Lede>
        </div>
        <InterestForm
          class="flex-[1_1_560px]"
          :fields="fields"
          choices-label="Topik yang ingin Anda pelajari"
          :choices="topics"
          submit-label="Daftar"
          note="Data Anda hanya dipakai untuk mengirim kabar tentang program ini."
          :status="status"
          sent-message="Pesan WhatsApp Anda sudah siap. Tekan kirim di WhatsApp, lalu kami kabari saat kelas pertama dibuka."
          @submit="onSubmit"
        />
      </div>
    </PageSection>
  </div>
</template>
