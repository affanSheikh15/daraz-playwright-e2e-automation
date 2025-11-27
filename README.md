# Daraz Playwright Automation Framework

This repository contains an end-to-end automation framework built using Playwright (JavaScript) with a complete Page Object Model (POM) architecture. It is designed for scalable, maintainable, and stable UI automation of the Daraz shopping platform.

## Key Features

* Playwright JavaScript-based automation
* Page Object Model (POM) structure for clean and reusable components
* Supports Chromium, Firefox, and WebKit
* Centralized configuration through `playwright.config.js`
* Environment variable support using dotenv
* Test execution reports included (HTML report, traces, screenshots)
* GitHub Actions CI pipeline for automated execution
* Modularized folder structure for long-term scalability

## Tech Stack

* Playwright 1.56.1
* Node.js v24.11.1
* npm 11.6.2
* dotenv 16.4.0
* JavaScript (ES6+)
* GitHub Actions


## Installation

Install all dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

## How to Run Tests

### Run all browsers (default)

```
npx playwright test
```

### Run only Chromium

```
npx playwright test --project=chromium
```

### Run tests in headed mode

```
npx playwright test --project=chromium --headed
```

### Run a specific test file

```
npx playwright test tests/<filename>.spec.js
```

## Reports

After every test run, Playwright generates:

* HTML report
* Screenshots
* Traces
* Logs

To open the HTML report:

```
npx playwright show-report
```

## Environment Variables

The framework uses dotenv for base URLs and secret values.

Create a `.env` file:

```
BASE_URL=https://www.demoblaze.com
```

## CI/CD: GitHub Actions

The repository includes a GitHub Actions workflow file located at:

```
.github/workflows/playwright.yml
```

GitHub Actions will run automatically on:

* Every push to the main branch
* Every pull request
* Manual workflow dispatch

## Page Object Model (POM)

All pages are structured into dedicated classes that contain:

* Locators
* Page actions
* Reusable functions

This ensures:

* Cleaner test scripts
* Minimal code duplication
* Easier maintenance

## Contribution Guidelines

* Follow the existing folder structure
* Keep test cases small and modular
* Reuse POM functions instead of writing new locators
* Commit meaningful messages
* Run locally before pushing to avoid CI failures

## License

This project is for educational and professional portfolio purposes.

---

If you want, I can also generate:

* A shorter version
* A version with badges
* A version with screenshots
* A version tailored for internship applications
