var express = require('express');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile('index.html', {root :'./public'})
	});

	app.get('/buttons', function(req, res) {
		res.sendFile('buttons.html', {root :'./public'})
	});

	app.use(express.static("public"));
}