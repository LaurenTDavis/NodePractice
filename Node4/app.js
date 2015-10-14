// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

var locations = ['Seville', 'Canary Islands', 'Cape Verde', 'Straight of Magellan', 'Guam', 'Phillipines'];

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('seville.html', {root : './public'});

});

app.get('/:location', function(req, res,next) {
  res.sendFile(req.params.location + ".html", { root: './public'},
    function(err){
    if(err){
      res.send('That route was not appart of the Voyage!')
    }
  })
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})