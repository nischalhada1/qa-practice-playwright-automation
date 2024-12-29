const { test } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'
import { textInputPage } from '../pageObject/textInputPage'

test.describe('QA practice website homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')

    })

    test('text input valid data check', async({ page}) => {
        const inputPage = new textInputPage(page)
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
        await inputPage.valid_data_check()
    })
})