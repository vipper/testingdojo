describe('Hello World', function() {

  it('should display Hello !', function() {
    
    expect(element(by.binding('yourName')).getText()).toEqual("Hello !");
  });

  it('should be able to insert text',function(){
    browser.get('');
    element(by.model('yourName')).sendKeys("Shut up everybody");
    expect(element(by.binding('yourName')).getText()).toEqual("Hello Shut up everybody!");
  });

});