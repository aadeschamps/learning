

if (process.argv[2] === "-l") {

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
          connection.send("You are Connected");
          console.log("Client Connected");

          connection.on("message", function(message) {
              connection.send("Oh yeah?! well " + message);
              console.log(message);

          });
          con = true;

          connection.on("close", function() {
            console.log("Client Disconnected")
            con = false;
  
        });
        }

  });

}

else {
  console.log("jungle is massive");
}