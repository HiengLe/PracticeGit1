import {test, expect} from "@playwright/test"

test("Delete Call For API Testing", async({request})=>{

    const respDelete = await request.delete("/booking/19");
    expect(respDelete.status()).toBe(201);
    // expect(respDelete.status()).toBe(405); // nếu API không cho phép xóa thì sẽ trả về 405 Method Not Allowed

    const respDelText = await respDelete.text();
    console.log(respDelText);
    expect(respDelText).toEqual("Created")

    const respGet = await request.get("/booking/1");
    expect(respGet.status()).toBe(404);

})