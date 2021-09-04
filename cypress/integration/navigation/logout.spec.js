import {topMenuPage} from "../../support/pageobjects/topmenu/TopMenu.page";
import {mainPage} from "../../support/pageobjects/credentials/Main.page";

describe('logout functionality', () => {

    beforeEach('setup', () => {
        cy.login()
    })

    it('logout test', () => {
        topMenuPage.openMenuBurger()
        topMenuPage.logout()

        mainPage.verifyPage()
    })
})