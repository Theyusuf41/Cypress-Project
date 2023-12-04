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
        return cy.get('[data-qa="name"]').click().type(name)
    }
    sendTextToEmailInput(email){
        return cy.get('[data-qa="email"]').click().type(email)
    }
    sendTextToSubjectInput(subject){
        return cy.get('[data-qa="subject"]').click().type(subject)
    }
    sendTextToMessageInput(message){
        return cy.get('[data-qa="message"]').click().type(message)
    }
    addFile(){
        return cy.get("#contact-us-form > div:nth-child(6) > input").selectFile('cypress/fixtures/photo1.jpg')
    }
    clickSubmitButton(){
        return cy.get('[data-qa="submit-button"]').click()
    }
}
export default new contactPage();