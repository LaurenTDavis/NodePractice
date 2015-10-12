var allCostumes = [];

var Costume = function(costumeData) {
	this.name = costumeData.name;
	this.inapproptriateness = costumeData.inapproptriateness;
	this.missingAccessories = costumeData.accessoriesNotIncluded.split(', ');
	allCostumes.push(this); 

}

module.exports = {
	allCostumes : allCostumes,
	Costume     : Costume
}