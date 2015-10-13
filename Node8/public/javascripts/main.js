angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){
		$scope.applied = {
				name	: '',
				bio		: '',
				skills	: [],
				years	: 0,
				why		: '',
		}

		$scope.submitApplicant = function() {
			console.log('submit a task!')
        	$http({
            	method : 'POST',
            	url    : '/applicant',
            	data   : $scope.applied
        	}).then(function(returnData){
            	console.log(returnData)
        	}, function(error){
            	console.log('error!', error)
        	}) 
		}


		$scope.applicants = [];
		$scope.getApplicants = function() {
			$http({
				method 	: 'GET',
				url		: '/applicants', 
			}).then(function(returnData) {
				$scope.applicants = returnData.data;
			}, function(error) {
				console.log('error: ', error);
			})
		}
	}]);


