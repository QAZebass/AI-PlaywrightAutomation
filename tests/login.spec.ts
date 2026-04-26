
import { LoginPage } from '../page_object_models/login'
import { test, expect } from '@playwright/test'

test.describe('Using Skills to write Automation tests - Saucedemo', async ()=>{

    test.beforeEach('Vist Saucedemo', async ({page})=>{
        await page.goto('https://www.saucedemo.com')
        await expect(page).toHaveTitle('/saucedemo/')
    })

    test('Login Saucedemo', async({page})=>{
        const login = new LoginPage(page)
        await login.logIn('standard_user', 'secret_sauce')
        await login.clickOnLogInButton()
    })
})