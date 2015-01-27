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
		fav_spell: "Anteoculatia",
		house: ""
	},
	1: {
		id: 1,
		name: "Danielle",
		age: "25",
		fav_spell: "a pretty one",
		house: ""
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
		fav_spell: req.body.spell,
		house: ""
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

app.post('/sort/:id', function(req, res){
	var house = sortingHat();
	var id = parseInt(req.params.id);
	for (student in students){
		if(students[student].id === id){
			students[student].house = house;
			break;
		}
	}
	req.method = 'get';
	res.redirect('/students');
});

app.get('/house/:house_name',function(req, res){
	var house = req.params.house_name;
	res.render('house.ejs', {students: students, house: house});
});

function sortingHat(){
	var houses = ["Slytherine", "Gryffindor", "Hufflepuff", "Ravenclaw"];
	return houses[Math.floor(Math.random() * houses.length)]
}


app.listen(3000);