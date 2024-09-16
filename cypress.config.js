const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportTitle: 'desafio',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'ddmmyyyy_HHMMss',
    }
  },
});
