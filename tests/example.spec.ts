import { test, expect } from '@playwright/test'

//Telling Playwright to open the browser and load the address in the link
test('Simple basic test', async ( {page} ) => {
    await page.goto('https://www.example.com') //First we load the site by using 'goto' method
    const pageTitle = await page.locator('h1') //Then created variable to store a page element, and pass said element as a value
    await expect(pageTitle).toContainText('Example Domain') //now we're accessing the element and calling to expect it... then use 'toContainText' method and input the expected value
})

//Telling Playwright to click on elements of the page and expect an error message with values are blank for field, clicking 'log in' button
test ('Clicking on elements', async ({page})=> {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button') //clicking on sign in button 
    await page.click('text=Sign in') //clicking sign in button on next page

    const errorMessage = await page.locator('.alert-error') //since sign in values are blank by default, we're creating a variable to find the error message that will display once being clicked
    await expect (errorMessage).toContainText('Login and/or password are wrong.'); //error message is throwing and we're expecting the text passed as a value
    
})


test ('Selectors Testing', async ({page})=> {
    //selecting based on text
    await page.click('text=some text')

    //css selectors
    await page.click('button')
    await page.click('#id')
    await page.click('.class')

    //only visible css selectors - clicking on something that is only visible on screen
    await page.click('.submit-button:visible')

    //combinations
    await page.click('#user-name . first') //clicking on an element with and ID and user name shared

    //xpath - need to ask joe for more reference on this
    await page.click('//button')
})