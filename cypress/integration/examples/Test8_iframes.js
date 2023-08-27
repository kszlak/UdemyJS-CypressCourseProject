/// <reference types='Cypress' />
/// <reference types='Cypress-iframe' />
import 'cypress-iframe'

describe('Frame test', function()
{
    it('Validate elements in the iframe', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //to get the frame
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find("a[href='https://rahulshettyacademy.com/blog/']").should('have.length', 2)

    })
})