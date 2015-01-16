var ejs = require('ejs');
var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req, res){
	path = req.url;
	split = path.split("/");
	var str = fs.readFileSync('views/cats.ejs', 'utf8');
	var rendered = ejs.render(str, {height: parseInt(split[1]),
		width: parseInt(split[2])} );
	res.end(rendered);
});
server.listen(3000);
// console.log(rendered);