const { expect } = require('@playwright/test')

exports.textInputPage = class textInputPage{
    constructor(page){
        this.page = page
        this.text_input = page.locator('//input[@name="text_string"]')
        this.text_output = page.locator('//p[@id="result-text"]')
        this.heading = page.locator('//h1')
        this.error_message = page.locator('//span[@id="error_1_id_text_string"]/strong')
        this.email_tab = page.getByRole('link', { name: 'Email field' })
        this.email_input = page.locator('//input[@id="id_email"]')
        this.email_output = page.locator('//p[@id="result-text"]')
        this.error_message2 = page.locator('//span[@id="error_1_id_email"]/strong')
        this.password_tab = page.getByRole('link', { name: 'Password field' })
        this.password_input = page.locator('//input[@id="id_password"]')
        this.password_output = page.locator('//p[@id="result-text"]')
        this.error_message3 = page.locator('//span[@id="error_1_id_password"]/strong')
    }

    async valid_data_check(){
        await this.text_input.fill('QApractice');
        await this.page.keyboard.press('Enter');
        await expect(this.text_output).toHaveText('QApractice')
    }

    async minimum_limit_check(){
        await this.text_input.fill('1');
        await this.page.keyboard.press('Enter');
        await expect(this.error_message).toBeVisible()
        await expect(this.error_message).toHaveText('Please enter 2 or more characters')
    }

    async maximum_limit_check(){
        await this.text_input.fill('123123123123123123123123123');
        await this.page.keyboard.press('Enter');
        await expect(this.error_message).toBeVisible()
        await expect(this.error_message).toHaveText('Please enter no more than 25 characters')
    }

    async special_char_limit_check(){
        await this.text_input.fill('//');
        await this.page.keyboard.press('Enter');
        await expect(this.error_message).toBeVisible()
        await expect(this.error_message).toHaveText('Enter a valid string consisting of letters, numbers, underscores or hyphens.')
    }

    async email_tab_click(){
        await this.email_tab.click()
    }

    async valid_email_check(){
        await this.email_input.fill('a@b.com')
        await this.page.keyboard.press('Enter');
        await expect(this.email_output).toHaveText('a@b.com')
    }

    async invalid_email_check(){
        await this.email_input.fill('a@@b.com')
        await this.page.keyboard.press('Enter');
        await expect(this.error_message2).toBeVisible()
        await expect(this.error_message2).toHaveText('Enter a valid email address.')
    }

    async click_password_tab(){
        await this.password_tab.click()
    }

    async valid_password_check(){
        await this.password_input.fill('H@ppy123')
        await this.page.keyboard.press('Enter')
        await expect(this.password_output).toHaveText('H@ppy123')
    }

    async minimum_password_check(){
        await this.password_input.fill('H@ppy12')
        await this.page.keyboard.press('Enter')
        await expect(this.error_message3).toBeVisible()
        await expect(this.error_message3).toHaveText('Low password complexity')

    }

    async uppercase_password_check(){
        await this.password_input.fill('Happy123')
        await this.page.keyboard.press('Enter')
        await expect(this.error_message3).toBeVisible()
        await expect(this.error_message3).toHaveText('Low password complexity')
    }

    async lowercase_password_check(){
        await this.password_input.fill('H@PPY123')
        await this.page.keyboard.press('Enter')
        await expect(this.error_message3).toBeVisible()
        await expect(this.error_message3).toHaveText('Low password complexity')
    }

    async digit_password_check(){
        await this.password_input.fill('H@ppyyyy')
        await this.page.keyboard.press('Enter')
        await expect(this.error_message3).toBeVisible()
        await expect(this.error_message3).toHaveText('Low password complexity')
    }

    async spec_char_password_check(){
        await this.password_input.fill('@@@@@@@@')
        await this.page.keyboard.press('Enter')
        await expect(this.error_message3).toBeVisible()
        await expect(this.error_message3).toHaveText('Low password complexity')
    }

}