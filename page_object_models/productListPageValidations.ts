import { Page, Locator, expect } from '@playwright/test'

export class LoginValidations {
    page: Page
    private productListPageTitle;

    constructor(page: Page){
        this.page = page;
        this.productListPageTitle = this.page.locator('.title')
    }


    async validateSuccessfulLogin(){
        await expect(this.productListPageTitle).toBeVisible({ timeout: 15000 })
    }

}