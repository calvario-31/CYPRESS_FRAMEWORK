class YourCartPage {
    continueCheckout() {
        cy.get('#checkout').click()
    }
}

export const youCartPage = new YourCartPage()