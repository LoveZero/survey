index.controller( 'LoginController', ['$scope', '$filter', '$http', '$modal', function($scope, $filter, $http, $modal){
    var SERVICE = 'services/';
    $scope.init = function () {
        $scope.login = {};
        $scope.login.email = '';
        $scope.login.password = '';
    }
    
    $scope.loginSubmit = function () {
        $http.post (SERVICE + 'login.php', JSON.stringify($scope.login))
                .success ( function (data) {
                    //return success
                }).
                error(function(data) {
                    //return error in login
                });
    }
    


    
    $scope.init();
}]);