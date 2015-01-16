var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");
var cowsay = require("cowsay");

ws.on("open", function(){
	console.log("Connected to server");
	//setInterval(function(){ws.send("Howdy!")}, 1000);
});

ws.on("message", function(message){
	console.log(message);
});


process.stdin.on("data", function(input){
	var msg = input.toString().trim();
	var cs_version = cowsay.say({text: msg});
	console.log(cs_version);
	ws.send(cs_version);
});