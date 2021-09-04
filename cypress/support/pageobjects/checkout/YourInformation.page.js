class YourInformationPage {
    fillForm(username, password, zipcode) {
        cy.get('#first-name').type(username)
        cy.get('#last-name').type(password)
        cy.get('#postal-code').type(zipcode)
        cy.get('#continue').click()
    }
}

export const yourInformationPage = new YourInformationPage()