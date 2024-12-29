const { test, expect } = require('@playwright/test')
import { homePage } from '../pageObject/homePage'

test.describe('QA practice website homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.qa-practice.com/')
    })

    test('title validation', async({ page }) =>{
        const home = new homePage(page)  
        await home.check_page_title();
        await home.check_heading_text();
    })
    test('Check buttons texts', async({ page }) =>{
        const home = new homePage(page)
        await home.check_btn_visiblity()
    })
})