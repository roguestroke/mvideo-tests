import { expect, Locator, Page } from "@playwright/test";

export class ProductCard {
  readonly productTitle: Locator;
  readonly addToCartBtn: Locator;
  readonly cartButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator('button[mtmaddtocart]');
    this.productTitle = page.locator('mvid-product-title');
    this.cartButton = this.page.locator( 'button.mui-button:has-text("В корзине")[muitype="secondary"]' );
  }

  async getProductTitle(): Promise<string> {
    return await this.productTitle.first().innerText();
  }

  async addToCart(): Promise<void> {
    await this.addToCartBtn.filter({ visible: true }).first().click();
    await expect(this.cartButton).toBeVisible();
  }
}
