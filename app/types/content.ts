// Shapes of the repeatable content in app/data/, shared by the blocks that render it.

export interface ProcessStep {
  title: string
  body: string
  /** ink: the first step's dark rule · cobalt: the step the section is about (medical review) */
  highlight?: "ink" | "cobalt"
}

/** true: included · false: not included · a string: what the tier gets */
export type ComparisonCell = boolean | string

export interface ComparisonGroup {
  title: string
  rows: { feature: string, cells: ComparisonCell[] }[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Stat {
  value: string
  label: string
  tone?: "ink" | "cobalt" | "accent"
}

export interface ArticleSummary {
  title: string
  excerpt: string
  readTime: string
  category: string
  categoryTone: "white-cobalt" | "white-accent" | "white-ink"
  mediaTone: "cobalt" | "copper" | "neutral"
  /** Absent until the article is written: the card renders without a link. */
  to?: string
}

export interface InterestField {
  name: string
  label: string
  /** contact: one field that takes a WhatsApp number or an email */
  type?: "text" | "contact" | "select"
  placeholder?: string
  items?: string[]
  /** The error shown when a required field is empty, e.g. "Isi nama Anda". */
  required?: string
  autocomplete?: string
}

export interface Milestone {
  when: string
  what: string
}
