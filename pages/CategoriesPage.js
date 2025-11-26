class CategoriesPage {
  constructor(page) {
    this.page = page;

    // Categories
    this.categoriesBox = page.locator('#cat');
    this.phonesCategory = page.locator('#itemc').nth(0);
    this.laptopsCategory = page.locator('#itemc').nth(1);
    this.monitorsCategory = page.locator('#itemc').nth(2);

    // Product items
    this.productTitles = page.locator('#tbodyid h4 a');
  }

  async selectPhones() {
    await this.phonesCategory.click();
  }

  async selectLaptops() {
    await this.laptopsCategory.click();
  }

  async selectMonitors() {
    await this.monitorsCategory.click();
  }

  async getFirstProductName() {
    return await this.productTitles.first().innerText();
  }

  async selectProductByName(productName) {
    await this.page.locator('#tbodyid h4 a', { hasText: productName }).click();
  }
}

module.exports = CategoriesPage;
