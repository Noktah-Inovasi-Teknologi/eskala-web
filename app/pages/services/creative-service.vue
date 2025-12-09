<template>
  <div>
    <UContainer class="py-20">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <UIcon name="i-heroicons-paint-brush" class="text-6xl text-primary mx-auto mb-6" />
          <h1 class="text-5xl font-[Poppins] mb-6">All-in-One Creative Service</h1>
          <p class="text-xl text-gray-600">
            Layanan kreatif lengkap mulai dari desain visual, copywriting, hingga video production untuk semua kebutuhan konten Anda.
          </p>
        </div>

        <div class="space-y-12">
          <section>
            <h2 class="text-3xl font-semibold mb-6">Layanan Kreatif Kami</h2>
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

          <section>
            <h2 class="text-3xl font-semibold mb-6">Proses Kreatif Kami</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Brief & Research</h3>
                  <p class="text-gray-600">Memahami kebutuhan dan melakukan riset mendalam tentang brand dan target audiens.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Concept Development</h3>
                  <p class="text-gray-600">Mengembangkan konsep kreatif yang unik dan sesuai dengan objektif kampanye.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Design & Production</h3>
                  <p class="text-gray-600">Eksekusi desain dan produksi dengan standar kualitas tinggi.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Review & Refinement</h3>
                  <p class="text-gray-600">Review bersama klien dan penyempurnaan hingga hasil optimal.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-semibold mb-6">Tools & Software</h2>
            <div class="flex flex-wrap gap-4">
              <UBadge size="lg" variant="soft" color="red">Adobe Creative Suite</UBadge>
              <UBadge size="lg" variant="soft" color="blue">Figma</UBadge>
              <UBadge size="lg" variant="soft" color="purple">After Effects</UBadge>
              <UBadge size="lg" variant="soft" color="green">Final Cut Pro</UBadge>
              <UBadge size="lg" variant="soft" color="yellow">Sketch</UBadge>
              <UBadge size="lg" variant="soft" color="pink">Canva Pro</UBadge>
            </div>
          </section>

          <section class="text-center">
            <h2 class="text-3xl font-semibold mb-6">Wujudkan Ide Kreatif Anda</h2>
            <div class="space-y-4">
              <UButton size="xl" class="px-8 py-4">
                Konsultasi Project Kreatif
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