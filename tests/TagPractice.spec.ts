import {test} from '@playwright/test';

test.describe('Describe Block 1',{tag:"@sanity"},() => {
    test("Practice Test 1 @UI", async ({}) => {
        console.log("This is Practice Test 1");
    });

    test("Practice Test 2 @API @Smoke", async ({}) => {
        console.log("This is Practice Test 2");
    });
    test("Practice Test 3 @UI", async ({}) => {
        console.log("This is Practice Test 3");
    });
});
    test("Practice Test 4",{tag:["@API", "@Smoke"]}, async ({}) => {
        console.log("This is Practice Test 4");
    });
    test("Practice Test 5", async ({}) => {
        console.log("This is Practice Test 5");
    }); 
    test("Practice Test 6", async ({}) => {
        console.log("This is Practice Test 6");
    });
