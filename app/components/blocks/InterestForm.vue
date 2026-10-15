<!-- The Education waitlist and the Training interest form: a few fields, a set of choice chips,
     and a submit. It validates and emits; the page decides where the data goes. -->
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui"
import type { InterestField } from "~/types/content"

type State = Record<string, string | string[]>

const props = defineProps<{
  fields: InterestField[]
  choicesLabel: string
  choices: string[]
  submitLabel: string
  note: string
  status?: "idle" | "sending" | "sent" | "failed"
  sentMessage?: string
  failedMessage?: string
}>()

const emit = defineEmits<{ submit: [data: State] }>()

const state = reactive<State>({
  ...Object.fromEntries(props.fields.map(f => [f.name, ""])),
  choices: [] as string[],
})

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE = /^\+?[\d\s-]{9,16}$/

function validate(values: Partial<State>): FormError[] {
  const errors: FormError[] = []
  for (const field of props.fields) {
    const value = String(values[field.name] ?? "").trim()
    if (field.required && !value) {
      errors.push({ name: field.name, message: field.required })
    } else if (value && field.type === "contact" && !EMAIL.test(value) && !PHONE.test(value)) {
      errors.push({ name: field.name, message: "Formatnya belum benar. Contoh: 0812 3456 7890 atau nama@klinik.id" })
    }
  }
  return errors
}

function onSubmit(event: FormSubmitEvent<State>) {
  emit("submit", event.data)
}

// Deviation (Principles I, III): the design draws fields in obsidian-400 and placeholders in
// obsidian-500 (DS border-default / text-placeholder): 1.42:1 and 2.56:1, under WCAG's 3:1 for a
// field boundary and 4.5:1 for text. Fields here use obsidian-600 for both.
const inputUi = {
  root: "w-full",
  base: "min-h-12 rounded-xl bg-white px-3.5 text-base font-medium text-obsidian-950 ring-obsidian-600 placeholder:text-obsidian-600",
}
const fieldUi = {
  label: "text-sm font-semibold text-obsidian-950",
  error: "text-[13px] text-error-700",
}
</script>

<template>
  <UForm
    :state="state"
    :validate="validate"
    :validate-on="['blur', 'change']"
    class="flex min-w-0 flex-col gap-5 rounded-3xl border border-obsidian-300 bg-obsidian-100 p-6 sm:p-9"
    @submit="onSubmit"
  >
    <div class="grid gap-4 sm:grid-cols-2">
      <UFormField v-for="field in fields" :key="field.name" :name="field.name" :label="field.label" :ui="fieldUi">
        <USelect
          v-if="field.type === 'select'"
          v-model="state[field.name] as string"
          :items="field.items"
          placeholder="Pilih"
          :ui="{ ...inputUi, base: `${inputUi.base} w-full`, placeholder: 'text-obsidian-600' }"
        />
        <UInput
          v-else
          v-model="state[field.name] as string"
          :placeholder="field.placeholder"
          :autocomplete="field.autocomplete"
          :ui="inputUi"
        />
      </UFormField>
    </div>

    <fieldset class="flex flex-col gap-2">
      <legend class="mb-2 text-sm font-semibold text-obsidian-950">{{ choicesLabel }}</legend>
      <div class="flex flex-wrap gap-2.5">
        <CheckChip v-for="choice in choices" :key="choice" v-model="state.choices as string[]" :label="choice" :value="choice" />
      </div>
    </fieldset>

    <PillButton type="submit" variant="primary" trailing-icon="i-ph-arrow-right" :loading="status === 'sending'" class="self-start">
      {{ submitLabel }}
    </PillButton>

    <p
      v-if="status === 'sent' && sentMessage"
      role="status"
      class="rounded-xl border border-success-200 bg-success-50 px-4 py-3 text-[15px] text-success-700"
    >
      {{ sentMessage }}
    </p>
    <p
      v-else-if="status === 'failed' && failedMessage"
      role="alert"
      class="rounded-xl border border-error-200 bg-error-50 px-4 py-3 text-[15px] text-error-700"
    >
      {{ failedMessage }}
    </p>

    <p class="text-[13px] leading-normal text-obsidian-600">{{ note }}</p>
  </UForm>
</template>
