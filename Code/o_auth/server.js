var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var sqlite3 = require ('sqlite3').verbose();
var db = new sqlite3.Database("auth.db");
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt');
var secret = require('./secret.json').password;
app.use(bodyParser.urlencoded({extended: false}));


app.use(session({
	secret: secret,
	resave: false,
	saveUninitialize: true
}));

console.log(secret);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});


app.post('/session', function(req, res){
	var username = req.body.username;
	console.log(username);
	var password = req.body.password;
	console.log(password);
	db.get('SELECT * FROM users WHERE username = ?',
	username, function(err, row){
		if (err) {throw err;}
		console.log(row);
		if(row){
			var passwordM = bcrypt.compareSync(password, row.password);
			if(passwordM){
				req.session.valid_user = true;
				res.redirect('/secret_page');
			}else{
				res.redirect('/');
			}
		}else{
			console.log('no');
			res.redirect('/');
		}
	});
});

app.get('/secret_page', function(req, res){
	if(req.session.valid_user){
		res.sendfile(__dirname + '/secret.html');
	}else{
		res.redirect('/')
	}
	
});

app.post('/user', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var hash = bcrypt.hashSync(password, 10);
	db.run("INSERT INTO users (username,password) VALUES (?,?)",
	username, hash, function(err){
		if (err){throw err;}
		res.redirect('/');
	});
});

app.listen(3000);
