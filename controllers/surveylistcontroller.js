index.controller('ListController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
    
    $scope.getList = function (userID, userType) {
		var url = SERVICE + 'getList.php';
		if (userType == 1) {
			url += '?user=' + userID;
		}
        $http.get (url)
        .success ( function (data) {
            $scope.surveyList = data;
        })
        .error( function (data) {
            //return error in login
        });
    }
    
    $scope.init = function () {
        $scope.getList($rootScope.userID, $rootScope.userType);
    }
    
    $scope.newSurvey = function () {
        $location.path( '/newsurvey' );
    }
	
	$scope.takeSurvey = function (surveyID) {
		$location.search('id', surveyID);
		console.log($location.search());
        $location.path( '/takesurvey' );
    }

    $scope.getSummary = function (id) {
        $location.path('/summary').search('sid', id);
    }
    
    $scope.init();
}]);