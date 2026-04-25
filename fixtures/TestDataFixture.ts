import {test as baseTest, expect} from "@playwright/test";

type FixtureData = {
    logindata: any;
    testdata: any;
};

export const test = baseTest.extend<FixtureData>({
    logindata: {
        uname: "Admin",
        pass: "admin123"
    },
    testdata: {
        fname: "Test",
        mname: "Code",
        lname: "Automate",
        email: "testcodeautomate@gmail.com"
    }
});

export {expect} from "@playwright/test";