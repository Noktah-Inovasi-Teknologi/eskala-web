<template>
  <div>
    <UContainer class="py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <UIcon name="i-heroicons-users" class="text-6xl text-primary mx-auto mb-6" />
          <h1 class="text-5xl font-[Poppins] mb-6">End-to-End Social Media Management</h1>
          <p class="text-xl text-gray-600">
            Kelola seluruh aspek media sosial Anda dari strategi hingga eksekusi dengan pendekatan yang komprehensif dan terukur.
          </p>
        </div>

        <div class="space-y-12">
          <section>
            <h2 class="text-3xl font-semibold mb-6">Apa yang Kami Lakukan</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Strategi Konten</h3>
                <p class="text-gray-600">Perencanaan konten yang sesuai dengan brand identity dan target audiens Anda.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Content Creation</h3>
                <p class="text-gray-600">Pembuatan konten visual dan copywriting yang engaging dan profesional.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Community Management</h3>
                <p class="text-gray-600">Mengelola interaksi dengan audiens dan membangun engagement yang berkualitas.</p>
              </UCard>
              <UCard class="p-6">
                <h3 class="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                <p class="text-gray-600">Monitoring performa dan laporan komprehensif untuk optimasi berkelanjutan.</p>
              </UCard>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-semibold mb-6">Platform yang Kami Kelola</h2>
            <div class="flex flex-wrap gap-4">
              <UBadge size="lg" variant="soft">Instagram</UBadge>
              <UBadge size="lg" variant="soft">Facebook</UBadge>
              <UBadge size="lg" variant="soft">LinkedIn</UBadge>
              <UBadge size="lg" variant="soft">TikTok</UBadge>
              <UBadge size="lg" variant="soft">YouTube</UBadge>
              <UBadge size="lg" variant="soft">Twitter</UBadge>
            </div>
          </section>

          <section class="text-center">
            <h2 class="text-3xl font-semibold mb-6">Siap Memulai?</h2>
            <div class="space-y-4">
              <UButton size="xl" class="px-8 py-4">
                Konsultasi Gratis
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