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

```ts
Step 1: Initialize Your Project

mkdir playwright_Champions_League

cd playwright_Champions_League

npm init -y


Step 2: Install Playwright with TypeScript

npm install -D playwright @playwright/test typescript ts-node

npx playwright install


Step 3: Configure Playwright

npx playwright test --init

This creates: playwright.config.ts and tests/example.spec.ts


Step 4: Project Structure

- pages/: Contains Page Object classes

- tests/: Contains test specifications

- pages/: Page Object

- test-data.ts: Test data generators

- env.ts: base URL

- selectors: xpath of all elements in this page

- playwright.config.ts: Configuration file


Step 5: Write a Testscript.

Step 6: Run Tests Locally: npx playwright test --headed

Step 7: Add GitHub Actions CI

Step 8: Push code to Gibhub and check testscript run on GitHub Actions


