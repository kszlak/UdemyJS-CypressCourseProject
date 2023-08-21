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
    })
})
