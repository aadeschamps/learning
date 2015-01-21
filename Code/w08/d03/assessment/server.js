var express = require('express');
var ejs = require('ejs');
var app = express();
var fs = require('fs');


app.get('/salad', function(res, req){
	var salad = {
		name: "Basic Salad"
		ingredients: ["Lettuce". "Tomatoes", "Chicken", "Cheese", "Croutons"];
	}
	res.json(salad);
});