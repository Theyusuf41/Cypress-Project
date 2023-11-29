class Register {
    visit(){
        cy.visit("/")
    }
    isVisibleLogo(){
        return cy.get('.logo.pull-left').should('be.visible')
    }
    clickSignUpLink(){
        return cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click()
    }
    isLoginHeaderVisible(){
        return cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > h2').should('be.visible')
    }
    typeEmail(text){
        return cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)').type(text)
    }
    typePassword(text){
        return cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=password]:nth-child(3)').type(text)
    }
    clickLoginButton(){
        return cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > button').click()
    }
    isErrorMessageVisible(text){
        return cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p').should('eq', text)
    }

}