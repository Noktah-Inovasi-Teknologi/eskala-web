<script setup lang="ts">
import type { ComparisonGroup } from "~/types/content"

defineProps<{
  caption: string
  columns: string[]
  /** Index into `columns` of the highlighted tier. */
  popular?: number
  groups: ComparisonGroup[]
}>()
</script>

<template>
  <div>
    <p class="mb-3 text-[13px] text-obsidian-600 md:hidden">Geser tabel ke samping untuk melihat semua paket.</p>
    <div
      class="relative overflow-x-auto rounded-3xl border border-obsidian-300"
      role="region"
      :aria-label="caption"
      tabindex="0"
    >
      <table class="w-full min-w-190 border-separate border-spacing-0 text-[15px]">
        <caption class="sr-only">{{ caption }}</caption>
        <thead>
          <tr>
            <th scope="col" class="border-b border-obsidian-300 bg-obsidian-100 px-4.5 py-3.75 text-left align-top text-[13px] font-semibold uppercase tracking-[0.09em] text-obsidian-700">
              Fitur
            </th>
            <th
              v-for="(column, c) in columns"
              :key="column"
              scope="col"
              class="border-b border-obsidian-300 px-4.5 py-3.75 text-left align-top text-lg font-extrabold text-obsidian-950"
              :class="c === popular ? 'bg-cobalt-50' : 'bg-obsidian-100'"
            >
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(group, g) in groups" :key="group.title">
            <tr>
              <th
                scope="colgroup"
                :colspan="columns.length + 1"
                class="border-b border-obsidian-300 bg-obsidian-100 px-4.5 py-3.75 text-left text-xs font-bold uppercase tracking-[0.09em] text-obsidian-700"
              >
                {{ group.title }}
              </th>
            </tr>
            <tr v-for="(row, r) in group.rows" :key="row.feature">
              <th
                scope="row"
                class="w-[28%] px-4.5 py-3.75 text-left align-top leading-normal font-bold text-obsidian-950"
                :class="{ 'border-b border-obsidian-300': !(g === groups.length - 1 && r === group.rows.length - 1) }"
              >
                {{ row.feature }}
              </th>
              <td
                v-for="(cell, c) in row.cells"
                :key="c"
                class="px-4.5 py-3.75 align-top leading-normal text-obsidian-800"
                :class="[
                  c === popular ? 'bg-cobalt-50' : '',
                  { 'border-b border-obsidian-300': !(g === groups.length - 1 && r === group.rows.length - 1) },
                ]"
              >
                <template v-if="cell === true">
                  <UIcon name="i-ph-check" class="size-5 text-success-700" aria-hidden="true" />
                  <span class="sr-only">Termasuk</span>
                </template>
                <template v-else-if="cell === false">
                  <span class="inline-block h-0.5 w-3.5 bg-obsidian-500 align-middle" aria-hidden="true" />
                  <span class="sr-only">Tidak termasuk</span>
                </template>
                <template v-else>{{ cell }}</template>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
