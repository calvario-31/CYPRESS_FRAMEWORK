const {topMenuPage} = require("../../support/pageobjects/topmenu/TopMenu.page");
import navigationData from "../../fixtures/navigation/navigation.json"

describe('about top menu functionality', () => {

    beforeEach('setup', () => {
        cy.fixture('navigation/navigation').as('navigationData')
        cy.login()
    })

    it('about redirection test', function () {
        const sauceLabsUrl = navigationData.sauceLabsUrl
        topMenuPage.openMenuBurger()
        topMenuPage.verifyAboutRedirection(sauceLabsUrl)
    })
})