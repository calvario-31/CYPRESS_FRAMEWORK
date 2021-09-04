/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        login(): Chainable<any>
    }

    interface Chainable<Subject> {
        logout(): Chainable<any>
    }
}