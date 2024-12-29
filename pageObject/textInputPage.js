const { expect } = require('@playwright/test')

exports.textInputPage = class textInputPage{
    constructor(page){
        this.page = page
        this.text_input = page.locator('//input[@name="text_string"]')
        this.text_output = page.locator('//p[@id="result-text"]')
        this.heading = page.locator('//h1')
    }

    async valid_data_check(){
        await this.text_input.fill('QApractice');
        await this.page.keyboard.press('Enter');
        await expect(this.text_output).toHaveText('QApractice')
    }

}