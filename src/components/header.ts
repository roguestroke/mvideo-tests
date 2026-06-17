import { Page } from "@playwright/test";
import { SearchField } from "./search-field";

export class Header {
  readonly searchField: SearchField;

  constructor(public page: Page) {
    this.searchField = new SearchField(page);
  }
}
