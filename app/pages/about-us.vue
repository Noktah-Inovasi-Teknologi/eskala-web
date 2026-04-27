<script lang="ts" setup>
useSeoMeta({
  title: "Tentang Kami | Eskala",
  description:
    "Eskala adalah digital marketing agency berbasis di Yogyakarta yang berdedikasi membantu fasilitas kesehatan dan bisnis jasa Indonesia tumbuh secara digital.",
  ogTitle: "Tentang Kami | Eskala",
  ogDescription:
    "Partner kreatif yang paham dunia kesehatan. Didirikan 2024, berbasis di Yogyakarta.",
  ogUrl: "https://eskala.id/about-us",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/about-us" }],
});

const stats = ref([
  { value: "12+", label: "Fasilitas kesehatan dipercaya" },
  { value: "90%+", label: "Klien perpanjang kontrak" },
  { value: "2024", label: "Tahun berdiri" },
  { value: "Yogyakarta", label: "Berbasis di" },
]);

const whoWeServe = ref([
  {
    icon: "i-heroicons-heart",
    title: "Fasilitas Kesehatan",
    description:
      "Klinik, rumah sakit, dan brand kesehatan, spesialisasi utama kami. Setiap konten melewati medical review internal dan mengacu pada pedoman KKI & Kemenkes.",
  },
  {
    icon: "i-heroicons-sparkles",
    title: "Klinik Kecantikan & Wellness",
    description:
      "Klinik estetika, wellness center, dan brand kecantikan berbasis medis yang membutuhkan konten terpercaya untuk membangun kepercayaan pasien.",
  },
  {
    icon: "i-heroicons-academic-cap",
    title: "Konsultasi & Edukasi Profesional",
    description:
      "Lembaga pendidikan, konsultan, dan tenaga ahli yang reputasinya dibangun dari kepercayaan dan kredibilitas di mata klien.",
  },
  {
    icon: "i-heroicons-briefcase",
    title: "Jasa Profesional Lainnya",
    description:
      "Bisnis jasa apa pun di mana kepercayaan konsumen adalah fondasi, dan di mana satu konten yang salah dapat merusak reputasi yang dibangun bertahun-tahun.",
  },
]);

const coreValues = ref([
  {
    number: "01",
    title: "Paham Regulasi",
    description:
      "Setiap konten untuk klien kesehatan melewati medical review internal dan mengacu pada pedoman KKI dan Kemenkes.",
  },
  {
    number: "02",
    title: "Cepat & Adaptif",
    description:
      "Eksekusi cepat, keputusan di hari yang sama. Kami bergerak secepat kebutuhan klien, bukan birokrasi internal.",
  },
  {
    number: "03",
    title: "Revisi Unlimited",
    description:
      "Tidak ada batasan revisi, tidak ada biaya tambahan. Hasil akhir harus benar-benar sesuai dengan visi klien.",
  },
  {
    number: "04",
    title: "Fleksibel",
    description:
      "Kontrak per semester dengan notice period 30 hari. Kami lebih memilih klien yang memperpanjang karena hasil.",
  },
  {
    number: "05",
    title: "Transparan",
    description:
      "Laporan performa bulanan yang jelas dan jujur, termasuk ketika angkanya belum sesuai ekspektasi.",
  },
  {
    number: "06",
    title: "Berkualitas Tinggi",
    description:
      "QC berlapis untuk semua konten. Tidak ada konten yang tayang tanpa melewati standar visual dan editorial kami.",
  },
]);

interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

const team = ref<TeamMember[]>([
  { initials: "DF", name: "Defila Priana Falarima", role: "Brand Manager & Account Executive" },
  { initials: "MR", name: "Muhamad Rizki Al Rosid", role: "Project Manager" },
  { initials: "SN", name: "Siti Nurhayati", role: "Junior Field Associate" },
  { initials: "HZ", name: "Halimatudz Dzakiyah", role: "Junior Field Associate" },
  { initials: "AR", name: "M. Abdillah Rozzan", role: "Junior Field Associate" },
  { initials: "ND", name: "Nadya Safira Alia Dinda", role: "Junior Content Editor" },
  { initials: "AG", name: "Muhammad Anggit Rigen", role: "Junior Content Editor" },
  { initials: "NR", name: "An-Nur Rohimah", role: "Quality Controller" },
  { initials: "BY", name: "Bagas Yadher B.N.A.R.H.", role: "Sales Representative" },
]);

