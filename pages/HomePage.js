class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('#login2');
    this.signupLink = page.locator('#signin2');
    this.welcome = page.locator('#nameofuser');
    this.logout = page.locator('#logout2');
    this.cart = page.locator('#cartur');
    this.category = (name) => page.locator('a', { hasText: name });
    this.productLinks = page.locator('.hrefch');
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL || 'https://www.demoblaze.com/');
  }

  async openLogin() {
    await this.loginLink.click();
  }

  async openSignup() {
    await this.signupLink.click();
  }

  async isLoggedInAs(username) {
    await this.welcome.waitFor({ state: 'visible', timeout: 12000 });
    const txt = await this.welcome.textContent();
    return txt && txt.includes(username);
  }
}

module.exports = HomePage;
