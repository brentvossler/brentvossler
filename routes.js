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

	app.get('/cs112', function(req, res) {
		res.sendFile('cs112.html', {root :'./public'})
	});

	app.get('/cs150a', function(req, res) {
		res.sendFile('cs150a.html', {root :'./public'})
	});

	app.get('/resume', function(req, res) {
		res.sendFile('resume.html', {root :'./public'})
	});

	app.get('/blog', function(req, res) {
		res.sendFile('blog.html', {root :'./public'})
	});


	app.use(express.static("public"));
}