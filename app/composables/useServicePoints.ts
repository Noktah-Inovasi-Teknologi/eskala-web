import { adsPoints, compare, compareColumns, comparison, tiers } from "~/data/smm"
import type { ComparisonCell, ComparisonGroup, ComparisonRow, ServicePoints } from "~/types/content"

const isCell = (c: unknown): c is ComparisonCell => typeof c === "boolean" || typeof c === "string"
const isRow = (r: ComparisonRow, cells: number) => typeof r?.feature === "string" && Array.isArray(r.cells) && r.cells.length === cells && r.cells.every(isCell)

/**
 * The service points (GET /api/service-points) once the page is open, and app/data/smm.ts until then and
 * whenever the answer is missing or malformed. Each of the three parts falls back on its own, so the
 * page never shows an error and never starts empty.
 */
export function useServicePoints() {
  const live = ref<Partial<ServicePoints> | null>(null)

  onMounted(async () => {
    try {
      live.value = await $fetch<Partial<ServicePoints>>("/api/service-points")
    }
    catch { /* the shipped copy stays */ }
  })

  const smm = computed(() => {
    const groups = live.value?.smm?.groups
    const columns = live.value?.smm?.columns
    const ok = Array.isArray(groups) && groups.length > 0 && Array.isArray(columns) && columns.length === tiers.length
      && groups.every(g => typeof g?.title === "string" && Array.isArray(g.rows) && g.rows.length > 0 && g.rows.every(r => isRow(r, tiers.length)))
    return ok
      ? { columns: columns as string[], groups: groups as ComparisonGroup[] }
      : { columns: tiers.map(t => t.name) as string[], groups: comparison }
  })

  const ads = computed(() => {
    const list = live.value?.ads
    return Array.isArray(list) && list.length > 0 && list.every(s => typeof s === "string" && s) ? list : adsPoints
  })

  const compareRows = computed(() => {
    const rows = live.value?.compare
    return Array.isArray(rows) && rows.length > 0 && rows.every(r => isRow(r, compareColumns.length)) ? rows : compare
  })

  return { smm, ads, compareRows }
}
