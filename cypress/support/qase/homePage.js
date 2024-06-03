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
  projectDropdown() {
    return cy.get('tbody tr:nth-child(2) button.G1dmaA')
  }
  deleteInDropdown() {
    return cy.get('button.EehRY_.Wy99v3.fwhtHZ')
  }
  deleteModal() {
    return cy.get('.ReactModal__Overlay')
  }
  projectDeleteButton() {
    return cy.get('.X8bxUI')
  }

  createNewProject() {
    this.createNewProjectButton().click();
    this.newProjectNameInput().type('OurNewProject');
    this.newProjectCodeInput().clear().type('NPC001');
    this.newProjectDescInput().type('This is test project');
    this.createNewProjectFormButton().click();
  }

  deleteCreatedProject() {
    this.projectDropdown().click();
    this.deleteInDropdown().click();
    this.deleteModal().should('be.visible')
    this.deleteModal().contains('OurNewProject')
    this.projectDeleteButton().click();
  }

  returnToHomePage(){
    this.logoButton().click();
  }

  verifyNewProjectIsCreated(){
    cy.contains('OurNewProject');
  }
}

export default HomePage;
