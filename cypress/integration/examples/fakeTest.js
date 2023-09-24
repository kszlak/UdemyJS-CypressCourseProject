/// <reference types="cypress" />
describe('Mocked Test Suite', function()
{
    it('My first Mocked Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        //the real response can be different each time so
        //the response is mocked to have always 1 item
        //then we can validate the text for only one record
        cy.intercept(
            {
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
            statusCode: 200,
            body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"     }]

            }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals') //this promise will be resolved after cypress successfully sent the mocked data back to the browser
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})


