var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var secret = require('./secret.json').password;
app.use(bodyParser.json({extended: false}));