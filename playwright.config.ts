import { defineConfig } from '@playwright/test'

// Its own port, so the sweep never mixes with a `pnpm dev` open on 3000.
const PORT = 3100

export default defineConfig({
  testDir: 'e2e',
  testMatch: '**/*.e2e.ts',
  outputDir: 'test-results/playwright',
  fullyParallel: true,
  workers: 4,
  timeout: 10 * 60_000,
  globalSetup: './e2e/ui-sweep/setup.ts',
  globalTeardown: './e2e/ui-sweep/report.ts',
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    browserName: 'chromium',
    locale: 'id-ID',
    reducedMotion: 'reduce',
  },
  projects: [
    // Every breakpoint from CLAUDE.md, 320 to 2560; records, never fails.
    { name: 'sweep', metadata: { widths: [320, 390, 640, 768, 1024, 1280, 1536, 1920, 2560], soft: true } },
    // The two design widths and the two ends of "no horizontal scroll".
    { name: 'gate', metadata: { widths: [320, 390, 1280, 2560], soft: false } },
  ],
  webServer: {
    command: `pnpm exec nuxt dev --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    // A test GA ID turns the consent bar on (spec 001); gtag never loads because nothing accepts.
    env: { NUXT_PUBLIC_GA_ID: 'G-SWEEP00000' },
    timeout: 180_000,
  },
})
