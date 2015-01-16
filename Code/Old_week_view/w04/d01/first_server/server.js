var WebSocketServer = require("ws").Server;

var server = new WebSocketServer({port: 3000});

var count = 0;

// .on is an event listenser

server.on("connection", function(ws) {
	count++;
	console.log("Client connected!");
	console.log(count + " client(s) connected");
	ws.send("Connected to Server");
 	/*setInterval(function(){
  		ws.send("Hello");
		}, 1000);*/
 	ws.on("message", function(message){
 		if(message === "Howdy"){
			console.log("They said: " + message);
 			this.send("message recieves by server");
 		}else{
 			this.send("invalid message, nothing happens");
 		}
 	});
});