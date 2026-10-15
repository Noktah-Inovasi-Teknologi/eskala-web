import { rmSync } from 'node:fs'
import { CELLS_DIR } from './paths'

/** Start each run from no cells, so the report only holds what this run saw. */
export default function setup() {
  rmSync(CELLS_DIR, { recursive: true, force: true })
}
