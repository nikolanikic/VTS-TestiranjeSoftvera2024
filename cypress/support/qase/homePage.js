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
}

export default HomePage;
