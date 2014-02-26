module.exports = {
  navigate: function() {
    browser.get('');
  },
  typeTaskName: function(taskName) {
    element(by.model('todoText')).sendKeys(taskName);
  },
  submitTask: function() {
    element(by.buttonText("add")).click();  
  },
  todoList: function(){
    var todos = [];
    element(by.repeater('todo in todos')).then(function(rows) {

    });
  }
};