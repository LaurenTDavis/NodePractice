angular.module('ContestApp', []) 
angular.module('ContestApp').controller('contestController', ['$scope', '$http', function($scope, $http) {
	$scope.greeting = "Best Parkour Videos"; 


	// $http.get('/getcostumes').then(function(returnData) {
	// 	$scope.costumes = returnData.data; 
	// });

	$scope.submitVideo = function() {
		 console.log($scope.newVideo);

		// $http.post('/createCostume', $scope.newCostume).then(function(returnData){
		// 	console.log(returnData.data); 

		// 	$scope.costumes = returnData.data;
		// });


	}

}]);