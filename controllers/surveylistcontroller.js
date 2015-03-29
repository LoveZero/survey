index.controller('ListController', ['$rootScope', '$scope', '$filter', '$http', '$modal', function($rootScope, $scope, $filter, $http, $modal) {
    
    $scope.getList = function (userID) {
        $http.get (SERVICE + 'getList.php?user=' + userID)
        .success ( function (data) {

        })
        .error( function (data) {
            //return error in login
        });
    }
    // how to call this when page load
    $rootScope.$on('login', function(event,data) { /*$scope.getList($rootScope.userID);*/ alert($rootScope.userID); });
}]);