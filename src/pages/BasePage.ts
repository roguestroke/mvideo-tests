import { expect, Page, test } from "@playwright/test";
import { Header } from "../components/header";

export class BasePage {
  readonly header: Header;

  constructor(public page: Page) {
    this.header = new Header(page);
  }

  async open(url: string): Promise<void> {
    await test.step(`Opening the url "${url}"`, async () => {
      await this.page.goto(url);
    });
  }
}
