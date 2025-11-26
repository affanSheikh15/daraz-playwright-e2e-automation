class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.name');
    this.price = page.locator('.price-container');
    this.addToCart = page.locator('a', { hasText: 'Add to cart' });
    this.addToCartButton = this.addToCart; // alias compatibility
  }

  async addProductToCart() {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.addToCart.click();
    const dialog = await dialogPromise.catch(() => null);
    if (dialog) await dialog.accept();
  }
}

module.exports = ProductDetailsPage;
