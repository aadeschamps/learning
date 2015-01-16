
var WSS = require('ws').Server;
var server = new WSS({port: 3000});
var fs = require("fs");

var history = [];

server.on("connection", function(ws) {
  ws.on("message", function(msg) {
    fs.appendFile("history.txt", msg + "\n", function(){});
  });
  fs.readFile("history.txt", function(err, data){
  	var msgArray = data.toString().split("\n");
  	msgArray.forEach(function(msg){
  		ws.send(msg);
  	});
  });
});