<template>
  <div>
    <UContainer class="py-20">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section with Premium Styling -->
        <div class="text-center mb-16">
          <UBadge color="secondary" size="lg" class="px-4 py-1 mb-6">
            Premium
          </UBadge>
          <UIcon name="i-heroicons-sparkles" class="text-6xl text-copper-500 mx-auto mb-6" />
          <h1 class="text-5xl font-[Poppins] mb-6">VIP</h1>
          <p class="text-lg text-copper-600 font-medium mb-4">Semua Kebutuhan Kreatif, Satu Tim Ahli</p>
          <p class="text-xl text-gray-600">
            Penanganan kreatif lengkap all-in-one untuk bisnis yang menginginkan kualitas premium tanpa ribet.
            Bundel Social Media Management dengan layanan kreatif eksklusif.
          </p>
        </div>

        <div class="space-y-16">
          <!-- What's Included Section -->
          <section class="bg-copper-50 rounded-2xl p-8 border-2 border-copper-200">
            <h2 class="text-3xl font-semibold mb-8 text-center">Apa yang Termasuk dalam VIP?</h2>

            <div class="grid md:grid-cols-2 gap-8">
              <!-- SMM Benefits -->
              <div class="space-y-4">
                <div class="flex items-center gap-3 mb-4">
                  <UIcon name="i-heroicons-chat-bubble-left-right" class="text-2xl text-copper-500" />
                  <h3 class="text-xl font-semibold">Social Media Management</h3>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Unlimited Platform Media Sosial</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">40+ Post per Bulan</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Comprehensive Analytics</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Community Management</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Content Strategy</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Dedicated Account Manager</span>
                  </li>
                </ul>
              </div>

              <!-- Creative Services -->
              <div class="space-y-4">
                <div class="flex items-center gap-3 mb-4">
                  <UIcon name="i-heroicons-paint-brush" class="text-2xl text-copper-500" />
                  <h3 class="text-xl font-semibold">Creative Services</h3>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Graphic Design</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Video Production</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Copywriting</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Photography Sessions</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Brand Identity Consultation</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <UIcon name="i-heroicons-check-circle" class="text-copper-500" />
                    <span class="text-gray-700">Animation & Motion Graphics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- VIP Benefits Section -->
          <section>
            <h2 class="text-3xl font-semibold mb-8 text-center">Keuntungan Eksklusif VIP</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <UCard class="p-6 text-center border-copper-200 hover:border-copper-400 transition-colors">
                <UIcon name="i-heroicons-user-group" class="text-3xl text-copper-500 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">Dedicated Team</h3>
                <p class="text-gray-600 text-sm">Tim kreatif khusus yang fokus pada brand Anda</p>
              </UCard>
              <UCard class="p-6 text-center border-copper-200 hover:border-copper-400 transition-colors">
                <UIcon name="i-heroicons-bolt" class="text-3xl text-copper-500 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">Priority Handling</h3>
                <p class="text-gray-600 text-sm">Prioritas eksekusi untuk setiap request</p>
              </UCard>
              <UCard class="p-6 text-center border-copper-200 hover:border-copper-400 transition-colors">
                <UIcon name="i-heroicons-arrow-path" class="text-3xl text-copper-500 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">Unlimited Revisions</h3>
                <p class="text-gray-600 text-sm">Revisi tanpa batas dalam scope project</p>
              </UCard>
              <UCard class="p-6 text-center border-copper-200 hover:border-copper-400 transition-colors">
                <UIcon name="i-heroicons-shield-check" class="text-3xl text-copper-500 mx-auto mb-4" />
                <h3 class="text-lg font-semibold mb-2">Brand Consistency</h3>
                <p class="text-gray-600 text-sm">Jaminan konsistensi brand di semua output</p>
              </UCard>
            </div>
          </section>

          <!-- Creative Services Detail -->
          <section>
            <h2 class="text-3xl font-semibold mb-8">Layanan Kreatif dalam VIP</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Graphic Design</h3>
                <p class="text-gray-600">Desain visual yang menarik untuk semua kebutuhan digital dan print.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Video Production</h3>
                <p class="text-gray-600">Produksi video berkualitas tinggi dari konsep hingga post-production.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Copywriting</h3>
                <p class="text-gray-600">Penulisan konten yang persuasif dan sesuai dengan tone brand Anda.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Photography</h3>
                <p class="text-gray-600">Fotografi produk dan lifestyle yang profesional dan eye-catching.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Brand Identity</h3>
                <p class="text-gray-600">Pengembangan identitas visual yang kuat dan konsisten.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Animation & Motion</h3>
                <p class="text-gray-600">Animasi dan motion graphics untuk konten yang lebih engaging.</p>
              </UCard>
            </div>
          </section>

          <!-- Creative Process -->
          <section>
            <h2 class="text-3xl font-semibold mb-8">Proses Kreatif VIP</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-copper-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Brief & Research</h3>
                  <p class="text-gray-600">Memahami kebutuhan dan melakukan riset mendalam tentang brand dan target audiens.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-copper-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Concept Development</h3>
                  <p class="text-gray-600">Mengembangkan konsep kreatif yang unik dan sesuai dengan objektif kampanye.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-copper-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Design & Production</h3>
                  <p class="text-gray-600">Eksekusi desain dan produksi dengan standar kualitas tinggi.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-copper-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Review & Refinement</h3>
                  <p class="text-gray-600">Review bersama klien dan penyempurnaan hingga hasil optimal.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Pricing Section -->
          <section class="bg-copper-50 rounded-2xl p-8 border-2 border-copper-400 text-center">
            <h2 class="text-3xl font-semibold mb-4">Harga Eskala VIP</h2>
            <p class="text-gray-600 mb-6">
              Harga disesuaikan dengan kebutuhan dan skala bisnis Anda.
              Hubungi kami untuk konsultasi dan penawaran terbaik.
            </p>
            <div class="text-4xl font-bold text-copper-600 mb-2">Harga Custom</div>
            <p class="text-gray-600 mb-8">Konsultasi gratis untuk menentukan paket yang tepat</p>
            <UButton color="secondary" size="xl" class="px-8 py-4">
              Jadwalkan Konsultasi VIP
            </UButton>
          </section>

          <!-- CTA Section -->
          <section class="text-center">
            <h2 class="text-3xl font-semibold mb-6">Siap untuk Pengalaman Premium?</h2>
            <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
              Eskala VIP adalah pilihan tepat untuk bisnis yang ingin semua kebutuhan kreatif ditangani
              oleh satu tim ahli dengan kualitas premium dan konsistensi terjamin.
            </p>
            <div class="space-y-4">
              <UButton color="secondary" size="xl" class="px-8 py-4">
                Konsultasi VIP Sekarang
              </UButton>
              <br>
              <NuxtLink to="/">
                <UButton variant="outline" size="lg">
                  Kembali ke Beranda
                </UButton>
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </UContainer>
  </div>
</template>
