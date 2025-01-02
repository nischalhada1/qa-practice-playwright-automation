const { expect } = require('@playwright/test')

exports.homePage = class homePage{
    constructor(page){
        this.page = page
        this.text_input = page.getByRole('link', { name: 'Text input' })    
        this.simple_button = page.getByRole('link', { name: 'Simple button' })
        this.single_checkbox = page.getByRole('link', { name: 'Single checkbox' })   
        this.text_area = page.getByRole('link', { name: 'Text area' })
        this.select_input = page.getByRole('link', { name: 'Select input' })
        this.heading = page.locator('//h1')
        this.side_menu_btn = page.locator('//*[@id="sidebar"]/div/ul/li[2]/a')
        this.side_menu_text_area = page.locator('//*[@id="sidebar"]/div/ul/li[2]/ul/li[6]/a')
        this.side_menu_new_tab = page.locator('//*[@id="sidebar"]/div/ul/li[2]/ul/li[5]/a')
        this.side_menu_iframe = page.locator('//*[@id="sidebar"]/div/ul/li[2]/ul/li[9]/a')
    }

    async check_page_title(){
        await expect(this.page).toHaveTitle('Home Page | QA Practice');
    }

    async check_heading_text(){
        await expect(this.heading).toHaveText('Hello!');
    }

    async click_text_input_btn(){
        await (this.text_input).click()
    }

    async click_simple_button_btn(){
        await (this.simple_button).click()
    }

    async click_single_checkbox_btn(){
        await (this.single_checkbox).click()
    }

    async click_text_area_btn(){
        await (this.text_area).click()
    }

    async click_select_input_btn(){
        await (this.select_input).click()
    }

    async check_btn_visiblity(){
        await expect(this.text_input).toBeVisible()
        await expect(this.simple_button).toBeVisible()
        await expect(this.single_checkbox).toBeVisible()
        await expect(this.select_input).toBeVisible()
        await expect(this.select_input).toBeVisible()
    }

    async click_side_menu(){
        await this.side_menu_btn.click()
    }

    async click_text_area(){
        await this.side_menu_text_area.click()
    }
    
    async click_new_tab(){
        await this.side_menu_new_tab.click()
    }
    
    async click_iframe(){
        await this.side_menu_iframe.click()
    }
}