import {test as baseTest} from "@playwright/test";

type MyHookFixtures = {
    loginlogoutFixture : void;
    
}

export const test = baseTest.extend<MyHookFixtures>({
    loginlogoutFixture : async({page}, use)=>{
        const loginlogoutFixture = undefined;
        await page.goto("https://www.saucedemo.com/");
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();
        await use();

        //logout
        await page.getByRole('button', {name: 'Open Menu'}).click();
        await page.getByRole('link', {name: 'Logout'}).click();
    }
})
export {expect} from "@playwright/test";