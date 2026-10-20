import { Page, Locator } from '@playwright/test';

export class SavedJobsPanel {
  readonly page: Page;
  readonly savedJobLinks: Locator;

  constructor(page: Page) {
    this.page = page;

     this.savedJobLinks = page.getByRole('link', { name: /View all/ });
  }
}