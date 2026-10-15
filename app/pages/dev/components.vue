<!-- Dev-only gallery: every shared component, with the design's own copy, so /ui-sweep can check
     them at every width before the pages are assembled. Not served in production. -->
<script setup lang="ts">
import type { ArticleSummary, ComparisonGroup, FaqItem, InterestField, ProcessStep, Stat } from "~/types/content"

if (!import.meta.dev) throw createError({ statusCode: 404, statusMessage: "Not found" })
useHead({ title: "Komponen", meta: [{ name: "robots", content: "noindex" }] })

const filter = ref("Semua")
const search = ref("")

const steps: ProcessStep[] = [
  { title: "Brief", body: "Tujuan, audiens, dan satu pesan utama.", highlight: "ink" },
  { title: "Angle", body: "Dari nama layanan ke pertanyaan pasien." },
  { title: "Medical review", body: "Klaim dan istilah dicek sebelum produksi.", highlight: "cobalt" },
  { title: "Produksi", body: "Foto, video, desain, dan copy." },
  { title: "QA", body: "Typo, brand, CTA, dan format." },
  { title: "Laporan", body: "Apa yang terjadi, dan langkah berikutnya." },
]

const groups: ComparisonGroup[] = [
  {
    title: "Dasar",
    rows: [
      { feature: "Media sosial aktif sesuai kalender", cells: [true, true, true] },
      { feature: "Pemantauan pertumbuhan followers", cells: ["Dipantau, tanpa jaminan angka", true, true] },
    ],
  },
  {
    title: "Komunitas dan permintaan tambahan",
    rows: [
      { feature: "Balas DM dan komentar sesuai SOP", cells: [false, false, true] },
      { feature: "Permintaan konten di luar jadwal", cells: ["Paling lambat H-3", "H-3 hingga H-1", "Hingga hari H"] },
    ],
  },
]

const stats: Stat[] = [
  { value: "10+", label: "Fasilitas kesehatan aktif" },
  { value: "2", label: "Studi kasus tersedia" },
  { value: "+200%", label: "Rata-rata pertumbuhan reach organik", tone: "cobalt" },
  { value: "80%", label: "Klien memperpanjang kontrak", tone: "accent" },
]

const faqs: FaqItem[] = [
  { question: "Berapa lama sampai hasilnya terlihat?", answer: "Tiga bulan pertama untuk riset, strategi, dan produksi rutin. Pertumbuhan organik biasanya mulai terlihat di bulan 4–6, dan iklan bisa dioptimasi di bulan 7–12." },
  { question: "Apakah kontraknya mengikat?", answer: "Tidak. Kontrak fleksibel, tanpa komitmen tahunan." },
]

const articles: ArticleSummary[] = [
  { title: "Apa saja yang tidak boleh ada di iklan klinik?", excerpt: "Janji kesembuhan, kata “terbaik”, testimoni pasien, dan diskon tindakan. Ini cara tetap menarik tanpa melanggarnya.", readTime: "7 menit baca", category: "Aturan iklan", categoryTone: "white-cobalt", mediaTone: "cobalt" },
  { title: "Cara menjawab pertanyaan harga lewat WhatsApp", excerpt: "Template balasan untuk tim CS: menjawab langsung, memberi satu angka pasti, dan menutup dengan pilihan jadwal.", readTime: "5 menit baca", category: "Komunikasi pasien", categoryTone: "white-accent", mediaTone: "copper" },
  { title: "Kapan klinik perlu mulai beriklan?", excerpt: "Iklan bekerja lebih baik saat konten organik sudah berjalan. Tanda-tanda klinik Anda sudah siap.", readTime: "6 menit baca", category: "Ads Management", categoryTone: "white-ink", mediaTone: "neutral" },
]

const fields: InterestField[] = [
  { name: "name", label: "Nama", placeholder: "Nama lengkap", required: "Isi nama Anda", autocomplete: "name" },
  { name: "contact", label: "WhatsApp atau email", type: "contact", placeholder: "08xx / nama@klinik.id", required: "Isi nomor WhatsApp atau email" },
  { name: "role", label: "Peran Anda", type: "select", items: ["Staf front office / CS", "Tenaga kesehatan", "Manajemen / pimpinan", "Lainnya"] },
  { name: "clinic", label: "Nama klinik", placeholder: "Opsional", autocomplete: "organization" },
]
const formStatus = ref<"idle" | "sending" | "sent" | "failed">("idle")
</script>

