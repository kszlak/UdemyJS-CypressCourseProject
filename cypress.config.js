const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000, //timeout for all test cases
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  e2e: {
    setupNodeEvents,
    specPattern:'cypress/integration/examples/BDD/*.feature' //changed to pick up only feature files instead of js ones
  },
  projectId: "vmp44e",
  retries: {
    runMode: 1, //change e.g. to 1 when you want your test run again when failx§x§§
  },
});
