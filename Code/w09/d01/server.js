var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("petulance.db");
var cors = require('cors');
var app = express();

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
	db.all("SELECT * FROM pets", function(err, rows){
		if (err){throw err}
		res.json(rows);
	})
});