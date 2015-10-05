var luminosity = function(r,g,b) {
	return 0.2126*r + 0.7152*g + 0.0722*b;
};

var darkenColor = function(color) {
	return color - (color * 0.2);
}

var darken = function(r,g,b) {
	return {
		r: darkenColor(r),
		g: darkenColor(g),
		b: darkenColor(b),
	}
};

module.exports = {
	luminosity: luminosity,
	darken: darken

};