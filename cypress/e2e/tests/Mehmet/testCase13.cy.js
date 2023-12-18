import registerPage from "../../../pages/registerPage"
import productQuantityPage from "../../../pages/productQuantityPage"

describe('Logout User', function () {


  it('Logout', function () {

   
    registerPage.visit();
    registerPage.isHomePageLoaded()
    productQuantityPage.clickFirstProduct()
    productQuantityPage.isProductDetailPageLoaded()
    productQuantityPage.isTitleContainDetails()
    productQuantityPage.isTitleOfProductAvailable()
    productQuantityPage.isCategoryOfProductAvailable()
    productQuantityPage.isRatingOfProductAvailable()
    productQuantityPage.isStockStatusAvailable()
    productQuantityPage.isConditionOfProductAvailable()
    productQuantityPage.isBrandOfProductAvailable()
    productQuantityPage.increaseTheQuantityTo4()
    productQuantityPage.clickAddToCartButton()
    productQuantityPage.clickViewCartButton()
    cy.wait(3000)
    productQuantityPage.isTheQuantityEqual4()
   
    
   


  })
})