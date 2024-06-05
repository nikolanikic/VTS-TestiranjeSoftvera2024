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
    createNewProjectFormButton() {
      return cy.get('.pfDFL9 > .ecSEF_');
    }
    logoButton() {
      return cy.get('.mYdffk');
    }
    projectOptionsDropdown() {
      return cy.get('tbody tr:nth-child(2) button.G1dmaA')
    }
    deleteOptionInDropdown() {
      return cy.get('button.EehRY_.Wy99v3.fwhtHZ')
    }
    settingsOptionInDropdown() {
      return cy.get('a.EehRY_')
    }
    deleteModal() {
      return cy.get('.ReactModal__Overlay')
    }
    confirmProjectDeleteButton() {
      return cy.get('.X8bxUI')
    }
  
    createNewProject(projectName, projectCode, projectDescription) {
      this.createNewProjectButton().click();
      this.newProjectNameInput().type(projectName);
      this.newProjectCodeInput().clear().type(projectCode);
      this.newProjectDescInput().type(projectDescription);
      this.createNewProjectFormButton().click();
    }
  
    returnToHomePage() {
      this.logoButton().click();
    }
  
    verifyNewProjectIsCreated(projectName) {
      cy.contains(projectName);
    }
  }
  
  export default HomePage;