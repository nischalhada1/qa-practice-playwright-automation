const { expect } = require('@playwright/test')

exports.buttonPage = class buttonPage{
    constructor(page){
        this.page = page
        this.simple_button_tab = page.locator('//*[@id="content"]/ul/li[1]')
        this.click_btn = page.locator('//input[@id = "submit-id-submit"]')
        this.click_btn_output = page.locator('//p[@id = "result-text"]')
        this.look_like_btn_tab = page.locator('//*[@id ="content"]/ul/li[2]')
        this.click_btn_2 = page.locator('//*[@id="button-form"]/a')
        this.click_btn_2_output = page.locator('//p[@id = "result-text"]')

    }

    async click_click_btn(){
        await this.click_btn.click()
        await expect(this.click_btn_output).toBeVisible()
    }

    async click_look_like_btn_tab(){
        await this.look_like_btn_tab.click()
    }

    async click_look_like_btn(){
        await this.click_btn_2.click()
        await expect(this.click_btn_2_output).toBeVisible()
    }
}