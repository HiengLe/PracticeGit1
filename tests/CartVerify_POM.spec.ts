import { expect } from '@playwright/test';
import { test } from '../fixtures/POMFixtures';

test("Verify of Cart", async ({page, loginPage, homePage, cartPage}) => {
    await loginPage.openAplication();
    await loginPage.login("standard_user","secret_sauce");
    await expect(homePage.homePageHeading).toHaveText("Swag Labs");
    await expect(homePage.cartIcon).toHaveText("1");
    await expect(homePage.backPackRemoveCartButton).toBeVisible();
    await homePage.gotoCart();
    await expect(cartPage.backPackItemlink).toHaveText("Sauce Labs Backpack");


});
