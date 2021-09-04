class OverviewPage {
    verifyTotalPrice(totalPrice) {
        cy.get('.summary_subtotal_label').should('contain.text', totalPrice)
    }

    finishCheckout() {
        cy.get('#finish').click()
    }
}

export const overViewPage = new OverviewPage()