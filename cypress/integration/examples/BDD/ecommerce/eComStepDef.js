import { Given, When, Then } from  "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
const homePage=new HomePage()
const productPage=new ProductPage()
let name
let data
let sum

    Given('I open ECommerce page',()=> //anonymous function, could be also function() instead of ()=>
    {
        cy.visit(Cypress.env('url')+'/angularpractice/')

    })

    When('I add items to cart',()=>
    {

        homePage.getShopTab().click()
        data = ["Blackberry", "iphone X"]
        data.forEach(function(element)
        {
            cy.selectProduct(element)
        })
        productPage.getCheckoutButton().click()
    })

    When('validate the total prices',()=>
    {

        cy.get('tr td:nth-child(4) strong').each((el, index, list)=>
        {
            const actualText = el.text()
            var result = actualText.split(' ')
            result = result[1].trim()
            sum = Number(sum)+Number(result)
        }).then(function ()
        {
            cy.log(sum)

        })
        cy.get('h3 strong').then(function (element)
        {
            const amount = element.text()
        })
    })

    Then('select the country submit and verify ThankYou message',()=>
    {
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click({force: true})
        cy.get('[for="checkbox2"]').click({force: true})
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    })

    When ('I fill the form details',function(dataTable)
    {
        name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])
    })

    Then ('validate the forms behaviour',function()
    {
        homePage.getTwoWayDataBinding().should('have.value', name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneaur().should('be.disabled')
    })

    Then ('select the shop page',()=>
    {
        homePage.getShopTab().click()
    })