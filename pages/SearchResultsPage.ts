import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly resultsHeading: Locator;
  readonly firstJobLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.resultsHeading = page.getByRole('heading', { name: /results for/ });

    this.firstJobLink = page
      .getByRole('link', {
        name: 'View job',
        exact: true,
      })
      .first();
  }

  async openFirstJob(): Promise<void> {
    await this.firstJobLink.click();
  }

  async getResultsCount(): Promise<number> {
    const headingText = (await this.resultsHeading.textContent()) ?? '';

    return parseInt(headingText);
  }

  async hasResults(): Promise<boolean> {
    return (await this.getResultsCount()) > 0;
  }
}