import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { JobsLandingPage } from '../pages/JobsLandingPage';
import { JobsHomePage } from '../pages/JobsHomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { JobDetailsPage } from '../pages/JobDetailsPage';

type Pages = {
  homePage: HomePage;
  jobsLandingPage: JobsLandingPage;
  jobsHomePage: JobsHomePage;
  searchResultsPage: SearchResultsPage;
  jobDetailsPage: JobDetailsPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  jobsLandingPage: async ({ page }, use) => {
    await use(new JobsLandingPage(page));
  },
  jobsHomePage: async ({ page }, use) => {
    await use(new JobsHomePage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  jobDetailsPage: async ({ page }, use) => {
    await use(new JobDetailsPage(page));
  },
});

export { expect } from '@playwright/test';