class LoginPage{

    loginPageTitle(){
        return cy.get('.NsFoEI');
    }

    usernameField() {
        return cy.get('.wBsjbV').eq(0);
    }
    passwordField() {
        return cy.get('.wBsjbV').eq(1);
    }

    loginButton() {
        return cy.get('.bwx7sg ._0CVzo .Ipyboe');
    }


    verifyUserIsOnLoginPage(){
        this.loginPageTitle().should('be.visible');
        this.loginPageTitle().contains('Log in to your account');
    }

    login(email, password) {
        this.usernameField().type(email);
        this.passwordField().type(password);
        this.loginButton().click();

    }
 
}

export default LoginPage;