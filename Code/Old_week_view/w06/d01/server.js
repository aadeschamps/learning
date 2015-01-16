var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 2000});
var userDb = [];
server.on("connection", function(connection){
    userDb.push(connection);
    connection.on("message", function(msg){
        userDb.foreach(function(user){
            user.send(msg);
        });
    });
    conn.on("close", function(){
		userDb.forEach(function(user){
			if(user === conn){
				index = userDb.indexOf(user);
				userDb.splice(index, 1);
			};
		});
    });
});