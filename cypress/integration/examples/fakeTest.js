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
                //mocked response
            body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"     }]

            }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        //this promise will be resolved after cypress successfully sent the mocked data back to the browser
        cy.wait('@bookretrievals').then(({request, response})=>
            {
                //length of the response array should match rows of the table
                cy.get('tr').should('have.length', response.body.length+1)
            }
        )
        cy.get('p').should('have.text', 'Oops only 1 Book available')


    })
})


