
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
	if (request.url === "/"){
		fs.readFile("exercise.html", function(err, data){
			if(err){
				console.log("404");
			}else{
				response.end(data.toString());
			};
		});
	} else if(request.url != "/favicon.ico"){
		var path = request.url;
		var new_path = path.slice(1);
		fs.readFile(new_path,function(err, data){
			if (err){
				console.log("freken error");
			}else{
				response.end(data.toString());
			};
		});
	};
});

server.listen(3000);