import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/qase/loginPage";

const loginPage = new LoginPage();

Given("User is on Quase Login page", () => {
    cy.visit("https://app.qase.io/login");
    loginPage.verifyUserIsOnLoginPage();
})

When("User enters his credentials and clicks login button", () => {
  loginPage.enterCredsAndLogin();
})

Then("User shoud see Quase home page", () => {
  loginPage.checkIfTitleIsPresent();
})
