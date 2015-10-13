angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){

		$scope.applicants = [];
		$scope.getApplicants = function() {
			$http({
				method 	: 'GET',
				url		: '/getapplicants', 
			}).then(function(returnData) {
				$scope.applicants = returnData.data;
			}, function(error) {
				console.log('error: ', error);
			})
		}
		$scope.getApplicants();

	}]);


