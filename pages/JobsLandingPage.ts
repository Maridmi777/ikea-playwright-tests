import { Page, Locator } from '@playwright/test';

export class JobsLandingPage {
  readonly page: Page;
  readonly exploreAvailableJobsLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.exploreAvailableJobsLink = page.getByRole('link', {
      name: 'Explore available jobs',
      exact: true,
    });
  }

  async exploreAvailableJobs(): Promise<void> {
    await this.exploreAvailableJobsLink.click();
  }
}