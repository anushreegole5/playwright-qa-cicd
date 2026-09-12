const {test, expect} = require('@playwright/test');



test ('TC1-Playwright', async function({browser})

    {
         //create instance
         const context = await browser.newContext();
         //new page 
         const newPage = await context.newPage();
        //go to page
        await newPage.goto ("https://rahulshettyacademy.com/loginpagePractise/", {waitUntil: "load", timeout: 60000});
        console.log (await newPage.title());
        await expect(newPage).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   }
 );

