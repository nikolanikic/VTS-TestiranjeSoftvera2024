class PPage {

    getCartButton() {
      return cy.get('[data-test="shopping-cart-link"]')
    }

    getAddButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    

  
   
  }
  
  export default PPage