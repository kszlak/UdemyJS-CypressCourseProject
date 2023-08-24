describe('Handling events', function()
{
    it('Validate text in the popup', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Cypress auto accepts alerts and popups
        //Cypress has the capability to listen to browser events
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"').click()

        //Event - window:alert
        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Event - window:confirm
        cy.on('window:confirm', (str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        })

})