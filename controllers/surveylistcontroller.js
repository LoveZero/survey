index.controller('ListController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
    
    $scope.getList = function (userID) {
        $http.get (SERVICE + 'getList.php?user=' + userID)
        .success ( function (data) {
            $scope.surveyList = data;
        })
        .error( function (data) {
            //return error in login
        });
    }
    
    $scope.init = function () {
        $scope.getList($rootScope.userID);
    }
    
    $scope.newSurvey = function () {
        $location.path( '/newsurvey' );
    }
    
    $scope.init();
}]);