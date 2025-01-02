const { test, expect } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'

test.describe('QA practice website new tab test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_side_menu()
        await homepage.click_new_tab()
    })

    test('click new tab link', async({ page }) => {
        // const textArea = new textAreaPage(page)
        // await textArea.single_text_area_enter()
        const pagePromise = page.waitForEvent('popup');
        await page.locator('//*[@id="new-page-link"]').click();
        const newPage = await pagePromise;
        // Interact with the new page normally.
        await expect(newPage.locator('//p[@id = "result-text"]')).toHaveText('I am a new page in a new tab')

    })

})