//login.page.ts
import test, { expect, Locator, Page } from '@playwright/test';
export class loginPage {
    readonly url = process.env.DEV_URL;
    readonly username: string;
    readonly password: string;
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly dashboardLocator: Locator

    constructor(page: Page) {
        this.page = page;
        // this.username = process.env.SITE_MAIN_USERNAME;
        // this.password = process.env.SITE_MAIN_USER_PASSWORD;
        this.username = '';
        this.password = '';
        this.emailField = page.locator('#email');
        this.passwordField = page.locator('input[type="password"]');
        this.loginButton = page.locator('button:has-text("Sign in")');
        this.dashboardLocator = page.locator('//h3[contains(text(),"Dashboard")]');
    }

    async goto() {
        await this.page.goto('');
    }

    async login() {
        await this.goto();
        await this.emailField.waitFor({ state: "visible" });
        await this.emailField.click();
        await this.emailField.fill(this.username);

        await this.passwordField.waitFor({ state: "visible" });
        await this.passwordField.click();
        await this.passwordField.fill(this.password);

        await this.loginButton.waitFor({ state: "visible" });
        await this.loginButton.click();

        await this.dashboardLocator.waitFor({ state: "visible" });
    }
}

module.exports = { loginPage };