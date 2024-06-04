class LoginPage{

  loginPageTitle(){
      return cy.get('.NsFoEI');
  }

  verifyUserIsOnLoginPage(){
      this.loginPageTitle().should('be.visible');
      this.loginPageTitle().contains('Log in to your account');
  }

  usernameField() {
      return cy.get(':nth-child(1) > .iUgi_m > .wBsjbV');
  }
  passwordField() {
      return cy.get(':nth-child(2) > .iUgi_m > .wBsjbV');
  }
  loginButton() {
      return cy.get('.Ipyboe > .CAunhU');
  }

  login(username, password) {
      this.usernameField().type(username);
      this.passwordField().type(password);
      this.loginButton().click()
  }
}

export default LoginPage;