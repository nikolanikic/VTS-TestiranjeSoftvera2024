class LoginPage {
    loginPageTitle() {
      return cy.get('.NsFoEI');
    }
  
    verifyUserIsOnLoginPage() {
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
      const email = Cypress.env('qase_email');
      const password = Cypress.env('qase_password');
  
      // Debugging statements
      console.log('Email:', email);
      console.log('Password:', password);
  
      if (!email || !password) {
        throw new Error('Email or password is not set in Cypress environment variables');
      }
  
      this.emailField().type(email);
      this.passwordField().type(password);
      this.loginButton().click();
    }
  }
  
  export default LoginPage;
  