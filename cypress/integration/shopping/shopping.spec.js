import {shoppingPage} from "../../support/pageobjects/shopping/Shopping.page";
import {itemDetailPage} from "../../support/pageobjects/shopping/ItemDetail.page";
import shoppingData from "../../fixtures/shopping/shopping.json"
import {youCartPage} from "../../support/pageobjects/checkout/YourCart.page";
import {yourInformationPage} from "../../support/pageobjects/checkout/YourInformation.page";
import {overViewPage} from "../../support/pageobjects/checkout/Overview.page";
import {successPage} from "../../support/pageobjects/checkout/Success.page";
import {userInformation} from "../../support/utilities/userInformation";

describe('e2e shopping', () => {

    beforeEach('setup', () => {
        cy.fixture('shopping/shopping').as('shoppingData')
        cy.login()
    })

    it('e2e shopping test', function () {
        shoppingData.itemList.forEach(({itemName, itemPrice}) => {
            shoppingPage.goToItemDetail(itemName)
            itemDetailPage.addItemToCart(itemName, itemPrice)
        })

        shoppingPage.verifyTotalItem(shoppingData.itemList.length)
        shoppingPage.goToCheckout()

        youCartPage.continueCheckout()
        yourInformationPage.fillForm(userInformation.firstname, userInformation.lastname, userInformation.zipcode)

        overViewPage.verifyTotalPrice(shoppingData.totalPrice)
        overViewPage.finishCheckout()

        successPage.verifyPage()
        successPage.backToProducts()

        shoppingPage.verifyPage()
    })

    afterEach('teardown', () => {
        cy.logout()
    })
})