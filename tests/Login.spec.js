const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const loginData =
    require('../test-data/loginData');

const environments =
    require('../config/environments');

test(
    'TC01 - Verify user can login with valid username and valid password',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await expect(
            page.getByRole('heading', { name: 'Dashboard' })
        ).toBeVisible();

    }
    
);
test(
    'TC02 - Verify login fails with invalid username',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.invalidUsername.username
        );

        await loginPage.clickNext();

        await loginPage.verifyInvalidUsernameError();

    }
);
test(
    'TC03 - Verify login fails with invalid password',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.invalidPassword.username
        );

        await loginPage.clickNext();

        await loginPage.enterPassword(
            loginData.invalidPassword.password
        );

        await loginPage.clickLogin();

        await loginPage.verifyInvalidPasswordError();

    }
);
test(
    'TC04 - Verify login fails with blank username',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.clickNext();

        await loginPage.verifyBlankUsernameError();

    }
);
test(
    'TC05 - Verify login fails with blank password',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.blankPassword.username
        );

        await loginPage.clickNext();

        await loginPage.clickLogin();

        await loginPage.verifyBlankPasswordError();

    }
);
test(
    'TC06 - Verify login accepts username with leading and trailing spaces',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.login(
            loginData.usernameWithSpaces.username,
            loginData.usernameWithSpaces.password
        );

        await expect(
            page.getByRole(
                'heading',
                { name: 'Dashboard' }
            )
        ).toBeVisible();

    }
);
test(
    'TC07 - Verify password is masked',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.validUser.username
        );

        await loginPage.clickNext();

        await loginPage.enterPassword(
            loginData.validUser.password
        );

        await expect(
            loginPage.passwordTextbox
        ).toHaveAttribute(
            'type',
            'password'
        );

    }
);
test(
    'TC08 - Verify show and hide password functionality',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.validUser.username
        );

        await loginPage.clickNext();

        await loginPage.enterPassword(
            loginData.validUser.password
        );

        // Show Password

        await loginPage.clickShowHidePassword();

        await expect(
            loginPage.passwordTextbox
        ).toHaveAttribute(
            'type',
            'text'
        );

        // Hide Password

        await loginPage.clickShowHidePassword();

        await expect(
            loginPage.passwordTextbox
        ).toHaveAttribute(
            'type',
            'password'
        );

    }
);
test(
    'TC09 - Verify forgot password navigation',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.validUser.username
        );

        await loginPage.clickNext();

        await loginPage.clickForgotPassword();

        await expect(page).toHaveURL(
            /password\/reset/
        );

    }
);
test(
    'TC10 - Verify reset password request submission',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.validUser.username
        );

        await loginPage.clickNext();

        await loginPage.clickForgotPassword();

        await loginPage.clickReset();

        await expect(
            loginPage.resetSuccessMessage
        ).toBeVisible();

    }
);
test(
    'TC11 - Verify user can navigate back to login page',
    async ({ page }) => {

        await page.goto(
            `${environments.staging.baseUrl}/login`
        );

        const loginPage =
            new LoginPage(page);

        await loginPage.enterUsername(
            loginData.validUser.username
        );

        await loginPage.clickNext();

        await loginPage.clickForgotPassword();

        await loginPage.clickBackToLogin();

        await expect(
            loginPage.usernameTextbox
        ).toBeVisible();

    }
);