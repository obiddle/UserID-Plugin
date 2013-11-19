var exec = require('cordova/exec');
/**
 * Constructor TEST
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
    "SendMyUserID", 
    "sayMello", 
    [localStorage.user_id]
  );
}

var sendMyUserID = new SendMyUserID();
module.exports = sendMyUserID

// set user id
localStorage.user_id = "cccd26331e4d45909"