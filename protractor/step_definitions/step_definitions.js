module.exports = function() {

  var name="";

  this.Given(/^my name is "([^"]*)"$/, function (arg1, callback) {
    //name = arg1;
    callback();
  });

  this.When(/^I tell angular my name$/, function (callback) {
    element(by.model("yourName")).sendKeys(name);
    callback();
  });

  this.Then(/^angular says "([^"]*)"$/, function (arg1, callback) {
    element(by.binding("yourName")).getText().then(function(name){
      if(name == arg1) {
        callback();
      } else {
        callback.fail(new Error("Name expected was not found!"));
      }

    });
    
  });


};