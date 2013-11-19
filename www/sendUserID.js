var exec = require('cordova/exec');
/**
 * Constructor
 */
function SendMyUserID() {}

SendMyUserID.prototype.sayMello = function() {
  exec(function(result){
      // result handler
      alert(result);
    },
    function(error){
      // error handler
      alert("Error" + error);
    }, 
    "MyPluginUser", 
    "sayMello", 
    ["cccd26331e4d45909"]
  );
}

var sendMyUserID = new SendMyUserID();
module.exports = sendMyUserID