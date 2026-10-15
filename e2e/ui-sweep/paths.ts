import { join } from 'node:path'
import type { AuditFinding } from './audit'

export const SWEEP_DIR = join('test-results', 'ui-sweep')
export const CELLS_DIR = join(SWEEP_DIR, 'cells')
export const SHOTS_DIR = join(SWEEP_DIR, 'shots')

/** One route at one width, as the spec records it and the report reads it. */
export interface Cell {
  slug: string
  path: string
  design: string | null
  width: number
  findings: AuditFinding[]
  shots: string[]
}
