var page = require('../support/index');

describe('hello World', function() {

  beforeEach(function() {
    page.navigate();
  });

  it('should display Hello !', function() {
    expect(page.getHelloMessage()).toBe('Hello !');
  });

  it('should display Hello guys!', function() {
    page.typeName('guys');
    expect(
      page.getHelloMessage()
    ).toBe('Hello guys!');
  });

});