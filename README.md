# Playwright Newsletter Subscription Test
**📌 Overview**
This project automates testing of newsletter subscription functionality using:

Playwright for browser automation

TypeScript for type-safe test scripting

Page Object Model for maintainable test structure


**✨ Features**

✅ Tests valid email submission

✅ Verifies success messages

📊 HTMLreporting

CI/CD ready



**🛠️ Setup**
- Prerequisites

- Node.js v16+

- Playwright v1.30+

  

**Step to build Playwright with Typescript:**


Step 1: Initialize Your Project

```
mkdir playwright_Champions_League

cd playwright_Champions_League

npm init -y
```

Step 2: Install Playwright with TypeScript

```
npm install -D playwright @playwright/test typescript ts-node

npx playwright install
```


Step 3: Configure Playwright

```
npx playwright test --init
```

This creates: playwright.config.ts and tests/example.spec.ts


Step 4: Project Structure

- pages/: Contains Page Object classes

- tests/: Contains test specifications

- pages/: Page Object

- types/: Types of variables

- utils/test-data.ts: Test data generators

- utils/env.ts: base URL

- utils/helpers.ts: Reusable functions

- playwright.config.ts: Configuration file


Step 5: Write a Testscript.

Step 6: Run Tests Locally: 

```
npx playwright test --headed
```

Step 7: Check report HTML file
```
npx playwright show-report
```

Step 7: Add GitHub Actions CI to run multiple job
- Edit package json file
```
{
  "name": "playwright-champion-league",
  "version": "1.0.0",
  "scripts": {
    "test": "npx playwright test",
    "test:smoke": "npx playwright test --grep @smoke",
    "test:regression": "npx playwright test --grep @regression"
  },
  "devDependencies": {
    "@playwright/test": "^1.52.0",
    "@types/node": "^22.15.18",
    "typescript": "^5.2.2"
  }
}
```
- Add multiple jods to yml file
```
smoke-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx playwright install
      - run: npx playwright test --grep  @smoke
      - uses: actions/upload-artifact@v4
        if: ${{ !cancelled() }}
        with:
          name: playwright-report-smoke
          path: playwright-report/
          retention-days: 30

  regression-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx playwright install
      - run: npx playwright test --grep  @regression
      - uses: actions/upload-artifact@v4
        if: ${{ !cancelled() }}
        with:
          name: playwright-report-regression
          path: playwright-report/
          retention-days: 30
```
Step 8: Push code to Gibhub and check testscript run on GitHub Actions


