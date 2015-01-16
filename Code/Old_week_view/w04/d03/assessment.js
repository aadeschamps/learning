
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var cowsay = require("cowsay");

server.on("connection", function(client){
	client.send("Connected");
	console.log("Client Connected");

	client.on("message", function(message){
		client.send(cowsay.think({text: message}));
		console.log(message);
	})
});