import { Page, Locator } from '@playwright/test';
import { SavedJobsPanel } from './components/SavedJobsPanel';

export class JobDetailsPage {
  readonly page: Page;
  readonly jobTitle: Locator;
  readonly saveButton: Locator;
  readonly savedJobsButton: Locator;
  readonly savedJobsPanel: SavedJobsPanel;

  constructor(page: Page) {
    this.page = page;

    this.jobTitle = page.getByRole('heading');

    this.saveButton = page.getByRole('button', {
      name: /Save|Saved/,
    });

    this.savedJobsButton = page.getByRole('button', {
      name: /Saved jobs/,
    });

    this.savedJobsPanel = new SavedJobsPanel(page);
  }

  async saveJob(): Promise<void> {
    await this.saveButton.click();
  }

  async openSavedJobs(): Promise<void> {
    await this.savedJobsButton.click();
  }
}