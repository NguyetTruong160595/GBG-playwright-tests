// pages/newsletter.page.ts
import { Locator, Page } from '@playwright/test';
import { User } from '../types/user.type';
import { Helpers} from '../utils/helpers'

export class NewsletterPage {
  private readonly page: Page;
  private readonly acceptBt: Locator;
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly submitButton: Locator;
  private readonly successMessage: Locator;
  private readonly failedMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.acceptBt = page.locator('//button[text()="Accept"]');
    this.nameInput = page.locator('input[placeholder="Name"]');
    this.emailInput = page.locator('input[class="subscribe_email"]');
    this.submitButton = page.locator('input[class="subscribe_submit green_btn"]');
    this.successMessage = page.locator('span[class="sub_success"]');
    this.failedMessage = page.locator('//label[@class="error_description"]');

  }

  async subscribe(user: User): Promise<void> {
      //Click accept button
    await this.acceptBt.isVisible();
    await this.acceptBt.click();

    // Scroll or locate newsletter section and enter name to textbox
    await this.nameInput.fill(user.name);

     //Enter valid email into email textbox
    await this.emailInput.fill(user.email);

    //Screenshot before submit data
    await Helpers.takeScreenshot(this.page, 'before-submit');

    //Click subscribe button
    await this.submitButton.click();
  }

  async getSuccessMessage(): Promise<string> {
    
    //check messagge success
    return await this.successMessage.innerText();
  }

  async getFailedMessage(): Promise<string> {
    
    //check messagge failed
    return await this.failedMessage.innerText();
  }
}