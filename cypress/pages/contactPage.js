class contactPage {
   // visit(){
   //     cy.visit("/")
   // }
    isVisibleLogo(){
        return cy.title("Automation Exercise")
    }
    clickContactLink(){
        return cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(8) > a").click()
    }
    isGetInTouchH2Visible(){
        return cy.get("#contact-page > div.row > div.col-sm-8 > div > h2").should("be.visible")
    }
    sendTextToNameInput(name){
        return cy.get('[data-qa="name"]').type(name)
    }
    sendTextToEmailInput(email){
        return cy.get('[data-qa="email"]').type(email)
    }
    sendTextToSubjectInput(subject){
        return cy.get('[data-qa="subject"]').type(subject)
    }
    sendTextToMessageInput(message){
        return cy.get('[data-qa="message"]').type(message)
    }
    addFile(){
        return cy.get("#contact-us-form > div:nth-child(6) > input").selectFile('cypress/fixtures/photo1.jpg')
    }
    clickSubmitButton(){
        return cy.get('[data-qa="submit-button"]').click()
    }

    verifySuccessMessage(){
        return cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    }

    clickHomeButton(){
        return cy.get('span').click()
    }
}
export default new contactPage();