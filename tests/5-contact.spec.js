const { test, expect } = require('@playwright/test');
const ContactPage = require('../pages/ContactPage');

test.describe('Contact Form Module', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  
  test('TC 12: Send message with valid inputs (Positive)', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContactForm();
    await contactPage.fillContactDetails("test@email.com", "Affan", "Hello this is test");

    const alertMessage = await contactPage.submitAndCaptureAlert();

    expect(alertMessage).toContain("Thanks for the message");
  });

  
  test('TC 13: Validation when fields are empty (Negative)', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContactForm();

    const alertMessage = await contactPage.submitAndCaptureAlert();

    expect(alertMessage.length).toBeGreaterThan(0);
  });

 
  test('TC 14: Alert confirmation handling (Neutral)', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.openContactForm();
    await contactPage.fillContactDetails("abc@test.com", "Demo", "Check alert handling");

    const alertMessage = await contactPage.submitAndCaptureAlert();

    expect(alertMessage).toBeTruthy();
  });

});
