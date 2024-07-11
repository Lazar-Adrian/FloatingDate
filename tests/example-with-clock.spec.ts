import { test } from '@playwright/test';

test.describe('With Clock', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.clock.install();
  
    // Expect a title "to contain" a substring.
    const dateValue = await page.evaluate(() => {return Date.now()});
  
    console.log('CLOCK INSTALL: ', dateValue);
  });
  
  test('has title 2', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.clock.install();
  
    await page.waitForTimeout(3000);
    // Expect a title "to contain" a substring.
    const dateValue = await page.evaluate(() => {return Date.now()});
  
    console.log('CLOCK INSTALL: ', dateValue);
  });
  
  test('has title 3', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.clock.install();
  
    await page.waitForTimeout(5000);
    // Expect a title "to contain" a substring.
    const dateValue = await page.evaluate(() => {return Date.now()});
  
    console.log('CLOCK INSTALL: ', dateValue);
  });
});
