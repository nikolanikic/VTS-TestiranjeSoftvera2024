class HomePage {

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

  returnToHomePage(){
    this.logoButton().click();
  }

  verifyNewProjectIsCreated(){
    cy.contains('OurNewProject');
  }

  dashboardTitle() {
    return cy.get('h1.uA6zAY')
  }

  checkIfTitleIsPresent() {
    this.dashboardTitle().should('be.visible')
    this.dashboardTitle().contains('Projects')
  }

  projectDropdown() {
    return cy.get('tbody tr:nth-child(2) button.G1dmaA')
  }
  projectDropdownRemoveOption() {
    return cy.get('button.EehRY_.Wy99v3.fwhtHZ')
  }
  modalDeleteProjectButton() {
    return cy.get('.X8bxUI')
  }

  deleteProject(){
    this.projectDropdown().click();
    this.projectDropdownRemoveOption().click();
    this.modalDeleteProjectButton().click();
  }

  checkProjectIsDeleted(){
    cy.contains('OurNewProject').should('not.exist');
  }


}

export default HomePage;
