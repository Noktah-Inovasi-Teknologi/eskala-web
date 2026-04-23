<script lang="ts" setup>
useSeoMeta({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi Eskala — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda sebagai klien atau pengunjung situs eskala.id.",
  ogTitle: "Kebijakan Privasi | Eskala",
  ogDescription:
    "Pelajari bagaimana Eskala melindungi data pribadi Anda. Transparansi penuh tentang pengumpulan, penggunaan, dan keamanan data.",
  ogUrl: "https://eskala.id/privacy",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/privacy" }],
});

const lastUpdated = "22 April 2026";
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-obsidian-100 border-b border-obsidian-200">
      <UContainer class="py-20 flex flex-col gap-4">
        <p class="font-display text-copper-500 font-medium">──────── Legal</p>
        <h1 class="font-display text-obsidian-950 font-bold text-5xl">
          Kebijakan Privasi
        </h1>
        <p class="font-body text-lg text-obsidian-600 font-light">
          Terakhir diperbarui: {{ lastUpdated }}
        </p>
      </UContainer>
    </div>

    <!-- Content -->
    <UContainer class="py-16">
      <div class="max-w-3xl flex flex-col gap-12">

        <!-- Pendahuluan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">1. Pendahuluan</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Eskala ("kami", "kita") berkomitmen untuk melindungi privasi klien dan pengunjung situs kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda ketika menggunakan layanan kami atau mengunjungi <span class="font-medium">eskala.id</span>.
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Dengan menggunakan layanan Eskala atau situs ini, Anda menyetujui pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam kebijakan ini. Jika Anda tidak menyetujui kebijakan ini, mohon untuk tidak menggunakan layanan kami.
          </p>
        </section>

        <!-- Data yang Dikumpulkan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">2. Data yang Kami Kumpulkan</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kami mengumpulkan informasi yang Anda berikan secara langsung maupun informasi yang dikumpulkan secara otomatis saat Anda menggunakan layanan kami.
          </p>

          <div class="flex flex-col gap-3 pl-4 border-l-2 border-cobalt-200">
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Data yang Anda Berikan</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">
                Nama, alamat email, nomor telepon, nama fasilitas kesehatan, dan informasi bisnis lain yang Anda sampaikan saat menghubungi kami, mengisi formulir konsultasi, atau menandatangani perjanjian layanan.
              </p>
            </div>
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Data Teknis</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">
                Alamat IP, jenis browser, sistem operasi, halaman yang dikunjungi, dan durasi kunjungan — dikumpulkan secara otomatis melalui cookies dan teknologi analitik serupa.
              </p>
            </div>
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Data Akun Platform</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">
                Untuk layanan Social Media Management dan Digital Marketing, kami memerlukan akses ke akun media sosial dan platform iklan klien (Meta Business Manager, Google Ads, TikTok for Business). Akses ini terbatas pada kebutuhan operasional layanan yang disepakati.
              </p>
            </div>
          </div>
        </section>

        <!-- Penggunaan Data -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">3. Penggunaan Data</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Data yang kami kumpulkan digunakan untuk tujuan berikut:
          </p>
          <ul class="flex flex-col gap-2 pl-5 list-disc">
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Memberikan, mengelola, dan meningkatkan layanan Social Media Management, Digital Marketing, dan Eskala VIP</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Berkomunikasi dengan Anda mengenai proyek, laporan bulanan, dan pembaruan layanan</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Memproses pembayaran dan administrasi kontrak</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Menganalisis performa kampanye dan media sosial klien untuk optimasi berkelanjutan</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Memenuhi kewajiban hukum yang berlaku di Indonesia</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Mengirimkan informasi layanan atau penawaran baru (dengan persetujuan Anda)</li>
          </ul>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.
          </p>
        </section>

        <!-- Berbagi Data -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">4. Berbagi Data dengan Pihak Ketiga</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kami dapat berbagi data Anda dengan pihak ketiga hanya dalam situasi berikut:
          </p>
          <ul class="flex flex-col gap-2 pl-5 list-disc">
            <li class="font-body text-obsidian-700 font-light leading-relaxed"><span class="font-medium">Platform Iklan & Media Sosial</span> — Meta, Google, TikTok, dan platform lain yang diperlukan untuk menjalankan kampanye klien. Data ini diatur oleh kebijakan privasi masing-masing platform.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed"><span class="font-medium">Penyedia Layanan</span> — Pihak ketiga yang membantu operasional kami (penyimpanan cloud, alat analitik, platform komunikasi) yang terikat perjanjian kerahasiaan.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed"><span class="font-medium">Kewajiban Hukum</span> — Apabila diwajibkan oleh hukum Indonesia atau perintah pengadilan yang sah.</li>
          </ul>
        </section>

        <!-- Keamanan Data -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">5. Keamanan Data</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi data Anda dari akses tidak sah, pengungkapan, perubahan, atau penghapusan. Ini mencakup enkripsi data saat transit, pembatasan akses internal berdasarkan kebutuhan, dan penggunaan platform tepercaya.
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Namun, tidak ada metode transmisi data melalui internet yang sepenuhnya aman. Kami tidak dapat menjamin keamanan absolut dan mendorong Anda untuk menjaga kerahasiaan kredensial akun Anda.
          </p>
        </section>

        <!-- Retensi Data -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">6. Retensi Data</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kami menyimpan data pribadi Anda selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam kebijakan ini, atau selama diwajibkan oleh hukum. Data klien aktif disimpan selama masa kontrak berlangsung. Setelah kontrak berakhir, data dapat disimpan hingga 2 tahun untuk keperluan administrasi dan hukum, kecuali ada permintaan penghapusan lebih awal.
          </p>
        </section>

        <!-- Hak Anda -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">7. Hak Anda</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Sesuai regulasi perlindungan data yang berlaku, Anda memiliki hak untuk:
          </p>
          <ul class="flex flex-col gap-2 pl-5 list-disc">
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Mengakses data pribadi yang kami miliki tentang Anda</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Meminta koreksi data yang tidak akurat</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Meminta penghapusan data Anda (dengan memperhatikan kewajiban hukum yang berlaku)</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Menarik persetujuan untuk komunikasi pemasaran kapan saja</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Mengajukan keluhan kepada otoritas perlindungan data yang berwenang</li>
          </ul>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Untuk menggunakan hak-hak tersebut, hubungi kami di <a href="mailto:core@eskala.id" class="text-cobalt-500 hover:text-cobalt-600 font-medium">core@eskala.id</a>.
          </p>
        </section>

        <!-- Cookies -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">8. Cookies</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Situs kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan menganalisis lalu lintas situs. Cookies adalah file kecil yang disimpan di perangkat Anda. Anda dapat mengatur browser untuk menolak cookies, namun beberapa fitur situs mungkin tidak berfungsi optimal.
          </p>
        </section>

        <!-- Perubahan Kebijakan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">9. Perubahan Kebijakan</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan signifikan akan diinformasikan melalui email kepada klien aktif atau melalui pemberitahuan di situs ini. Tanggal pembaruan terakhir selalu tercantum di bagian atas halaman ini.
          </p>
        </section>

        <!-- Kontak -->
        <section class="flex flex-col gap-6 bg-cobalt-50 border border-cobalt-200 rounded-2xl p-8">
          <div class="flex flex-col gap-2">
            <h2 class="font-display text-obsidian-950 font-semibold text-2xl">Hubungi Kami</h2>
            <p class="font-body text-obsidian-700 font-light leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak-hak Anda atas data pribadi, silakan hubungi kami.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3">
            <UButton
              href="mailto:core@eskala.id"
              color="neutral"
              variant="outline"
              class="px-4 rounded-full"
              size="lg"
            >
              <UIcon name="i-heroicons-envelope" />
              core@eskala.id
            </UButton>
            <UButton
              href="https://wa.me/6285706034321"
              color="success"
              class="px-4 rounded-full"
              size="lg"
            >
              <UIcon name="i-mdi-whatsapp" />
              WhatsApp Kami
            </UButton>
          </div>
        </section>

      </div>
    </UContainer>
  </div>
</template>
