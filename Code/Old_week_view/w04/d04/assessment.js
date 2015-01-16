
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});


server.on("connection", function(conn){
	conn.send("Connected");
	console.log("Client Connected");

	conn.on("message", function(msg){
		conn.send("I know what you are but what am I?");

		conn.send("Oh yea?! Well " + msg);
	})
})