const {topMenuPage} = require("../../support/pageobjects/topmenu/TopMenu.page");
import navigationData from "../../fixtures/navigation/navigation.json"

describe('About redirection', () => {

    beforeEach('setup', () => {
        cy.fixture('navigation/navigation').as('navigationData')
        cy.login()
    })

    it('About redirection test', function () {
        const sauceLabsUrl = navigationData.sauceLabsUrl
        topMenuPage.openMenuBurger()
        topMenuPage.verifyAboutRedirection(sauceLabsUrl)
    })
})