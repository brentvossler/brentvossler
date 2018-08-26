var express = require('express');



module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile('index.html', {root :'./public'})
	});

	app.get('/cnit132', function(req, res) {
		res.sendFile('cnit132.html', {root :'./public'})
	});

	app.get('/cnit133', function(req, res) {
		res.sendFile('cnit133.html', {root :'./public'})
	});

	app.use(express.static("public"));
}