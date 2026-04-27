import { Page, Locator, expect } from '@playwright/test'

export class LoginValidations {
    page: Page
    private errorMessage;

    constructor(page: Page){
        this.page = page;
        this.errorMessage = this.page.locator('[class="error-message-container error"]')
    }


    async validateErrorMessage():Promise<void>{
        await expect(this.errorMessage).toBeVisible()
    }

}