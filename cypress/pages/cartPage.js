class cartPage {

    clickCartLink() {
        return cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    }

    addProductsToCart() {
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.wait(1000)
        cy.get('.modal-footer > .btn').click()
        cy.wait(1000)
        cy.get('.features_items > :nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.wait(1000)
        cy.get('.modal-footer > .btn').click()
        cy.wait(1000)
        cy.get('.features_items > :nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.wait(1000)
        cy.get('.modal-footer > .btn').click()
        cy.wait(1000)
    }

    isCartPageDisplayed() {
        return cy.url().should('include', '/view_cart')

    }

    clickProceedToCheckout(){
       return cy.get('.col-sm-6 > .btn').click()
    }

    clickRegisterLoginButton(){
        return cy.get('.modal-body > :nth-child(2) > a > u').click()
    }

    verifyAddressDetails(){
        return cy.get(':nth-child(2) > .heading').should('be.visible')
    }

    verifyReviewYourOrder(){
        return cy.get(':nth-child(4) > .heading').should('be.visible')
    }




}
export default new cartPage();