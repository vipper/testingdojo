describe('Todo', function(){

  beforeEach(function () {
    browser.get('');
  });

  it('should decrease remaining tasks when checkbox is checked',function(){

    expect(element(by.binding('remaining()')).getText()).toEqual('1 of 2 remaining');

    element(by.repeater("todo in todos").row(1)).element(by.model('todo.done')).click();

    expect(element(by.binding('remaining()')).getText()).toEqual('0 of 2 remaining');
  });

  it('should add a task by pressing enter on the text field', function () {
    addTask("Buy milk");
    expect(element(by.binding('remaining()')).getText()).toEqual('2 of 3 remaining');
  });

  it('should add a task by clicking on button', function () {
    element(by.model("todoText")).sendKeys("Buy milk");
    element(by.buttonText("add")).click();

    expect(element(by.binding('remaining()')).getText()).toEqual('2 of 3 remaining');
  });

  it('should archive', function() {
    element(by.linkText("archive")).click();
    expect(element(by.binding('remaining()')).getText()).toEqual('1 of 1 remaining');

  });

  it('should add using same text', function(){
    addTask("Buy milk");
    expect(element(by.repeater("todo in todos").row(2)).getText()).toEqual('Buy milk');
  });

});

var addTask = function (value) {
    element(by.model("todoText")).sendKeys(value);
    element(by.model("todoText")).sendKeys(protractor.Key.ENTER);
};
