class HomePage {
  dashboardTitle() {
    return cy.get('h1.uA6zAY')
  }

  checkIfTitleIsPresent() {
    this.dashboardTitle().should('be.visible')
    this.dashboardTitle().contains('Projects')
  }

  createNewProjectButton() {
    return cy.get('#createButton');
  }
  newProjectNameInput() {
    return cy.get('#project-name');
  }
  newProjectCodeInput() {
    return cy.get('#project-code');
  }
  newProjectDescInput() {
    return cy.get('#description-area');
  }
  createNewProjectFormButton(){
    return cy.get('.pfDFL9 > .ecSEF_');
  }
  logoButton(){
    return cy.get('.mYdffk');
  }

  createNewProject() {
    this.createNewProjectButton().click();
    this.newProjectNameInput().type('OurNewProject');
    this.newProjectCodeInput().clear().type('NPC001');
    this.newProjectDescInput().type('This is test project');
    this.createNewProjectFormButton().click();
  }

  projectOptionsDropdown() {
    return cy.get('tbody tr:nth-child(2) button.G1dmaA')
  }
  deleteOptionInDropdown() {
    return cy.get('button.EehRY_.Wy99v3.fwhtHZ')
  }
  deleteModal() {
    return cy.get('.ReactModal__Overlay')
  }
  confirmProjectDeleteButton() {
    return cy.get('.X8bxUI')
  }

  deleteProject() {
    this.projectOptionsDropdown().click();
    this.deleteOptionInDropdown().click();
    this.deleteModal().should('be.visible')
    this.deleteModal().contains('OurNewProject')
    this.confirmProjectDeleteButton().click();
  }

  returnToHomePage(){
    this.logoButton().click();
  }

  verifyNewProjectIsCreated(){
    cy.contains('OurNewProject');
  }
}

export default HomePage;
