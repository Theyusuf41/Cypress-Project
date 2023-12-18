class cartPageee {
    visit(){
        cy.visit("/")
    }
    isTitleTrue(){
        return cy.title("Automation Exercise")
    }
    clickCartLink(){
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a').click()
    }
    verifyCartPage(){
        cy.get('#empty_cart > p > b').should("be.visible")
    }
    scrollSubscription(email){
        cy.get('#susbscribe_email').type(email).type("{enter}")
    }
    isSuccesfullVisible(){
        cy.get('#success-subscribe').should('be.visible')
    }



}
export default new cartPageee();