const comparison = ref([
  {
    aspect: "Revisi",
    eskala: "Unlimited, tanpa biaya tambahan",
    others: "2–3x, lalu ada biaya tambahan",
    eskalaGood: true,
  },
  {
    aspect: "Eksekusi",
    eskala: "Cepat & adaptif, keputusan hari yang sama",
    others: "Proses panjang, lambat",
    eskalaGood: true,
  },
  {
    aspect: "Medical Review",
    eskala: "Ya, setiap konten sebelum tayang",
    others: "Tidak ada",
    eskalaGood: true,
  },
  {
    aspect: "Kontrak",
    eskala: "Per semester, notice period 30 hari",
    others: "Lock-in 6–12 bulan",
    eskalaGood: true,
  },
  {
    aspect: "Retensi klien",
    eskala: "90%+ bertahan lebih dari 6 bulan",
    others: "",
    eskalaGood: true,
  },
]);
</script>

<template>
  <div>
    <!-- 1. Hero -->
    <UContainer
      id="section-hero"
      class="flex flex-col gap-12 py-24 items-center relative"
    >
      <div class="flex gap-12 items-center">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Tentang Kami
          </p>
          <div class="flex flex-col">
            <h1 class="font-display text-obsidian-950 font-bold text-7xl">
              Partner kreatif yang
            </h1>
            <h1 class="font-display text-cobalt-500 font-bold text-7xl">
              paham dunia kesehatan.
            </h1>
          </div>
          <p class="font-body text-lg text-obsidian-700 font-light max-w-xl">
            Eskala adalah digital marketing agency berbasis di Yogyakarta yang
            berdedikasi membantu fasilitas kesehatan dan bisnis jasa Indonesia
            tumbuh secara digital dengan kreativitas yang bertanggung jawab
            dan pemahaman mendalam tentang kepercayaan konsumen.
          </p>
        </div>
      </div>
      <div class="flex gap-12 items-center">
        <UButton
          href="https://wa.me/6282230712718"
          target="_blank"
          size="xl"
          class="px-4 rounded-full"
          color="success"
        >
          <Icon name="i-mdi-whatsapp" class="text-lg" />
          Jadwalkan konsultasi gratis
        </UButton>
        <UButton
          to="/case-study"
          size="xl"
          class="px-4 rounded-full"
          color="neutral"
          variant="link"
        >
          atau lihat cerita klien kami
          <Icon name="i-heroicons-arrow-right" class="text-sm" />
        </UButton>
      </div>
    </UContainer>

    <!-- 2. Stats Strip -->
    <div class="bg-obsidian-100">
      <UContainer class="py-12">
        <div
          class="w-full grid grid-cols-4 divide-x divide-obsidian-300 border border-obsidian-300 rounded-3xl"
        >
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="flex flex-col p-8 gap-2"
          >
            <h2 class="font-display font-bold text-4xl text-obsidian-950">
              {{ item.value }}
            </h2>
            <p class="font-body text-sm font-semibold text-obsidian-700">
              {{ item.label }}
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- 3. Our Story -->
    <UContainer id="section-story" class="flex flex-col gap-12 py-24">
      <div class="flex gap-16 items-start">
        <div class="flex flex-col gap-8 basis-2/5 shrink-0">
          <p class="font-display text-copper-500 font-medium">
            ──────── Cerita Kami
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            Dimulai dari satu
            <span class="text-cobalt-500">pertanyaan</span> sederhana.
          </h2>
        </div>
        <div class="flex flex-col gap-6 basis-3/5">
          <p class="font-body text-lg text-obsidian-700 font-light leading-relaxed">
            Kami melihat banyak fasilitas kesehatan yang punya kualitas layanan
            luar biasa: dokter yang kompeten, fasilitas yang memadai, tim yang
            berdedikasi. Namun di dunia digital, mereka hampir tidak terlihat.
            Pasien yang membutuhkan justru tidak tahu mereka ada.
          </p>
          <p class="font-body text-lg text-obsidian-700 font-light leading-relaxed">
            Di sisi lain, agensi digital pada umumnya tidak memahami kompleksitas
            regulasi konten kesehatan. Mereka membuat konten yang bagus secara
            visual, tetapi berisiko secara medis dan legal, sesuatu yang tidak
            bisa kami toleransi.
          </p>
          <p class="font-body text-lg text-obsidian-700 font-light leading-relaxed">
            Eskala didirikan pada 2024 untuk menutup celah itu. Kami bukan
            sekadar vendor konten, kami adalah partner bisnis yang memahami
            bahwa kepercayaan adalah fondasi dari setiap hubungan antara faskes
            dan pasiennya.
          </p>
        </div>
      </div>
    </UContainer>

    <!-- 4. Who We Serve -->
    <div class="bg-obsidian-100">
      <UContainer id="section-who-we-serve" class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Siapa yang Kami Layani
          </p>
          <h2 class="font-display text-obsidian-950 font-bold text-5xl">
            Kami fokus pada industri yang membutuhkan
            <span class="text-cobalt-500">kepercayaan tinggi</span>.
          </h2>
          <p class="font-body text-lg text-obsidian-700 font-light">
            Eskala melayani bisnis-bisnis di mana kepercayaan konsumen adalah
            segalanya, terutama fasilitas kesehatan, serta industri jasa lain
            yang reputasinya dibangun dari hubungan yang tulus dengan pelanggan.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="item in whoWeServe"
            :key="item.title"
            class="flex flex-col gap-6 rounded-3xl border border-obsidian-200 bg-white p-8"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-cobalt-50 flex items-center justify-center"
            >
              <Icon :name="item.icon" class="text-cobalt-500 text-2xl" />
            </div>
            <h3 class="font-display text-2xl font-semibold text-obsidian-950">
              {{ item.title }}
            </h3>
            <p class="font-body text-obsidian-700 font-light">
              {{ item.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- 5. Core Values -->
    <div class="bg-obsidian-950">
      <UContainer id="section-values" class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Nilai Kami
          </p>
          <h2 class="font-display text-obsidian-50 font-bold text-5xl">
            Enam prinsip yang membentuk
            <span class="text-cobalt-400">cara kami bekerja</span>.
          </h2>
          <p class="font-body text-lg text-obsidian-300 font-light">
            Bukan sekadar tagline, ini adalah standar operasional kami
            sehari-hari yang dapat Anda pegang sejak hari pertama.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="value in coreValues"
            :key="value.number"
            class="flex flex-col gap-6 rounded-3xl border border-obsidian-700 bg-obsidian-900 p-8"
          >
            <div class="flex items-center justify-between">
              <p
                class="font-display text-copper-500 tracking-widest font-semibold text-sm"
              >
                {{ value.number }}
              </p>
            </div>
            <h3 class="font-display text-2xl font-bold text-obsidian-50">
              {{ value.title }}
            </h3>
            <p class="font-body text-obsidian-300 font-light">
              {{ value.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- 6. The Team -->
    <UContainer id="section-team" class="flex flex-col gap-12 py-24">
      <div class="flex flex-col gap-8">
        <p class="font-display text-copper-500 font-medium">
          ──────── Tim Kami
        </p>
        <h2 class="font-display text-obsidian-950 font-bold text-5xl">
          Orang-orang di balik <span class="text-cobalt-500">Eskala</span>.
        </h2>
        <p class="font-body text-lg text-obsidian-700 font-light">
          Tim kecil yang bergerak cepat, berpikir strategis, dan selalu
          berpihak pada pertumbuhan klien.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="member in team"
          :key="member.name"
          class="flex flex-col gap-6 rounded-3xl border border-obsidian-200 p-8"
        >
          <div
            class="w-14 h-14 rounded-full bg-copper-500 flex items-center justify-center text-white font-semibold text-lg"
          >
            {{ member.initials }}
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="font-display text-xl font-semibold text-obsidian-950">
              {{ member.name }}
            </h3>
            <p
              class="font-display text-sm font-semibold text-cobalt-500 tracking-widest uppercase"
            >
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- 7. Eskala vs Agensi Lain -->
    <div class="bg-obsidian-950">
      <UContainer id="section-comparison" class="flex flex-col gap-12 py-24">
        <div class="flex flex-col gap-8">
          <p class="font-display text-copper-500 font-medium">
            ──────── Kenapa Eskala
          </p>
          <h2 class="font-display text-obsidian-50 font-bold text-5xl">
            Bukan sekadar vendor.
            <span class="text-cobalt-400">Partner bisnis</span>.
          </h2>
          <p class="font-body text-lg text-obsidian-300 font-light">
            Berikut perbedaan nyata yang kami perhatikan antara cara Eskala
            bekerja dan agensi pada umumnya.
          </p>
        </div>
        <div
          class="border border-obsidian-700 rounded-2xl overflow-hidden"
        >
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-obsidian-700">
                <th
                  class="text-left px-6 py-4 text-obsidian-400 text-sm font-semibold tracking-widest w-1/4"
                >
                  ASPEK
                </th>
                <th
                  class="text-left px-6 py-4 text-copper-500 text-sm font-semibold tracking-widest border-l border-obsidian-700 bg-cobalt-950/40 border-t-2 border-t-cobalt-500"
                >
                  ESKALA
                </th>
                <th
                  class="text-left px-6 py-4 text-obsidian-400 text-sm font-semibold tracking-widest border-l border-obsidian-700"
                >
                  AGENSI LAIN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparison"
                :key="row.aspect"
                class="border-b border-obsidian-700 hover:bg-obsidian-900"
              >
                <td
                  class="px-6 py-4 text-obsidian-300 text-sm font-medium"
                >
                  {{ row.aspect }}
                </td>
                <td
                  class="px-6 py-4 border-l border-obsidian-700 bg-cobalt-950/40"
                >
                  <div class="flex items-center gap-3">
                    <Icon
                      name="i-heroicons-check-circle"
                      class="text-copper-500 text-xl shrink-0"
                    />
                    <span class="text-obsidian-50 text-sm">{{ row.eskala }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 border-l border-obsidian-700">
                  <span class="text-obsidian-400 text-sm">{{ row.others }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UContainer>
    </div>

    <!-- 8. CTA -->
    <UContainer id="section-call-to-action" class="flex flex-col gap-12 py-24">
      <div
        class="border border-cobalt-200 bg-cobalt-50 rounded-2xl p-10 lg:p-14 flex flex-col gap-12"
      >
        <div class="flex gap-12 items-center">
          <div class="flex flex-col gap-4 flex-1">
            <p
              class="font-display font-semibold text-xs tracking-widest text-cobalt-500 uppercase"
            >
              SIAP UNTUK BERDISKUSI?
            </p>
            <h2
              class="font-display font-bold text-5xl text-obsidian-950 leading-tight"
            >
              Kenali kami lebih jauh, atau langsung
              <span class="text-cobalt-500">mulai bersama kami</span>.
            </h2>
          </div>
          <div class="basis-2/5">
            <p
              class="font-body text-lg text-obsidian-700 font-light leading-relaxed"
            >
              Konsultasi pertama gratis. Tidak ada komitmen, hanya percakapan
              jujur tentang apa yang benar-benar dibutuhkan bisnis Anda saat ini
             dengan atau tanpa bekerja sama dengan kami.
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-center gap-8">
          <UButton
            href="https://wa.me/6282230712718"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            class="px-4 rounded-full"
            color="success"
          >
            <Icon name="i-mdi-whatsapp" class="text-lg" />
            Hubungi via WhatsApp
            <Icon
              name="i-heroicons-arrow-top-right-on-square"
              class="text-lg"
            />
          </UButton>
          <UButton
            href="mailto:core@eskala.id"
            size="xl"
            class="px-4 rounded-full"
            color="neutral"
            variant="outline"
          >
            <Icon name="i-heroicons-envelope" class="text-lg" />
            Kirim brief melalui email
            <Icon
              name="i-heroicons-arrow-top-right-on-square"
              class="text-lg"
            />
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
