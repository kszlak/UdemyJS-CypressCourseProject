/// <reference types='Cypress' />
import HomePage from './pageObjects/HomePage'
import ProductPage from './pageObjects/ProductPage'
describe('Frame test', function()
{
    //runs once before all tests in the block
    before(function (){

        //to call the file from fixture folder
        cy.fixture('example').then(function(data)
        {
            //this will add data access to entire class, makes it global
            this.data=data
        })
    })

    it('Validate product elements', function()
    {
        //create object for that class with the import keyword
        const homePage=new HomePage()
        const productPage=new ProductPage()
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')

        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name) changed to use selectors from HomePage.js file
        homePage.getEditBox().type(this.data.name)

        //cy.get('select').select(this.data.gender)
        homePage.getGender().select(this.data.gender)

        //cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        //to validate any attribute value
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2)
        homePage.getEditBox().should('have.attr', 'minlength', 2)

        //to validate if radio button is disabled
        //cy.get('#inlineRadio3').should('be.disabled')
        homePage.getEntrepreneaur().should('be.disabled')

        // use cy.pause() or debug() to debug
        // e.g. cy.pause()
        // e.g. cy.get(':nth-child(2) > .nav-link').click().debug()

        //cy.get(':nth-child(2) > .nav-link').click()
        homePage.getShopTab().click()

        //call the function from commands.js with productName parameter
        //we don't need to import any file as it is in default file commands.js in support folder
        //data come from example.json
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        })

        productPage.getCheckoutButton().click()

    })
})