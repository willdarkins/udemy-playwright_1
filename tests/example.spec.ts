import { test, expect } from '@playwright/test'

//Telling Playwright to open the browser and load the address in the link
test('Simple basic test', async ( {page} ) => {
    await page.goto('https://www.example.com') //First we load the site by using 'goto' method
    const pageTitle = await page.locator('h1') //Then created variable to store a page element, and pass said element as a value
    await expect(pageTitle).toContainText('Example Domain') //now we're accessing the element and calling to expect it... then use 'toContainText' method and input the expected value
})