class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#loginusername');
    this.password = page.locator('#loginpassword');
    this.loginBtn = page.locator('button', { hasText: 'Log in' });
    this.modal = page.locator('#logInModal');
  }

  async open() {
    await this.modal.waitFor({ state: 'visible' });
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    // listen for dialog to accept if failure happens
    this.page.once('dialog', async dialog => dialog.accept());
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;
