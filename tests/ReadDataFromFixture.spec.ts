import {test, expect} from "../fixtures/TestDataFixture";

test.beforeEach(async ({ page, logindata }) => {
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.uname);
    await page.getByPlaceholder('Password').fill(logindata.pass);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test("Verify timesheet card navigation on Dashboard page", async ({ page }) => {
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('link', { name: 'Time' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
});


test("Add Candidate for Recruitment", async ({ page, testdata }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill(testdata.fname);
    await page.getByPlaceholder('Last Name').fill(testdata.lname);
    await page.getByPlaceholder('Middle Name').fill(testdata.mname);
    await page.getByPlaceholder('Type here').first().fill(testdata.email);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForSelector('text=Application Stage');
   await expect(page.getByText('Application Stage')).toBeVisible();
    //await expect(page.getByRole('cell', { name: 'Test Code Automate' })).toBeVisible();
});