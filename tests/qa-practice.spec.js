const { test, expect } = require('@playwright/test');


test.describe('QA practice website inputs practice', () => {
    test.beforeEach(async ({ page }) => {
        //await page.goto('https://www.qa-practice.com/')
        await page.goto('https://www.qa-practice.com/elements/new_tab/link')
    })
    
    test.only('QA practice homepage2', async({ page }) => {
        const popupPromise = page.waitForEvent('popup');
        await page.locator('//a[@id="new-page-link"]').click()

        const newPage = await popupPromise;

        console.log(await newPage.title());
    })


    
    test('QA practice homepage', async({ page }) => {
        await expect(page).toHaveTitle('Home Page | QA Practice');
        await expect(page.locator('//h1')).toHaveText('Hello!');
    })

    test('text input valid data check', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await expect(page.locator('//h1')).toHaveText(' Input field ');
        await page.locator('//input[@name="text_string"]').fill('QApractice');
        await page.keyboard.press('Enter');
        await expect(page.locator('//p[@id="result-text"]')).toHaveText('QApractice')
    })

    test('text input word limit check', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await page.locator('//input[@id="id_text_string"]').fill('1');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_text_string"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_text_string"]/strong')).toHaveText('Please enter 2 or more characters')
        await page.locator('//input[@id="id_text_string"]').fill('123123123123123123123123123');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_text_string"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_text_string"]/strong')).toHaveText('Please enter no more than 25 characters')
    })

    test('text input invalid characters', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await page.locator('//input[@name="text_string"]').fill('//');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_text_string"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_text_string"]/strong')).toHaveText('Enter a valid string consisting of letters, numbers, underscores or hyphens.')
    })

    test('text input valid email check', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await page.getByRole('link', { name: 'Email field' }).click()
        await page.locator('//input[@id="id_email"]').fill('a@b.com');
        await page.keyboard.press('Enter');
        await expect(page.locator('//p[@id="result-text"]')).toHaveText('a@b.com')
    })

    test('text input invalid email', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await page.getByRole('link', { name: 'Email field' }).click()
        await page.locator('//input[@id="id_email"]').fill('abc@@d.com');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_email"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_email"]/strong')).toHaveText('Enter a valid email address.')
    })

    test('text input valid password', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await page.getByRole('link', { name: 'Password field' }).click()
        await page.locator('//input[@id="id_password"]').fill('H@ppy123');
        await page.keyboard.press('Enter');
        await expect(page.locator('//p[@id="result-text"]')).toHaveText('H@ppy123')
    })

    test('text input invalid password', async({ page}) => {
        await page.getByRole('link', { name: 'Text input' }).click()
        await page.getByRole('link', { name: 'Password field' }).click()
        await page.locator('//input[@id="id_password"]').fill('H@ppy12');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toHaveText('Low password complexity')
        await page.locator('//input[@id="id_password"]').fill('');
        await page.locator('//input[@id="id_password"]').fill('Happy123');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toHaveText('Low password complexity')
        await page.locator('//input[@id="id_password"]').fill('');
        await page.locator('//input[@id="id_password"]').fill('H@PPY123');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toHaveText('Low password complexity')
        await page.locator('//input[@id="id_password"]').fill('');
        await page.locator('//input[@id="id_password"]').fill('H@ppyyyy');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toHaveText('Low password complexity')
        await page.locator('//input[@id="id_password"]').fill('');
        await page.locator('//input[@id="id_password"]').fill('@@@@@@@@');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toHaveText('Low password complexity')
        await page.locator('//input[@id="id_password"]').fill('');
        await page.locator('//input[@id="id_password"]').fill('12345678');
        await page.keyboard.press('Enter');
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toBeVisible()
        await expect(page.locator('//span[@id="error_1_id_password"]/strong')).toHaveText('Low password complexity')
    })
})

