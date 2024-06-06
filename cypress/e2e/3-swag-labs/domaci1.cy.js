import LoginPage from '../../support/swag-labs/loginPage'
import HomePage from '../../support/swag-labs/homePage'
import ProductPage from '../../support/swag-labs/productPage'
import CartPage from '../../support/swag-labs/cartPage'


const loginPage = new LoginPage
const homePage = new HomePage
const productName = "Sauce Labs Backpack"
const productPage = new ProductPage
const cartPage = new CartPage

describe('Swag Labs - Cart Verificaiton', () => {
    beforeEach(() => cy.visit('https://www.saucedemo.com'))

    it('products page is loaded correctly', () => {
        loginPage.login('standard_user', 'secret_sauce');
        homePage.verifyHomePageIsLoaded();
        cy.contains('Add to cart');
      })


    it('cart page is loaded correctly', () => {
        loginPage.login('standard_user', 'secret_sauce');
        productPage.getCartButton().click();
        cartPage.verifyCartPageIsLoaded();
      })

      it('product has been successfully added to the cart', () => {
        loginPage.login('standard_user', 'secret_sauce');
        productPage.getAddButton().click();   
        productPage.getCartButton().click();
        cartPage.verifyCartPageIsLoaded();
        cartPage.verifyProductIsAddedToCart(productName);

      })
})