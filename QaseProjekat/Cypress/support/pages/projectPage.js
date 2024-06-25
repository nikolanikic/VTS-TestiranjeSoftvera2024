class ProjectPage {
  createProject(projectName) {
    cy.get('#createButton').click(); 
    cy.get('#project-name').type(projectName);
    cy.get('button[type="submit"]').click();
  }

  deleteProject(projectName) {
    cy.get('.LtAczx').eq(0).click();
    cy.get('.fa-ellipsis').eq(0).click();
    cy.contains('Remove').click();
    cy.get('.G1dmaA.X8bxUI.IAcAWv.m8z14Q', { force: true }).click();
  }
}

module.exports = new ProjectPage();
