import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import LoginPageQase from "../../support/qase/loginPageQase";
import HomePageQase from "../../support/qase/HomePageQase";
import { use } from "chai";

const loginPageQase = new LoginPageQase();
const homePage = new HomePageQase();
const username = "nikolicnemanja261@gmail.com";
const password = "Batalimevise3!"

Given("User is on Quase Login page", () => {
    cy.visit("https://app.qase.io/login");
    loginPageQase.verifyUserIsOnLoginPage();


    When("User enters his credentials and clicks login button", () => {
        loginPageQase.login(username, password);
    })

    Then("User shoud see Quase home page", ()=> {
        cy.get('.mYdffk').should("exist");
        cy.get('.sFz8ki > :nth-child(2)').should("exist");
        cy.get('[href="/workspace"]').should("exist");
        cy.get('[href="/report/dashboards"]').should("exist");
        cy.get('[href="/report/queries-list"]').should("exist");
        cy.get('[data-feature="true"]').should("exist");
    })

})

Given("User is logged in on Quase application", () => {
    cy.visit("https://app.qase.io/login");
    loginPageQase.verifyUserIsOnLoginPage();
    loginPageQase.login(username, password);
    homePage.checkIfTitleIsPresent();


    When("User creates new project", () => {
        homePage.createNewProject();
      })
      
      Then("User shoud see Quase home page", () => {
        homePage.checkIfTitleIsPresent();
      })
      
      Then("User should be able to see new project on home page", () => {
        homePage.verifyNewProjectIsCreated();
      })
      
      Then("User is able to delete created project", () => {
        homePage.projectOptionsDropdown().click();
        homePage.deleteOptionInDropdown().click();
        homePage.deleteModal().should('be.visible')
        homePage.deleteModal().contains('Terminacija')
        homePage.confirmProjectDeleteButton().click();
      })
      
      And("User returns to Home Page", () => {
        homePage.returnToHomePage();
      })
      
      And("User does not see the project in the table", () => {
        cy.get('tbody tr').should('have.length', 1);
      })


  })
  
  