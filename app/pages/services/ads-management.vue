<template>
  <div>
    <UContainer class="py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <UIcon name="i-heroicons-megaphone" class="text-6xl text-primary mx-auto mb-6" />
          <h1 class="text-5xl font-[Poppins] mb-6">Ads Management</h1>
          <p class="text-xl text-gray-600">
            Optimalisasi iklan berbayar di berbagai platform untuk memaksimalkan ROI dan jangkauan target audiens Anda.
          </p>
        </div>

        <div class="space-y-12">
          <section>
            <h2 class="text-3xl font-semibold mb-6">Layanan Ads Management Kami</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Campaign Strategy</h3>
                <p class="text-gray-600">Perencanaan kampiklan yang tepat sasaran dengan budget yang efisien.</p>
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

          <section>
            <h2 class="text-3xl font-semibold mb-6">Platform Advertising</h2>
            <div class="flex flex-wrap gap-4">
              <UBadge size="lg" variant="soft" color="blue">Facebook Ads</UBadge>
              <UBadge size="lg" variant="soft" color="pink">Instagram Ads</UBadge>
              <UBadge size="lg" variant="soft" color="red">YouTube Ads</UBadge>
              <UBadge size="lg" variant="soft" color="green">Google Ads</UBadge>
              <UBadge size="lg" variant="soft" color="purple">TikTok Ads</UBadge>
              <UBadge size="lg" variant="soft" color="blue">LinkedIn Ads</UBadge>
            </div>
          </section>

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

          <section class="text-center">
            <h2 class="text-3xl font-semibold mb-6">Mulai Kampanye Ads Anda</h2>
            <div class="space-y-4">
              <UButton size="xl" class="px-8 py-4">
                Konsultasi Strategi Ads
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