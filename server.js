var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var mongoose = require('mongoose');
var Livro = require('./app/models/livroModel');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1/Livros'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/routes');

app.use(routes);

app.listen(port);
console.log('Connected on port ' + port);

