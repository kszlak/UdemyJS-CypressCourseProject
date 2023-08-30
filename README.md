## UdemyJS-CypressCourseProject
Based on the course **Cypress -Modern Automation Testing from Scratch + Frameworks** on https://www.udemy.com/

### How to run tests

- locally from Cypress

    1. make sure, that `node_modules` is installed, if not - run `npm install`
    2. specify in `cypress.config.js` spec pattern test location (ex. `cypress/integration/examples/*.js`)
    3. open Cypress with command `cypress open`


### Supporting tests with iframes (Test8)
    1. make sure that cypress-iframe plugin with custom commands simplifying working with elements inside an iframe is installed, 
    if not - run `npm install -D cypress-iframe'
