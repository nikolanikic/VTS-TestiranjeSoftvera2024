class LoginPage{

    loginPageTitle(){
        return cy.get('.NsFoEI');
    }

    verifyUserIsOnLoginPage(){
        this.loginPageTitle().should('be.visible');
        this.loginPageTitle().contains('Log in to your account');
    }
}

export default LoginPage;