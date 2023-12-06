import productPage from "../../../pages/productPage";

describe('Verify All Products and product detail page', () => {
    it('test01', () => {
        productPage.visit('/')
        productPage.isTitleTrue()
        productPage.clickProductLink()
        productPage.verifyURL()
        productPage.clickAProduct()
        productPage.isHeaderVisible()
        productPage.isPriceVisible()
        productPage.checkProductDetail()
    })
})