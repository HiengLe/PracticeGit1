import { test, expect } from "../fixtures/HooksFixture";

 // adding and remove item from cats
test("Adding item to Cart verification", async ({ page, loginlogoutFixture }) => {
  await page.getByText("Sauce Labs Backpack").click();
  await page.locator('[data-test="add-to-cart"]') .click();
  await page.locator(".shopping_cart_container").click();
  await expect(page.getByRole("link", { name: "Sauce Labs Backpack" })).toHaveText("Sauce Labs Backpack");
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  await page.locator(".shopping_cart_container").click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.getByRole("link", { name: "Sauce Labs Backpack" })).not.toBeVisible();
});

test("Empty Cart verification", async ({ page, loginlogoutFixture }) => {
  await page.locator(".shopping_cart_container").click();
  await expect(page.locator(".inventory_item_name")).not.toBeVisible();
});