angular.module('lingoApp', []);

angular.module('lingoApp').controller('translateController',['$scope', '$http', function($scope, $http) {


	$scope.translateSubmit = function() {
		$http({
			method 	: 'GET',
			url		: '/translate',
			data 	: {
				strings  : $scope.input,
				source	 : $scope.translateTo,
				target 	 : $scope.translateInput,
				callback : $scope.translateOutput,
			}
		})

	}

}]);

angular.module('lingoApp').controller('quizController',['$scope', '$http', function($scope, $http) {



}]);