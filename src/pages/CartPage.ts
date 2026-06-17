import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly cartList: Locator;
  readonly servicesList: Locator;
  readonly loginModal: Locator;
  readonly deleteItemButton: Locator;
  readonly plusButton: Locator;
  readonly checkoutButton: Locator;
  readonly cartItemName: Locator;

  constructor(page: Page) {
    super(page);
    this.cartList = page.locator(".cart-item__wrapper");
    this.deleteItemButton = page.getByRole("button", { name: "Удалить", exact: true });
    this.servicesList = page.getByTestId("service-item");
    this.loginModal = page.locator(".modal-layout__content");
    this.plusButton = page.locator("button.change-quantity__button_plus");
    this.checkoutButton = page.getByRole("button", { name: "Перейти к оформлению", exact: true });
    this.cartItemName = this.page.locator(".cart-item__name");
  }

  async removeProductFromCart() {
    await this.deleteItemButton.first().click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async updateProductQuantity(quantity: number) {
    for (let i = 1; i < quantity; i++) {
      await this.plusButton.click();
    }
  }

  getCartItemQuantity() {
    return this.page.locator(".change-quantity__count");
  }
}
