class SignupPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#sign-username');
    this.password = page.locator('#sign-password');
    this.signBtn = page.locator('button', { hasText: 'Sign up' });
    this.modal = page.locator('#signInModal'); // modal id may be #signInModal
    this.closeBtn = page.locator('#signInModal .btn-close, #signInModal .close');
  }

  async open() {
    // assume already invoked from HomePage.openSignup()
    await this.modal.waitFor({ state: 'visible' });
  }

  async register(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signBtn.click();
    // Demoblaze shows a browser alert - accept automatically
    try {
      const dialog = await this.page.waitForEvent('dialog', { timeout: 5000 });
      await dialog.accept();
    } catch (e) {
      // ignore if no dialog
    }
  }

  async close() {
    await this.closeBtn.click();
  }
}

module.exports = SignupPage;
