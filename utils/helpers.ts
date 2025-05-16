// utils/helpers.ts
import { Page } from '@playwright/test';

export class Helpers {
  static async takeScreenshot(page: Page, name: string): Promise<void> {
    await page.screenshot({
      path: `test-results/screenshots/${name}-${Date.now()}.png`,
      fullPage: true
    });
  }

}