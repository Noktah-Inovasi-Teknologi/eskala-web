<script lang="ts" setup>
const props = defineProps<{
  error: {
    statusCode: number;
    message: string;
  };
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="bg-obsidian-50">
    <Navbar />

    <UContainer class="min-h-[70vh] flex items-center justify-center py-24">
      <div
        class="max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
      >
        <div
          class="w-24 h-24 rounded-2xl bg-cobalt-50 flex items-center justify-center"
        >
          <UIcon
            name="i-heroicons-wrench-screwdriver"
            class="w-12 h-12 text-cobalt-500"
          />
        </div>

        <p class="font-display text-copper-500 font-medium">
          ──────── {{ error.statusCode }}
        </p>

        <h1 class="font-display text-5xl font-bold text-obsidian-950">
          Halaman Sedang Dibangun
        </h1>

        <p
          class="font-body text-lg text-obsidian-700 font-light max-w-lg mx-auto"
        >
          Halaman ini masih dalam pengembangan. Tim kami sedang bekerja keras
          untuk menghadirkan konten terbaik untuk Anda.
        </p>

        <div class="flex items-center gap-4 justify-center">
          <div class="h-px w-16 bg-obsidian-300" />
          <UIcon
            name="i-heroicons-sparkles"
            class="w-5 h-5 text-copper-500"
          />
          <div class="h-px w-16 bg-obsidian-300" />
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
            size="xl"
            class="px-4 rounded-full"
            color="primary"
            @click="handleError"
          >
            <Icon name="i-heroicons-home" />
            Kembali ke Beranda
          </UButton>
          <UButton
            href="https://wa.me/6285706034321?text=Halo+Eskala!+Saya+tertarik+untuk+konsultasi."
            target="_blank"
            size="xl"
            color="success"
            class="px-4 rounded-full"
          >
            <Icon name="i-mdi-whatsapp" class="text-lg" />
            Konsultasi Gratis
          </UButton>
        </div>
      </div>
    </UContainer>

    <WebFooter />
  </div>
</template>
