import registerPage from "../../../pages/registerPage"
describe('template spec', () => {
    it('passes', () => {
      cy.visit("/")
    })
    it('passes', () => {
        registerPage.isVisibleLogo()
      })
  })