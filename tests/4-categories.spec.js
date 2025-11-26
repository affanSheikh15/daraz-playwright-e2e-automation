const { test, expect } = require('@playwright/test');
const CategoriesPage = require('../pages/CategoriesPage');
const ProductDetailsPage = require('../pages/ProductDetailsPage');

test.describe('Categories Module', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC 08: View products under Phones category', async ({ page }) => {
    const categories = new CategoriesPage(page);
    await categories.selectPhones();

    const firstProduct = await categories.getFirstProductName();
    expect(firstProduct.length).toBeGreaterThan(0);
  });

  test('TC 09: View products under Laptops category', async ({ page }) => {
    const categories = new CategoriesPage(page);
    await categories.selectLaptops();

    const firstProduct = await categories.getFirstProductName();
    expect(firstProduct.length).toBeGreaterThan(0);
  });

  test('TC 10: View products under Monitors category', async ({ page }) => {
    const categories = new CategoriesPage(page);
    await categories.selectMonitors();

    const firstProduct = await categories.getFirstProductName();
    expect(firstProduct.length).toBeGreaterThan(0);
  });

  test('TC 11: Select product after filtering category', async ({ page }) => {
    const categories = new CategoriesPage(page);
    await categories.selectLaptops();

    await categories.selectProductByName('Sony vaio i5');

    const product = new ProductDetailsPage(page);
    await expect(product.title).toBeVisible();
  });

});
