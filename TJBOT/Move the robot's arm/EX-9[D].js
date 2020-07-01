/*---------Wave the arm up and down--------------*/
var TJBot = require("tjbot");
var tj = new TJBot(
  ["servo"],
  {},
  {}
);

 tj.wave();
