const { expect } = require('@playwright/test')

exports.checkboxPage = class checkboxPage{
    constructor(page){
        this.page = page
        this.checkbox = page.locator('//input[@id = "id_checkbox_0"]')
        this.submit_btn = page.locator('//input[@id = "submit-id-submit"]')
        this.submit_output = page.locator('//p[@id = "result-text"]')
        this.checkboxes_tab = page.locator('//*[@id="content"]/ul/li[2]/a')
        this.checkbox_1 = page.locator('//input[@id = "id_checkboxes_0"]')
        this.checkbox_3 = page.locator('//input[@id = "id_checkboxes_2"]')
        this.submit_btn_2 = page.locator('//input[@id = "submit-id-submit"]')
        this.submit_output_2 = page.locator('//p[@id = "result-text"]')

    }

    async click_checkbox(){
        await this.checkbox.check()
        await this.submit_btn.click()
        await expect(this.submit_output).toBeVisible()
        await expect(this.submit_output).toHaveText('select me or not')
    }

    async click_checkboxes_tab(){
        await this.checkboxes_tab.click()
    }

    async multiple_checkbox(){
        await this.checkbox_1.check()
        await this.checkbox_3.check()
        await this.submit_btn_2.click()
        await expect(this.submit_output_2).toBeVisible()
        await expect(this.submit_output_2).toHaveText('one, three')

    }
}