var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();

var name = ["Alex", "David", "Tiffany", "Joes"];
var home = ["LV", "Lynbrook", "Portland", "NYC"];
var colors = ["Blue", "Green", "Chartruse", "Purple"];
var bands = ["Motion City Soundtrack", "Linkin Park(pre thousand suns)", "Led Zepplin", "Frank Sinatra"];


app.get('/', function(req, res){
	var ran_color = colors[Math.floor(Math.random() * colors.length)]
	var ran_name = name[Math.floor(Math.random() * name.length)]
	var ran_band = bands[Math.floor(Math.random() * bands.length)]
	var ran_home = home[Math.floor(Math.random() * home.length)]
	// var str = fs.readFileSync('views/index.ejs', 'utf8');
	var rendered = ejs.render('views/index.ejs',{name:ran_name, home: ran_home,
		band:ran_band, color: ran_color});
	res.send(rendered);
});

app.listen(3000);