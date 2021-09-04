// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import {mainPage} from "./pageobjects/credentials/Main.page";
import {topMenuPage} from "./pageobjects/topmenu/TopMenu.page";

Cypress.Commands.add('login', () => {
    mainPage.goToIndex()
    mainPage.login(Cypress.env("username"), Cypress.env("password"))
})

Cypress.Commands.add('logout', () => {
    topMenuPage.openMenuBurger()
    topMenuPage.logout()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
