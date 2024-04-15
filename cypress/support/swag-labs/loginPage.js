class LoginPage {

    usernameField() {
        return cy.get('[data-test="username"]');
    }
    passwordField() {
        return cy.get('[data-test="password"]');
    }
    loginButton() {
        return cy.get('[data-test="login-button"]');
    }
    loginErrorMessage() {
        return cy.get('[data-test="error"]');
    }

    verifyLoginPageIsLoaded() {
        this.usernameField().should('exist');
        this.passwordField().should('exist');
        this.loginButton().should('exist');
    }

    login(username, password) {
        this.usernameField().type(username);
        this.passwordField().type(password);
        this.loginButton().click()
    }

    errorMessageIsDisplayed() {
        this.loginErrorMessage().should('exist');
    }
}

export default LoginPage;