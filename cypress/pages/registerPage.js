import { faker } from '@faker-js/faker'

class registerPage {
    visit(){
        cy.visit("/")
    }
    isPageLoaded(){
        return cy.url().should("eq","https://automationexercise.com/")
    }


    isNewUserSignupVisible(){
        return cy.get('.signup-form > h2').should('be.visible')
    }

    getUsername(){
        return  cy.get('[data-qa="signup-name"]')
    }

    getEmail(){
        return cy.get('[data-qa="signup-email"]')
    }

    isEnterAccountInformationVisible(){
        return cy.get(':nth-child(1) > b').should('be.visible')
    }

    clickTitle(){
        return cy.get('#id_gender1').click()
    }

    clickDateOfBirth(){
        cy.get('[data-qa="days"]').select('1')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('1977')
    }

    clickNewsletter(){
        cy.get('#newsletter').click()
    }

    clickOffer(){
        cy.get('#optin').click()
    }

    typePasswordRegister(){
        const password = faker.internet.password()
        return cy.get('[data-qa="password"]').type(password)
    }

   typeFirstname(){
        const firstname = faker.name.firstName('male')
        return cy.get('[data-qa="first_name"]').type(firstname)
   }

   typeLastname(){
    const lastname = faker.name.lastName()
    return cy.get('[data-qa="last_name"]').type(lastname)
    }

    typeAddress(){
        let address = faker.address.street()
        return cy.get('[data-qa="address"]').type(address)
    }

    typeCompany(){
        
        return cy.get('[data-qa="company"]').type('abcd')
    }

    typeStreet(){
        let street = faker.address.street()
        return cy.get('[data-qa="address"]').type(street)
    }

    chooseCountry(){
        return cy.get('[data-qa="country"]').select('Canada')
    }

    typeState(){
        let state = faker.address.state()
        return cy.get('[data-qa="state"]').type(state)
    }

    typeCity(){
        let city = faker.address.city()
        return cy.get('[data-qa="city"]').type(city)
    }

    typeZipCode(){
        let zipcode = faker.address.zipCode('#####')
        return cy.get('[data-qa="zipcode"]').type(zipcode)
    }

    typeMobileNumber(){
        let mobileNumber = faker.address.zipCode('####-###-####')
        return cy.get('[data-qa="mobile_number"]').type(mobileNumber)
    }

    clickCreateAccount(){
        return cy.get('[data-qa="create-account"]').click()
    }

    isAccountCreatedVisible(){
        return cy.get('b').should('be.visible')
    }

    clickContinueButton(){
        return cy.get('[data-qa="continue-button"]').click()
    }

    isUsernameVisible(){
        
        return cy.contains("Logged in").should('be.visible');
    }

    clickDeleteButton(){
        return cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    }

    isAccountDeletedVisible(){
        return cy.get('b').click()
    }

    isLoginToYourAccountVisible(){
        return cy.get('.login-form > h2').should('be.visible')
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