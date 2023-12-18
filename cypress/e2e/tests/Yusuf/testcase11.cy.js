//import cartPage from "../../../pages/cartPage";
import cartPageee from "../../../pages/cartPageee";
describe('verify subscription in cart page', () => {
    it('test01', () => {
        cartPageee.visit('/')
        cartPageee.isTitleTrue()
        cartPageee.clickCartLink()
        cartPageee.verifyCartPage()
        cartPageee.scrollSubscription('ysf@hotmail.com')
        cartPageee.isSuccesfullVisible()
        
    })
})