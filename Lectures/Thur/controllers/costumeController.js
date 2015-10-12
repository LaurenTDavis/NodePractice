var costumeModel = require('../models/costumes.js'); 

// Expoort so we can access methods in app.js 
module.exports = {
	createCostume : function(req, res) {
		var costume = new costumeModel.Costume(req.body); 
		console.log(costumeModel.allCostumes);

		res.send(costumeModel.allCostumes);
	},

	getCostumes: function(req, res) {
		res.send(costumeModel.allCostumes);
	}

}