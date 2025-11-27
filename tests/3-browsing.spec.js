const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductDetailsPage = require('../pages/ProductDetailsPage');

test.beforeEach(async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
});

test('TC 05: Navigate to Phones category', async ({ page }) => {
  const home = new HomePage(page);

  await home.category('Phones').click();
  await expect(home.productLinks.first()).toBeVisible({ timeout: 10000 });
});

test('TC 06: Open Samsung Galaxy S6 product', async ({ page }) => {

  const home = new HomePage(page);

  
  await home.category('Phones').click();

  
  const productLink = page.getByRole('link', { name: /samsung galaxy s6/i }).first();
  await expect(productLink).toBeVisible();
  await productLink.click();

  
  const product = new ProductDetailsPage(page);

  
  await expect(product.title).toContainText(/samsung galaxy s6/i);

  
  await expect(product.price).toBeVisible();
});



test('TC 07: Verify Samsung Galaxy S6 details & price', async ({ page }) => {
  const home = new HomePage(page);

  await home.category('Phones').click();
  await page.locator('.hrefch', { hasText: 'Samsung galaxy s6' }).click();

  const product = new ProductDetailsPage(page);

  await expect(product.title).toContainText('Samsung galaxy s6');
  await expect(product.price).toBeVisible();
});
