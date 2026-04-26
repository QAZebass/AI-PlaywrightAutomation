import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {
    page: Page
    private usernameInput;
    private passwordInput;
    private logInButton;
    private errorMessage;
    private errorMessageCloseButton;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = this.page.getByPlaceholder("Username")
        this.passwordInput = this.page.getByPlaceholder("Password")
        this.logInButton = this.page.locator('[class="submit-button btn_action"]')
        this.errorMessage = this.page.locator('[class="error-message-container error"]')
        this.errorMessageCloseButton = this.page.locator('[class="error-button"]')
    }

    async logIn(username: string, password: string):Promise<void>{
        expect(this.usernameInput).toBeVisible()
        expect(this.usernameInput).toBeEditable()
        await this.usernameInput.fill(username)
        expect(this.passwordInput).toBeVisible()
        expect(this.passwordInput).toBeEditable()
        await this.passwordInput.fill(password)
    }
    async clickOnLogInButton(){
        expect(this.logInButton).toBeVisible()
        await this.logInButton.click()
    }

    async closeErrorMessage(){
        expect(this.errorMessage).toBeVisible()
        expect(this.errorMessage).toBeEditable()
        await this.errorMessageCloseButton.click()
    }

}