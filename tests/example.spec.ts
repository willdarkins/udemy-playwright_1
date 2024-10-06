import { test, expect } from '@playwright/test'

//Telling Playwright to open the browser and load the address in the link
test('Simple basic test', async ( {page} ) => {
    await page.goto('https://www.example.com') //First we load the site by using 'goto' method
    const pageTitle = await page.locator('h1') //Then created variable to store a page element, and pass said element as a value
    await expect(pageTitle).toContainText('Example Domain') //now we're accessing the element and calling to expect it... then use 'toContainText' method and input the expected value
})

test ('Clicking on elements', async ({page})=> {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button') //clicking on sign in button 
    await page.click('text=Sign in') //clicking sign in button on next page

    const errorMessage = await page.locator('.alert-error') //since sign in values are blank by default, we're creating a variable to find the error message that will display once being clicked
    await expect (errorMessage).toContainText('Login and/or password are wrong.'); //error message is throwing and we're expecting the text passed as a value
    
})