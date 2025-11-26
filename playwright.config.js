// playwright.config.js
require('dotenv').config();

const config = {
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://www.demoblaze.com',
    headless: true,
    screenshot: 'on',       // ALWAYS take screenshots
    trace: 'on',            // ALWAYS record trace
    video: 'off',           // optional: set 'on' if you want videos too
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } ,
      launchOptions: {
        slowMo: 500   // 👈 human-level speed
      },workers:1},
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  reporter: [['list'], ['html', { open: 'never' }]],
};
module.exports = config;
