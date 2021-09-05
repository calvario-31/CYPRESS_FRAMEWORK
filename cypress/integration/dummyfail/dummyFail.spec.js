import {mainPage} from "../../support/pageobjects/credentials/Main.page";

describe('dummy fail', () => {
    it('test to see the screenshot', () => {
        cy.login()
        mainPage.verifyPage()
    })
})