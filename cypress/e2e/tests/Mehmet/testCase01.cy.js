import registerPage from "../../../pages/registerPage"


describe('Register User', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })

  it('User Register', function () {
  
    registerPage.visit();
    registerPage.isHomePageLoaded()
    registerPage.clickSignUpLink()
    // Bu metot kullanici registration islemi yapiyor
    // New User Signup!, EnterAccountInformation
    cy.registerUser(this.data.username, this.data.email, this.data.password)
    registerPage.clickContinueButton()
    registerPage.isUsernameVisible(this.data.username)
    cy.deleteUser()
    registerPage.clickContinueButton()
  
  })
})