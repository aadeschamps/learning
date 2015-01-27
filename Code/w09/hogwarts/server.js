var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var methodOverride = require('method-override');
var ejs = require('ejs');
var app = express();

app.use(bodyParser.json());

app.use(methodOverride('_method'));
app.use(express.static(__dirname,'public'));

students = {
	0: {
		name: "Alex",
		age: "24",
		fav_spell: "Anteoculatia"
	}  
}

app.get('students', function(req, res){
	ejs.render('index.ejs', {})
});

app.get('students/:id', function(req, res){

});


