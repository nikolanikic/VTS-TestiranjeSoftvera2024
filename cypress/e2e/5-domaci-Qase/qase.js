import { And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/qase/loginPage";
import ProjectPage from "../../support/qase/projectPage";

const loginPage = new LoginPage();
const projectPage = new ProjectPage();

Given("User is on Qase Login page", () => {
    cy.visit("https://app.qase.io/login");
    loginPage.verifyUserIsOnLoginPage();
})
When("When User enters his credentials and clicks login button", () => {
    loginPage.login('milenatrifunovic20@gmail.com', 'testiranjeSoftvera12.3');
})

Then("User shoud see Qase Project page", () => {
    projectPage.verifyUserIsOnProjectPage();
});