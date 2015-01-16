
if(process.argv[2] === "-c"){
	var WebSocket = require("ws");
	var ws = new WebSocket(process.argv[3]);

	ws.on("connection", function(conn){
		console.log("connected");
	})

	ws.on("message", function(msg){
		console.log(msg);
	})

	process.stdin.on("data", function(input){
		input = input.toString().trim();
		ws.send(input);
	})



}else{

}
