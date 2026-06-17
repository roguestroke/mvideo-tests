import { expect, Locator, Page } from "@playwright/test";

type ProductCardProps = {
  productIndex?: number;
};

export class ProductCard {
  readonly productTitle: Locator;
  readonly addToCartBtn: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator('button[mtmaddtocart]');
    this.productTitle = page.locator('mvid-product-title');
  }

  async getProductTitle(): Promise<string> {
    return await this.productTitle.first().innerText();
  }

  async addToCart(): Promise<void> {
    await this.addToCartBtn.first().click();
    const cartButton = this.page.locator(
      'button.mui-button:has-text("В корзине")[muitype="secondary"]',
    );
    await expect(cartButton).toBeVisible();
  }
}
