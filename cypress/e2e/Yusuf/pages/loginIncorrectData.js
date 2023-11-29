import registerPage from "./registerPage.cy"
const { defineConfig } = require("cypress")
const rp = new registerPage()

describe('invalid email and password to the register section', () => {
    it('test01', () => {
      rp.visit()
    })
    it('test01', () => {
      //rp.visit()
    })

  })