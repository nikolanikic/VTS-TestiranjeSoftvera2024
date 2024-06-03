import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/qase/loginPage";

const loginPage = new LoginPage();

Given("User is on Quase Login page", () => {
    cy.visit("https://app.qase.io/login");
    loginPage.verifyUserIsOnLoginPage();
})