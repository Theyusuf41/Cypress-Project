import productPage from "../../../pages/productPage";

describe('Add Products in Cart', () => {
    it('test01', () => {
     productPage.visit()
     productPage.clickProductLink()
     productPage.hoverFirstCard()
     cy.clock()
     cy.tick(2000)
     productPage.hoverSecondCard()


    })
})