import { test, expect } from '@playwright/test';
import apiJson from '../testdata/apidata.json';

test('Pass Request Body from JSON for Post Call', async ({ request }) => {

    const resqPost = await request.post('/booking', {
        data: {
            "firstname": "John",    
            "lastname": "Doe",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2024-01-01",
                "checkout": "2024-01-10"    
            },
            "additionalneeds": "Breakfast"
        }
    });
    const resPost = await resqPost.json();
    expect(resPost.booking).toMatchObject({
        "firstname": "John",
        "lastname": "Doe",
        "totalprice": 150,      
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-01-01",
            "checkout": "2024-01-10"
        },
        "additionalneeds": "Breakfast"
    });
    expect(resPost.booking.additionalneeds).toBe("Breakfast");
});

// sử dụng dữ liệu từ file JSON để gửi trong body của request POST
test('Pass Request Body from JSON for Post Call 2', async ({ request }) => {

    const resqPost2 = await request.post('/booking', {
        data:apiJson.postcalldata
    });
    const resPost = await resqPost2.json();
    expect(resPost.booking).toMatchObject(apiJson.postcalldata);
    expect(resPost.booking.additionalneeds).toEqual(apiJson.postcalldata.additionalneeds);
});


test('Pass Request Body from JSON for Put Call', async ({ request }) => {
  const resPut = await request.put('/booking/1', {
      data: {
          "firstname": "Jane", 
          "lastname": "Smith",
          "totalprice": 200,
          "depositpaid": false,
          "bookingdates": {
             "checkin": "2024-02-01",    
             "checkout": "2024-02-10"
            },
          "additionalneeds": "Lunch"
      }         
    });
    const resPutJson = await resPut.json();
    expect(resPutJson).toMatchObject({
        "firstname": "Jane",    
        "lastname": "Smith",
        "totalprice": 200,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2024-02-01",
            "checkout": "2024-02-10"
        },
        "additionalneeds": "Lunch"
    });
    expect(resPutJson.firstname).toEqual("Jane");
    
}); 

// sử dụng dữ liệu từ file JSON để gửi trong body của request PUT
test('Pass Request Body from JSON for Put Call 2', async ({ request }) => {

    const resqPut2 = await request.put('/booking/1', {
        data:apiJson.putcalldata
    });
    const resPut = await resqPut2.json();
    expect(resPut.booking).toMatchObject(apiJson.putcalldata);
    expect(resPut.booking.firstname).toEqual(apiJson.putcalldata.firstname);
});