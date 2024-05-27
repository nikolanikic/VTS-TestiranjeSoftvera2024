import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/qase/loginPage";
import HomePage from "../../support/qase/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();
var projectNameDef = null;

Given("User is on Quase Login page", () => {
  cy.visit("https://app.qase.io/login");
  loginPage.verifyUserIsOnLoginPage();
})

Given("User is logged in on Quase application", () => {
  cy.visit("https://app.qase.io/login");
  loginPage.verifyUserIsOnLoginPage();
  loginPage.enterCredsAndLogin();
  homePage.checkIfTitleIsPresent();
})

When("User enters his credentials and clicks login button", () => {
  loginPage.enterCredsAndLogin();
})

When("User creates new project with following details", (dataTable) => {
  var data = dataTable.hashes();
  var projectNameT = data[0].projectName;
  var projectCodeT = data[0].projectCode;
  var projectDescriptionT = data[0].projectDescription;

  projectNameDef = projectNameT;

  homePage.createNewProject(projectNameT, projectCodeT, projectDescriptionT);
})

Then("User shoud see Quase home page", () => {
  homePage.checkIfTitleIsPresent();
})

Then("User should be able to see new project on home page", () => {
  homePage.verifyNewProjectIsCreated(projectNameDef);
})

Then("User is able to delete created project", () => {
  homePage.projectOptionsDropdown().click();
  homePage.deleteOptionInDropdown().click();
  homePage.deleteModal().should('be.visible')
  homePage.deleteModal().contains(projectNameDef)
  homePage.confirmProjectDeleteButton().click();
})

And("User returns to Home Page", () => {
  homePage.returnToHomePage();
})

And("User does not see the project in the table", () => {
  cy.get('tbody tr').should('have.length', 1);
})
