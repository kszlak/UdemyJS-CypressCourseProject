/// <reference types="cypress" />
describe('Mocked Test Suite2', function()
{
    it('My second Mocked Test Case', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        //using syntax: cy.intercept(method, url, routeHandler) to mock request
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req)=>
            {
                req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
                req.continue((res)=>
                {
                    //modifying request object and sending to the server and get response back
                    //expect(res.statusCode).to.equal(403)
                })

            }).as('dummyUrl')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')


    })
})


