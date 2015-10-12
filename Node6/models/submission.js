var submissions = []; 

var Submission = function(submissionData) {
	this.name = submissionData.name;
	this.url = submissionData.url;
	this.title = submissionData.title;
	this.description = submissionData.description; 
	submissions.push(this);
}


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
	submissions    : submissions,
	Submission     : Submission, 
	getSubmissions : getSubmissions,
	getUrl         : getUrl, 
	add            : add,
	remove         : remove,
	clear          : clear
};