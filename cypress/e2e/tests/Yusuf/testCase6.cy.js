import contactPage from "../../../pages/contactPage";

describe('send some inputs to the input fields in contact page', () => {
    //const name = 'john'
    //const email = 'john@hotmail.com'
    //const message = 'i have a really big problem about online shoping'
    it('test01', () => {
        cy.visit('https://automationexercise.com/')
        contactPage.isVisibleLogo()
        contactPage.clickContactLink()
        contactPage.isGetInTouchH2Visible()
        contactPage.sendTextToNameInput("john")
        contactPage.sendTextToEmailInput("email")
        contactPage.sendTextToSubjectInput("complain")
        contactPage.sendTextToMessageInput("i have a really big problem about online shoping")
        contactPage.addFile()
        contactPage.clickContactLink()
        cy.on('window handling', (t) => {
            expect(t).to.contains('Success')
        })
    })
})