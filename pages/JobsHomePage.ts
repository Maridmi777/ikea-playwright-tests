import { Page, Locator } from '@playwright/test';
import { CookieBanner } from './components/CookieBanner';
import { SearchResultsPage } from './SearchResultsPage';

export class JobsHomePage {
  readonly page: Page;
  readonly cookieBanner: CookieBanner;
  readonly searchResults: SearchResultsPage;
  readonly keywordSearchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cookieBanner = new CookieBanner(page);
    this.searchResults = new SearchResultsPage(page);

    this.keywordSearchInput = page.getByRole('searchbox', {
      name: 'Keyword Search',
    });

    this.searchButton = page
      .getByRole('group', { name: 'Search Jobs' })
      .getByRole('button', { name: 'Search jobs' });
  }

  async searchJob(keyword: string): Promise<void> {
    await this.keywordSearchInput.fill(keyword);
    await this.searchButton.click();
  }

  async searchWithFallback(
    primary: string,
    fallback: string,
  ): Promise<string> {
    await this.searchJob(primary);

    if (await this.searchResults.hasResults()) {
      return primary;
    }

    await this.page.goBack();

    await this.searchJob(fallback);

    return fallback;
  }
}