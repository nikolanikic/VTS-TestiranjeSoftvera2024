class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    fillEmail(value) {
      cy.get('input[name="email"]').type(value);
      return this;
    }
  
    fillPassword(value) {
      cy.get('input[name="password"]').type(value);
      return this;
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  module.exports = new LoginPage();
  