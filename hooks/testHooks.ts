// hooks/testHooks.ts
import { Locator, Page } from '@playwright/test';


import { TestInfo } from '@playwright/test';

export async function beforeEach(page: Page, testInfo: TestInfo) {
  console.log(`Starting test: ${testInfo.title}`);
  await page.context().clearCookies();
}

export async function afterEach(page: Page, testInfo: TestInfo) {
  if (testInfo.status === 'failed') {
    await page.screenshot({
      path: `screenshots/failed-${testInfo.title}.png`,
    });
  }
}