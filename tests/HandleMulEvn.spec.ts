import {test} from '@playwright/test';

test ('Handle multiple environment variables', async ({page}) => {
    console.log('URL:', process.env.URL);
    console.log('USERNAME:', process.env.USERNAME);
    console.log('PASSWORD:', process.env.PASSWORD);

    // const urlValue = <string>process.env.URL; // Cách 1: Sử dụng type assertion để ép kiểu
    const urlValue = process.env.URL as string; // Cách 2: Sử dụng as để ép kiểu
    await page.goto(urlValue);
    await page.getByTestId('username').fill(process.env.USERNAME as string);
    await page.getByTestId('password').fill(process.env.PASSWORD as string);
    await page.waitForTimeout(7000);
})