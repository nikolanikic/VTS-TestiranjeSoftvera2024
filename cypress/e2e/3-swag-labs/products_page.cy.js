/// <reference types="cypress" />


describe('Swag Labs - products page scenarios', () => {
  beforeEach(() => {
    cy.viewport(1280, 768);
    cy.visit('https://www.saucedemo.com/')
  })

  it('products page is loaded correctly', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    cy.get('[data-test="title"]').contains('Products');
    cy.get('#react-burger-menu-btn').should('exist');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('.select_container').should('be.visible');
    cy.contains('Add to cart');
  })

  it('user is able to open Sauce Lab backpack page', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').contains('Products');

    cy.contains('Sauce Labs Backpack').click();
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack');
    cy.get('[data-test="back-to-products"]').should('be.visible');
  })

  it('burger menu is showing correct options', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').contains('Products');

    cy.get('#react-burger-menu-btn').click();

    cy.get('[data-test="inventory-sidebar-link"]').should('be.visible').contains('All Items');
    cy.get('#about_sidebar_link').should('be.visible').contains('About');
    cy.get('#logout_sidebar_link').should('be.visible').contains('Logout');
    cy.get('#reset_sidebar_link').should('be.visible').contains('Reset App State');
  })


})
