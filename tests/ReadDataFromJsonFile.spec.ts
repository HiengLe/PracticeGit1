import { test, expect } from "@playwright/test";
import logindata from "../testdata/logindata.json";
import dataArray from "../testdata/testdata1.json";

test.beforeEach(async ({ page }) => {
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.username);
    await page.getByPlaceholder('Password').fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test("Verify timesheet card navigation on Dashboard page", async ({ page}) => {
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('link', { name: 'Time' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
});

dataArray.forEach((testData) => { // là vòng lặp để chạy nhiều test với dữ liệu khác nhau
test(`Add Candidate for Recruitment ${testData.firstName}`, async ({ page }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill(testData.firstName);
    await page.getByPlaceholder('Last Name').fill(testData.lastName);
    await page.getByPlaceholder('Middle Name').fill(testData.middleName);
    await page.getByPlaceholder('Type here').first().fill(testData.email);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Application Stage')).toBeVisible();
});
});
// cách 2
// for (const testData of dataArray) { 
//     test(`Add Candidate for Recruitment ${testData.firstName}`, async ({ page }) => {
//         await page.getByRole('link', { name: 'Recruitment' }).click();  
//         await page.getByRole('button', { name: ' Add' }).click();
//         await expect(page.locator('#app')).toContainText('Add Candidate');
//         await page.getByPlaceholder('First Name').fill(testData.firstName);
//         await page.getByPlaceholder('Last Name').fill(testData.lastName);
//         await page.getByPlaceholder('Middle Name').fill(testData.middleName);  
//         await page.getByPlaceholder('Type here').first().fill(testData.email);
//         await page.getByRole('button', { name: 'Save' }).click();
//         await expect(page.getByText('Application Stage')).toBeVisible();
//     });
// } 