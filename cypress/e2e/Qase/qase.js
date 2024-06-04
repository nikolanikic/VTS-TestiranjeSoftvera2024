import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/qase/loginPage";
import ProjectPage from "../../support/qase/projectPage";
import { use } from "chai";


const loginPage = new LoginPage();
const projectPage = new ProjectPage();
const username = Cypress.env("qase_email");
const password = Cypress.env("qase_password");

Given("User is on Qase Login page", () => {
    cy.visit("https://app.qase.io/login");
    loginPage.verifyUserIsOnLoginPage();


    When("User enters his credentials and clicks login button", () => {
      loginPage.login(username, password);
    })

    Then("User should see Qase home page", ()=> {
        cy.get('.mYdffk').should("exist");
        cy.get('.sFz8ki > :nth-child(2)').should("exist");
        cy.get('[href="/workspace"]').should("exist");
        cy.get('[href="/report/dashboards"]').should("exist");
        cy.get('[href="/report/queries-list"]').should("exist");
        cy.get('[data-feature="true"]').should("exist");
    })

})

Given("User is logged in on Qase application", () => {
    cy.visit("https://app.qase.io/login");
    loginPage.verifyUserIsOnLoginPage();
    loginPage.login(username, password);
    projectPage.checkIfTitleIsPresent();


    When("User creates new project", () => {
      projectPage.createNewProject();
      })
      
      Then("User should see Qase home page", () => {
        projectPage.checkIfTitleIsPresent();
      })
      
      Then("User should be able to see new project on home page", () => {
        projectPage.verifyNewProjectIsCreated();
      })
      
      Then("User is able to delete created project", () => {
        projectPage.projectOptionsDropdown().click();
        projectPage.deleteOptionInDropdown().click();
        projectPage.deleteModal().should('be.visible')
        projectPage.deleteModal().contains('Project_021')
        projectPage.confirmProjectDeleteButton().click();
      })
      
      And("User returns to Home Page", () => {
        projectPage.returnToHomePage();
      })
      
      And("User does not see the project in the table", () => {
        cy.get('tbody tr').should('have.length', 1);
      })


  })