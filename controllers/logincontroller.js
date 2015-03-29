index.controller( 'LoginController', ['$rootScope', '$scope', '$filter', '$http', '$modal', function($rootScope, $scope, $filter, $http, $modal) {
    
    $scope.init = function () {
        $scope.login = {};
        $scope.login.email = '';
        $scope.login.password = '';
    }
    
    $scope.loginSubmit = function () {
        $http.post (SERVICE + 'login.php', JSON.stringify($scope.login))
        .success ( function (data) {
            $rootScope.userID = data.id;
            $rootScope.userName = data.name;
            $rootScope.userType = data.type;
            $rootScope.selectNav(2);
            $rootScope.loggedIn = true;
            $rootScope.$emit('login', '');
        })
        .error( function (data) {
            //return error in login
        });
    }
    
    $scope.init();
}]);