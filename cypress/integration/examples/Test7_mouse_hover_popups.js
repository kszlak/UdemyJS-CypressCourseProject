describe('Handling mouse hover popup', function()
{
    it('Validate element in the mouse hover popup', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //to show hidden elements
        //the parent has CSS property: 'display: none'
        cy.get('.mouse-hover-content').invoke('show')

        //to force just to click on invisible element (without opening menu) we can use force: true:
        //cy.contains('Top').click({force: true})

        cy.contains('Top').click()

        //to check if url changed
        cy.url().should('include','top')

    })
})