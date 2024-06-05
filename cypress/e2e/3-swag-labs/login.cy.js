/// <reference types="cypress" />
import LoginPage from "../../support/swag-labs/loginPage";
import HomePage from "../../support/swag-labs/homePage";
const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Swag Labs - login scenarios', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('login page is loaded correctly', () => {
    loginPage.verifyLoginPageIsLoaded();
  })

  it('standard user is able to login', () => {
    loginPage.login('standard_user', 'secret_sauce');
    homePage.pageTitle().should('exist');
  })

  it('locked out user is NOT able to login', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.errorMessageIsDisplayed();
  })

  it('password is mandatory field', () => {
    loginPage.usernameField().type('standard_user');
    loginPage.loginButton().click();
    loginPage.errorMessageIsDisplayed();
    loginPage.loginErrorMessage().contains('Password is required');
  })

  it('username is mandatory field', () => {
    loginPage.passwordField().type('secret_sauce');
    loginPage.loginButton().click();
    loginPage.errorMessageIsDisplayed();
    loginPage.loginErrorMessage().contains('Username is required');
  })

  it('username and password is mandatory field', () => {
    loginPage.loginButton().click();
    cy.get('[data-test="error"]').contains('Username is required');
  })

})