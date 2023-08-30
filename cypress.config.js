const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000, //timeout for all test cases
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
