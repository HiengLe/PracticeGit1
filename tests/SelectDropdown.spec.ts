import { test, expect } from '@playwright/test';

test('Handle select dropdown with value and visible text', async ({ page }) => {
  await page.goto('https://artoftesting.com/samplesiteforselenium');
  //await page.locator('#testingDropdown').selectOption("Manual"); 
  // có thể cung cấp value hoặc text hiển thị ở option
  //await page.locator('#testingDropdown').selectOption({value:"Manual"}); 
  await page.locator('#testingDropdown').selectOption({label:"Database Testing"}); 
  // có thể dùng text trong option làm label nếu trong trường hợp k có label
  await page.locator('#testingDropdown').selectOption({index:2}); // đếm từ vị trí số 0
});

test('Handle select dropdown with label', async ({ page }) => {
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label');
  //await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption("Mercedes")
  await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:')
  .selectOption({label:'Audi'});

});