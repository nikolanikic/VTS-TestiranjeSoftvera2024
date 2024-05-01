class Cart{

    getHeader(){
        return cy.get('.header_label');
    }

    getCartButton(){
        return cy.get('[data-test="shopping-cart-link"]');
    }

    getCartToken(){
        return cy.get('[data-test="shopping-cart-badge"]');
    }

    getRemoveButton(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }

    getItemName(){
        return cy.get('[data-test="inventory-item-name"]');
    }


    verifyCartPage(proizvod){
        this.getCartButton().click();
        this.getHeader().should('exist');
        this.getCartToken().invoke('text').then(text => {
            const broj = parseInt(text);
            expect(broj).to.be.at.least(1);
        });
        this.getRemoveButton().should('exist');
        this.verifyBackpackInCart(proizvod);
    }

    verifyBackpackInCart(proizvod){
        this.getItemName().should('have.text', proizvod);
    }


}


export default Cart