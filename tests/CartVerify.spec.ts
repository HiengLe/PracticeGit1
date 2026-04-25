import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test("Verify of Cart", async ({page}) => {
    const loginPageObject = new LoginPage(page);
    await loginPageObject.openAplication();
    await loginPageObject.login("standard_user","secret_sauce");

    const homePageObj = new HomePage(page);
    await expect(homePageObj.homePageHeading).toHaveText("Swag Labs");
    await homePageObj.backPackAddCart();
    await expect(homePageObj.cartIcon).toHaveText("1");
    await expect(homePageObj.backPackRemoveCartButton).toBeVisible();
    await homePageObj.gotoCart();
    const cartPageObj = new CartPage(page);
    await expect(cartPageObj.backPackItemlink).toHaveText("Sauce Labs Backpack");


});

