import { expect, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
  // Placeholders: adjust to match your app DOM
  private readonly emailInput = this.page
    .getByLabel(/email/i)
    .or(this.page.locator('input[type="email"]'));

  private readonly passwordInput = this.page
    .getByLabel(/password/i)
    .or(this.page.locator('input[type="password"]'));

  private readonly signInButton = this.page.getByRole('button', {
    name: /sign in|log in|login/i
  });

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    // Update if your login path differs
    await this.page.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async expectLoginFormVisible(): Promise<void> {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }
}
