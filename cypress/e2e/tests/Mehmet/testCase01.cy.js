import registerPage from "../../../pages/registerPage"


describe('Register User', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })

  it('Cypress Test Case - Understanding Fixtures', function () {

    //Provide the data read from the fixture
    registerPage.visit();
    registerPage.isPageLoaded()
    registerPage.clickSignUpLink()
    registerPage.isNewUserSignupVisible()

    cy.get('[data-qa="signup-name"]').type(this.data.username)
    cy.get('[data-qa="signup-email"]').type(this.data.emailLogin)
    registerPage.clickSignButton()
    registerPage.isEnterAccountInformationVisible()
    registerPage.clickTitle()
    cy.get('[data-qa="password"]').type(this.data.passwordLogin)
    registerPage.clickDateOfBirth()
    registerPage.clickNewsletter()
    registerPage.clickOffer()
    registerPage.typeFirstname()
    registerPage.typeLastname()
    registerPage.typeCompany()
    registerPage.typeStreet()
    registerPage.chooseCountry()
    registerPage.typeState()
    registerPage.typeCity()
    registerPage.typeZipCode()
    registerPage.typeMobileNumber()
    registerPage.clickCreateAccount()
    registerPage.isAccountCreatedVisible()
    registerPage.clickContinueButton()
    registerPage.isUsernameVisible()
    // registerPage.clickDeleteButton()
    // registerPage.isAccountDeletedVisible()
    // registerPage.clickContinueButton()
    
    

  })
})