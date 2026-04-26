import { test, expect } from '@playwright/test'
import { LoginPage } from '../page_object_models/login'

test.describe('Login E2E Tests', () => {
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        loginPage = new LoginPage(page)
    })

    test('Should login successfully with valid credentials', async ({ page }) => {
        const validUsername = 'standard_user'
        const validPassword = 'secret_sauce'

        await loginPage.logIn(validUsername, validPassword)
        await loginPage.clickOnLogInButton()

        expect(page.url()).toContain('/inventory')
        await expect(page.getByText('Products')).toBeVisible()
    })

    test('Should fail to login with invalid credentials', async ({ page }) => {
        const invalidUsername = 'invalid_user'
        const invalidPassword = 'wrong_password'

        await loginPage.logIn(invalidUsername, invalidPassword)
        await loginPage.clickOnLogInButton()

        await expect(page.getByTestId('error')).toBeVisible()
        await expect(page.getByTestId('error')).toContainText('Username and password do not match any user in this service')
    })
})
