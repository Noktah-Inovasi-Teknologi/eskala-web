<script setup lang="ts">
defineProps<{ status?: "idle" | "sending" | "sent" | "failed" }>()
const emit = defineEmits<{ submit: [email: string] }>()

const email = ref("")
const error = ref("")

function onSubmit() {
  const value = email.value.trim()
  if (!value) error.value = "Isi email Anda"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error.value = "Formatnya belum benar. Contoh: nama@klinik.id"
  else {
    error.value = ""
    emit("submit", value)
  }
}
</script>

<template>
  <form class="flex min-w-0 flex-[1_1_440px] flex-col gap-2" novalidate @submit.prevent="onSubmit">
    <div class="flex flex-wrap gap-3">
      <UInput
        v-model="email"
        type="email"
        autocomplete="email"
        placeholder="nama@klinik.id"
        aria-label="Email"
        :aria-invalid="!!error"
        aria-describedby="newsletter-error"
        class="min-w-0 flex-[1_1_240px]"
        :ui="{ base: 'min-h-13 rounded-full bg-white px-4.5 text-base text-obsidian-950 ring-obsidian-600 placeholder:text-obsidian-600' }"
      />
      <PillButton type="submit" variant="primary" :loading="status === 'sending'">Berlangganan</PillButton>
    </div>
    <p id="newsletter-error" class="text-[13px] text-error-700" :class="{ 'sr-only': !error }" aria-live="polite">{{ error }}</p>
  </form>
</template>
