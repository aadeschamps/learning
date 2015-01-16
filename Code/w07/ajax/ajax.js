var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.render("ajax2.ejs",{})
});

app.get('/info', function(req, res){
	var url = "http://api.randomuser.me/";
	var data;
	request(url, function (error, response, body) {
		if(!error && response.statusCode == 200){
			data = JSON.parse(body);
			console.log(data);
			var person = {
				first: data.results[0].user.name.first,
				last: data.results[0].user.name.last,
				email: data.results[0].user.email 
			};
			console.log(person);
			res.send(JSON.stringify(person));
		};
	})
});

app.listen(3000);