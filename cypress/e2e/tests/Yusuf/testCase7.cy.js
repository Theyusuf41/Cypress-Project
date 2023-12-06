import testCasePage from "../../../pages/testCasePage";

describe('test case 7: verify the test case page', () => {
    it('testcase 1', () => {
        testCasePage.visit('/')
        testCasePage.isTitleTrue()
        testCasePage.clickTestCaseLink()
        testCasePage.isH2Visible()
        testCasePage.isTotalLinkNumberTrue()
    })
})