import { test } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

type TestData = {
  Id: string
  FirstName: string
  LastName: string
}

const records: TestData[] = parse(
  fs.readFileSync("testdata/testdata.csv", "utf-8"), 
  // lấy nội dung thô từ file CSV và phân tích (parse) nó thành cấu trúc dữ liệu mà code có thể hiểu được.
  {
    columns: true, // chỉ định rằng dòng đầu tiên của file CSV chứa tên cột
    skip_empty_lines: true // bỏ qua các dòng trống trong file CSV
  }
)

records.forEach((record) => {

  test(`Get Data from CSV for - ${record.Id}`, async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    await page.getByPlaceholder("First Name").fill(record.FirstName);
    await page.getByPlaceholder("Last Name").fill(record.LastName);

  })

})

// for (const record of records) { // có thể dùng v lặp for of thay vì forEach để duyệt qua từng bản ghi trong mảng records

//   test(`Get Data from CSV for - ${record.Id}`, async ({ page }) => {          
//     await page.goto("https://demoqa.com/automation-practice-form");
//     await page.getByPlaceholder("First Name").fill(record.FirstName);
//     await page.getByPlaceholder("Last Name").fill(record.LastName);
//   } )

// } 