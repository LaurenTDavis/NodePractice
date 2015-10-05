var colorutil = require('./colorutil.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var dark = colorutil.darken(r,g,b);

console.log(dark.r, dark.g, dark.b);