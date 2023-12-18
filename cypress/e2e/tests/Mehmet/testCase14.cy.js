import registerPage from "../../../pages/registerPage"
import cartPage from "../../../pages/cartPage"


describe('Place Order', function () {

 
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })

  it('User Story 14', function () {
  
    registerPage.visit();
    registerPage.isHomePageLoaded()
    cartPage.addProductsToCart()
    cartPage.clickCartLink()
    cartPage.isCartPageDisplayed()
    cartPage.clickProceedToCheckout()
    cartPage.clickRegisterLoginButton()
    cy.registerUser(this.data.username, this.data.email, this.data.password)
    registerPage.clickContinueButton()
    registerPage.isUsernameVisible(this.data.username)
    cartPage.clickCartLink()
    cartPage.clickProceedToCheckout()
   cartPage.verifyAddressDetails()
   cartPage.verifyReviewYourOrder()
   cy.get('.form-control').scrollIntoView()
   cy.get('.form-control').type('The product is nice')
   cy.get(':nth-child(7) > .btn').click()
   cy.typeCardInfo(2, 2025)
  
  
  })
})