/*------------Pulse the light-----------------*/
var TJBot = require("tjbot");

var tj = new TJBot(
  ["led"],
  {},
  {}
);

tj.pulse("gold", 1.0);