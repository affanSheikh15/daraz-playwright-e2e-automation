const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductDetailsPage = require('../pages/ProductDetailsPage');
const CartPage = require('../pages/CartPage');
const PurchasePage = require('../pages/PurchasePage');

test.describe('Purchase Module', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC 15: Select product and open details page', async ({ page }) => {
    const home = new HomePage(page);

    await home.category('Laptops').click();
    await home.productLinks.filter({ hasText: 'Sony vaio i5' }).first().click();

    const product = new ProductDetailsPage(page);
    await expect(product.title).toBeVisible();
  });

  test('TC 16: Add product to cart', async ({ page }) => {
    const home = new HomePage(page);

    await home.category('Laptops').click();
    await home.productLinks.filter({ hasText: 'Sony vaio i5' }).first().click();

    const product = new ProductDetailsPage(page);
    await product.addProductToCart();

    const cart = new CartPage(page);
    await cart.open();

    const inCart = await cart.isProductInCart('Sony vaio i5');
    expect(inCart).toBeTruthy();
  });

  test('TC 17: Verify total price in cart', async ({ page }) => {
    const home = new HomePage(page);

    await home.category('Laptops').click();
    await home.productLinks.filter({ hasText: 'Sony vaio i5' }).first().click();

    const product = new ProductDetailsPage(page);
    await product.addProductToCart();

    const cart = new CartPage(page);
    await cart.open();

    const totalText = await page.locator('#totalp').textContent();
    const total = parseInt(totalText);

    expect(total).toBeGreaterThan(0);
  });

  test('TC 18: Complete purchase order', async ({ page }) => {
  const home = new HomePage(page);

  // ✅ Click category and wait for products to load
  await home.category('Laptops').click();
  await page.waitForSelector('.hrefch', { timeout: 15000 });

  // ✅ Click product with navigation-safe handling
  await Promise.all([
    page.waitForLoadState('domcontentloaded'),
    home.productLinks.filter({ hasText: 'Sony vaio i5' }).first().click()
  ]);

  const product = new ProductDetailsPage(page);

  // ✅ Add to cart with alert handling already in your POM
  await product.addProductToCart();

  // ✅ Open cart safely
  const cart = new CartPage(page);
  await cart.open();

  // ✅ Place order modal
  await cart.placeOrder();

  const order = new PurchasePage(page);

  // ✅ Fill form fields
  await order.fillDetails({
    name: 'Affan',
    country: 'Pakistan',
    city: 'Lahore',
    card: '424242424242',
    month: '12',
    year: '2025'
  });

  // ✅ Click purchase and assert confirmation
  await order.purchase();
  await expect(order.confirmationMessage).toBeVisible();
});


});
