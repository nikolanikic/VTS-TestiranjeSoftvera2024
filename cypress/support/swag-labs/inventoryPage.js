class Inventory{

    getBackpack(){
        return cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]');
    }

    checkBackpack(proizvod){
        this.getBackpack().should("have.text", proizvod);
    }

    clickBackpack(){
        this.getBackpack().click();
    }
}

export default Inventory;