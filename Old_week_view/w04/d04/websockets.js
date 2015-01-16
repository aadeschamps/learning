if(process.argv[2] === "-c"){
	//Client
	var WebSocket = require("ws");
	var ws = new WebSocket(process.argv[3]);

	ws.on("connection", function(conn){
		console.log("connected");
	})

	ws.on("message", function(jmsg){
		var msg = JSON.parse(jmsg);
		// console.log(jmsg)
		console.log(msg.name + ": " + msg.msg);
	})

	process.stdin.on("data", function(input){
		input = input.toString().trim();
		var msg = {name: "Alex", msg: input};
		// console.log(msg)
		var jmsg = JSON.stringify(msg);
		// console.log(jmsg);
		ws.send(jmsg);
	});



} else if (process.argv[2] === "-l") {
//Server
  var chat = [];
  var portNum = process.argv[3];

  var WebSocketServer = require("ws").Server;
  var server = new WebSocketServer({port: portNum});

  console.log("listening on port " + portNum + " (press CTRL+C to quit)" );

  var con = false;

  server.on("connection", function(connection){
        if (con) {
          connection.close();
        }
        else {
          var server_m = {name:"Alex",msg:"connected (press CTRL+C to quit)"};
          var jserver_m = JSON.stringify(server_m);
          connection.send(jserver_m);
          console.log("Client Connected");
          chatHistory = chat.join("\n");
          //connection.send(chatHistory);

          connection.on("message", function(message) {
          	  chat.push(message);
              connection.send(message);
              console.log(message);

          });
          con = true;

          connection.on("close", function() {
            console.log("Client Disconnected")
            con = false;
  
        });
        }

  });

}else {
  console.log("jungle is massive");
}