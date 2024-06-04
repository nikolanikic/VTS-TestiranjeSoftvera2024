import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/qase/loginPage";
import ProjectPage from "../../support/qase/projectPage";

const loginPage = new LoginPage();
const projectPage = new ProjectPage();

Given("User is on Quase Login page", () => {
  cy.visit("https://app.qase.io/login");
  loginPage.verifyUserIsOnLoginPage();
})

Given("User is logged in on Quase application", () => {
  cy.visit("https://app.qase.io/login");
  loginPage.verifyUserIsOnLoginPage();
  loginPage.enterCredsAndLogin();
  projectPage.checkIfTitleIsPresent();
})

When("User enters his credentials and clicks login button", () => {
  loginPage.enterCredsAndLogin();
})

When("User creates new project", () => {
    projectPage.createNewProject();
})

Then("User shoud see Quase home page", () => {
    projectPage.checkIfTitleIsPresent();
})

Then("User should be able to see new project on home page", () => {
    projectPage.verifyNewProjectIsCreated();
})

Then("User is able to delete created project", () => {
    projectPage.projectOptionsDropdown().click();
    projectPage.deleteOptionInDropdown().click();
    projectPage.deleteModal().should('be.visible')
    projectPage.deleteModal().contains('OurNewProject')
    projectPage.confirmProjectDeleteButton().click();
})

And("User returns to Home Page", () => {
    projectPage.returnToHomePage();
})

And("User does not see the project in the table", () => {
  cy.get('tbody tr').should('have.length', 1);
})
