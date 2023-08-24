describe('Handling child windows', function()
{
    it('Validate handling child window', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //to remove target="_blank attribute to open the target link in the same tab - cypress cannot navigate between tabs
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //domain changed and we need to add origin method with 2 attributes
        cy.origin('https://www.qaclickacademy.com/', ()=>
        {
            cy.get('#navbarSupportedContent a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy ')

        })

        })

})