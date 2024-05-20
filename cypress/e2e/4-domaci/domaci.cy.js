/// <reference types="cypress" />
import LoginPage from '../../support/swag-labs/loginPage'
import HomePage from '../../support/swag-labs/homePage'
import Product from '../../support/swag-labs/product'
import ProductPage from '../../support/swag-labs/productPage'
import ShoppingCartPage from '../../support/swag-labs/shoppingCartPage'
const loginPage = new LoginPage
const homePage = new HomePage
const productName = "Sauce Labs Fleece Jacket"
const product = new Product(productName)
const productPage = new ProductPage
const shoppingCartPage = new ShoppingCartPage

describe('Swag Labs - Cart Verificaiton', () => {
  beforeEach(() => cy.visit('https://www.saucedemo.com'))

  it('loads products page correctly', () => {
    loginPage.login('standard_user', 'secret_sauce')
    homePage.verifyHomePageIsLoaded()
    cy.contains('Add to cart')
  })

  it('can see and open product page', () => {
    loginPage.login('standard_user', 'secret_sauce')
    homePage.verifyHomePageIsLoaded
    product.checkItem(productName)
    product.clickItem()
    productPage.verifyProduct(productName)
  })

  it('can add product to cart', () => {
    loginPage.login('standard_user', 'secret_sauce')
    homePage.verifyHomePageIsLoaded
    product.checkItem(productName)
    product.clickItem()
    productPage.verifyProduct(productName)
    productPage.getAddButton().click()
    productPage.verifyCartToken()
  })

  it('can see product in their cart after clicking add button', () => {
    loginPage.login('standard_user', 'secret_sauce')
    homePage.verifyHomePageIsLoaded
    product.checkItem(productName)
    product.clickItem()
    productPage.verifyProduct(productName)
    productPage.getAddButton().click()
    productPage.verifyCartToken()
    cy.get('[data-test="shopping-cart-link"]').click()
    shoppingCartPage.verifyProductInCart(productName)
  })
})
