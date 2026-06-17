import { Locator, Page } from "@playwright/test";

export class SearchField {
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(public page: Page) {
    this.searchInput = page.locator('input[placeholder="Поиск в М.Видео"]');
    this.searchButton = page.locator('button.main-search__submit');
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}
