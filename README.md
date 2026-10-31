# Portfolio Website Test Automation (Playwright + TypeScript)

![Playwright Tests](https://github.com/geetesonali01/sonali-website-playwright-poc/actions/workflows/playwright.yml/badge.svg)

End-to-end test automation POC for my portfolio website
[sonaligeete.in](https://sonaligeete.in).

**Live test report:** https://geetesonali01.github.io/sonali-website-playwright-poc/

## What is covered

- Home page loads with title
- QA automation pages open
- Internal links are not broken
- No horizontal scroll on mobile viewport
- Runs on Desktop Chrome and Pixel 7 (mobile)

## Tech stack

Playwright, TypeScript, GitHub Actions, GitHub Pages (HTML report)

## How to run locally

```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## CI/CD

Tests run automatically on every push, on pull requests, and weekly
every Monday. The HTML report is published to GitHub Pages.
