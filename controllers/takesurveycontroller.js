index.controller('TakeSurveyController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
    $scope.survey = {};
    $scope.survey.id = '';
    $scope.survey.title = '';
    $scope.survey.description = '';
    $scope.survey.questions = {};
    $scope.answer = {};
	
    $scope.init = function () {
		$scope.queryString = $location.search();
        
		if ($scope.queryString) {
            $scope.survey.id = $scope.queryString.id;
            $scope.survey.title = $scope.queryString.title;
            $scope.survey.description = $scope.queryString.description;
        }
        
        $scope.getSurvey($scope.survey.id);
    }
	
	$scope.getSurvey = function (surveyID) {
        $http.get (SERVICE + 'getSurvey.php?survey=' + surveyID)
        .success ( function (data) {
            $scope.survey.questions = data;
			$.each ($scope.survey.questions, function ( index, value ) {
				$scope.answer[index] = {};
				if (value.type == 'Checkboxes') {
					$scope.answer[index].checkbox = {};
					$.each (value.subtype, function ( i, j ) {
						$scope.answer[index].checkbox[j.name] = {};
					});
				}
			});
        })
        .error( function (data) {
            //return error in login
        });
    }
	
	$scope.submitAnswer = function (answer) {
		console.log(answer);
	}
	
	$scope.init();
}]);