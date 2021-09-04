class SuccessPage {
    verifyPage() {
        cy.get('.complete-header').should('be.visible')
        cy.get('.complete-text').should('be.visible')
        cy.get('.pony_express').should('be.visible')
    }

    backToProducts() {
        cy.get('#back-to-products').click()
    }
}

export const successPage = new SuccessPage()