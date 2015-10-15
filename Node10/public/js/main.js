angular.module('countryApp', []);

angular.module('countryApp').controller('countryCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.greeting = "Check out these countries!";

	$scope.world = [];
	$scope.load = function() {
		$http.get('/countries').then(function(returnData) {
			$scope.world = returnData.data; 
		})
	}

	$scope.search = function() {
		console.log($scope.searchCountry)
		 $http.post('/search', {
		 	country : $scope.searchCountry,
		 }).then(function(returnData) {
		 	$scope.world = returnData.data;
		 })
	}


}])