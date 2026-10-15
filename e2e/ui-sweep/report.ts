import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { CELLS_DIR, SWEEP_DIR, type Cell } from './paths'

const DESIGN_DIR = join('design', 'screenshots')

/** The design slices a capture at this width is compared against (Principle V). */
function designSlices(design: string | null, width: number): string[] {
  if (!design || !existsSync(DESIGN_DIR)) return []
  const reference = width < 768 ? 390 : 1280
  return readdirSync(DESIGN_DIR)
    .filter(name => name.startsWith(`${design}-${reference}-`))
    .sort()
    .map(name => join(DESIGN_DIR, name))
}

const md = (text: string) => text.replace(/\|/g, '\\|').replace(/\n/g, ' ')

/** Gathers the cells the spec wrote into one report.md. */
export default function report() {
  if (!existsSync(CELLS_DIR)) return
  const cells: Cell[] = readdirSync(CELLS_DIR)
    .filter(name => name.endsWith('.json'))
    .map(name => JSON.parse(readFileSync(join(CELLS_DIR, name), 'utf8')) as Cell)
    .sort((a, b) => a.slug.localeCompare(b.slug) || a.width - b.width)

  const gating = (cell: Cell) => cell.findings.filter(f => !f.exempt && f.where !== '(report)')
  const total = cells.reduce((n, cell) => n + gating(cell).length, 0)
  const lines = [
    '# UI sweep report',
    '',
    `${new Date().toISOString()} · ${cells.length} cells · ${total} findings`,
    '',
    'Compare each capture with the design slices listed under its page (constitution V).',
    '',
  ]

  for (const slug of [...new Set(cells.map(cell => cell.slug))]) {
    const own = cells.filter(cell => cell.slug === slug)
    lines.push(`## ${slug} (\`${own[0]!.path}\`)`, '')
    const design = own[0]!.design
    if (design) {
      lines.push(`Design: \`${design}\` — 1280: ${designSlices(design, 1280).map(p => `\`${p}\``).join(', ') || 'none'} · 390: ${designSlices(design, 390).map(p => `\`${p}\``).join(', ') || 'none'}`, '')
    } else {
      lines.push('Design: none for this page.', '')
    }
    for (const cell of own) {
      const found = cell.findings
      lines.push(`### ${cell.width}px — ${gating(cell).length ? `${gating(cell).length} findings` : 'clean'}`, '')
      lines.push(`Shots: ${cell.shots.map(p => `\`${p}\``).join(', ')}`, '')
      if (!found.length) continue
      lines.push('| Kind | Where | Text | Detail |', '|---|---|---|---|')
      for (const f of found) lines.push(`| ${f.kind}${f.exempt ? ' (exempt)' : ''} | \`${md(f.where)}\` | ${md(f.text)} | ${md(f.detail)} |`)
      lines.push('')
    }
  }

  writeFileSync(join(SWEEP_DIR, 'report.md'), `${lines.join('\n')}\n`)
}
