import {test} from "@playwright/test"

test("Handle Iframe with Name", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    const W3Frame = page.frame("iframeResult");
    await W3Frame.locator("#fname").fill("Test Auto");
})

test("Handle Iframe with URL", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const W3Frame2 = page.frame({url: "https://www.w3schools.com/html/default.asp"});
    await W3Frame2.getByRole('button', { name: 'Button to open search field' }).click();
    await W3Frame2.getByRole('textbox', { name: 'Search field' }).fill("Test Auto");
})

test("Handle Iframe with frameLocator Method", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const w3Frame3 = page.frameLocator("[title='W3Schools HTML Tutorial']");
    await w3Frame3.getByLabel('Button to open search field').click();
    await w3Frame3.getByPlaceholder('Search...').fill("Test Code Automate");

    await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame()
    .getByRole('button', { name: 'Button to open search field' }).click(); // có thể dùng cách này
    const Login = page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('button', { name: 'Sign in to your account' });
    Login.click(); //hoặc sử dụng cách này
})

