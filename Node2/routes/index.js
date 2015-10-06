
/*
 * GET home page.
 */

var fs = require('fs');  
var express = require('express'); 

var app = express(); 


exports.index = function(req, res){
	fs.readFile('data.txt', function(err, data) {
		res.header('Content-Type', 'text/html'); 
		res.send(data);
	});
};



app.get('/:filename', function(req, res) {
	fs.readFile('./public/' + req.params.filename, function(err, data) {
		res.header('Content-Type', 'text/html'); 
		res.send(data);
	});

});