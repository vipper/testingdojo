xdescribe("angularjs basic demo", function(){
  beforeEach(function () {
    browser.get("/");
  }, 30000);

  it('display default message', function(){
    expect(element(by.binding("yourName")).getText()).toBe("Hello !");
  });

  it('when a name is provided displays a greeting with the name', function(){
    element(by.model("yourName")).sendKeys("guys");

    expect(element(by.binding("yourName")).getText()).toBe("Hello guys!");
  });
});

describe("angularjs todo demo", function(){
  beforeEach(function () {
    browser.get("/");
  });

  it('when a new item is added then is displayed on the list', function () {
    element(by.model('todoText')).sendKeys('new item');
    element(by.model('todoText')).sendKeys(protractor.Key.ENTER);
    element(by.css('.btn-primary[value="add"]')).click();
    
    var todoList = element.all(by.repeater('todo in todos'));

    expect(todoList.get(2).getText()).toBe('new item');
    expect(todoList.get(3).getText()).toBe('');
  });

  it('changes the todoText css class when clicking the checkBox', function() {
    var todoList = element.all(by.repeater('todo in todos'));
    var firstElement = todoList.get(0);

    var originalCssClass = firstElement.findElement(by.binding("text")).getAttribute('class');

    firstElement.findElement(by.model("done")).click();

    var newCssClass = firstElement.findElement(by.binding("text")).getAttribute('class');

    expect(originalCssClass).not.toEqual(newCssClass);
  });
})