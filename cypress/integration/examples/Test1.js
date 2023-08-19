//cypress - spec file
//cypress run
//to run one spec test run in headless execution in electron browser: cypress run --spec "cypress/integration/examples/Test1.js"
//to run in head mode (see execution in the browser) and with chosen browser: cypress run --headed --browser chrome
describe('My First e2e Test Suite', function()
{
    it('My first Test Case', function()
    {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //visit - navigate to url

    })
})

/*
Cypress folder structure:
- fixtures store test data, e.g. to store mocked data for responses
- plugins used to handle cypress events
- support is for writing customised commands
- cypress.config.js is a configuration file for cypress e.g. to define folder for screenshots etc
 */
