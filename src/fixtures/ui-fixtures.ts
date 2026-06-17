import { Fixtures, Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { CartPage } from "../pages/CartPage";
import { ContextPagesFixture } from "./context-pages";

export type PagesFixture = {
  page: Page;
  homePage: HomePage;
  searchResultsPage: SearchResultsPage;
  cartPage: CartPage;
};

export const pagesFixture: Fixtures<PagesFixture, ContextPagesFixture> = {
  homePage: async ({ contextPage }, use) => {
    const homePage = new HomePage(contextPage);
    await use(homePage);
  },
  searchResultsPage: async ({ contextPage }, use) => {
    const searchResultsPage = new SearchResultsPage(contextPage);
    await use(searchResultsPage);
  },
  cartPage: async ({ contextPage }, use) => {
    const cartPage = new CartPage(contextPage);
    await use(cartPage);
  },
};
