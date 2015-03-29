index.controller('ListController', ['$rootScope', '$scope', '$filter', '$http', '$modal', function($rootScope, $scope, $filter, $http, $modal) {
    
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
    
    $scope.init();
}]);