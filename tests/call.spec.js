// @ts-check
const { test, expect } = require('@playwright/test')

test('Call nischal 2', async ({ page }) => {
    await page.goto('https://qa-dialaxy.postraven.com/login');
    await page.getByPlaceholder('Enter your email address').fill('nischal93@yopmail.com');
    await page.getByPlaceholder('Enter your password').fill('H@ppy123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dialer' }).click();
    await page.getByRole('link', { name: 'Calls' }).click();
    await page.getByRole('link', { name: 'Contacts' }).click();
    await page.getByRole('button').first().click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('nischal 1');
    await page.getByText('Nischal 2').click();
    await page.getByRole('listitem', { name: 'Call' }).getByRole('button').click();
    await page.locator('#dialerContainer').getByRole('button').nth(3).click();
})

test('Call nischal 1', async ({ page }) => {
    await page.goto('https://qa-dialaxy.postraven.com/login');
    await page.getByPlaceholder('Enter your email address').fill('nischal93@yopmail.com');
    await page.getByPlaceholder('Enter your password').fill('H@ppy123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dialer' }).click();
    await page.getByRole('link', { name: 'Calls' }).click();
    await page.getByRole('link', { name: 'Contacts' }).click();
    await page.getByRole('button').first().click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('nischal 1');
    await page.getByText('Nischal 2').click();
    await page.getByRole('listitem', { name: 'Call' }).getByRole('button').click();
    await page.locator('#dialerContainer').getByRole('button').nth(3).click();
})