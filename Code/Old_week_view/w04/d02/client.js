var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

process

var open = function(){

ws.on("open", function(){
	console.log("Connected to server");
	//setInterval(function(){ws.send("Howdy!")}, 1000);
});

ws.on("message", function(message){
	console.log(message);
});



process.stdin.on("data", function(input){
	ws.send(input.toString().trim());
});

}