<template>
  <div>
    <PageSection>
      <div class="flex flex-col gap-6">
        <Eyebrow>Galeri komponen</Eyebrow>
        <Heading as="h1" size="hero-home">Membumikan <span class="text-cobalt-500">kesehatan</span></Heading>
        <Heading as="h2" size="hero">Media sosial dan iklan untuk <span class="text-cobalt-500">klinik, rumah sakit, dan dokter</span></Heading>
        <Heading size="display">Sesuai aturan <span class="text-cobalt-500">iklan kesehatan</span></Heading>
        <Heading>Alur produksi konten</Heading>
        <Heading size="feature">Membangun kehadiran digital klinik baru dari nol</Heading>
        <Lede size="lg">Eskala membantu klinik pratama dan utama, rumah sakit, serta dokter umum maupun spesialis berkomunikasi dengan pasien di seluruh Indonesia, bersama tim marketing yang sudah Anda miliki.</Lede>
        <Lede>Medical review dilakukan sebelum produksi, bukan setelah konten jadi.</Lede>
        <Eyebrow><span>Digital marketing kesehatan</span><span class="text-accent-strong">Klinik pratama &amp; utama · Rumah sakit · Dokter umum &amp; spesialis</span></Eyebrow>
      </div>
    </PageSection>

    <PageSection tone="subtle" bordered>
      <div class="flex flex-col gap-8">
        <PricePill />
        <div class="flex flex-wrap items-center gap-x-7 gap-y-4">
          <PillButton variant="whatsapp" to="#kontak">Konsultasi gratis 30 menit</PillButton>
          <ArrowLink to="#layanan">Lihat layanan</ArrowLink>
        </div>
        <div class="flex flex-wrap gap-4">
          <PillButton variant="primary" trailing-icon="i-ph-arrow-right" to="#daftar">Ajukan minat training</PillButton>
          <PillButton variant="accent" trailing-icon="i-ph-arrow-right" to="#daftar">Daftar untuk kabar pertama</PillButton>
          <PillButton variant="outline" size="sm" to="#kontak">Konsultasi gratis</PillButton>
        </div>
        <div class="flex flex-wrap items-end gap-8">
          <PriceBadge label="Mulai dari" value="Rp2,5 juta" sub="per bulan, per akun" />
          <PriceBadge label="Fee mulai dari" value="10%" sub="dari total biaya iklan" />
          <PriceBadge shape="circle" label="Mulai dari" value="Rp2,5 jt" sub="per bulan" />
          <PriceBadge shape="tag" label="Tagline" value="Membumikan kesehatan" />
        </div>
        <div class="flex flex-wrap gap-3">
          <Tag>Segera</Tag><Tag tone="popular">Paling dipilih</Tag><Tag tone="popular-soft">Paling dipilih</Tag>
          <Tag tone="white-cobalt">Langsung</Tag><Tag tone="white-accent">Mandiri</Tag>
        </div>
        <div class="flex flex-wrap gap-2">
          <Chip tone="accent">Klinik mata</Chip><Chip tone="accent-soft">Klinik mata</Chip><Chip>Klinik Mata Boyolali</Chip>
          <Chip tone="white-cobalt">Aturan iklan</Chip><Chip tone="white-accent">Komunikasi pasien</Chip><Chip tone="white-ink">Ads Management</Chip>
        </div>
        <div class="flex flex-wrap gap-2.5">
          <FilterChip v-for="c in ['Semua', 'Klinik mata', 'Klinik gigi', 'Klinik umum', 'Rumah sakit']" :key="c" :active="filter === c" @click="filter = c">{{ c }}</FilterChip>
        </div>
        <SearchField v-model="search" label="Cari artikel" class="max-w-95" />
      </div>
    </PageSection>

    <PageSection>
      <SectionHeader title="Layanan Eskala" lede="Digital Marketing sudah berjalan untuk lebih dari 10 fasilitas kesehatan. Education dan Training sedang kami siapkan." />
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard tone="cobalt" wing kicker="01" title="Digital Marketing" body="Pengelolaan media sosial dan iklan untuk klinik, rumah sakit, dan dokter, dengan medical review sebelum tayang." :items="['Social Media Management', 'Ads Management: Meta, Google, TikTok']" :link="{ label: 'Lihat Digital Marketing', to: '/digital-marketing' }" />
        <FeatureCard kicker="02" tag="Segera" title="Education" body="Materi belajar komunikasi kesehatan untuk staf, tenaga kesehatan, dan manajemen klinik." :items="['Online Class', 'Webinar', 'Course Videos & Modules']" :link="{ label: 'Lihat rencana Education', to: '/education' }" />
        <FeatureCard tone="subtle-plain" size="md" kicker="Bulan 1–3" kicker-tone="muted" title="Riset & strategi" body="Riset klinik dan target pasien, penyusunan strategi, dan produksi konten sejak bulan pertama. Fokusnya pada konsistensi posting." />
        <FeatureCard tone="cobalt-soft" size="md" tag="Langsung" tag-tone="white-cobalt" title="Online Class" body="Kelas interaktif dengan fasilitator, latihan, dan tanya jawab." />
        <FeatureCard tone="copper-soft" size="md" title="TikTok Ads" body="Distribusi video berbayar untuk menjangkau audiens sesuai tujuan kampanye." />
        <FeatureCard tone="dark" size="md" kicker="Starter" kicker-caps title="Carousel informasi umum" body="Topik dasar yang relevan dengan layanan dan sudah ditinjau pihak klinis. Template konsisten, 3–5 poin, dan CTA informasional." />
        <FeatureCard tone="cobalt-soft" size="sm" title-as="span" title="Tim Anda memegang arah" body="Strategi, prioritas, dan persetujuan akhir tetap di tim internal." />
        <FeatureCard size="sm" title-as="span" kicker="01" title="Patient-aware communication" body="Berpikir dari kebutuhan dan pemahaman pasien, tanpa memberi diagnosis atau nasihat medis." />
      </div>
    </PageSection>

    <PageSection pad="bottom">
      <div class="flex flex-col gap-12">
        <ProcessSteps :steps="steps" />
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TierCard role="Untuk konsistensi" name="Starter" quote="“Bantu kami menjaga komunikasi digital tetap aktif, akurat, dan konsisten.”" description="Eksekusi terstruktur dan QC untuk menjaga kehadiran klinik di media sosial." />
          <TierCard role="Untuk optimasi" name="Standard" badge="Paling dipilih" highlighted tinted quote="“Bantu kami memahami performa konten dan menentukan variasi yang layak diuji.”" description="Semua di Starter, ditambah evaluasi performa dan rekomendasi berdasarkan data." />
          <TierCard name="Standard" badge="Paling dipilih" badge-tone="popular-soft" highlighted description="Ditambah evaluasi performa konten dan rekomendasi variasi yang layak diuji." />
        </div>
        <ComparisonTable caption="Perbandingan fitur paket Social Media Management" :columns="['Starter', 'Standard', 'Premium']" :popular="1" :groups="groups" />
        <FaqList :items="faqs" />
      </div>
    </PageSection>

    <PageSection tone="subtle" bordered>
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <QuoteBlock quote="Selama bekerja dengan Eskala, saya melihat peningkatan yang signifikan dalam engagement media sosial kami. Konten yang mereka buat benar-benar ngena ke audiens kami, revenue kami meningkat sangat signifikan karena pasien akhirnya mengetahui keberadaan klinik kami." name="dr. Ekhtiyanto Cahyadi Khusnul Yakin, Sp.KG" role="Owner & Dokter Spesialis Konservasi Gigi, Ecky Dental Center" />
        <WingPanel class="aspect-square max-w-150">
          <FloatingQuote class="absolute right-6 bottom-6 left-6 sm:right-8 sm:bottom-8 sm:left-8" quote="Saya ingin faskes lebih mengerti dan lebih masuk dalam dunia pasien. Kita bisa lakukan itu secara digital." name="Donny Putra N.H." role="Manager Digital Marketing, SMEC Group" />
        </WingPanel>
      </div>
      <WingPanel class="mt-10 px-6 py-10 sm:px-10 sm:py-12" wing-class="-top-[25%] -right-[30%] h-[150%] opacity-90">
        <div class="relative flex flex-col gap-5.5">
          <ClaimCard wrong="Pasti sembuh total." right="Bisa ditangani. Hasil tiap pasien berbeda." />
          <ClaimCard tilt="right" wrong="Diskon 50% operasi katarak." right="Jadwal pemeriksaan katarak bulan ini." />
        </div>
      </WingPanel>
    </PageSection>

    <PageSection>
      <StatStrip :stats="stats" />
    </PageSection>

    <PageSection tone="cobalt" wing>
      <div class="flex flex-col gap-5.5">
        <Eyebrow tone="on-cobalt">Studi kasus · sejak 2024</Eyebrow>
        <Heading size="display" tone="white">SMEC Group, jaringan klinik mata dengan 10+ cabang</Heading>
        <div class="flex flex-wrap gap-3"><StatChip value=">4x" label="ROAS iklan" /><StatChip value="250+" label="konten per bulan" /></div>
        <ArrowLink to="/case-study" tone="light">Lihat semua studi kasus</ArrowLink>
      </div>
      <Milestones class="mt-16" :items="[{ when: 'Bulan 0', what: 'Pertemuan awal' }, { when: 'Bulan 1', what: 'Mulai produksi' }, { when: 'Bulan 3', what: 'Hasil pertama terukur' }, { when: 'Bulan 6', what: 'Layanan diperluas' }, { when: 'Bulan 12', what: 'Leads tumbuh konsisten' }, { when: 'Bulan 18', what: 'Kerja sama berlanjut' }]" />
    </PageSection>

    <PageSection>
      <div class="flex flex-col gap-8">
        <CaseStudyCard
          variant="cobalt"
          :chips="[{ label: 'Klinik mata', tone: 'accent' }, { label: 'SMEC Group', tone: 'on-cobalt' }, { label: '10+ cabang', tone: 'on-cobalt' }]"
          title="Menjaga konsistensi konten di jaringan layanan kesehatan yang terus berkembang"
          body="Saat jaringan klinik tumbuh melampaui 10 cabang, tantangannya bergeser dari ekspansi ke konsistensi. Eskala mendampingi SMEC Group memproduksi lebih dari 250 konten per bulan dengan identitas brand yang seragam di setiap cabang, mulai dari pemetaan sistem sampai pengelolaan iklan digital."
          :stats="[{ value: '>4x', label: 'ROAS iklan' }, { value: '250+', label: 'Konten per bulan' }]"
          document-title="Menjaga Konsistensi Konten di Jaringan Layanan Kesehatan yang Terus Berkembang"
        />
        <CaseStudyCard
          variant="light"
          :chips="[{ label: 'Klinik mata', tone: 'accent-soft' }, { label: 'Klinik Mata Boyolali', tone: 'neutral' }, { label: 'Klinik utama · 12 bulan', tone: 'neutral' }]"
          title="Membangun kehadiran digital klinik baru dari nol"
          body="Klinik baru sering kesulitan menarik pasien karena belum dikenal, meski layanannya baik."
          :stats="[{ value: '2 jt+', label: 'Total views' }, { value: '1,28 jt+', label: 'Total reach' }, { value: '16 rb+', label: 'Profile visits' }]"
          document-title="Membangun Kehadiran Digital Klinik Baru dari Nol"
          media-label="Tangkapan layar feed Instagram Klinik Mata Boyolali"
        />
        <FeaturedArticle :article="articles[0]!" label="Pilihan editor · Aturan iklan" />
        <div class="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="a in articles" :key="a.title" :article="a" />
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TeamCard v-for="n in 4" :key="n" name="[Nama]" role="[Peran]" />
        </div>
      </div>
    </PageSection>

    <PageSection tone="subtle" bordered>
      <div id="daftar" class="flex flex-wrap items-start gap-x-18 gap-y-12">
        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-4.5">
          <Heading>Dapatkan kabar pertama</Heading>
          <Lede>Tinggalkan kontak Anda. Kami kabari saat kelas pertama dibuka, dan jawaban Anda membantu kami menentukan topik yang dibuat lebih dulu.</Lede>
        </div>
        <InterestForm
          class="flex-[1_1_560px]"
          :fields="fields"
          choices-label="Topik yang ingin Anda pelajari"
          :choices="['Komunikasi dengan pasien', 'Menjelaskan biaya', 'Aturan iklan kesehatan', 'Lainnya']"
          submit-label="Daftar"
          note="Data Anda hanya dipakai untuk mengirim kabar tentang program ini."
          :status="formStatus"
          sent-message="Terima kasih, data Anda sudah kami terima. Kami kabari lewat WhatsApp atau email saat program dibuka."
          @submit="formStatus = 'sent'"
        />
      </div>
    </PageSection>

    <PageSection tone="copper-soft" bordered>
      <div class="flex flex-wrap items-center gap-x-12 gap-y-6">
        <div class="flex flex-[1_1_420px] flex-col gap-2.5">
          <h2 class="text-[clamp(26px,7.7vw,28px)] font-extrabold tracking-[-0.02em] text-obsidian-950 sm:text-[clamp(28px,3vw,38px)]">Artikel baru, langsung ke email Anda</h2>
          <p class="text-base leading-[1.6]">Satu email setiap bulan untuk tim marketing klinik dan rumah sakit.</p>
        </div>
        <NewsletterForm />
      </div>
    </PageSection>

    <CtaSection title="Konsultasi gratis 30 menit" body="Ceritakan kondisi klinik, rumah sakit, atau praktik Anda. Kami akan memberi 2–3 rekomendasi solusi, meskipun Anda belum memutuskan bekerja sama dengan kami." />
  </div>
</template>
