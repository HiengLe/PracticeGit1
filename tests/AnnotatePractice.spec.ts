import {test, expect} from '@playwright/test';

test("Annotate Practice Test 1",{
   annotation: {
    type: "Jira Story",
    description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
    } 
}, async ({page}) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
});
test.skip("Annotate Practice Test 2",{ // bỏ qua test này nhưng vẫn hiển thị chú thích
    tag:"@UI",
   annotation: [{
    type: "Jira Story",
    description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
    },
    {
    type: "Test Case",
    description: "This is a test case for annotating tests in Playwright"
    }]
}, async ({page}) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
});

test.describe('Describe Block 1',{
   annotation: {
    type: "Jira Story",
    description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
    } 
}, async () => {
    test("Practice Test 1", async ({}) => {
        console.log("This is Practice Test 1");
    });

    test("Practice Test 2", async ({}) => {
        console.log("This is Practice Test 2");
    });
    test("Practice Test 3", async ({}) => {
        console.log("This is Practice Test 3");
    });
});