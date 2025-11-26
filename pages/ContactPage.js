class ContactPage {
  constructor(page) {
    this.page = page;
    this.contactLink = 'a[data-target="#exampleModal"]';
    this.emailInput = '#recipient-email';
    this.nameInput = '#recipient-name';
    this.messageInput = '#message-text';
    this.sendButton = '#exampleModal .modal-footer .btn-primary';
  }

  async openContactForm() {
    await this.page.click(this.contactLink);
    await this.page.waitForSelector(this.emailInput, { state: "visible" });
  }

  async fillContactDetails(email, name, message) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.messageInput, message);
  }

  async submitAndCaptureAlert() {
    return await new Promise(async (resolve) => {
      this.page.once("dialog", async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });

      await this.page.click(this.sendButton, { force: true });
    });
  }
}

module.exports = ContactPage;
