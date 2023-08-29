class ProductPage
{
    getCheckoutButton()
    {
        return cy.get('.nav-link').contains('Checkout')
    }

}
export default ProductPage;