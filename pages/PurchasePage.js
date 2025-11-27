class PurchasePage {
  constructor(page) {
    this.page = page;

    
    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.cardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');

    
    this.purchaseBtn = page.locator('button', { hasText: 'Purchase' });
    this.closeBtn = page.locator('button', { hasText: 'Close' });

    
    this.confirmationMessage = page.locator('.sweet-alert.showSweetAlert.visible');
  }

  
  async fillDetails({ name, country, city, card, month, year }) {
    await this.nameInput.fill(name);
    await this.countryInput.fill(country);
    await this.cityInput.fill(city);
    await this.cardInput.fill(card);
    await this.monthInput.fill(month);
    await this.yearInput.fill(year);
  }

  
  async purchase() {
    await this.purchaseBtn.click();
  }
}

module.exports = PurchasePage;
