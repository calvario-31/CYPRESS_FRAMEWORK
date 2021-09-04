class TopMenuPage {
    openMenuBurger() {
        cy.get('#react-burger-menu-btn').click()
    }

    verifyAboutRedirection(link) {
        cy.get('#about_sidebar_link').should('have.attr', 'href').and('equal', link)
    }

    logout() {
        cy.get('#logout_sidebar_link').click()
    }
}

export const topMenuPage = new TopMenuPage()