import registerPage from "../../../pages/registerPage"


describe('Login User with correct email and password', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })

  it('Login Functionality', function () {

    //Provide the data read from the fixture
    registerPage.visit();
    registerPage.isPageLoaded()
    registerPage.clickSignUpLink()
    registerPage.isLoginToYourAccountVisible()
    cy.get('[data-qa="login-email"]').type(this.data.emailLogin)
    cy.get('[data-qa="login-password"]').type(this.data.passwordLogin)
    registerPage.clickLoginButton()
    registerPage.isUsernameVisible()
    // registerPage.clickDeleteButton()
    // registerPage.isAccountDeletedVisible()

  })
})