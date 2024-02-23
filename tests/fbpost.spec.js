// @ts-check
const { test, expect } = require('@playwright/test');

test('step 1 Login-Facebook', async ({ page }) => {
 // step 1 go to FB page and login.
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('hzgmonitor@gmail.com');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('521478963'); 
  await page.getByTestId('royal_login_button').click();
  
  // step 2 Post Facebook.
  await test.step('Step 2 FB Post ', async () => {
    await page.getByRole('button', { name: 'What\'s on your mind, Orkan?' }).click();
    await page.getByLabel('What\'s on your mind, Orkan?').fill('สวัสดีจ้า Playwright 55');
    await page.getByLabel('Post', { exact: true }).click()

  }); 
});