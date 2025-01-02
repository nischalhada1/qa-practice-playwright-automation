const { test } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'
import { textAreaPage } from '../pageObject/textAreaPage'

test.describe('QA practice website text area test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_side_menu()
        await homepage.click_text_area()
    })

    test('single text area', async({ page }) => {
        const textArea = new textAreaPage(page)
        await textArea.single_text_area_enter()
    })

    test('multiple text area', async({ page }) => {
        const textArea = new textAreaPage(page)
        await textArea.multi_text_area_tab()
        await textArea.multi_text_area_enter()
    })
})