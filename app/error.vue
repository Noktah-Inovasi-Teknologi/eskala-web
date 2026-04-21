<script lang="ts" setup>
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-obsidian-50">
    <Navbar />

    <main class="min-h-[calc(100vh-80px)] flex items-center justify-center py-24 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Icon -->
        <div class="flex justify-center mb-8">
          <div class="w-24 h-24 rounded-2xl bg-cobalt-50 flex items-center justify-center">
            <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-cobalt-500" />
          </div>
        </div>

        <!-- Status badge -->
        <div class="flex justify-center mb-6">
          <UBadge
            :label="error.statusCode === 404 ? '404' : String(error.statusCode)"
            color="primary"
            variant="soft"
            size="lg"
          />
        </div>

        <!-- Heading -->
        <h1 class="text-4xl md:text-5xl font-bold text-obsidian-900 mb-4 font-[Poppins]">
          Halaman Sedang Dibangun
        </h1>

        <p class="text-lg text-obsidian-600 mb-10 max-w-lg mx-auto">
          Halaman ini masih dalam pengembangan. Tim kami sedang bekerja keras untuk menghadirkan konten terbaik untuk Anda.
        </p>

        <!-- Divider with icon -->
        <div class="flex items-center gap-4 justify-center mb-10">
          <div class="h-px w-16 bg-obsidian-300" />
          <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-copper-500" />
          <div class="h-px w-16 bg-obsidian-300" />
        </div>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <UButton
            label="Kembali ke Beranda"
            icon="i-heroicons-home"
            size="lg"
            @click="handleError"
          />
          <UButton
            label="Konsultasi Gratis"
            icon="i-heroicons-chat-bubble-left-right"
            size="lg"
            color="success"
            variant="outline"
            to="https://wa.me/6285706034321?text=Halo+Eskala!+Saya+tertarik+untuk+konsultasi."
            target="_blank"
          />
        </div>
      </div>
    </main>

    <WebFooter />
  </div>

</template>
