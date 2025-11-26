class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.name = page.locator('#name');
    this.country = page.locator('#country');
    this.city = page.locator('#city');
    this.card = page.locator('#card');
    this.month = page.locator('#month');
    this.year = page.locator('#year');
    this.purchaseBtn = page.locator('button', { hasText: 'Purchase' });
    this.closeBtn = page.locator('button', { hasText: 'Close' });
    this.confirmModal = page.locator('.sweet-alert'); // purchase confirmation modal
  }

  async fillCheckout(data) {
    await this.name.fill(data.name);
    await this.country.fill(data.country);
    await this.city.fill(data.city);
    await this.card.fill(data.card);
    await this.month.fill(data.month);
    await this.year.fill(data.year);
    await this.purchaseBtn.click();
  }

  async getConfirmationText() {
    await this.confirmModal.waitFor({ state: 'visible', timeout: 10000 });
    return await this.confirmModal.textContent();
  }

  async close() {
    await this.closeBtn.click();
  }
}

module.exports = CheckoutPage;
