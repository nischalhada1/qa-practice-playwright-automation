const { test } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'
import { buttonPage } from '../pageObject/buttonsPage'

test.describe('QA practice website button click test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_simple_button_btn()
    })

    test('Button click', async({ page }) => {
        const btnPage = new buttonPage(page)
        await btnPage.click_click_btn()
    })

    test('look like button click', async({ page }) => {
        const btnPage = new buttonPage(page)
        await btnPage.click_look_like_btn_tab()
        await btnPage.click_look_like_btn()
    })
})