// tests/newsletter.spec.ts
import { test, expect } from '@playwright/test';
import { NewsletterPage } from '../pages/newsletter.page';
import { TestData } from '../utils/test-data';
import { env } from '../utils/env'
import { beforeEach, afterEach } from '../hooks/testHooks';

test.describe('Newsletter Subscription Tests @smoke @regression', () => {

  let newsletterPage: NewsletterPage;

  test.beforeEach(async ({ page }) => {
    newsletterPage = new NewsletterPage(page);
    await page.goto(env.baseURL);
    });

  test.beforeEach(async ({ page }, testInfo) => {
    await beforeEach(page, testInfo);
    });

  test.afterEach(async ({ page }, testInfo) => {
    await afterEach(page, testInfo);
   });


  test('TC-045: Should show error with invalid email formats', async () => {
    //subscribe with invalid mail
    const invalidEmails = TestData.generateInvalidEmails();
  
    // Click subscribe button
    await newsletterPage.subscribe(invalidEmails);
    
    // Assert the result
    const failedMessage = await newsletterPage.getFailedMessage();
    expect(failedMessage).toContain('Please Enter A Valid Email Address');

  });
});