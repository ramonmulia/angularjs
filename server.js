var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

console.log(__dirname);

app.use(express.static('bower_components'));
app.use(express.static('app'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('common'));

app.get('/index', function(req, res) {
	res.render('index.html');
});

app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(port, function() {
	console.log("listening on 3000");
});