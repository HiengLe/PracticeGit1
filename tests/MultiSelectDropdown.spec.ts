import { test, expect } from '@playwright/test';

test('Handle Multi select dropdown', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  //await page.locator("#cars").selectOption('Opel');
  await page.locator("#cars").selectOption(['Volvo','Opel','Audi']);

  });