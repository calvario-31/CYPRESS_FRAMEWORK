class MainPage {
    goToIndex() {
        cy.visit('/')
    }

    login(username, password) {
        this.fillUsername(username)
        this.fillPassword(password)
        this.clickOnLogin()
    }

    verifyErrorIsDisplayed(message) {
        cy.get('h3[data-test="error"]').should('be.visible').and('contain.text', message)
    }

    fillUsername(username) {
        cy.get('#user-name').type(username)
    }

    fillPassword(password) {
        cy.get('#password').type(password)
    }

    clickOnLogin() {
        cy.get('#login-button').click()
    }

    verifyPage() {
        cy.get('.login_logo').should('be.visible')
        cy.get('.bot_column').should('be.visible')
        cy.get('#login_credentials').should('be.visible')
        cy.get('.login_password').should('be.visible')
    }
}

export const mainPage = new MainPage()