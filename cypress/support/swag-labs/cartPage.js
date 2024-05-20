class CartPage {
    getTitle(){
      return cy.get('[data-test="title"]');
    }

    getProductName(){
        return cy.get('[data-test="inventory-item-name"]');
    }

    verifyCartPageIsLoaded(){
        this.getTitle().contains('Your Cart');
    }

    verifyProductIsAddedToCart(productName){
        this.getProductName().contains(productName);
    }
  }
  
  export default CartPage