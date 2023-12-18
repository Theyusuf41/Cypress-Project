// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Click function 

import { faker } from '@faker-js/faker'

Cypress.Commands.add('clickk', (element) => {
    cy.get('a').contains(element).click()
})

Cypress.Commands.add('registerUser', (username, email, password) => {
    cy.get('.signup-form > h2').should('have.text', 'New User Signup!');
    cy.wait(1000)
    cy.get('[data-qa="signup-name"]').type(username)
    cy.wait(1000)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.wait(1000)
    cy.get('[data-qa="signup-button"]').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information')
    cy.get('#id_gender1').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > b').should('be.visible')
    cy.wait(1000)
    cy.get('#id_gender1').click()
    cy.wait(1000)
    cy.get('[data-qa="password"]').type(password)
    cy.wait(1000)
    cy.get('[data-qa="days"]').select('1')
    cy.wait(1000)
    cy.get('[data-qa="months"]').select('January')
    cy.wait(1000)
    cy.get('[data-qa="years"]').select('1977')
    cy.wait(1000)
    cy.get('#newsletter').click()
    cy.wait(1000)
    cy.get('#optin').click()
    cy.wait(1000)
    const firstname = faker.name.firstName('male')
    cy.wait(1000)
    cy.get('[data-qa="first_name"]').type(firstname)
    cy.wait(1000)
    const lastname = faker.name.lastName()
    cy.wait(1000)
    cy.get('[data-qa="last_name"]').type(lastname)
    cy.wait(1000)
    cy.get('[data-qa="company"]').type('abcd')
    cy.wait(1000)
    const address = faker.address.street()
    cy.wait(1000)
    cy.get('[data-qa="address"]').type(address)
    cy.wait(1000)
    cy.get('[data-qa="country"]').select('Canada')
    cy.wait(1000)
    const state = faker.address.state()
    cy.wait(1000)
    cy.get('[data-qa="state"]').type(state)
    cy.wait(1000)
    const city = faker.address.city()
    cy.wait(1000)
    cy.get('[data-qa="city"]').type(city)
    cy.wait(1000)
    const zipcode = faker.address.zipCode('#####')
    cy.wait(1000)
    cy.get('[data-qa="zipcode"]').type(zipcode)
    cy.wait(1000)
    const mobileNumber = faker.address.zipCode('####-###-####')
    cy.wait(1000)
    cy.get('[data-qa="mobile_number"]').type(mobileNumber)
    cy.wait(1000)
    cy.get('[data-qa="create-account"]').click()
    cy.wait(1000)
    cy.get('b').should('have.text','Account Created!')

});

Cypress.Commands.add('loginUser', (email,password) => {

    cy.get('.login-form > h2').should('have.text','Login to your account')
    cy.wait(1000)
    cy.get('[data-qa="login-email"]').type(email)
    cy.wait(1000)
    cy.get('[data-qa="login-password"]').type(password)
    cy.wait(1000)
    cy.get('[data-qa="login-button"]').click()
    cy.wait(1000)
    cy.contains("Logged in").should('be.visible')
    cy.wait(1000)
});

Cypress.Commands.add('deleteUser', () => {
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('b').should('have.text','Account Deleted!')
});

Cypress.Commands.add('typeCardInfo', (month, year) => {
    const name = faker.firstName+faker.lastName;
    cy.get('[data-qa="name-on-card"]').type(name);
  
    const cardNumber = faker.finance.creditCardNumber();
    cy.get('[data-qa="card-number"]').type(cardNumber);
  
    const cvc = faker.finance.creditCardCVV();
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(month);
    cy.get('[data-qa="expiry-year"]').type(year);
  
    cy.get('[data-qa="pay-button"]').click();
  });



