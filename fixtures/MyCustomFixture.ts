import {test as baseTest} from "@playwright/test";

type MyFixtures = {
    fixture1: string; // có thể dùng any nếu không muốn định nghĩa kiểu dữ liệu
}

type MyWorkerFixtures = {
    workerFixture1: string; // có thể dùng any nếu không muốn định nghĩa kiểu dữ liệu
}

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
    fixture1: async({}, use)=>{
        const fixture1 = "I am Fixture 1 ";
        console.log("Before part of Fixture 1");
        await use(fixture1); // Bài test sẽ chạy tại đây
        console.log("After part of Fixture 1");
    },

    workerFixture1: [async({}, use)=>{
        const workerFixture1 = "I am Worker Fixture 1 ";
        console.log("Before part of Worker Fixture 1");
        await use(workerFixture1); // Bài test sẽ chạy tại đây
        console.log("After part of Worker Fixture 1");
    }, {scope : 'worker'}]
})