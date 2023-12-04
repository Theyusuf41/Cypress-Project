import registerPage from "../../../pages/registerPage";

describe('signup with registered email and name', () => {
    it('test01', () => {
        registerPage.visit("/")
        registerPage.isVisibleLogo()
        registerPage.clickSignUpLink()
        registerPage.isLoginHeaderVisible()
        registerPage.sendTextName("abc")
        registerPage.sendTextEmail("abc@hotmail.com")
        registerPage.clickSignButton()
        registerPage.isExistPVisible()
    })
})