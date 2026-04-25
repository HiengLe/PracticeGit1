import { test, expect } from '@playwright/test';

test('Handle radio', async ({ page }) => {
  await page.goto('https://artoftesting.com/samplesiteforselenium');
  const maleRadio = page.locator('#male');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();
  await page.locator('#female').check();
  await expect(maleRadio).not.toBeChecked();
});