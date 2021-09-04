import selectValuesData from "../../fixtures/shopping/sortValues.json"
import {shoppingPage} from "../../support/pageobjects/shopping/Shopping.page";

describe('select sorting option', () => {

    beforeEach('setup', () => {
        cy.fixture('shopping/sortValues').as('selectValuesData')
        cy.login()
    })

    it('alphabetic a to z', function () {
        const data = selectValuesData.ascendantAlphabetic
        shoppingPage.clickSelectOption(data.value)
        shoppingPage.verifyNameSorted(data.firstItemName, data.lastItemName)
    })

    it('alphabetic z to a', function () {
        const data = selectValuesData.descendantAlphabetic
        shoppingPage.clickSelectOption(data.value)
        shoppingPage.verifyNameSorted(data.firstItemName, data.lastItemName)

    })

    it('price low to high', function () {
        const data = selectValuesData.ascendantPrice
        shoppingPage.clickSelectOption(data.value)
        shoppingPage.verifyPriceSorted(data.firstItemPrice, data.lastItemPrice)
    })

    it('price high to low', function () {
        const data = selectValuesData.descendantPrice
        shoppingPage.clickSelectOption(data.value)
        shoppingPage.verifyPriceSorted(data.firstItemPrice, data.lastItemPrice)
    })
})