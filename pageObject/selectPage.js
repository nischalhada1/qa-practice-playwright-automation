const { expect } = require('@playwright/test')

exports.selectPage = class selectPage{
    constructor(page){
        this.page = page
        this.lang_select = page.locator('//select[@id = "id_choose_language"]') 
        this.submit_btn = page.locator('//input[@id = "submit-id-submit"]')
        this.select_output = page.locator('//p[@id = "result-text"]')
        this.multiple_select_tab = page.locator('//*[@id="content"]/ul/li[2]/a')
        this.place_select = page.locator('//select[@id = "id_choose_the_place_you_want_to_go"]') 
        this.how_select = page.locator('//select[@id = "id_choose_how_you_want_to_get_there"]') 
        this.when_select = page.locator('//select[@id = "id_choose_when_you_want_to_go"]') 
        this.submit_btn_2 = page.locator('//input[@id = "submit-id-submit"]') 
        this.select_output_2 = page.locator('//p[@id = "result-text"]') 
    }

    async language_select(){
        await this.lang_select.selectOption('JavaScript')
        await this.submit_btn.click()
        await expect(this.select_output).toBeVisible()
        await expect(this.select_output).toHaveText('JavaScript')
    }

    async click_multiple_select_tab(){
        await this.multiple_select_tab.click()
    }

    async multiple_select(){
        await this.place_select.selectOption('Old town')
        await this.how_select.selectOption('Car')
        await this.when_select.selectOption('Tomorrow')
        await this.submit_btn_2.click()
        await expect(this.select_output_2).toBeVisible()
        await expect(this.select_output_2).toHaveText('to go by car to the old town tomorrow')

    }
}