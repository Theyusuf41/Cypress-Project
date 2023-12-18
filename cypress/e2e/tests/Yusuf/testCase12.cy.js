import productPage from "../../../pages/productPage";

describe('Add Products in Cart', () => {
    it('test01', () => {
    //   productPage.visit()
    //   productPage.clickProductLink()
    //   productPage.hoverACard()
    //   cy.clock()
    //   productPage.clickAddCartAnchor()
    //   cy.tick(1000)
    productPage.visit()
    productPage.clickProductLink()
    cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center').invoke('show').trigger('mouseenter')
    .wait(1000)
    cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a').click({ force : true })
    })
})