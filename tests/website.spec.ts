import { test, expect } from '@playwright/test';

test.describe('Portfolio website', () => {
  test('home page loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('QA automation page opens', async ({ page }) => {
    await page.goto('/qa-automation.html');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('no broken main navigation links', async ({ page, request }) => {
    await page.goto('/');
    const links = await page.locator('a[href]').evaluateAll(as =>
      as.map(a => (a as HTMLAnchorElement).href)
    );
    const internal = [...new Set(links)].filter(l => l.startsWith('https://sonaligeete.in'));
    for (const url of internal) {
      const res = await request.get(url);
      expect(res.status(), url).toBeLessThan(400);
    }
  });

  test('page has no horizontal scroll on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(overflow).toBeFalsy();
  });
});