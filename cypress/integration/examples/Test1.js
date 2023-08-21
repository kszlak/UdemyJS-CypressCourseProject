//cypress - spec file
//cypress run
//to run one spec test run in headless execution in electron browser: cypress run --spec "cypress/integration/examples/Test1.js"
//to run in head mode (see execution in the browser) and with chosen browser: cypress run --headed --browser chrome

/// <reference types="cypress" />
describe('My First e2e Test Suite', function()
{
    it('My first Test Case', function()
    {
        //test step
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') //visit - navigate to url
        cy.get('.search-keyword').type('ca') //get access/find element
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4) //visible added to get only visible items

        //Parent Child chaining
        cy.get('.products').as('productLocator') //aliasing to use locators
        cy.get('@productLocator').find('.product').should('have.length',4) //the same result as above, checked only in products block
        cy.get(':nth-child(3) > .product-action > button').click()
        console.log('test') //print in the developer tools in the console, it's js
        //added with index
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click() //eq: to get the third one (indexing from 0)

        //added dynamically with using each and iterate of each element of the array
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        //assert if logo is correctly displayed
        cy.get('.brand').should('have.text',('GREENKART'))

        //this is to print in logs
        cy.get('.brand').then(function(logoelement) //manually resolving the promise with then()
        {
            cy.log(logoelement.text()) //log: to print output / text() is a JQuery not Cypress method
        })
    })
})


