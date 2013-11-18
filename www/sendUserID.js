var exec = require('cordova/exec');
/**
 * Constructor
 */
function MyPlugin() {}

MyPlugin.prototype.sayHello = function() {
  exec(function(result){
      // result handler
      alert(result);
    },
    function(error){
      // error handler
      alert("Error" + error);
    }, 
    "MyPluginX", 
    "sayHello", 
    ["cccd26331e4d45909"]
  );
}

var myPlugin = new MyPlugin();
module.exports = myPlugin