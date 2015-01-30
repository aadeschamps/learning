var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var db = new sqlite3.Database("petulance.db");




app.get('/pets', function(req,res){
	db.all("SELECT * FROM pets", function(err,rows){
		if(err){throw errl}
			res.json( rows );
	});
});

app.post('/pet', function(req, res) {
	var name = req.body.name;
	var type = req.body.type;

	db.run("INSERT INTO pets (NAME, TYPE) values (?, ?)", name, type, function(err){
		if(err) {throw err;}
		var id = this.lastID;
		db.get("SELECT * FROM pets WHERE id = ?", id, function(err, row){
			if( err ) {throw err;}
			res.json(row);
		});
	});
});

app.delete('/pet/:id', function(req, res){
	var id = req.params.id;
	db.run("DELETE FROM pets WHERE id= ?", id, function(err){
		if(err){throw err;}
		res.json({deleted: true})
	})
});

app.put("/pet/:id", function(req, res){
	var id = req.params.id;
	var name = req.body.name;
	var type = req.body.type;
	db.run("UPDATE pets SET name = ?, type= ? WHERE id= ?", name, type, id,
		function(err){
			if(err){throw err;}
			db.get("SELECT * FROM pets WHERE id= ?", id,
				function(err, row){
					if(err){throw err;}
					res.json(row);
				});
		});
});


app.listen(3000);
console.log('Port 3000');