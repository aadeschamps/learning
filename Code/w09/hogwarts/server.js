var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var methodOverride = require('method-override');
var ejs = require('ejs');
var app = express();

app.use(bodyParser());

app.use(methodOverride('_method'));
app.use(express.static(__dirname,'public'));

students = {
	0: {
		id: 0,
		name: "Alex",
		age: "24",
		fav_spell: "Anteoculatia"
	},
	1: {
		id: 1,
		name: "Danielle",
		age: "25",
		fav_spell: "a pretty one"
	}
}
var count = 2;

app.get('/students', function(req, res){
	res.render('index.ejs', {students: students})
});

app.put('/student/:id', function(req, res){
	console.log(req.query.newname);
	students[req.params.id].name = req.body.newname;
	req.method = 'get';
	res.redirect('/student/' + req.params.id);
});

app.post('/student', function( req, res){
	var student = {
		id: count,
		name: req.body.name,
		age: req.body.age,
		fav_spell: req.body.spell
	}
	console.log(student);
	students[count] = student;
	count++;
	req.method = 'get';
	res.redirect('/students');
	// res.render('index.ejs', {students: students});
});

app.get('/student/:id', function(req, res){
	res.render('student.ejs', {student: students[req.params.id]});
});

app.delete('/student/:id', function(req, res){
	console.log("hey");
	delete students[parseInt(req.params.id)];
	req.method = 'get';
	res.redirect('/students');
});

app.listen(3000);


