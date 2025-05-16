import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.footballticketnet.com/',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  testDir: './tests',
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]]
});