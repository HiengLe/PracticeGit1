import {expect, test} from "@playwright/test"

test("Handle New Page", async({context})=>{
    const page = await context.newPage();
    await page.goto("https://demoqa.com/browser-windows");
    await expect(page).toHaveTitle("demosite");
    const pagePromis = context.waitForEvent("page");
    await page.locator("#windowButton").click();
    const newPage = await pagePromis;
    await expect (newPage.locator("#sampleHeading")).toHaveText("This is a sample page");
})