var http = require("http");

var server = http.createServer(function(req, res){
	var path = req.url;
	var split = path.split("/");
	if(split[1] === "say"){
		res.end(split[2]);
	}
});

server.listen(2000);