// import { test, expect } from "../src/fixtures/test";

// const serchTerm = "iPhone 17";

// test.beforeEach(async ({ homePage, page }) => {
//   await homePage.open("/");
//   const locationTooltip = page.locator(".location-tooltip-content");
//   const confirmButton = locationTooltip.locator("button.location-confirm", {
//     hasText: "Все верно",
//   });
//   await locationTooltip.waitFor({ state: "visible", timeout: 10000 });
//   await confirmButton.click();
//   await expect(locationTooltip).toBeHidden({ timeout: 5000 });
// });

// test.describe("Cart Functionality", () => {
//   test("should add product to cart", async ({
//     homePage,
//     searchResultsPage,
//     cartPage,
//   }) => {
//     await homePage.header.searchField.searchProduct(serchTerm);
//     const expectedProductName = await searchResultsPage.productCard.getProductTitle();
//     await searchResultsPage.productCard.addToCart();
//     await cartPage.open("/cart");
    
//     await expect(cartPage.cartList).toHaveCount(1);
//     await expect(cartPage.cartItemName).toHaveText(expectedProductName);
//   });

//     test("should remove product from cart", async ({
//   homePage,
//   searchResultsPage,
//   cartPage,
// }) => {
//   await homePage.open();
//   await homePage.searchForProduct("iPhone 17");

//   await searchResultsPage.addToCart();

//   await cartPage.open();

//   await expect(cartPage.cartList).toHaveCount(1);

//   await cartPage.removeProductFromCart();

//   await expect(cartPage.cartList).toHaveCount(0);
// });

//     test("should update product quantity in cart", async ({
//   homePage,
//   searchPage,
//   cartPage,
// }) => {
//   await homePage.open();
//   await homePage.searchForProduct("iPhone 17");

//   await searchPage.addToCart();

//   await cartPage.open();

//   await expect(cartPage.cartList).toHaveCount(1);

//   await cartPage.updateProductQuantity(2);

//   await expect(cartPage.cartList).toHaveCount(1);
//   await expect(cartPage.getCartItemQuantity()).toHaveText("2");
// });

  

//    test("should proceed to checkout", async ({
//   homePage,
//   searchPage,
//   cartPage,
// }) => {
//   await homePage.open();
//   await homePage.searchForProduct("iPhone 17");

//   await searchPage.addToCart();

//   await cartPage.open();

//   await cartPage.proceedToCheckout();

//   await expect(cartPage.loginModal).toBeVisible();
// });
// });
