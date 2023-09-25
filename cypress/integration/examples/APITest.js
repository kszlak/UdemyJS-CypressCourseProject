/// <reference types="cypress" />
describe('API Test Suite', function()
{
    it('Add book to the library', function()
    {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',
            {
                "name":"Learn Appium Automation with Java",
                "isbn":"bcdpop", //must be unique
                "aisle":"1003", //must be unique
                "author":"John foe"
            }).then(function(response)
        {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response.body).to.have.property('Msg', 'successfully added')
        })
    })
})