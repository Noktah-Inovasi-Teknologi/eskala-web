<!-- The dark cobalt-950 band that ends most pages: the consultation offer and the WhatsApp CTA.
     id="kontak" is what the header's "Konsultasi gratis" button jumps to. -->
<script setup lang="ts">
import { consultLink, contact } from "~/data/site"

withDefaults(defineProps<{
  title: string
  body: string
  /** Top padding too; off when the section above already leaves the space. */
  padTop?: boolean
}>(), { padTop: true })
</script>

<template>
  <section id="kontak" class="scroll-mt-4">
    <UContainer :class="padTop ? 'py-12 sm:py-16 md:py-20 lg:py-24' : 'pb-12 sm:pb-16 md:pb-20 lg:pb-24'">
      <div
        class="relative flex flex-wrap items-center gap-x-14 gap-y-8 overflow-hidden rounded-3xl bg-cobalt-950 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-18 [--focus-ring:var(--color-cobalt-400)]"
      >
        <WingDecor class="-top-[40%] -right-[12%] h-[180%] opacity-35" />
        <div class="relative flex min-w-0 flex-[1_1_520px] flex-col gap-4.5">
          <Heading size="display" tone="white">{{ title }}</Heading>
          <p class="max-w-145 text-base leading-[1.6] text-cobalt-100 sm:text-lg">{{ body }}</p>
        </div>
        <div class="relative flex w-full flex-col gap-3 sm:w-auto">
          <PillButton variant="whatsapp" size="lg" :to="consultLink">Chat via WhatsApp</PillButton>
          <span class="text-sm leading-[1.6] text-obsidian-400">
            {{ contact.phone }}<br>
            <a :href="`mailto:${contact.email}`" class="inline-flex min-h-11 items-center text-cobalt-100 underline">{{ contact.email }}</a>
          </span>
        </div>
      </div>
    </UContainer>
  </section>
</template>
