import { test } from "@playwright/test";

test("Practice Test 1", async ({ page }) => {
    console.log("Starting Practice Test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 1");
});

test("Practice Test 2", async ({ page }) => {
    console.log("Starting Practice Test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 2");
});

test("Practice Test 3", async ({ page }) => {
    console.log("Starting Practice Test 3");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 3");
});

test.beforeAll("Practice of BeforeAll", async() =>{     // có thể đặt khối nyà khối describe
        console.log("Executing beforeAll block");
    });
test.afterAll("Practice of afterAll", async() =>{     // có thể đặt khối nyà khối describe
        console.log("Executing afterAll block");
    });

test.describe("Practice of Describe", async () => {

    // test.beforeEach("Practice of BeforeEach", async() =>{
    //     console.log("Executing beforeEach block");
    // });
    //  test.afterEach("Practice of afterEach", async() =>{
    //     console.log("Executing afterEach block");
    // });

    test("Practice Test 4", async ({ page, browserName }) => {
        console.log("Starting Practice Test 4");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 4");
    });

    test("Practice Test 5", async ({ page, browserName }) => {
        console.log("Starting Practice Test 5");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 5");
    });

    test("Practice Test 6", async ({ page }) => {
        console.log("Starting Practice Test 6");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 6");
    });
});

test("Practice Test 7", async ({ page }) => {
    console.log("Starting Practice Test 7"); 
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 6");
});