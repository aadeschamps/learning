

var http = require("http");
var h1 = process.argv[2];
var a = "http://localhost:3000";
var msg = "";

var server = http.createServer(function(request, response){
	var path = request.url;
	if(path === "/"){
		msg = "try to add /tortilla to your url";
	}else if(path === "/tortilla"){
		msg = "what do you put on your tortilla?";
	}else if(path === "/tortilla/rice"){
		msg = "MMMMMMM!";
	} else if(path === "/tortilla/guac"){
		msg = "AHHHHHH!";
	} else {
		var split_path = path.split("/");
		console.log(split_path);
		if(split_path.length === 3 && split_path[2] != ""){
			msg = "Well, " + split_path[2] +
			" is good on a tortilla too";
		}else{
			msg = "<html><h1>Missing something...</p></html>";
		}
	}
	response.end(msg);
	msg = "";
});
server.listen(3000);