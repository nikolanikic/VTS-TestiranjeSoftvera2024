/// <reference types="cypress" />
import LoginPage from "../../support/swag-labs/loginPage";
import HomePage from "../../support/swag-labs/homePage";
const loginPage = new LoginPage();
const homePage = new HomePage();


describe('Swag Labs - products page scenarios', () => {
  beforeEach(() => {
    cy.viewport(1280, 768);
    cy.visit('https://www.saucedemo.com/')
  })

  it('products page is loaded correctly', () => {
    loginPage.login('standard_user', 'secret_sauce');
    homePage.verifyHomePageIsLoaded();
    cy.contains('Add to cart');
  })

  it('user is able to open Sauce Lab backpack page', () => {
    loginPage.login('standard_user', 'secret_sauce');
    homePage.pageTitle().contains('Products');

    cy.contains('Sauce Labs Backpack').click();
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack');
    cy.get('[data-test="back-to-products"]').should('be.visible');
  })

  it('burger menu is showing correct options', () => {
    loginPage.login('standard_user', 'secret_sauce');
    homePage.pageTitle().contains('Products');

    cy.get('#react-burger-menu-btn').click();

    homePage.verifySidebarOptions();
  })


})