const { test, expect } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'

test.describe('QA practice website iframe test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_side_menu()
        await homepage.click_iframe()
    })

    test('click new tab inside iframe', async({ page }) => {
        const frameLocator = page.frameLocator('//*[@id="content"]/iframe');
        await frameLocator.locator('//button[@data-bs-toggle = "collapse"]').click()
    })

})