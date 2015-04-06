index.controller('TakeSurveyController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
   
    $scope.init = function () {
		$scope.queryString = $location.search();
		if ($scope.queryString && $scope.queryString.id) {
			$scope.getSurvey($scope.queryString.id);
        } else {
			//error
		}
    }
	
	$scope.getSurvey = function (surveyID) {
        $http.get (SERVICE + 'getSurvey.php?survey=' + surveyID)
        .success ( function (data) {
            $scope.survey = data;
        })
        .error( function (data) {
            //return error in login
        });
    }
	
	$scope.init();
}]);