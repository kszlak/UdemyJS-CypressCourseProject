/// <reference types="cypress" />
//const naetCSV require ('neat-csv')
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
        cy.get('[routerlink*="cart"]').click()
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
        cy.contains('Excel').click()
        const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_xcalibertesting.xlsx";
        //we need to add task because browser engine isn't handle db or excel connections and it has to be handle by node
        cy.task('excelToJsonConverter', filePath).then(function(result) //two arguments: task and argument you're passing
        {
            cy.log(result.data[1].A)
            expect(productName).to.equal(result.data[1].B)
        })
        cy.readFile(filePath).then(function(text)
        {
            expect(text).to.include(productName) //check if text is present in the file
        })
    })
})