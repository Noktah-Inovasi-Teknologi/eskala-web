<template>
  <div>
    <UContainer class="py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <UIcon name="i-heroicons-star" class="text-6xl text-primary mx-auto mb-6" />
          <h1 class="text-5xl font-[Poppins] mb-6">KOL Management</h1>
          <p class="text-xl text-gray-600">
            Manajemen kolaborasi dengan Key Opinion Leaders untuk meningkatkan kredibilitas dan reach brand Anda.
          </p>
        </div>

        <div class="space-y-12">
          <section>
            <h2 class="text-3xl font-semibold mb-6">Layanan KOL Management</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">KOL Research & Selection</h3>
                <p class="text-gray-600">Riset dan seleksi KOL yang sesuai dengan target audiens dan values brand Anda.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Campaign Planning</h3>
                <p class="text-gray-600">Perencanaan campaign kolaborasi yang strategis dan measurable.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Content Collaboration</h3>
                <p class="text-gray-600">Koordinasi pembuatan konten yang authentic dan engaging dengan KOL.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Performance Analysis</h3>
                <p class="text-gray-600">Analisis ROI dan impact dari setiap kolaborasi KOL.</p>
              </UCard>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-semibold mb-6">Jenis KOL yang Kami Kelola</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <UCard class="p-6 text-center">
                <UIcon name="i-heroicons-fire" class="text-3xl text-primary mx-auto mb-3" />
                <h3 class="text-lg font-semibold mb-2">Mega Influencer</h3>
                <p class="text-gray-600 text-sm">1M+ followers</p>
              </UCard>
              <UCard class="p-6 text-center">
                <UIcon name="i-heroicons-trending-up" class="text-3xl text-primary mx-auto mb-3" />
                <h3 class="text-lg font-semibold mb-2">Macro Influencer</h3>
                <p class="text-gray-600 text-sm">100K - 1M followers</p>
              </UCard>
              <UCard class="p-6 text-center">
                <UIcon name="i-heroicons-heart" class="text-3xl text-primary mx-auto mb-3" />
                <h3 class="text-lg font-semibold mb-2">Micro Influencer</h3>
                <p class="text-gray-600 text-sm">10K - 100K followers</p>
              </UCard>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-semibold mb-6">Industri Expertise</h2>
            <div class="flex flex-wrap gap-4">
              <UBadge size="lg" variant="soft">Healthcare</UBadge>
              <UBadge size="lg" variant="soft">Beauty & Fashion</UBadge>
              <UBadge size="lg" variant="soft">Technology</UBadge>
              <UBadge size="lg" variant="soft">Food & Beverage</UBadge>
              <UBadge size="lg" variant="soft">Lifestyle</UBadge>
              <UBadge size="lg" variant="soft">Education</UBadge>
              <UBadge size="lg" variant="soft">Finance</UBadge>
            </div>
          </section>

          <section class="text-center">
            <h2 class="text-3xl font-semibold mb-6">Mulai Kolaborasi KOL</h2>
            <div class="space-y-4">
              <UButton size="xl" class="px-8 py-4">
                Diskusi Strategi KOL
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