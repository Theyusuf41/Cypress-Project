import registerPage from "../../../pages/registerPage"
import contactPage from "../../../pages/contactPage"
import productPage from "../../../pages/productPage";

describe('Logout User', function () {

 

  it('Logout', function () {

    
    registerPage.visit();
    registerPage.isHomePageLoaded()
    productPage.clickProductLink()
    productPage.verifyURL()
    productPage.enterProductname('Polo')
    productPage.clickSearchButton()
    productPage.isSearchedProductsAvailable()
    cy.screenshot('searchedProducts.png');
    
    

  })
})