const {mainPage} = require("../../support/pageobjects/credentials/Main.page");
import invalidCredentialsData from "../../fixtures/credentials/invalidCredentials.json"

describe('invalid credentials', () => {

    beforeEach('setup', () => {
        cy.fixture('credentials/invalidCredentials').as('invalidCredentialsData')
        mainPage.goToIndex()
    })

    it('Non existing password test', function () {
        const data = invalidCredentialsData.nonExistingUser
        mainPage.login(data.username, data.password)
        mainPage.verifyErrorIsDisplayed(data.errorMessage)
    })

    it('Empty username test', function () {
        const data = invalidCredentialsData.missingUsername
        mainPage.fillPassword(data.password)
        mainPage.clickOnLogin()
        mainPage.verifyErrorIsDisplayed(data.errorMessage)
    })

    it('Empty password test', function () {
        const data = invalidCredentialsData.missingPassword
        mainPage.fillUsername(data.username)
        mainPage.clickOnLogin()
        mainPage.verifyErrorIsDisplayed(data.errorMessage)
    })
})