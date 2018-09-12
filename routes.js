var express = require('express');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile('index.html', {root :'./public'})
	});

	app.get('/buttons', function(req, res) {
		res.sendFile('buttons.html', {root :'./public'})
	});
	app.get('/HW4', function(req, res) {
		res.sendFile('HW4.html', {root :'./public'})
	});
	app.get('/cnit132hw1', function(req, res) {
		res.sendFile('cnit132hw1.html', {root :'./public'})
	});

	app.use(express.static("public"));
}