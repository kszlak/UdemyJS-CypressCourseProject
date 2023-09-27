/// <reference types="cypress" />
//const naetCSV require ('neat-csv')
import neatCSV from 'neat-csv'
let productName

describe('JWT session and download csv file', function()
{
    it('is logged in through local storage and download csv file', async()=>
    {
        cy.LoginAPI().then(function() //this is not a cypress command but created by me, so we need to resolve the promise manually
        {
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    //executing the event
                    onBeforeLoad: function(window)
                    {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })
        cy.get('.card-body b').eq(1).then(function(element)
        {
            productName = element.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink="/dashboard/cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('ind')
        cy.get('.ta-results button').each((el, index, list)=>
        {
            if(el.text() === ' India')
            {
                cy.wrap(el).click()
            }
        })
        cy.get('.btnn').click()
        cy.wait(2000)
        cy.contains('CSV').click()
        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_xcalibertesting.csv")
            .then(async(text)=>
            {
                //converting to js object
                const csv = await neatCSV(text)  //await neatCSV(text) - await can also resolve the promise
                console.log(csv)
                //['Product Name'] - way to handle property with space
                const actualProductCSV = csv[0]['Product Name']
                expect(productName).to.equal(actualProductCSV)
            })
    })
})