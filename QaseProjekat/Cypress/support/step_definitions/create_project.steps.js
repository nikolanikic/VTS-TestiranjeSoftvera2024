const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const LoginPage = require('../pages/loginPage');
const ProjectPage = require('../pages/projectPage');

Given('I am logged in', () => {
  LoginPage.visit();
  LoginPage.fillEmail('lenadagovic@outlook.com')
           .fillPassword('Testiranje!2024')
           .submit();
});

When('I create a new project', () => {
  ProjectPage.createProject('QaseProjekat');
});

Then('I should see the project in the project list', () => {
  cy.contains('QaseProjekat').should('be.visible');
});
