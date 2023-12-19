import cartPagee from "../../../pages/cartPageee";

describe('Place order: Login before Checkout', () => {
    before( () => {
      //cy.request({
      //    method: 'POST',
      //    url: 'https://automationexercise.com/api/createAccount',
      //    body : {
      //        name : 'john',
      //        email: 'jonh@hotmail.com',
      //        password: 'john4141',
      //        title: 'Mr',
      //        birth_date: '01',
      //        birth_month: 'January',
      //        birth_year: '1997',
      //        firstname: 'john',
      //        lastname: 'doe',
      //        company:'',
      //        address1: '1 street',
      //        address2:'',
      //        country: 'canada',
      //        zipcode:'21245',
      //        state:'colorado',
      //        city:'colorado',
      //        mobile_number:'123456789'
      //    }
      //}).then((response) => {
      //    expect(response.status).to.equal(200);
      //    expect(response.name).to.equal('john');
      //    console.log(response);
      //})
      const params = {
        email: 'jonh@hotmail.com'
      }
       cy.request({
           method: 'GET',
           url : 'https://automationexercise.com/api/getUserDetailByEmail',
           qs: params
       }).then((response) => {
           expect(response.status).to.equal(200);
           console.log(response)
           //expect(response.body.company).to.equal('Canada');
           
       })

    } )
    it('test01', () => {
        cartPagee.visit()
        cartPagee.clickCartLink()

    })
})