import {test,expect} from "@playwright/test";

test (" Practice of diffrent click", async ({page})=>{
    // await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    // await page.getByRole('button', { name: 'Add Element' }).dblclick();

     await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
     await page.getByText('right click me', { exact: true }).click({button:'right'});

    await page.goto("https://staging.engineer.ai/home");
    await page.getByRole('button', { name: 'Choose a base' }).click();
    await page.getByText('Actually I\'ll browse the').click();
    await page.waitForTimeout(3000); // Đợi 3 giây
    
    // Sử dụng dispatchEvent để kích hoạt sự kiện click
    await page.getByRole('button', { name: 'o Custom Template' }).dispatchEvent('click');
});


