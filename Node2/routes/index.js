
/*
 * GET home page.
 */

var fs = require('fs');  
var fileContents = fs.readFileSync('data.txt', 'utf-8');


exports.index = function(req, res){
	res.header('Content-Type', 'text/html'); 
	res.send(fileContents);
};