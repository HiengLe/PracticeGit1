import {test, request, APIRequestContext,expect} from '@playwright/test';

// tạo context ở beforeAll để dùng lại cho tất cả các test case
let reqContext2: APIRequestContext
test.beforeAll("Before All the Test", async () => {
  reqContext2 = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      Accept: 'application/json',
    }
  })
})

// gọi API trực tiếp
test('GET request to API Practice 1', async ({request}) => {

    const response1 = await request.get('https://restful-booker.herokuapp.com/booking',{
        headers: {
            Accept: 'application/json',

        }
    });
    console.log(await response1.json());
});

// tạo context riêng
test("API Testing Get Practice 2", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      Accept: 'application/json',
    }
  });
  
  const resp1 = await reqContext.get("/booking");
  console.log(await resp1.json());
});

// dùng lại context đã tạo ở beforeAll để gọi API 
test('GET request to API Practice 3', async () => {

    const response1 = await reqContext2.get('/booking');
    console.log(await response1.json());
});

// gọi API trực tiếp với baseURL đã được cấu hình trong playwright.config.ts
test('GET request to API Practice 4', async ({request}) => {

    const response1 = await request.get('/booking');
    console.log(await response1.json());
});

test('GET request to API Practice 5', async ({request}) => {

    const response1 = await request.get('/booking/2402');
    console.log(await response1.json());
});

// gọi API với query parameters
test('GET request to API Practice 6', async ({request}) => {

    const response1 = await request.get('/booking?firstname=John&lastname=Smith');
    console.log(await response1.json());
});

// gọi API với query parameters bằng cách sử dụng options object
test('GET request to API Practice 7', async ({request}) => {

    const response1 = await request.get('/booking', {
        params: {
            firstname: 'John',
            lastname: 'Smith'
        }
    });
    console.log(await response1.json());
});

test('GET request to API Practice 8', async ({request}) => {

    const response1 = await request.get('/booking/18');
    console.log(await response1.json());
    //expect(response1.status()).toBe(200);
    //expect(response1.ok()).toBeTruthy();
    expect(await response1.json()).toMatchObject(
     {
      firstname: 'Josh',
      lastname: 'Allen',
      totalprice: 111,
      depositpaid: true,
      bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
      additionalneeds: 'super bowls'
    });
});

test("API with UI verification", async ({ request, page }) => {
  const resp2 = await request.get("https://api.demoblaze.com/entries");
  const jsonresp2 = await resp2.json();
  console.log(jsonresp2.Items[0].title);
  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsonresp2.Items[0].title);
});