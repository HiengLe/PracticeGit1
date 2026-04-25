import { expect, test } from "@playwright/test"

let valueToken: string;
test.beforeAll("Basic Auth",async ({ request }) => {
    const resp = await request.post("/auth", {
        data: { 
            "username": "admin",
            "password": "password123"
        }
    })
    valueToken = (await resp.json()).token;
})

test ("Authentication with Cookie", async ({ request }) => {
    const resp = await request.put("booking/18", {
        headers: {  
            cookie: "token=" + valueToken
        },
        data: {     
            "firstname": "WishInfinite",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",    
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })

    expect(resp.status()).toBe(200);    
})
// test("Authentication with API Key", async ({ request }) => {
//     const resp = await request.put("booking/18", {
//         headers: {
//             Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
//         },
//         data: {
//             "firstname": "WishInfinite",
//             "lastname": "Brown",
//             "totalprice": 111,
//             "depositpaid": true,
//             "bookingdates": {
//                 "checkin": "2018-01-01",
//                 "checkout": "2019-01-01"
//             },
//             "additionalneeds": "Breakfast"
//         }
//     })

//     expect(resp.status()).toBe(200);
// })