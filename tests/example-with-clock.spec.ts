import { test, expect } from '@playwright/test';

  test('CLOCK INSTALL', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.clock.install();
    const dateValue = await page.evaluate(() => {return Date.now()});
    console.log('CLOCK INSTALL: ', dateValue);
    expect(Number.isInteger(dateValue)).toBeTruthy();
  });
  
  test('CLOCK INSTALL Delay 1s', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.clock.install();
  
    await page.waitForTimeout(1000);
    const dateValue = await page.evaluate(() => {return Date.now()});
    console.log('CLOCK INSTALL: ', dateValue);
    expect(Number.isInteger(dateValue)).toBeTruthy();
  });
  
  test('CLOCK INSTALL Delay 2s', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.clock.install();
  
    await page.waitForTimeout(2000);
    const dateValue = await page.evaluate(() => {return Date.now()});
    console.log('CLOCK INSTALL: ', dateValue);
    expect(Number.isInteger(dateValue)).toBeTruthy();
  });
