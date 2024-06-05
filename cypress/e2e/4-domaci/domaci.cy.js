/// <reference types="cypress" />
import LoginPage from "../../support/swag-labs/loginPage";
import HomePage from "../../support/swag-labs/homePage";
import Inventory from "../../support/swag-labs/inventoryPage";
import Backpack from "../../support/swag-labs/backpackPage";
import Cart from "../../support/swag-labs/shoppingCartPage";
const loginPage = new LoginPage();
const homePage = new HomePage();
const inventory = new Inventory();
const backpack = new Backpack();
const shoppingCart = new Cart();
const proizvod = "Sauce Labs Backpack";

describe("Swag labs - cart verification", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
    })

    it('products page is loaded correctly', () => {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        cy.contains('Add to cart');

    })

    it("User is able to open Sauce Labs Backpack page", () => {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        inventory.checkBackpack(proizvod);
        inventory.clickBackpack();
        backpack.verifyBackpackPage(proizvod);

    })

    it("User is able to add backpack to their cart", ()=> {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        inventory.checkBackpack(proizvod);
        inventory.clickBackpack();
        backpack.verifyBackpackPage(proizvod);
        backpack.getAddButton().click();
        backpack.verifyCartToken();
    })

    it("User is able to locate the backpack in their card", ()=>{
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        inventory.checkBackpack(proizvod);
        inventory.clickBackpack();
        backpack.verifyBackpackPage(proizvod);
        backpack.getAddButton().click();
        backpack.verifyCartToken();
        shoppingCart.verifyCartPage(proizvod);

    })

})