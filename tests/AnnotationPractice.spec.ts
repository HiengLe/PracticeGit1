import { test} from '@playwright/test';

// test.fixme() các cách hđ giống skip
test.skip(({browserName})=>browserName==='chromium');// đặt skip ngoài này để skip all các test thuộc chromium
//test.fixme(({browserName})=>browserName==='chromium');
//test.slow(({browserName})=>browserName==='chromium');
//test.fail(({browserName})=>browserName==='chromium');


test.describe("Practice of Descript", async () => {
   // test.skip(); có thể đặt skip trong này để bỏ qua cụm này
    test("Practice Test 1", async ({ page }) => {
    console.log("Starting Practice Test 1");
    console.log("Ending Practice Test 1");
})

test("Practice Test 2", async ({ page }) => {
    console.log("Starting Practice Test 2");
    console.log("Ending Practice Test 2");
})

test("Practice Test 3", async ({ page }) => {
    console.log("Starting Practice Test 3");
    console.log("Ending Practice Test 3");
})
})
test("Practice Test 4", async ({ page }) => {
    test.setTimeout(50000); // set time
    test.fail(); // đánh dấu mong đợi là fail
    console.log("Starting Practice Test 4");
    console.log("Ending Practice Test 4");
})

test("Practice Test 5", async ({ page,browserName}) => { // thêm ddkien browerName
    test.skip(browserName==="chromium"); // set bằng với trên trình duyệt cần skip
    //test.skip(browserName==="chromium"); set time cậm gấp 3 lần cho trình duyeejt chromium
    //test.fail(browserName==="chromium");
    console.log("Starting Practice Test 5");
    console.log("Ending Practice Test 5");
})

test("Practice Test 6", async ({ page }) => {
    test.slow(); // đợi gấp 3 lần time đã set ở timeout
    console.log("Starting Practice Test 6");
    console.log("Ending Practice Test 6");
})