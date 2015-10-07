var fs = require('fs');

var csvFileName = process.argv[2];
var jsonFileName = process.argv[3];

var csvFileContents = fs.readFileSync(csvFileName, 'utf-8');

var rowSplit = csvFileContents.split('\n');
console.log(rowSplit);

var splitted = rowSplit.splice(0, 1)[0].split(',');
console.log(splitted);

var results = rowSplit.filter(function(row){
        return row !== '';
    }).map(function(row){
        var columns = row.split(',');
        var obj = {};
        for (var i = 0; i < columns.length; i++) {
            var thisKey = splitted[i];
            var thisValue = columns[i];
            obj[thisKey] = thisValue;
        }
        return obj;
    });

var resultsJson = JSON.stringify(results);

console.log(resultsJson);

fs.writeFileSync(jsonFileName, resultsJson)