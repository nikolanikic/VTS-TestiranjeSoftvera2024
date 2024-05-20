class ProjectPage{

    projectPageTitle(){
        return cy.get('.uA6zAY');
    }

    verifyUserIsOnProjectPage(){
        this.projectPageTitle().should('be.visible');
    }

 
}

export default ProjectPage;