require('dotenv').config();

const config = {
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://www.demoblaze.com',
    headless: true,
    screenshot: 'on',       
    trace: 'on',            
    video: 'off',           
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } ,
      launchOptions: {
        slowMo: 500   
      },workers:1},
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  reporter: [['list'], ['html', { open: 'never' }]],
};
module.exports = config;
