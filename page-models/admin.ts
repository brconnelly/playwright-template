//accounts.page.ts
import test, { expect, Locator, Page } from '@playwright/test';
export class reportsPage {
    readonly url = process.env.DEV_URL;
    readonly settingsURL = './settings';
    readonly page: Page;
    readonly tabManageAccounts: Locator;
    readonly headerManageAccounts: Locator

    constructor(page: Page) {
        this.page = page;
        this.tabManageAccounts = page.locator('//span[contains(text(),"Manage Accounts")]');
        this.headerManageAccounts = page.locator('//h3[contains(text(),"Manage Accounts")]');
    }

    async goto() {
        await this.page.goto('');
    }
}
module.exports = { reportsPage }