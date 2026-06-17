import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Header } from "../components/header";

export class HomePage extends BasePage {
  readonly header: Header;

  constructor(public page: Page) {
    super(page);
    this.header = new Header(page);
  }
}
