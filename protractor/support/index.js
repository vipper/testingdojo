module.exports = {
  navigate: function () {
    browser.get('');
  },
  typeName: function (text) {
    element(by.model('yourName')).sendKeys('guys');
  },
  getHelloMessage: function () {
    return element(by.binding('yourName')).getText();
  }
};