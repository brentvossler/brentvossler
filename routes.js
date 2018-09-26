var express = require('express');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.sendFile('index.html', {root :'./public'})
	});
	app.get('/resume', function(req, res) {
		res.sendFile('resume.html', {root :'./public'})
	});
	app.get('/projects', function(req, res) {
		res.sendFile('projects/projects.html', {root :'./public'})
	});
	app.get('/cnit132', function(req, res) {
		res.sendFile('/CNIT132/cnit132.html', {root :'./public'})
	});
	app.get('/cnit133', function(req, res) {
		res.sendFile('/CNIT133/cnit133.html', {root :'./public'})
	});
	app.get('/helloworld', function(req, res) {
		res.sendFile('CNIT133/helloworld.html', {root:'./public'})
	});
	app.get('/buttons', function(req, res) {
		res.sendFile('CNIT133/buttons.html', {root:'./public'})
	});
	app.get('/bingo', function(req, res) {
		res.sendFile('CNIT133/bingo.html', {root:'./public'})
	});
	app.get('/banners', function(req, res) {
		res.sendFile('CNIT133/banners.html', {root:'./public'})
	});
	app.get('/iframe', function(req, res) {
		res.sendFile('CNIT133/iframe.html', {root :'./public'})
	});
	app.get('/iframe2', function(req, res) {
		res.sendFile('CNIT133/iframe2.html', {root :'./public'})
	});
	app.get('/dice', function(req, res) {
		res.sendFile('CNIT133/dice.html', {root :'./public'})
	});
	app.get('/cnit132hw1', function(req, res) {
		res.sendFile('CNIT132/cnit132hw1.html', {root :'./public'})
	});
	app.get('/rpg', function(req, res) {
		res.sendFile('projects/rpg/rpg.html', {root:'./public'})
	});
	app.get('/three', function(req, res) {
		res.sendFile('projects/three/three.html', {root:'./public'})
	});
	app.get('/cube', function(req, res) {
		res.sendFile('projects/three/cube.html', {root:'./public'})
	});
	app.get('/threesample', function(req, res) {
		res.sendFile('projects/three/threesample.html', {root:'./public'})
	});
	app.get('/canvas', function(req, res) {
		res.sendFile('projects/canvas/canvas.html', {root:'./public'})
	});
	app.get('/components', function(req, res) {
		res.sendFile('projects/components/components.html', {root:'./public'})
	});
	app.use(express.static("public"));
}