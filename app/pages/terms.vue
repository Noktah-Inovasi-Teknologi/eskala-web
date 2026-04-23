<script lang="ts" setup>
useSeoMeta({
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan Ketentuan Eskala — aturan penggunaan layanan Social Media Management, Digital Marketing, dan Eskala VIP. Baca sebelum memulai kerja sama.",
  ogTitle: "Syarat & Ketentuan | Eskala",
  ogDescription:
    "Ketentuan layanan Eskala untuk klien Social Media Management, Digital Marketing, dan Eskala VIP. Transparan dan adil untuk kedua pihak.",
  ogUrl: "https://eskala.id/terms",
  ogType: "website",
  ogImage: "https://eskala.id/android-chrome-512x512.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://eskala.id/terms" }],
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
          Syarat & Ketentuan
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
            Syarat dan Ketentuan ini mengatur hubungan antara Eskala ("Kami", "Penyedia Layanan") dan klien ("Anda", "Klien") yang menggunakan layanan digital marketing Eskala, termasuk Social Media Management, Digital Marketing, dan Eskala VIP.
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Dengan menandatangani perjanjian layanan atau menggunakan layanan Eskala, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan ini. Dokumen ini berlaku bersama dengan Perjanjian Layanan (Service Agreement) yang ditandatangani kedua pihak.
          </p>
        </section>

        <!-- Definisi -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">2. Definisi</h2>
          <div class="flex flex-col gap-3 pl-4 border-l-2 border-cobalt-200">
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Layanan</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">Social Media Management, Digital Marketing (termasuk Ads Management dan KOC Management), dan Eskala VIP sebagaimana dijelaskan di eskala.id.</p>
            </div>
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Konten</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">Materi yang dibuat oleh Eskala untuk Klien, termasuk foto, video, teks (copywriting), desain grafis, dan materi iklan.</p>
            </div>
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Ad Spend</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">Anggaran iklan yang dikelola oleh Eskala atas nama Klien di platform seperti Meta Ads, Google Ads, dan TikTok Ads. Ad spend dibayar langsung oleh Klien ke platform terkait.</p>
            </div>
            <div>
              <p class="font-display text-obsidian-900 font-semibold text-base">Periode Kontrak</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">Durasi kerja sama yang disepakati, minimal per semester (6 bulan), kecuali disepakati lain secara tertulis.</p>
            </div>
          </div>
        </section>

        <!-- Layanan yang Disediakan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">3. Layanan yang Disediakan</h2>

          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2 rounded-2xl border border-obsidian-200 p-6">
              <p class="font-display text-obsidian-900 font-semibold text-base">Social Media Management</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">
                Pengelolaan media sosial Klien (Instagram, TikTok, Facebook) mencakup perencanaan konten bulanan, produksi konten (foto, video, copywriting), medical review, posting terjadwal, dan laporan performa bulanan. Paket Starter, Standard, dan Premium tersedia sesuai kebutuhan.
              </p>
            </div>

            <div class="flex flex-col gap-2 rounded-2xl border border-obsidian-200 p-6">
              <p class="font-display text-obsidian-900 font-semibold text-base">Digital Marketing</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">
                Manajemen iklan berbayar (Meta, TikTok, Google) dan KOC Management untuk memperluas jangkauan pasien. Fee layanan dihitung berdasarkan persentase dari ad spend Klien (15%–25% tergantung paket). Ad spend bukan bagian dari fee Eskala dan dibayarkan langsung oleh Klien ke platform.
              </p>
            </div>

            <div class="flex flex-col gap-2 rounded-2xl border border-copper-200 bg-copper-50 p-6">
              <p class="font-display text-obsidian-900 font-semibold text-base">Eskala VIP</p>
              <p class="font-body text-obsidian-700 font-light leading-relaxed">
                Paket all-in-one mencakup seluruh Social Media Management (unlimited posting), desain grafis, produksi video, copywriting, dan fotografi. Ditangani oleh tim dedicated dengan dukungan 07.00–01.00, Senin–Minggu. Creative service hanya tersedia melalui paket VIP, tidak dijual secara terpisah.
              </p>
            </div>
          </div>
        </section>

        <!-- Pembayaran -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">4. Pembayaran</h2>
          <ul class="flex flex-col gap-3 pl-5 list-disc">
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Fee layanan dibayarkan di muka setiap bulan atau sesuai jadwal yang disepakati dalam Perjanjian Layanan.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Keterlambatan pembayaran lebih dari 7 hari kerja dapat mengakibatkan penghentian sementara layanan.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Fee yang telah dibayar tidak dapat dikembalikan (non-refundable), kecuali terjadi kelalaian signifikan di pihak Eskala.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Ad spend untuk layanan Digital Marketing tidak termasuk dalam fee Eskala dan merupakan tanggung jawab penuh Klien.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Harga layanan dapat berubah dengan pemberitahuan tertulis minimal 30 hari sebelum berlaku.</li>
          </ul>
        </section>

        <!-- Revisi & Persetujuan Konten -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">5. Revisi & Persetujuan Konten</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Eskala menyediakan revisi <span class="font-medium">unlimited</span> tanpa biaya tambahan untuk setiap konten yang diproduksi. Namun, beberapa ketentuan berlaku:
          </p>
          <ul class="flex flex-col gap-2 pl-5 list-disc">
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Revisi harus diajukan dalam 3 hari kerja setelah konten dikirimkan untuk review Klien.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Konten yang tidak mendapat respons dalam 5 hari kerja dianggap disetujui dan akan dijadwalkan untuk dipublikasikan.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Perubahan mendasar pada arahan kreatif atau konsep yang telah disetujui bersama di awal bulan dapat dikenakan biaya tambahan atas kesepakatan kedua pihak.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Klien bertanggung jawab atas akurasi informasi medis atau klaim yang diminta untuk dimuat dalam konten.</li>
          </ul>
        </section>

        <!-- Hak Kekayaan Intelektual -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">6. Hak Kekayaan Intelektual</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Setelah pembayaran lunas untuk periode yang bersangkutan, seluruh konten yang diproduksi oleh Eskala untuk Klien menjadi milik Klien dan dapat digunakan sepenuhnya oleh Klien.
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Eskala berhak menggunakan hasil karya yang telah dipublikasikan sebagai bagian dari portofolio atau materi promosi Eskala, kecuali Klien mengajukan keberatan tertulis.
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Metodologi, template, sistem kerja, dan alat yang digunakan Eskala dalam proses produksi tetap menjadi hak eksklusif Eskala.
          </p>
        </section>

        <!-- Kerahasiaan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">7. Kerahasiaan</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Kedua pihak setuju untuk menjaga kerahasiaan informasi bisnis sensitif yang dibagikan selama masa kerja sama. Eskala tidak akan mengungkapkan strategi, data performa, atau informasi rahasia Klien kepada pihak ketiga tanpa izin tertulis, kecuali diwajibkan oleh hukum.
          </p>
        </section>

        <!-- Penghentian Layanan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">8. Penghentian Layanan</h2>
          <ul class="flex flex-col gap-3 pl-5 list-disc">
            <li class="font-body text-obsidian-700 font-light leading-relaxed"><span class="font-medium">Notice period</span>: Klien yang ingin mengakhiri kerja sama wajib memberikan pemberitahuan tertulis minimal 30 hari sebelum tanggal penghentian yang diinginkan.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Penghentian di tengah periode kontrak yang aktif tidak menghilangkan kewajiban pembayaran untuk bulan berjalan.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Eskala berhak menghentikan layanan secara sepihak apabila Klien melanggar syarat dan ketentuan ini, melakukan keterlambatan pembayaran berulang, atau meminta Eskala untuk memproduksi konten yang melanggar regulasi kesehatan (KKI, Kemenkes) atau hukum yang berlaku.</li>
            <li class="font-body text-obsidian-700 font-light leading-relaxed">Setelah penghentian, Eskala akan menyerahkan semua aset konten yang dimiliki Klien dalam 7 hari kerja.</li>
          </ul>
        </section>

        <!-- Tanggung Jawab -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">9. Batasan Tanggung Jawab</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Eskala tidak memberikan jaminan atas hasil spesifik seperti jumlah follower, leads, atau konversi pasien tertentu, karena hasil dipengaruhi oleh berbagai faktor eksternal di luar kendali kami. Eskala berkomitmen pada standar kualitas tinggi dan eksekusi terbaik berdasarkan data dan best practice industri.
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Tanggung jawab Eskala atas kerugian yang timbul tidak akan melebihi total fee yang dibayarkan Klien dalam satu bulan terakhir. Eskala tidak bertanggung jawab atas kerugian tidak langsung, kehilangan pendapatan, atau kerugian konsekuensial lainnya.
          </p>
        </section>

        <!-- Regulasi Kesehatan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">10. Kepatuhan Regulasi Kesehatan</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Seluruh konten yang diproduksi oleh Eskala untuk fasilitas kesehatan melalui proses medical review internal yang mengacu pada pedoman Konsil Kedokteran Indonesia (KKI) dan Kementerian Kesehatan Republik Indonesia (Kemenkes RI).
          </p>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Klien bertanggung jawab untuk memastikan bahwa informasi yang diberikan kepada Eskala — termasuk klaim layanan medis, spesialisasi, dan kompetensi tenaga kesehatan — adalah akurat dan sesuai izin yang dimiliki. Eskala tidak bertanggung jawab atas konten yang didasarkan pada informasi yang tidak akurat dari Klien.
          </p>
        </section>

        <!-- Hukum yang Berlaku -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">11. Hukum yang Berlaku</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan secara musyawarah terlebih dahulu. Apabila tidak tercapai kesepakatan, sengketa akan diselesaikan melalui Pengadilan Negeri Yogyakarta.
          </p>
        </section>

        <!-- Perubahan -->
        <section class="flex flex-col gap-4">
          <h2 class="font-display text-obsidian-950 font-semibold text-2xl">12. Perubahan Syarat & Ketentuan</h2>
          <p class="font-body text-obsidian-700 font-light leading-relaxed">
            Eskala berhak memperbarui Syarat dan Ketentuan ini sewaktu-waktu. Perubahan material akan diberitahukan kepada klien aktif melalui email minimal 14 hari sebelum berlaku. Penggunaan layanan secara berkelanjutan setelah tanggal berlakunya perubahan dianggap sebagai persetujuan atas syarat baru.
          </p>
        </section>

        <!-- Kontak -->
        <section class="flex flex-col gap-6 bg-cobalt-50 border border-cobalt-200 rounded-2xl p-8">
          <div class="flex flex-col gap-2">
            <h2 class="font-display text-obsidian-950 font-semibold text-2xl">Ada Pertanyaan?</h2>
            <p class="font-body text-obsidian-700 font-light leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini sebelum memulai kerja sama, tim kami siap berdiskusi.
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
              Diskusi via WhatsApp
            </UButton>
          </div>
        </section>

      </div>
    </UContainer>
  </div>
</template>
