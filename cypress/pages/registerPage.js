import { faker } from '@faker-js/faker'

class registerPage {
    visit(){
        cy.visit("/")
    }

    isHomePageLoaded(){
        return cy.url().should("eq","https://automationexercise.com/")
    }

    clickContinueButton(){
        return cy.get('[data-qa="continue-button"]').click()
    }

   
    isUsernameVisible(username){
        return cy.get(':nth-child(10) > a').should('have.text', ' Logged in as ' + username)
    }


    clickLogoutButton(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }

    isLoginPageLoaded(){
        return cy.url().should('eq','https://automationexercise.com/login')
    }

 
    
   
   


 

   isVisibleLogo(){
        let logo = cy.get('.logo.pull-left')
        return logo.should('be.visible')
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
    isErrorMessageVisible(){
        return cy.get('.login-form > form > p').contains("is incorrect!")
    }



    //////////////// Signup Field Elements and Functions

    sendTextName(name){
        return cy.get('[data-qa="signup-name"]').type(name)
    }
    sendTextEmail(email){
        return cy.get('[data-qa="signup-email"]').type(email)
    }
    clickSignButton(){
        return cy.get('[data-qa="signup-button"]').click()
    }
    isExistPVisible(){
        return cy.get('#form > div > div > div:nth-child(3) > div > form > p').contains('already exist!')
    }
    

}

export default new registerPage();