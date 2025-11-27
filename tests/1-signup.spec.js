const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const { randomUser } = require('../utils/userGenerator');

test.beforeEach(async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
});

test('TC 01: Successful User Registration (Positive)', async ({ page }) => {
  const home = new HomePage(page);
  await home.openSignup();

  const signup = new SignupPage(page);
  await signup.open();

  const u = randomUser('auto');
  const pass = 'Auto@1234';

  
  const dialogPromise = page.waitForEvent('dialog');
  await signup.register(u, pass);

  const dialog = await dialogPromise;
  expect(dialog.message()).toMatch(/sign up successful/i);
  
});

test('TC 02: Duplicate User Registration (Negative)', async ({ page }) => {
  const home = new HomePage(page);
  await home.openSignup();

  const signup = new SignupPage(page);
  await signup.open();

  const existingUser = 'existingUser123';
  const pass = 'Test@123';

  const dialogPromise = page.waitForEvent('dialog');
  await signup.register(existingUser, pass);

  const dialog = await dialogPromise;
  expect(dialog.message()).toMatch(/this user already exist/i);
  
});
