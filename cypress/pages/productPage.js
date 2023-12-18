class productPage {
    visit(){
        cy.visit("/")
    }
    isTitleTrue(){
        return cy.title("Automation Exercise")
    }
    clickProductLink(){
        return cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a').click()
    }
    verifyURL(){
        return cy.url().should('include', '/products')
    }
    clickAProduct(){
        return cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.choose > ul > li > a').click()
    }
    enterProductname(name){
        return cy.get('#search_product').type(name).click()
    }

    clickSearchButton(){
        return cy.get('#submit_search').click()
    }

    isSearchedProductsAvailable(){
        return cy.get('.title').should('be.visible')
    }

//    elements = {
//        productH2 : () => cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2'),
//        price     : () => cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span')
//
//    }
    isHeaderVisible(){
        return cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2').should('be.visible')
    }
    isPriceVisible(){
        return cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span').should('be.visible')
    }

    checkProductDetail(){
        const detailP = new Array(cy.get('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p'))
        if(detailP.length==4){
            console.log('Thats allright')
        }else {
            console.log('False')
        }
    }

    /// Case 12 Elements and Functions start from here
    hoverACard(){
        cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center').trigger('mouseenter')
    }
    clickAddCartAnchor(){
        cy.get('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a').click({ force:true })
    }
}
export default new productPage();