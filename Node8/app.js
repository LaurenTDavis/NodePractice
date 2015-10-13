// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/mycompanyname');

var applicantSchema = mongoose.Schema({
	name	: String,
	bio		: String,
	skills	: Array,
	years	: Number,
	why		: String,
})

var Applicant = mongoose.model('Applicant', applicantSchema)

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});


app.get('/getapplicants', function(req, res) {
		Applicant.find( function(error, data) {
		if(error) {
			console.log("That is an error");
		}
		else {
			res.send(data)
		}
	})
})

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	var application = new Applicant({
		name 	: req.body.name,
		bio 	: req.body.bio,
		skills 	: req.body.skills,
		years 	: req.body.years,
		why		: req.body.why,

	})

	application.save();

	console.log(req.body);
	// res.sendFile('html/success.html', {root : './public'})
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})