describe('Hello World', function() {
  
  it('verificacao inicial', function() {
    browser.get('/');
    var inputName = element(by.model('yourName'));
    inputName.sendKeys('TDC Floripa');
    
    expect(element(by.binding('yourName')).getText()).toBe("Hello TDC Floripa!");
  });


});