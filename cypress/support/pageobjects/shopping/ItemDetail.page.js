class ItemDetailPage {
    addItemToCart(itemName, itemPrice) {
        cy.get('.inventory_details_price').should('contain.text', itemPrice)
        cy.get('.inventory_details_name').should('contain.text', itemName)
        cy.get('button[id*="add-to-cart"]').click()
        cy.get('#back-to-products').click()
    }
}

export const itemDetailPage = new ItemDetailPage()