import test from "@playwright/test";

test('Practice of Locator method', async ({page}) => {
await page.goto ("https://www.saucedemo.com/");

// example xpath
//1. //htmltag[@atribute='atributeValue']
//2. //*[@atribute='atributeValue']
await page.locator("//*[@name='user-name']").fill("standard_user");

// example css
//1.htmltag.classValue/.classValue
//2.htmltag#idValue/#idValue
//3.htmltag[atributeName=atributeValue]/[atributeName=atributeValue]
await page.locator('input#password').fill("secret_sauce");
await page.locator(`.submit-button`).click();
//await page.locator("input[value=Login]").click();

// example text
//1.text='textValue': chính xc tuyệt đối, phân biệt chữ hoa và chữ thường
//2.text=textvalue : tuơng đối, k phân biệt chữ hoa chữ thường, chỉ cần chứa đoạn chữ đó
await page.locator("text='Sauce Labs Backpack'").click();

// example id,data-testid,data-test-id,data-test,..
// id/data-test-id/data-test=value
await page.locator("id=add-to-cart").click();
//await page.locator("data-test=add-to-cart").click();
});

test('Practice of Locator method with Options', async ({page}) => {
await page.goto ("https://www.saucedemo.com/");
//1.has Locator: Dùng để tìm một phần tử cha mà bên trong nó có chứa một phần tử con cụ thể
await page.locator(".form_group",{has: page.locator("input#user-name")}).click();
await page.locator(".form_group",{has: page.locator("input#user-name")}).pressSequentially("standard_user");
// pressSequentially(): Gõ text từng phím một vào vị trí con trỏ.

//2.hasNot Locator: Ngược lại với has, dùng để tìm phần tử cha mà bên trong nó không có phần tử con đó.
await page.locator(".form_group",{hasNot: page.locator("input#user-name")}).click();
await page.locator(".form_group",{hasNot: page.locator("input#user-name")}).pressSequentially("secret_sauce");
await page.locator("#login-button").click();
//3.has Text: Dùng để tìm một phần tử mà bên trong nó (hoặc con cháu của nó) có chứa một đoạn chữ cụ thể.
//nếu để trong ngoặc đơn ' ' nó sẽ tìm chính xác, không ngoặc đơn nó sẽ tìm tương đối.
//await page.locator("//a",{hasText: "Sauce Labs Backpack"}).click();
//4.hasNot Text: Dùng để lọc bỏ những phần tử có chứa đoạn chữ không mong muốn.
await page.locator(".inventory_item_name ",{hasNotText: /Sauce.*/}).click();
});