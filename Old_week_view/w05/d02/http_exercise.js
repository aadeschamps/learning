var http = require("http");
var h1 = process.argv[2];
var a = "http://localhost:3000";
var msg = "";

var counter = 1;
var number = 1;
var inception = "Inception";
var jaws = "http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX640_SY720_.jpg";
var server = http.createServer(function(request, response){
	var path = request.url;
	console.log(path);
	if(path === "/"){
		msg = "add /foo or /jaws to the url";
	}else if(path === "/foo"){
		msg = "bar";
	}else if(path === "/jaws"){
		msg = "<html><body><img src='" + jaws + "'/></body></html>";
	}
	response.end(msg);
	msg = "";
});
server.listen(3000);
