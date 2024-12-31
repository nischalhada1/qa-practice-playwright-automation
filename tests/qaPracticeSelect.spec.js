const { test } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'
import { selectPage } from '../pageObject/selectPage'

test.describe('QA practice website select test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_select_input_btn()
    })

    test('single select', async({ page }) => {
        const select = new selectPage(page)
        await select.language_select()
    })

    test('multiple select', async({ page }) => {
        const select = new selectPage(page)
        await select.click_multiple_select_tab()
        await select.multiple_select()
    })
})