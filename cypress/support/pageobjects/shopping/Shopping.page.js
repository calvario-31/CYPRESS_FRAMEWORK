class ShoppingPage {
    goToItemDetail(itemName) {
        cy.log(`itemName: ${itemName}`)
        cy.get('.inventory_item_name').contains(itemName).click()
    }

    goToCheckout() {
        cy.log('Going to checkout')
        cy.get('#shopping_cart_container').click()
    }

    clickSelectOption(option) {
        cy.log(`Selecting the option ${option}`)
        cy.get('select').select(option)
    }

    verifyTotalItem(itemTotal) {
        cy.log(`Verifying the item total ${itemTotal}`)
        cy.get('.shopping_cart_badge').should('have.text', itemTotal)
    }

    verifyNameSorted(firstItemName, lastItemName) {
        cy.log(`Verifying the sort functionality with namefirst: ${firstItemName} last: ${lastItemName}`)
        cy.get('.inventory_item_name').then((itemList) => {
            cy.wrap(itemList).first().should('have.text', firstItemName)
            cy.wrap(itemList).last().should('have.text', lastItemName)
        })
    }

    verifyPriceSorted(firstItemPrice, lastItemPrice) {
        cy.log(`Verifying the sort functionality with price first: ${firstItemPrice} last: ${lastItemPrice}`)
        cy.get('.inventory_item_price').then((itemList) => {
            cy.wrap(itemList).first().should('contain.text', firstItemPrice)
            cy.wrap(itemList).last().should('contain.text', lastItemPrice)
        })
    }

    verifyPage() {
        cy.log('Verifying the page is loaded')
        cy.get('.title').should('be.visible').and('have.text', 'Products')
        cy.get('select[data-test="product_sort_container"]').should('be.visible')
    }
}

export const shoppingPage = new ShoppingPage()