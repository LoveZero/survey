'use strict';

(function() {
   //controller
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
            $scope.email = '';
            $scope.password = '';
        }
        
        $scope.loginSubmit = function () {
            //validate email and password at db
        }
        
        $scope.init();
    }]);
})();