<template>
  <div>
    <UContainer class="py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <UIcon name="i-heroicons-cursor-arrow-rays" class="text-6xl text-primary mx-auto mb-6" />
          <h1 class="text-5xl font-[Poppins] mb-6">Digital Marketing</h1>
          <p class="text-lg text-primary font-medium mb-4">Data Bicara, Hasil Terukur</p>
          <p class="text-xl text-gray-600">
            Optimalisasi iklan berbayar dan kolaborasi KOC untuk memaksimalkan ROI dan jangkauan target audiens Anda.
          </p>
        </div>

        <div class="space-y-16">
          <!-- Ads Management Section -->
          <section>
            <h2 class="text-3xl font-semibold mb-6">Ads Management</h2>
            <p class="text-gray-600 mb-8">
              Layanan pengelolaan iklan berbayar di berbagai platform untuk hasil yang terukur dan ROI maksimal.
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Campaign Strategy</h3>
                <p class="text-gray-600">Perencanaan kampanye iklan yang tepat sasaran dengan budget yang efisien.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Creative Development</h3>
                <p class="text-gray-600">Pembuatan creative ads yang menarik dan sesuai dengan platform masing-masing.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Targeting Optimization</h3>
                <p class="text-gray-600">Optimasi targeting untuk mencapai audiens yang tepat dengan biaya efektif.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Performance Monitoring</h3>
                <p class="text-gray-600">Monitoring real-time dan optimasi berkelanjutan untuk hasil maksimal.</p>
              </UCard>
            </div>
          </section>

          <!-- Platform Section -->
          <section>
            <h2 class="text-3xl font-semibold mb-6">Platform Advertising</h2>
            <div class="flex flex-wrap gap-4">
              <UBadge size="lg" variant="soft" color="blue">Meta Ads</UBadge>
              <UBadge size="lg" variant="soft" color="red">YouTube Ads</UBadge>
              <UBadge size="lg" variant="soft" color="green">Google Ads</UBadge>
              <UBadge size="lg" variant="soft" color="purple">TikTok Ads</UBadge>
              <UBadge size="lg" variant="soft" color="blue">LinkedIn Ads</UBadge>
            </div>
          </section>

          <!-- KOC Management Section -->
          <section class="bg-gray-50 rounded-2xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <UIcon name="i-heroicons-heart" class="text-4xl text-primary" />
              <h2 class="text-3xl font-semibold">KOC Management</h2>
            </div>
            <p class="text-gray-600 mb-8">
              Key Opinion Customer (KOC) adalah pelanggan nyata yang benar-benar menggunakan dan mencintai produk Anda.
              Berbeda dengan KOL (Key Opinion Leader) yang merupakan selebriti berbayar, KOC memberikan testimoni autentik
              dengan engagement rate yang lebih tinggi.
            </p>

            <!-- KOC vs KOL Comparison -->
            <div class="bg-white rounded-xl p-6 mb-8">
              <h3 class="text-xl font-semibold mb-4">Mengapa KOC, bukan KOL?</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h4 class="font-semibold text-primary">KOC (Key Opinion Customer)</h4>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                      <span>Followers: 1K - 100K</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                      <span>Pengalaman pengguna nyata</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                      <span>Engagement rate: 5-15%</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-check-circle" class="text-green-500" />
                      <span>Biaya terjangkau</span>
                    </li>
                  </ul>
                </div>
                <div class="space-y-4">
                  <h4 class="font-semibold text-gray-400">KOL (Key Opinion Leader)</h4>
                  <ul class="space-y-2 text-gray-400">
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-minus-circle" class="text-gray-300" />
                      <span>Followers: 100K - 10M+</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-minus-circle" class="text-gray-300" />
                      <span>Endorsement berbayar</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-minus-circle" class="text-gray-300" />
                      <span>Engagement rate: 1-3%</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <UIcon name="i-heroicons-minus-circle" class="text-gray-300" />
                      <span>Biaya sangat tinggi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">KOC Research & Selection</h3>
                <p class="text-gray-600">Riset dan seleksi KOC yang sesuai dengan target audiens dan values brand Anda.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Campaign Planning</h3>
                <p class="text-gray-600">Perencanaan campaign kolaborasi yang strategis dan measurable.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Content Collaboration</h3>
                <p class="text-gray-600">Koordinasi pembuatan konten yang authentic dan engaging dengan KOC.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Performance Analysis</h3>
                <p class="text-gray-600">Analisis ROI dan impact dari setiap kolaborasi KOC.</p>
              </UCard>
            </div>
          </section>

          <!-- Results Section -->
          <section>
            <h2 class="text-3xl font-semibold mb-6">Hasil yang Dapat Anda Harapkan</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-4xl font-bold text-primary mb-2">300%</div>
                <div class="text-gray-600">Rata-rata peningkatan reach</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary mb-2">150%</div>
                <div class="text-gray-600">Peningkatan conversion rate</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary mb-2">50%</div>
                <div class="text-gray-600">Pengurangan cost per acquisition</div>
              </div>
            </div>
          </section>

          <!-- CTA Section -->
          <section class="text-center">
            <h2 class="text-3xl font-semibold mb-6">Mulai Kampanye Digital Marketing Anda</h2>
            <div class="space-y-4">
              <UButton size="xl" class="px-8 py-4">
                Konsultasi Strategi Digital Marketing
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
