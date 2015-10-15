// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/world');


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

var Countries = require('./models/countries');

app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'});
});

app.get('/loadcountries', function(req, res) {
	Countries.find({}, function(error, data) {
		if (error) {
			console.log(error);
		}
		else {
			res.send(data);
		}
	})

})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})