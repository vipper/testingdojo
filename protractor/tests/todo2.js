var page = require('../support/todo_page');

describe('todo list', function() {
  beforeEach(function() {
    page.navigate();
  });

  it('should add a task', function() {
    page.typeTaskName("awesome task");
    page.submitTask();
    var e = element(by.repeater('todo in todos').row("0").column('{{todo.text}}'));
    expect(e.getText()).toBe('awesome task');
  });

});