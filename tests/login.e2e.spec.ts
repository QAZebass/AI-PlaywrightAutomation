import { LoginPage } from '../page_object_models/login'
import { LoginValidations } from '../page_object_models/loginValidations'
import { LoginValidations as ProductListPageValidations } from '../page_object_models/productListPageValidations'
import { test } from '@playwright/test'

test.describe('Login E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com')
    })

    test('Successful login', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.logIn('standard_user', 'secret_sauce')
        await loginPage.clickOnLogInButton()

        const productListValidations = new ProductListPageValidations(page)
        await productListValidations.validateSuccessfulLogin()
    })

    test('Failed login', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.logIn('invalid_user', 'invalid_pass')
        await loginPage.clickOnLogInButton()
        const loginValidations = new LoginValidations(page)
        await loginValidations.validateErrorMessage()
        await loginPage.closeErrorMessage()
    })
})