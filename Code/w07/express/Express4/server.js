var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var people = [];

app.get('/', function(req, res) {
  // items will be empty the first time
  // this method is called
  res.render('todo.ejs', { people: people });
});

app.post('/add', function(req, res) {
  // note that we're using req.body.item
  // rather than req.params.item or
  // req.query.item
  var person = {
  	first_name: req.body.first,
  	last_name: req.body.last,
  	email: req.body.email
  };
  console.log(person);
  people.push(person);
  res.render('todo.ejs', { people:people });
});

app.listen(3000);

console.log('listening on port 3000!');