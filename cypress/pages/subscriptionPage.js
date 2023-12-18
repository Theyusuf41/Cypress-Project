class subscriptionPage {

  

    isSubscriptionAvailable(){
        return cy.get('.single-widget > h2').should('be.visible')
    }

    getEmailForSubscription(){
        return cy.get('#susbscribe_email')
    }

    isSuccessMessageAvailable(){
        return cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!')
    }
   


 }
 export default new subscriptionPage();