import {test,expect} from '@playwright/test';

test('API Testing Post Practice', async ({request}) => {

    const response = await request.post('/booking', {
        data: {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
        }
    })
    const responseBody = await response.json();
    console.log(responseBody);
    // expect(response.status()).toBe(200);
    // expect(response.statusText()).toBe('OK');
    // expect(response.ok()).toBeTruthy();
    expect(responseBody).toMatchObject(
     {      
        booking: {  
            firstname: 'Jim',
            lastname: 'Brown',
            totalprice: 111,    
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Breakfast'
        }
     })
     // so sánh từng trường cụ thể trong response body
    //  expect(responseBody.booking.additionalneeds).toEqual('Breakfast');
})

// test("API with UI Verification", async ({ request, page }) => {
//   const resp2 = await request.post("https://api.demoblaze.com/addtocart", {
//     data: {
//       "id": "90f00e36-3cef-298d-a2bc-4405c36146fc",
//       "cookie": "user=7118f28c-60b6-0ff0-7ae7-18766ed162f6",
//       "prod_id": 3,
//       "flag": false
//     }
//   })
  
//   expect(resp2.status()).toBe(200);
// });