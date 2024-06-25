const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../pages/loginPage');

Given('I am on the login page', () => {
  LoginPage.visit();
  cy.get('input[name="email"]').should('be.visible'); 
});

When('I login with valid credentials', () => {
  LoginPage.fillEmail('lenadagovic@outlook.com')
           .fillPassword('Testiranje!2024')
           .submit();
});

Then('I should see the dashboard', () => {
  cy.get('#createButton').should('be.visible');
});
