import { Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly backPackItemlink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backPackItemlink = page.getByRole('link', { name: 'Sauce Labs Backpack' });

    }

}