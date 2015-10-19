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

//console.log(averageStringNumbers("Hello6 9World 2Nic8e D7ay"));

// PROBLEM 5

var alphabetSoup = function(str) {
  return str.split('').sort().join('');
}

var vowelCount = function(str) {
  var count = 0; 
  var newStr = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u') {
      count++
    }
  }
  return count;

}

var coinDeterminer = function(num) {
  var count = 0; 
  do {
    if (num >= 15) num-= 15;
    else if (num >= 14) num -= 14;
    else if (num >= 11) num -= 11;
    else if (num >= 9) num -= 9;
    else if (num >= 7) num -= 7;
    else if (num >= 5) num -= 5;
    else if (num >= 1) num -= 1;
    count++;
  } while (num > 0);
  return count;
}

var secondGreatLow = function(arr) {

  resultArr = arr.sort(function(a, b){
    return a-b;
  });
  
  if(!(resultArr.length <= 2)){
    while (resultArr[0] == resultArr[1]){
      resultArr = resultArr.slice(1);
      //return resultArr;
    }

    while (resultArr[resultArr.length-1] == resultArr[resultArr.length-2]){
      resultArr = resultArr.pop();
      //return resultArr;
    }
  }


  if (resultArr.length <= 2){
    return resultArr[1] + " " + resultArr[0];
  } 
  else {
      return resultArr[1] + " " + resultArr[resultArr.length-2];

  }

}

var timeConvert = function(num) {
  var hours = (num / 60);
  var rHours = Math.floor(hours);
  var minutes = (hours - rHours) * 60;
  var rMinutes = Math.round(minutes);
  return rHours + ":" + rMinutes;
}

var bracketMatcher = function(str) {
  bracket1Arr = [];
  bracket2Arr = [];
  
  for (i=0; i<str.length;i++){
    if(str.charAt(i) == "("){
      bracket1Arr.push(str.charAt(1));
    } 
    else if (str.charAt(i) == ")"){
      bracket2Arr.push(str.charAt(1));
    }
    if(bracket2Arr.length > bracket1Arr.length){
      return false;
    }
  }

  if (bracket1Arr.length == bracket2Arr.length){
    return true;
  } 
  else {
    return false;
  }

}










