var count = 0; 
var temp = '';

var addNumbers = function(str) {
	for (var i = 0; i < str.length; i++) {
			temp = str[i];
			i++;
			while(Number(str[i])) {
				temp += str[i];
			}

			count += Number(temp);
		}
	return count
}



var longestWord = function(str) {
  var words = str.split(' ');
  var longestLength = 0;
  var longestWord;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
       longestLength = words[i].length;
       longestWord = words[i];
    }
  }
  return longestWord;
}



var averageStringNumbers = function(str) {

}