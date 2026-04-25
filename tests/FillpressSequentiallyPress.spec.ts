import {test,expect} from "@playwright/test";

test (" Practice of Fill Press and  pressSequentially ", async ({page})=>{
    // await page.goto('https://ultimateqa.com/filling-out-forms/');
    // await page.locator('#et_pb_contact_name_0').fill("TestAutomation");
    // await page.locator('#et_pb_contact_message_0').fill("Welcom to me test");

    // await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable');
    // await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is')
    // .fill("Coding content");

    await page.goto('https://www.google.com/');
    await page.locator('#APjFqb').pressSequentially("Test Automation",{delay: 1000}); 
    //{delay: 1000}) thêm độ trễ cho nhập keyboard
    await page.locator('#APjFqb').press("ArrowDown+ArrowDown+ArrowDown");
    await page.locator('#APjFqb').press("Enter");
    await page.locator('#APjFqb').press("Backspace");
});