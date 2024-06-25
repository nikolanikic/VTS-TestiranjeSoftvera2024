class HomePage {

    pageTitle() {
        return cy.get('[data-test="title"]');
    }

    burgerMenuButton() {
        return cy.get('#react-burger-menu-btn');
    }
    shoppingCartButton() {
        return cy.get('[data-test="shopping-cart-link"]')
    }
    sortAndFilterButton() {
        return cy.get('.select_container');
    }

    inventorySidebarButton(){
        return cy.get('[data-test="inventory-sidebar-link"]');
    }
    aboutSidebarButton(){
        return cy.get('#about_sidebar_link');
    }
    logoutSidebarButton(){
        return cy.get('#logout_sidebar_link');
    }
    resetSidebarButton(){
        return cy.get('#reset_sidebar_link');
    }

    verifyHomePageIsLoaded(){
        this.pageTitle().contains('Products');
        this.burgerMenuButton().should('exist');
        this.shoppingCartButton().should('exist');
        this.sortAndFilterButton().should('exist');
    }

    verifySidebarOptions(){
        this.inventorySidebarButton().should('be.visible').contains('All Items');
        this.aboutSidebarButton().should('be.visible').contains('About');
        this.logoutSidebarButton().should('be.visible').contains('Logout');
        this.resetSidebarButton().should('be.visible').contains('Reset App State');
    }



}
export default HomePage;