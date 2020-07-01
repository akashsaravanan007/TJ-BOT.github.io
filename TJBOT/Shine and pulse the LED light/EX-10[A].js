/*-----------Turn on the LED light--------------*/
var TJBot = require("tjbot");

var tj = new TJBot(
  ["led"],
  {},
  {}
);

tj.shine("gold");