import { test, expect } from '@playwright/test';
test("Assertions of playwright", async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect (page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect (page.locator('[data-test="login-button"]')).toBeEnabled();
    await expect.soft (page.locator('[data-test="login-button"]')).toBeDisabled(); 
    // dùng soft để bỏ qua lỗi để tiếp tục thực thi
    await expect (page.locator('[data-test="login-button"]')).toBeVisible();
    await expect.soft (page.locator('[data-test="login-button"]')).toBeHidden();
    await expect (page.locator('[data-test="login-button"]')).toHaveText("Login");
    await expect (page.locator('[data-test="login-button"]')).toHaveAttribute('name','login-button');
    await expect (page.locator('[data-test="login-button"]')).toHaveId('login-button');
    await expect (page).toHaveURL("https://www.saucedemo.com/"); //lấy url trang
    await expect (page).toHaveTitle("Swag Labs"); // lấy title của trang

    await expect (page, "Không hiển thị title Swag Labs").not.toHaveTitle("Swag Labs"); // k lấy title của trang
    // có thể thêm msg lỗi: k thể hiển thị title ... như trên sau page,
});