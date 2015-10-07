var addNumbers = function(str) {
  var strArr = [];
  var numArr = [];
	for (var i = 0; i <= str.length; i++) {
    if(!isNaN(str[i])) {
	     strArr.push(str[i]); 
     }
    else {
      numArr.push(strArr.join('')); 
      strArr = []; 
    }
  }
  var count = 0; 
  for (var i = 0; i < numArr.length; i++) {
    count += Number(numArr[i]);
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
  var answer = addNumbers(str); 
  console.log(answer);
}

console.log(averageStringNumbers("Hello6 9World 2Nic8e D7ay"));