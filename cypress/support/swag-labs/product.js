class Inventory {
    constructor(title) {
      this.title = title
    }
  
    getItem() {
      return cy.get(`.inventory_item_name:contains("${this.title}")`)
    }
  
    checkItem() {
      this.getItem().should('have.text', this.title)
    }
  
    clickItem() {
      this.getItem().click()
    }
  }
  
  export default Inventory