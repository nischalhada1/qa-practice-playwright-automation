const { test } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'
import { checkboxPage } from '../pageObject/checkboxPage'

test.describe('QA practice website checkbox test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_single_checkbox_btn()
    })

    test('single checkbox', async({ page }) => {
        const check = new checkboxPage(page)
        await check.click_checkbox()
    })

    test('multiple checkbox', async({ page }) => {
        const check = new checkboxPage(page)
        await check.click_checkboxes_tab()
        await check.multiple_checkbox()
    })
})