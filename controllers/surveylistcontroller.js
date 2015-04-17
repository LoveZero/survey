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
        });
    }
    
    $scope.init = function () {
        $scope.getList($rootScope.userID, $rootScope.userType);
    }
    
    $scope.newSurvey = function () {
        $location.path( '/newsurvey' );
    }
	
	$scope.takeSurvey = function (survey) {
		$location.search('id', survey.id);
        $location.search('title', survey.title);
        $location.search('description', survey.description);
        $location.path( '/takesurvey' );
    }
	
	$scope.clickSurvey = function (survey, userType) {
        if (userType) {
			$scope.getSummary(survey.id);
		} else {
			$scope.takeSurvey(survey);
		}
    }

    $scope.getSummary = function (id) {
        $location.path('/summary').search('sid', id);
    }
    
    $scope.removeSurvey = function(index, array){
        if (confirm("Are you sure you want to remove \"" + array[index].title + "\"?") == true) {
             $http({
                url: SERVICE + 'removeSurvey.php',
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                data: array[index]
            }).success ( function (data) {
                array.splice(index, 1);
                alert(data);
            }).error( function (data) {
                alert(data);
            });
        }
    }
    
    $scope.init();
}]);