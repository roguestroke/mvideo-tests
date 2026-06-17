import { Fixtures, Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { CartPage } from "../pages/CartPage";

export type PagesFixture = {
  page: Page;
  homePage: HomePage;
  searchResultsPage: SearchResultsPage;
  cartPage: CartPage;
};

export const pagesFixture: Fixtures<PagesFixture> = {
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  searchResultsPage: async ({ page }, use) => {
    const searchResultsPage = new SearchResultsPage(page);
    await use(searchResultsPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
};
