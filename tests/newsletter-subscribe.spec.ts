import { test, expect } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { data } from '../utils/test-data';
import { env } from '../utils/env';

test('TC-016 Subscribe to newsletter with a valid email @functional', async ({ page }) => {

  //Access to Champions League 2025 page
  await page.goto(env.baseURL + data.path);

  //Click accept button
  await page.waitForSelector(selectors.acceptButton, { state: 'visible' });
  await page.locator(selectors.acceptButton).click();

  // Scroll or locate newsletter section and enter name to textbox
  await page.waitForSelector(selectors.nameInput, { state: 'visible' });
  await page.locator(selectors.nameInput).fill(data.validName);

  //Enter valid email into email textbox
  await page.locator(selectors.emailInput).fill(data.validEmail);

  //Click subscribe button
  await page.locator(selectors.subscribeButton).click();

  //Verify message after clicking subscribe successfully
  await expect(page.locator(selectors.successMessage)).toBeVisible();
});