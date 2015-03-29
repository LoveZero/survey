index.controller( 'SignUpController', ['$rootScope', '$scope', '$filter', '$http', '$modal', function($rootScope, $scope, $filter, $http, $modal) {
    
    $scope.init = function () {
        $scope.signup = {};
        $scope.signup.name = '';
        $scope.signup.email = '';
        $scope.signup.password = '';
        $scope.signup.type = 'Student';
    }
    
    $scope.signupSubmit = function () {
         $http.post (SERVICE + 'signup.php', JSON.stringify($scope.signup))
        .success ( function (data) {
            alert(data);
            $rootScope.tab = 1;
        })
        .error( function (data, status) {
            if (status == 400) {
                alert("This email has already been used.");
            }
        });
    }
    
    $scope.init();
}]);