class ProductPage {
  getItemName() {
    return cy.get('[data-test="inventory-item-name"]')
  }

  getItemDesc() {
    return cy.get('[data-test="inventory-item-desc"]')
  }

  getAddButton() {
    return cy.get('[data-test="add-to-cart"]')
  }

  getRemoveButton() {
    return cy.get('[data-test="remove"]')
  }

  getCartButton() {
    return cy.get('[data-test="shopping-cart-link"]')
  }
  getCartToken() {
    return cy.get('[data-test="shopping-cart-badge"]')
  }

  verifyProduct(title) {
    this.getItemName().should('exist')
    this.getItemDesc().should('exist')
    this.getItemName().should("have.text", title);
    this.getCartButton().should('exist');
  }

  verifyCartToken(){
    this.getRemoveButton().should('exist');
    this.getCartToken().should('exist');
  }
}

export default ProductPage
