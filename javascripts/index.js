'use strict';

var SERVICE = 'services/';

var index = angular.module('index', ['ui.bootstrap', 'ngRoute'])
.run( function ($rootScope, $location) {

    $rootScope.init = function () {
        $rootScope.userID = '';
        $rootScope.userName = '';
        $rootScope.userType = 0;
        $rootScope.loggedIn = false;
        $rootScope.tab = 1;
        $location.path( '/' );
    }
     
    $rootScope.selectNav = function(setTab) {
        $rootScope.tab = setTab;
    }
    
    $rootScope.isSelected = function(checkTab){
        return $rootScope.tab === checkTab;
    };

    $rootScope.init();
}).config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/login.html'
		}),		
		$routeProvider.when('/survey', { 
			templateUrl: 'views/survey.html'
		}),		
		$routeProvider.when('/newsurvey', { 
			templateUrl: 'views/newSurvey.html'
		});
	
}]);
