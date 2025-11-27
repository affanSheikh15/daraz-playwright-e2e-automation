const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

const REAL_USER = process.env.DEMO_USER;
const REAL_PASS = process.env.DEMO_PASS;

test.beforeEach(async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
});

test('TC 03: Successful User Login (Positive) - real creds', async ({ page }) => {
  const home = new HomePage(page);
  await home.openLogin();

  const login = new LoginPage(page);
  await login.open();
  await login.login(REAL_USER, REAL_PASS);

  
  await expect(page.locator('#nameofuser')).toContainText(REAL_USER, { timeout: 15000 });
});

test('TC 04: User Logout (Positive)', async ({ page }) => {
  const home = new HomePage(page);
  await home.openLogin();

  const login = new LoginPage(page);
  await login.open();
  await login.login(REAL_USER, REAL_PASS);

  await expect(page.locator('#nameofuser')).toContainText(REAL_USER, { timeout: 15000 });

 
  await page.click('#logout2');
  await expect(page.locator('#login2')).toBeVisible({ timeout: 10000 });
});
