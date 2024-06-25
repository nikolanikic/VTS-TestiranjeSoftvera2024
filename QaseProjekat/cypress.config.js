const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                    options: config,
                  },
                ],
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
              },
            ],
          },
        },
      };

      on('file:preprocessor', webpack(options));
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://app.qase.io',
    stepDefinitions: 'cypress/support/step_definitions'
  },
});
