var Submission = function(name, url, title, description) {
	this.name = name;
	this.url = url;
	this.title = title;
	this.description = description; 
}

var submissions = []; 


var getSubmissions = function() {
	return submissions.splice();
}

var getUrl = function(url) {
	for (var i = 0; i < submissions.length; i++) {
		if(submission[i].url === url) {
			return submissions[i]; 
		}
	}
	return null; 
}

var add = function(name, url, title, description) {
	var newSub = new Submission(name, url, title, description);
	submissions.push(newSub); 
	return newSub; 
}

var remove = function(url) {
	for (var i = 0; i < submissions.length; i++) {
		if(submissions[i].url === url) {
			return submissions.splice(i, 1)[0];
		}
	}
}

var clear = function() {
	submissions = [];
}



module.exports = {
	getSubmissions: getSubmissions,
	getUrl: getUrl, 
	add: add,
	remove: remove,
	clear: clear
};