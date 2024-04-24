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
const product = "Sauce Labs Backpack";

describe("Swag labs - cart verification", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
    })

    it('Loads products page correctly', () => {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        cy.contains('Add to cart');

    })

    it("User can see and open Sauce Labs Backpack page", () => {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        inventory.checkBackpack(product);
        inventory.clickBackpack();
        backpack.verifyBackpackPage(product);

    })

    it("User can add backpack to cart", ()=> {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        inventory.checkBackpack(product);
        inventory.clickBackpack();
        backpack.verifyBackpackPage(product);
        backpack.getAddButton().click();
        backpack.verifyCartToken();
    })

    it("User can see product in their cart after clicking add button", ()=>{
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        inventory.checkBackpack(product);
        inventory.clickBackpack();
        backpack.verifyBackpackPage(product);
        backpack.getAddButton().click();
        backpack.verifyCartToken();
        shoppingCart.verifyCartPage(product);

    })

})