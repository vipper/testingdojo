exports.config = {

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  specs: [
    'tests/*.js'
  ],

  seleniumArgs: ['-browserTimeout=60'],

  capabitilies: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://www.angularjs.org',

  allScriptsTimeout: 30000

}