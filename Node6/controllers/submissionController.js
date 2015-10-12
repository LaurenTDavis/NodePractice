var submissionModel = require('../models/submission.js');
var contestModel = require('../models/contest.js'); 

module.exports = {
	entry: function(req, res) {
		res.send(contestModel.acceptance)
	}
}