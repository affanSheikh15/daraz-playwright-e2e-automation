class CartPage {
  constructor(page) {
    this.page = page;

    // Table rows
    this.cartRows = page.locator('#tbodyid tr');

    // Place Order button
    this.placeOrderBtn = page.locator('button', { hasText: 'Place Order' });

    // Delete link for specific product
    this.deleteLink = (productName) =>
      page.locator('td', { hasText: productName })
        .locator('..')
        .locator('a', { hasText: 'Delete' });

    // compatibility locators for old tests
    this.productName = page.locator('#tbodyid td:nth-child(2)');
    this.productPrice = page.locator('#tbodyid td:nth-child(3)');
    this.deleteButton = page.locator('#tbodyid a');
    this.productRow = page.locator('#tbodyid tr');
  }

  async open() {
    await this.page.locator('#cartur').click();
    await this.page.waitForSelector('#tbodyid', { timeout: 8000 });
  }

  async openCart() {
    await this.open(); // keeps backward compatibility
  }

  async isProductInCart(productName) {
    const rows = await this.cartRows.allTextContents();
    return rows.some(row => row.includes(productName));
  }

  async deleteProduct(productName) {
    await this.deleteLink(productName).click();
    await this.page.waitForTimeout(600);
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
}

module.exports = CartPage;
