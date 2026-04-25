import {test} from "@playwright/test";

test("Practice Move Hover", async ({page}) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByRole('link', { name: 'Node.js' }).click();
});