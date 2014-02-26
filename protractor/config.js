exports.config = {
  
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar',

  specs: [
    'tests/todo2.js'
  ],

  seleniumArgs: ['-browserTimeout=60'],

  capabitilies: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000',

  allScriptsTimeout: 30000

};