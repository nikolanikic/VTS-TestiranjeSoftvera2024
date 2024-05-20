class LoginPage{
  loginPageTitle(){
    return cy.get('.NsFoEI');
  }

  verifyUserIsOnLoginPage(){
    this.loginPageTitle().should('be.visible');
    this.loginPageTitle().contains('Log in to your account');
  }

  emailField() {
    return cy.get('input[name="email"]');
  }

  passwordField() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"] > span.CAunhU');
  }

  dashboardTitle() {
    return cy.get('h1.uA6zAY')
  }

  enterCredsAndLogin() {
    this.emailField().type('e21veljkostevic@gmail.com')
    this.passwordField().type('CypTest123$$')
    this.loginButton().click()
  }

  checkIfTitleIsPresent() {
    this.dashboardTitle().should('be.visible')
    this.dashboardTitle().contains('Projects')
  }
}

export default LoginPage;
