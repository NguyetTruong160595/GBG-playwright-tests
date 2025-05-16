import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.footballticketnet.com/champions-league/champions-league-final-2025',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  testDir: './tests',
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]]
});