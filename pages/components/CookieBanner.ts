import { Page, Locator } from '@playwright/test';

export class CookieBanner {
  readonly page: Page;
  readonly acceptButton: Locator;

  constructor(page: Page) {
    this.page = page;
       this.acceptButton = page.getByRole('button', { name: 'Accept', exact: true });
  }

  async acceptCookies() {
    await this.acceptButton.click();
  }
}