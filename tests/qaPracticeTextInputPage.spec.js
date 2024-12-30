const { test } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'
import { textInputPage } from '../pageObject/textInputPage'

test.describe('QA practice website text input valid test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
    })

    test('text input valid data check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.valid_data_check()
    })
})

test.describe('QA practice website text input invalid tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
    })

    test('text input word limit check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.minimum_limit_check()
        await inputPage.maximum_limit_check()
    })

    test('text input word special character check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.special_char_limit_check()
    })
})

test.describe('QA practice website email input valid test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
        const inputPage = new textInputPage(page)
        await inputPage.email_tab_click()
    })

    test('email input valid data check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.valid_email_check()
    })
})

test.describe('QA practice website email input invalid test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
        const inputPage = new textInputPage(page)
        await inputPage.email_tab_click()
    })

    test('email input invalid data check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.invalid_email_check()
    })
})

test.describe('QA practice website password input valid test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
        const inputPage = new textInputPage(page)
        await inputPage.click_password_tab()
    })

    test('password input valid data check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.valid_password_check()
    })
})

test.describe('QA practice website password input invalid test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
        const homepage = new homePage(page)
        await homepage.click_text_input_btn()
        const inputPage = new textInputPage(page)
        await inputPage.click_password_tab()
    })

    test('password input minium char check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.minimum_password_check()
    })

    test('password input upper char check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.uppercase_password_check()
    })

    test('password input lower char check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.lowercase_password_check()
    })

    test('password input digits char check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.digit_password_check()
    })

    test('password input special char check', async({ page }) => {
        const inputPage = new textInputPage(page)
        await inputPage.spec_char_password_check()
    })
})