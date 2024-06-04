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

  enterCredsAndLogin() {
    this.emailField().type(Cypress.env('predragdamjanovic16@gmail.com')) 
    this.passwordField().type(Cypress.env('Quase_sifra123'))
    this.loginButton().click()
  }
}

export default LoginPage;
