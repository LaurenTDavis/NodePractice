angular.module('HalloweenApp', []) 
angular.module('HalloweenApp').controller('pumpkinTroller', ['$scope', '$http', function($scope, $http) {
	$scope.greeting = "Happy Halloween"; 


	$http.get('/getcostumes').then(function(returnData) {
		$scope.costumes = returnData.data; 
	});

	$scope.createCostume = function() {
		// console.log($scope.newCostume);

		$http.post('/createCostume', $scope.newCostume).then(function(returnData){
			console.log(returnData.data); 

			$scope.costumes = returnData.data;
		});


	}

}]);