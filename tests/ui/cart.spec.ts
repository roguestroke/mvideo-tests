import { test, expect } from "../../src/fixtures/test";

const serchTerm = "iPhone 17";
let expectedProductName = "";

test.beforeEach(async ({ homePage, searchResultsPage, cartPage }) => {
  await homePage.open("/");
  await homePage.header.locationModal.confirmCurrentLocation();
  await homePage.header.searchField.searchProduct(serchTerm);
  expectedProductName = await searchResultsPage.productCard.getProductTitle();
  await searchResultsPage.productCard.addToCart();
  await cartPage.open("/cart");
});

test.describe("Cart Functionality", () => {
  test("should add product to cart", async ({ cartPage }) => {
    await expect(cartPage.cartList).toHaveCount(1);
    await expect(cartPage.cartItemName).toHaveText(expectedProductName);
  });

  test("should remove product from cart", async ({ cartPage }) => {
    await expect(cartPage.cartList).toHaveCount(1);

    await cartPage.removeProductFromCart();

    await expect(cartPage.cartList).toHaveCount(0);
  });

  test("should update product quantity in cart", async ({ cartPage }) => {
    await expect(cartPage.cartList).toHaveCount(1);

    await cartPage.updateProductQuantity(2);

    await expect(cartPage.getCartItemQuantity()).toHaveText("2");
  });

  test("should proceed to checkout", async ({ cartPage }) => {
    await cartPage.proceedToCheckout();

    await expect(cartPage.loginModal).toBeVisible();
  });
});
