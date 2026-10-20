import { Page, Locator } from '@playwright/test';
import { CookieBanner } from './components/CookieBanner';

export class HomePage {
  readonly page: Page;
  readonly cookieBanner: CookieBanner;
  readonly jobsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieBanner = new CookieBanner(page);

    this.jobsLink = page.getByRole('link', {
      name: 'Jobs',
      exact: true,
    });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openJobs(): Promise<void> {
    await this.jobsLink.click();
  }
}