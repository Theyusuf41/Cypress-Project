// import registerPage from "../../../pages/registerPage"
import registerPage from "../../../pages/registerPage"
//const { defineConfig } = require("cypress")

describe('invalid email and password to the register section', () => {
    it('test01', () => {
      registerPage.visit("/")
      registerPage.isVisibleLogo()
      registerPage.clickSignUpLink()
      registerPage.isLoginHeaderVisible()
      registerPage.typeEmail("abc@hotmail.com")
      registerPage.typePassword("abcdefgh")
      registerPage.clickLoginButton()
      registerPage.isErrorMessageVisible()
    })
  })