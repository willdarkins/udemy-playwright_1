import { test, expect } from '@playwright/test'

//Telling Playwright to open the browser and load the address in the link
test('Simple basic test', async ( {page} ) => {
    await page.goto('https://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})