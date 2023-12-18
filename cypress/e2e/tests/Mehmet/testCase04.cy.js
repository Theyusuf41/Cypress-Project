import registerPage from "../../../pages/registerPage"
import contactPage from "../../../pages/contactPage"

describe('Logout User', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })

  it('Logout', function () {

    //Provide the data read from the fixture
    registerPage.visit();
    registerPage.isHomePageLoaded()
    contactPage.clickContactLink()
    contactPage.isGetInTouchH2Visible()
    contactPage.sendTextToNameInput(this.data.username)
    contactPage.sendTextToEmailInput(this.data.emailLogin)
    contactPage.sendTextToSubjectInput("Selam")
    contactPage.sendTextToMessageInput("Hello World")
    cy.wait(4000)
    const picture = "gs.png"
    cy.get(':nth-child(6) > .form-control').attachFile(picture)
    cy.get('.col-sm-12 > .title').scrollIntoView();
    cy.wait(4000)
    contactPage.clickSubmitButton()
    contactPage.verifySuccessMessage()
    contactPage.clickHomeButton()
    registerPage.isHomePageLoaded()
    

  })
})