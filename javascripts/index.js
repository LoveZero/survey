'use strict';

(function() {
   //controller
    var SERVICE = 'services/';
    var index = angular.module('index', ['ui.bootstrap']);
    
    index.controller('NavController', function() {
        this.tab = 1; // always go to 1st tab
        
        this.selectNav = function(setTab) {
            this.tab = setTab;
        }
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
	
	//directive
    index.directive('surveyList', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/survey-list.html'
        };
    });
    
    index.directive('login', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/login.html'
        };
    });
    
    //controller
    index.controller( 'LoginController', ['$scope', '$filter', '$http', '$modal', function($scope, $filter, $http, $modal){
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
})();