import { test, expect } from '@playwright/test';

test('Practice getBy Method', async ({ page }) => {
  // await page.goto('https://demo.nopcommerce.com/login');
  // await page.getByLabel("Email:",{exact: true}).fill("testcodeautomated@gmail.com");
  // // có thêm {exact: true} hặc không: dùng để xác định tên label phải đúng chính xác 
  // //await page.getByPlaceholder("Search store").fill("Mobile");
  // console.log(await page.getByText("New Customer",{exact: true}).textContent());
  // await page.getByAltText("nopCommerce demo store").click();
  // await page.getByTitle("Show products in category Electronics").first().click();
  // await page.getByPlaceholder("Search store").fill("Mobile");
  // await page.getByRole('button',{name :'Search'}).click();
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId("username").fill("standard_user");
});