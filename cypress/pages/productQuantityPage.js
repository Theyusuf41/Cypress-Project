class productQuantityPage {

    clickFirstProduct(){
        return cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    }

    isProductDetailPageLoaded(){
        return cy.url().should('include','/product_details')
    }

    isTitleContainDetails(){
        return cy.title().should('include','Details')
    }

    isTitleOfProductAvailable(){
        return cy.get('.product-information > h2').should('be.visible')
    }

    isCategoryOfProductAvailable(){
        return cy.get('.product-information > :nth-child(3)').should('be.visible')
    }

    isRatingOfProductAvailable(){
        return cy.get('[src="/static/images/product-details/rating.png"]').should('be.visible')
    }

    isStockStatusAvailable(){
        return cy.get(':nth-child(6) > b').should('be.visible')
    }

    isConditionOfProductAvailable(){
        return cy.get(':nth-child(7) > b').should('be.visible')
    }

    isBrandOfProductAvailable(){
        return cy.get(':nth-child(8) > b').should('be.visible')
    }

    increaseTheQuantityTo4(){
        return cy.get('#quantity').clear().type('4')
        // cy.get('#quantity').invoke('val', '5')
    }

    clickAddToCartButton(){
        return cy.get(':nth-child(5) > .btn').click()
    }

    clickViewCartButton(){
        return cy.get('u').click()
    }

    isTheQuantityEqual4(){
        cy.get('.disabled').should('have.text', 4)
    }


}
export default new productQuantityPage();