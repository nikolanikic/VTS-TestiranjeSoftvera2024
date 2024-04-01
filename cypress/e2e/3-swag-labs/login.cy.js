/// <reference types="cypress" />


describe('Swag Labs - login scenario', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('login page is loaded correctly', () => {
    cy.get('[data-test="username"]').should('exist');
    cy.get('[data-test="password"]').should('exist');
    cy.get('[data-test="login-button"]').should('exist');
  
  })

  it ('standard user is able to login', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_user');

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="title"]').contains('Products');

  })

    it ('locked out user is NOT able to login', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_user');

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('exist');
    cy.get('[data-test="error"]').contains('exist');


  })
    
})

    
  
  
