var TJBot = require("tjbot");

var tj = new TJBot(
  [],
  {},
  {
   conversation: {
  username: "0bxx23a4-e56d-7890-bf1d-23e4xxxx89bf",
  password: "ABCxxxxGHiJkL"
}
  }
);

var workspaceId = "/*******/";
var text = "How do you use Watson Assistant?";

tj.converse(workspaceId, text, function(response) {  
  console.log(response.object.output.text.join(" "));  
});
/*-------------------*/
/***
tj.converse(workspaceId, message, callback) method
Sample usage:

tj.converse(workspaceId, "hello world", function(response) {
    ...
});
***/