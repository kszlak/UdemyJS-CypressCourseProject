const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000, //timeout for all test cases
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
  projectId: "vmp44e",
  retries: {
    runMode: 1, //change e.g. to 1 when you want your test run again when fail
  },
});
