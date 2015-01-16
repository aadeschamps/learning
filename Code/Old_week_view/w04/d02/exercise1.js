
var WebSocketServer = require("ws").Server;

var server = new WebSocketServer({port: 3000});

var clients = 0;

var add = function(arr){
	answer = parseInt(arr[1]);
	for (var i = 2; i < arr.length; i++) {
		answer += parseInt(arr[i]);
	};
	return answer.toString();
}

var sub = function(arr){
	answer = parseInt(arr[1]);
	for (var i = 2; i < arr.length; i++) {
		answer -= parseInt(arr[i]);
	};
	return answer.toString();
}

server.on("connection", function(ws){
	if(clients >=1){
		ws.send("Sorry, only one connection aloud");
		ws.close();
	}else{
		console.log("Client Connected");
		ws.on("message", function(message){
			var p_message = message.split(" ");
			if(p_message[0] === "add"){
				ws.send( add(p_message) );
			}else if(p_message[0] === "sub"){
				ws.send( sub(p_message) );
			}else if (message === "hey server"){
				ws.send("hey client");
			}else{
				console.log(message.toString().trim());
			}
		});
		clients++;
		process.stdin.on("data", function(input){
			ws.send(input.toString().trim());
		});
	}
});
