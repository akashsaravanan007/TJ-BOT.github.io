/*---------Raise the arm------------*/
var TJBot = require("tjbot");
var tj = new TJBot(
  ["servo"],
  {},
  {}
);

tj.raiseArm();