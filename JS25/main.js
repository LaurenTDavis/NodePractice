var chunk = function (arr, num) {
	var output = []; 
	var arrLen = arr.length; 
	var arrSize = Math.floor(arrLen / num);
	var remainder = arrLen % num; 

	if (remainder > 0 ) {
		for (var i = 0; i < remainder; i++) {
			output[i] = arr.slice((arrSize + 1) * i, (arrSize + 1) * (i + 1));
		}

	}

	for (var i = remainder; i < num; i++) {
		output[i] = arr.slice(arrSize * i + remainder, arrSize * (i + 1) + remainder);
	}
	return output;
}


var input = [1,2,3,4,5,6,7,8,9,10];
chunk(input, 2);
