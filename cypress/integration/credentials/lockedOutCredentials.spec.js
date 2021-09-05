const {mainPage} = require("../../support/pageobjects/credentials/Main.page");
import invalidCredentialsData from "../../fixtures/credentials/invalidCredentials.json"

describe('locked out credentials', () => {

    beforeEach('setup', () => {
        cy.fixture('credentials/invalidCredentials').as('invalidCredentialsData')
        mainPage.goToIndex()
    })

    it('locked out credentials test', function () {
        const data = invalidCredentialsData.lockedOut
        mainPage.login(data.username, data.password)
        mainPage.verifyErrorIsDisplayed(data.errorMessage)
    })
})