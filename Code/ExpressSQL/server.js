var express = require('express');
var sqlite3 = require('sqlite3');
var cors = require('cors');

app.use(cores());

var pets = {
	1: {
		id: 1,
		name: "Smelly Cat",
		type: "Cat"
	},
	2: {
		id:2,
		name: "Marcell",
		type: "Monkey"
	}
};

var numPets = 2;

app.gets('/pets', function(req,res){
	var petsArray = [];
})