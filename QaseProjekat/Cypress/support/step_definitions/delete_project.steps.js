const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const LoginPage = require('../pages/loginPage');
const ProjectPage = require('../pages/projectPage');

Given('I have created a project', () => {
  LoginPage.visit();
  LoginPage.fillEmail('lenadagovic@outlook.com')
           .fillPassword('Testiranje!2024')
           .submit();
  ProjectPage.createProject('QaseProjekat');
});

When('I delete the project', () => {
  ProjectPage.deleteProject('QaseProjekat');
});

Then('I should not see the project in the project list', () => {
  cy.contains('QaseProjekat').should('not.exist');
});
