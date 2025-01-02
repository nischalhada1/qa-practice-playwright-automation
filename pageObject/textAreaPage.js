const { expect } = require('@playwright/test')

exports.textAreaPage = class textAreaPage{
    constructor(page){
        this.page = page
        this.text_area = page.locator('//textarea[@id = "id_text_area"]')
        this.submit_btn = page.locator('//input[@id = "submit-id-submit"]')
        this.text_area_output = page.locator('//p[@id = "result-text"]')
        this.multi_text_area = page.locator('//*[@id = "content"]/ul/li[2]/a')
        this.text_area2 = page.locator('//textarea[@id = "id_first_chapter"]')
        this.text_area3 = page.locator('//textarea[@id = "id_second_chapter"]')
        this.text_area4 = page.locator('//textarea[@id = "id_third_chapter"]')
        this.submit_btn2 = page.locator('//input[@id = "submit-id-submit"]')
        this.text_area_output2 = page.locator('//p[@id = "result-text"]')
    }

    async single_text_area_enter(){
        await this.text_area.fill('Hello world')
        await this.submit_btn.click()
        await expect(this.text_area_output).toHaveText('Hello world')
    }

    async multi_text_area_tab(){
        await this.multi_text_area.click()
    }

    async multi_text_area_enter(){
        await this.text_area2.fill('Hello')
        await this.text_area3.fill('world')
        await this.text_area4.fill('!!')
        await this.submit_btn.click()
        await expect(this.text_area_output).toHaveText('HelloWorld!!')
    }
    
}