exports.config = {
  
  //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.41.0.jar',
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  chromeOnly: true,
  specs: [
    'tests/teste1.js'
  ],

  seleniumArgs: ['-browserTimeout=60'],

  capabitilies: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

 // baseUrl: 'http://www.angularjs.org',
  baseUrl: 'http://localhost:8000',

  allScriptsTimeout: 30000

};