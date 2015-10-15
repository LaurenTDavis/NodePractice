angular.module('countryApp', []);

angular.module('countryApp').controller('countryCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.greeting = "Check out these countries!";

	$scope.world = [];
	$scope.load = function() {
		$http.get('/loadcountries').then(function(returnData) {
			$scope.world = returnData.data; 
		})
	}


}])