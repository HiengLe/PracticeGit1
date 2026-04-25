import { test, expect } from "@playwright/test";

test("Practice Drag and Drop", async ({ page }) => {
 
  await page.goto('https://demoqa.com/droppable');

  // cách 1: sử dụng move, hover, down, up
//   await page.locator('#draggable').hover();
//   await page.mouse.down();
//   await page.locator('#droppable').first().hover();
//   await page.mouse.up();
//   await expect(page.locator('#droppable').first()).toHaveText("Dropped!");
 // cách 2 : dùng drapTo

 await page.locator('#draggable').dragTo( page.locator('#droppable').first(),
    {
      sourcePosition: { x: 0, y: 0 },
      targetPosition: { x: 10, y: 10 }
    }
  );

  await expect(page.locator('#droppable').first()).toHaveText("Dropped!");
});