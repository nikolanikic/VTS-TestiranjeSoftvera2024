class ShoppingCartPage {
  getItemName(){
    return cy.get('[data-test="inventory-item-name"]');
  }

  verifyProductInCart(productName){
    this.getItemName().should('have.text', productName);
  }
}

export default ShoppingCartPage
