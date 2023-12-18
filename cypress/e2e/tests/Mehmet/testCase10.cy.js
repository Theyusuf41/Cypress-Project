import registerPage from "../../../pages/registerPage"
import subscriptionPage from "../../../pages/subscriptionPage"

describe('Logout User', function () {

    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
      cy.fixture('login').then(function (data) {
        this.data = data;
      })
    })



  it('Logout', function () {

   
    registerPage.visit();
    registerPage.isHomePageLoaded()
    cy.scrollTo('bottom')
    cy.wait(3000)
    subscriptionPage.isSubscriptionAvailable()
    cy.clock()  // Zamani durdurur
    // Hizli bir sekilde kaybolan mesajlar var ise, bu zamani durduruyor. 
    subscriptionPage.getEmailForSubscription().type(this.data.email).type("{enter}")
    subscriptionPage.isSuccessMessageAvailable()
    cy.tick(1000); // 1000 milisaniye (1 saniye) ileri sar
    
   




  })
})