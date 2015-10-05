var request = require('request');
var webColors = 'https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json';
var colorName = process.argv[2]; 

request(webColors, function(error, response, body) {
	var colors = JSON.parse(body)

	var match = colors.filter(function(color) {
		return color.name.toLowerCase() === colorName.toLowerCase();
	});

	if (match.length === 0) {
		console.log('Nope');
	}
	else {
		var result = match[0];
		console.log(result.rgb.r, result.rgb.g, result.rgb.b)
	}




});
