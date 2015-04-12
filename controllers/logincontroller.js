index.controller( 'LoginController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', '$cookies', '$cookieStore', function($rootScope, $scope, $filter, $http, $modal, $location, $cookies, $cookieStore) {
    
    $scope.init = function () {
        $scope.login = {};
        $scope.login.email = '';
        $scope.login.password = '';
    }
    
    $scope.loginSubmit = function () {
        $http.post (SERVICE + 'login.php', JSON.stringify($scope.login))
        .success ( function (data) {
            if (data.id !== null) {
                $rootScope.userID = data.id;
                $rootScope.userName = data.name;
                $rootScope.userType = data.type;
                $rootScope.selectNav(2);
                $rootScope.loggedIn = true;
                $cookieStore.put("user", {
                    userID: $rootScope.userID,
                    userName: $rootScope.userName,
                    userType: $rootScope.userType,
                    loggedIn: $rootScope.loggedIn
                });

                $location.path( '/survey' );
            } else {
                alert('Invalid account!');
            }
        })
        .error( function (data) {
            //return error in login
        });
    }
    
    $scope.init();
}]);