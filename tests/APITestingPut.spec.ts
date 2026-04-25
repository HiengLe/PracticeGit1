import {test,expect} from '@playwright/test';

test('API Testing Put Practice', async ({request}) => {

    const resPut = await request.put('/booking/1', {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Pan Cakes"
        }
    });

    // const resPutBody = await resPut.json();
    // // expect(resPut.status()).toBe(200);
    // // expect(resPut.statusText()).toBe('OK');
    // // expect(resPut.ok()).toBeTruthy();
    // expect(resPutBody).toMatchObject(
    //     {
    //         booking: {
    //             firstname: 'Jim',
    //             lastname: 'Brown',
    //             totalprice: 111,
    //             depositpaid: true,
    //             bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    //             additionalneeds: 'Pan Cakes'
    //         }
    //     }
    // );
    // expect(resPutBody.booking.additionalneeds).toEqual('Pan Cakes');

    const resGet = await request.get('/booking/1');
    console.log(await resGet.json());
    expect(await resGet.json()).toMatchObject(
        {
            firstname: 'Jim',
            lastname: 'Brown',
            totalprice: 111,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Pan Cakes'
        }
    );
});