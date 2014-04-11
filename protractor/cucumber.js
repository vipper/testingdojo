'use strict';

exports.config = {
  allScriptsTimeout: 20000,

  baseUrl: 'http://localhost:8000/',
  chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  chromeOnly: true, 
  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'cucumber',
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['features/*.feature'],

  // Options to be passed to Cucumber.
  cucumberOpts: {
    require: 'step_definitions/step_definitions.js',
    tags: '@dev',
    format: 'summary'
  }
};
