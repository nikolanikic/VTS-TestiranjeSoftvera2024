/// <reference types="cypress" />

describe("Swag Labs - products page scenarios", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("products page is loaded correctly", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_user");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="title"]').contains("Products");
    cy.get("#react-burger-menu-btn").should("exist");
    cy.get("#react-burger-menu-btn").should("exist");
  });
});
