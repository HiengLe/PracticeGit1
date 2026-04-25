import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly homePageHeading: Locator;
    readonly backPackAddCartButton: Locator;
    readonly backPackRemoveCartButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageHeading = page.getByText ("Swag Labs");
        this.backPackAddCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.backPackRemoveCartButton = page.getByTestId('remove-sauce-labs-backpack');
        this.cartIcon = page.getByTestId('shopping-cart-link');
    }

    async backPackAddCart() {
        await this.backPackAddCartButton.click();
    }
     async gotoCart() {
        await this.cartIcon.click();
    }
}