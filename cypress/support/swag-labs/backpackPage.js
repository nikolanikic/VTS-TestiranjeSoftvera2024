class Backpack{

    getImage(){
        return cy.get('[data-test="item-sauce-labs-backpack-img"]');
    }

    getAddButton(){
        return cy.get('[data-test="add-to-cart"]');
    }

    getItemName(){
        return cy.get('[data-test="inventory-item-name"]');
    }

    getItemDesc(){
        return cy.get('[data-test="inventory-item-desc"]');
    }

    getRemoveButton(){
        return cy.get('[data-test="remove"]');
    }

    getCartButton(){
        return cy.get('[data-test="shopping-cart-link"]');
    }

    getCartToken(){
        return cy.get('[data-test="shopping-cart-badge"]');
    }

    verifyBackpackPage(proizvod){
        this.getImage().should("exist");
        this.getAddButton().should("exist");
        this.getItemName().should("have.text", proizvod);
        this.getItemDesc().should("exist");
        this.getCartButton().should("exist");
    }

    verifyCartToken(){
        this.getRemoveButton().should('exist');
        this.getCartToken().should('exist');
    }
}

export default Backpack