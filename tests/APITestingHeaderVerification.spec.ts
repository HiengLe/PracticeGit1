import {test, expect} from "@playwright/test"

test("Fetch and validate Response Headers", async({request})=>{
    const getResponse = await request.get("/booking/1");
    const headerValue = getResponse.headers();
    console.log(headerValue);
    expect(headerValue.server).toEqual("Heroku");
    expect(headerValue["x-powered-by"]).toEqual("Express");
    console.log("****************************************");

    const headerArray = await getResponse.headersArray();   
    console.log(headerArray);
    expect(headerArray.length).toBe(10);
    headerArray.forEach(header => {
        console.log (header.name + " : " + header.value);
    });
            
})
