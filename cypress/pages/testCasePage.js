class testCasePage {
    visit(){
        cy.visit("/")
    }
    isTitleTrue(){
        return cy.title("Automation Exercise")
    }
    clickTestCaseLink(){
        return cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a').click()
    }
    isH2Visible(){
        return cy.get('b').should("be.visible")
    }
    isTotalLinkNumberTrue(){
     //   const list = {}
     //   const links =cy.get('#form > div > div > div > div.panel-heading > h4')
        const links = new Array(cy.get('#form > div > div > div > div.panel-heading > h4'));
        let lengthOfLinks = links.length;
        if(lengthOfLinks==27){
            console.log('Number of links are accurate')
        }else {
            console.log('Number of links are inaccurate')
        }

    }
}
export default new testCasePage();