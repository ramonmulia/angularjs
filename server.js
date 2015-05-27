var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.use('/bower_components',express.static('bower_components'));
app.use('/app',express.static('app'));
app.use('/views',express.static('views'));
app.use('/common',express.static('common'));
app.use('/css',express.static('css'));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(port, function() {
	console.log("listening on 3000");
});