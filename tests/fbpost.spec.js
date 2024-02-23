// @ts-check
const { test, expect } = require('@playwright/test');

test('step 1 Login-Facebook', async ({ page }) => {
 // step 1 go to FB page and login.
  await page.goto('https://www.facebook.com/'); //  https://playwright.dev/docs/locators#quick-guide
  await page.getByTestId('royal_email').click(); // https://playwright.dev/docs/input#mouse-click
  await page.getByTestId('royal_email').fill('mail@gmail.com'); // https://playwright.dev/docs/api/class-locator#locator-fill
  await page.getByTestId('royal_pass').click(); 
  await page.getByTestId('royal_pass').fill('pass'); 
  await page.getByTestId('royal_login_button').click();
  //await page.getByRole('button', { name: 'Log in' }).click();
  
  // step 2 Post Facebook.
  await test.step('Step 2 FB Post ', async () => {
    //Note inspect แล้วไม่เจอเป็น objectid-TestId แบบด้านบน
    //await page.locator('css=button').click();  
    //await page.locator('span[style*="-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box"]').click();
    //await page.getByLabel('What\'s on your mind, Orkan?').click();   
    await page.getByRole('button', { name: 'What\'s on your mind, Orkan?' }).click(); // inspec แล้วไม่เป็น objectid 
    await page.getByLabel('What\'s on your mind, Orkan?').fill('Hello Playwright');
    await page.getByLabel('Post', { exact: true }).click();
  }); 
});