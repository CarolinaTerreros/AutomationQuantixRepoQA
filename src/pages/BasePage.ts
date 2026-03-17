import { Page, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async expectTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
  }
}
