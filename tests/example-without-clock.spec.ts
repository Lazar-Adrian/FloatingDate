import { test, expect } from '@playwright/test';

  test('Default approach', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const dateValue = await page.evaluate(() => {return Date.now()});
    console.log('DEFAULT: ', dateValue);
    expect(Number.isInteger(dateValue)).toBeTruthy();
  });

  test('Default approach  Delay 1s', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(1000);
    const dateValue = await page.evaluate(() => {return Date.now()});
    console.log('DEFAULT: ', dateValue);
    expect(Number.isInteger(dateValue)).toBeTruthy();
  });

  test('Default approach  Delay 2s', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(2000);
    const dateValue = await page.evaluate(() => {return Date.now()});
    console.log('DEFAULT: ', dateValue);
    expect(Number.isInteger(dateValue)).toBeTruthy();
  });
