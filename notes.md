## Cypress folder structure:
- fixtures store test data, e.g. to store mocked data for responses
- plugins used to handle cypress events
- support is for writing customised commands
- cypress.config.js is a configuration file for cypress e.g. to define folder for screenshots etc


## Css selectors:
- Cypress supports Css selectors only    

| type                           | syntax                   | example               |
|--------------------------------|--------------------------|-----------------------|
| id                             | #idname                  |                       |
| id+tagname                     | tagname#idname           |                       |
| classname                      | .classname               | .search-keyword       |
| classname+tagname              | tagname.classname        |                       |
| customized with any attribute  | tagname[attribute=value] | input[type='search']  |
| tagnames                       | tagname tagname          | form input            |
| nth-child                      |                          | tr td:nth-child(2)    |


## Asynchronous concept
It is very important to understand that Cypress commands don't do anything at the moment they are invoked, but rather enqueue themselves to be run later. 
This is what we mean when we say Cypress commands are asynchronous.
Cypress relies on timeouts to know when to stop waiting on an app to get into the expected state. 
Timeouts can be configured globally, or on a per-command basis.
Because of asynchronous there is no guarantee in sequence of execution but cypress takes care of it.
Promise comes with rejection, resolved, pending.
Add `then()` method - to wait until the step is resolved


## Running tests from terminal
e.g.
npx cypress run --spec cypress/integration/examples/Test9_Framework.js --headed --browser chrome --env url='https://rahulshettyacademy.com'

npx - searching for node.js file in the whole project to run tests
--env - to run environmental variable
--headed - to run in head mode (see execution in the browser) 
--browser chrome - to run in a chosen browser