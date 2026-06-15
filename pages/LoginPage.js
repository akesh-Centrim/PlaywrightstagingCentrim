class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameTextbox = page.locator('#identity');

        this.nextButton =
            page.getByRole('link', { name: 'Next' });

        this.passwordTextbox = page.locator('#password');

        this.loginButton =
            page.getByRole('button', { name: 'Log In' });
       this.invalidUsernameError =
             page.getByText('Please enter valid username');
        this.invalidPasswordError =
            page.getByText('Invalid Credentials');
        this.blankUsernameError =
            page.getByText('Email or username cannot be empty');
        this.blankPasswordError =
            page.getByText('Please enter valid password.');
        this.showHidePasswordIcon =
            page.locator('.toggle-password');
       this.forgotPasswordLink =
            page.getByRole('link', { name: 'Forgot your Password' });
        this.resetButton =
            page.getByRole('button', { name: 'Reset' });
        this.resetSuccessMessage =
            page.getByText('An email has been sent to your registered email.');
         this.backToLoginLink =
            page.getByRole('link',{ name: 'Back to login' }
    );
    }

    async login(username, password) {

        await this.usernameTextbox.fill(username);

        await this.nextButton.click();

        await this.passwordTextbox.waitFor();

        await this.passwordTextbox.fill(password);

        await this.loginButton.click();
    } 
   async enterUsername(username) {
    await this.usernameTextbox.fill(username);
}

async clickNext() {
    await this.nextButton.click();
}

async enterPassword(password) {
    await this.passwordTextbox.waitFor();
    await this.passwordTextbox.fill(password);
}

async clickLogin() {
    await this.loginButton.click();
}
async verifyInvalidUsernameError() {

    await this.invalidUsernameError.waitFor();
}
async verifyInvalidPasswordError() {

    await this.invalidPasswordError.waitFor();
}
async verifyBlankUsernameError() {

    await this.blankUsernameError.waitFor();
}
async verifyBlankPasswordError() {

    //await this.blankPasswordError.waitFor();
}
async clickShowHidePassword() {

    await this.showHidePasswordIcon.click();
}
async clickForgotPassword() {

    await this.forgotPasswordLink.click();
}
async clickReset() {

    await this.resetButton.click();
}
async clickBackToLogin() {

    await this.backToLoginLink.click();
}
}

module.exports = LoginPage;