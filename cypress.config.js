const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p1t2gc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
