import {test, expect} from '@playwright/test';

test.only('Visual Testing Practice', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/tables');
  //await expect(page).toHaveScreenshot(); // chụp giao diện hiện tại của trang web và lưu nó thành một tệp ảnh gốc
  //await expect(page).toHaveScreenshot('VisualTesting.png'); 
  // chụp giao diện hiện tại của trang web và lưu nó thành một tệp ảnh có tên là 'VisualTesting.png'
//   await expect(page).toHaveScreenshot(["ChildFolder1,ChildFolder2","VisualTestingWithChildFolder1.png"]); 
//   await expect(page).toHaveScreenshot(["ChildFolder3","ABC","VisualTestingWithChildFolder2.png"]); 
// 2 dòng trên là tạo thư mục con trong thư mục chứa ảnh gốc và lưu ảnh vào đó
    // await expect(page).toHaveScreenshot("FullPageScreenshot.png",{fullPage:true}); 
    // // chụp toàn bộ trang web, bao gồm cả phần không hiển thị
    // await expect(page).toHaveScreenshot("MaxDiffPixels.png"); 
    // // chụp giao diện hiện tại của trang web và so sánh nó với ảnh gốc, nếu có sự khác biệt về pixel vượt quá ngưỡng đã định, bài kiểm tra sẽ thất bại
    // await expect(page).toHaveScreenshot("MaxDiffPixel2.png",{maxDiffPixel: 800}); 
    // // chụp giao diện hiện tại của trang web và so sánh nó với ảnh gốc, nếu có sự khác biệt về pixel vượt quá 800 pixel, bài kiểm tra sẽ thất bại
    // await expect(page).toHaveScreenshot("MaxDiffPixelRatio.png"); 
    // chụp giao diện hiện tại của trang web và so sánh nó với ảnh gốc, nếu có sự khác biệt về pixel vượt quá tỷ lệ phần trăm đã định, bài kiểm tra sẽ thất bại
    // await expect(page).toHaveScreenshot("MaxDiffPixelRatio2.png",{maxDiffPixelRatio: 0.06}); 
    // chụp giao diện hiện tại của trang web và so sánh nó với ảnh gốc, nếu có sự khác biệt về pixel vượt quá 6% tổng số pixel, bài kiểm tra sẽ thất bại
    // await expect(page).toHaveScreenshot("MaskPage1.png", {mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]")]});
    // chụp giao diện hiện tại của trang web và so sánh nó với ảnh gốc, nhưng bỏ qua sự khác biệt trong phần tử được chỉ định bởi bộ chọn CSS. 
    // Trong trường hợp này, phần tử được chỉ định là cột thứ 4 của bảng có id 'table1'. Điều này có nghĩa là nếu có sự khác biệt về pixel trong cột này, bài kiểm tra sẽ không bị thất bại.
    // await expect(page).toHaveScreenshot("MaskPage1.png", {mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]"),page.locator("#table2")]});
    // chụp giao diện hiện tại của trang web và so sánh nó với ảnh gốc, nhưng bỏ qua sự khác biệt trong phần tử được chỉ định bởi bộ chọn CSS. 
    // Trong trường hợp này, phần tử được chỉ định là cột thứ 4 của bảng có id 'table1' và toàn bộ bảng có id 'table2'. Điều này có nghĩa là nếu có sự khác biệt về pixel trong cột này hoặc trong bảng này, bài kiểm tra sẽ không bị thất bại.
    // await expect(page.locator("#table1")).toHaveScreenshot("TableVerification.png");
    // chụp giao diện hiện tại của phần tử được chỉ định bởi bộ chọn CSS và so sánh nó với ảnh gốc. 
    // await expect(page.locator("#table1")).toHaveScreenshot("TableVerification2.png",{mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]")]});

  })
test("Visual Tesing - Iframe hiding Verification", async ({ page }) => {
  await page.goto("https://demoqa.com/forms");
  await expect(page).toHaveScreenshot("iFrameHidingScreenshot.png", {stylePath: "scrennshot.css"});

});

test("Non Image ScreenShot", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  expect(await page.locator(".hero--primary").textContent()).toMatchSnapshot("HeadingScreenshot.txt");
});