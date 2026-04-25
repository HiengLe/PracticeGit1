import {test} from '@playwright/test';

test('Practice Upload File', async ({page}) => {    
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles("to-upload/Test1.txt");
    await page.locator('#filesToUpload').setInputFiles
    (["to-upload/Test1.txt", "to-upload/Test2.xlsx", "to-upload/Test3.docx"]);
    await page.locator('#filesToUpload').setInputFiles([]);

});
 test('Practice Upload File2 ', async ({page}) => {    
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileChosenPromise = page.waitForEvent('filechooser');
    await page.locator('#drag-drop-upload').click();
    const fileChooserResolve = await fileChosenPromise;
    await fileChooserResolve.setFiles("to-upload/Test3.docx");
    await fileChooserResolve.setFiles(["to-upload/Test1.txt", "to-upload/Test2.xlsx", "to-upload/Test3.docx"]);
    // upload nhiều file cùng lúc

});