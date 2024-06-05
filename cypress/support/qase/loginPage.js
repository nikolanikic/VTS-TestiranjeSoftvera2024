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
      this.emailField().type(Cypress.env('qase_email'))
      this.passwordField().type(Cypress.env('qase_password'))
      this.loginButton().click()
    }
  }
  
  export default LoginPage;