'use strict';

var SERVICE = 'services/';

var index = angular.module('index', ['ui.bootstrap', 'ngRoute', 'ngGrid', 'ngCookies'])
.run( function ($rootScope, $location, $cookies, $cookieStore) {

    $rootScope.init = function () {

        if ($cookieStore.get('user') !== undefined) {
            $rootScope.cookies = $cookieStore.get('user');
            if ($rootScope.cookies.loggedIn !== undefined) {
                $rootScope.tab = $rootScope.cookies.selectedTab;
                $rootScope.userID = $rootScope.cookies.userID;
                $rootScope.userName = $rootScope.cookies.userName;
                $rootScope.userType = $rootScope.cookies.userType;
                $rootScope.loggedIn = $rootScope.cookies.loggedIn;
                
                $location.path( '/survey' );
            } else {
                $rootScope.userID = '';
                $rootScope.userName = '';
                $rootScope.userType = 0;
                $rootScope.loggedIn = false;
                $rootScope.tab = 1;
                
                $location.path( '/' );
            }
        } else {
            $rootScope.userID = '';
            $rootScope.userName = '';
            $rootScope.userType = 0;
            $rootScope.loggedIn = false;
            $rootScope.tab = 1;
            $location.path( '/' );
        }
    }
     
    $rootScope.selectNav = function(setTab) {
        $rootScope.tab = setTab;
    }
    
    $rootScope.isSelected = function(checkTab){
        return $rootScope.tab === checkTab;
    };
    
    $rootScope.clearCookies = function(){
        $cookies.user = '';
    };
    
    $rootScope.toSurveyList = function() {
        $location.path( '/survey' );
    }

    $rootScope.init();
}).config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/home.html'
		}),		
		$routeProvider.when('/main', {
			templateUrl: 'views/login.html'
		}),		
		$routeProvider.when('/survey', { 
			templateUrl: 'views/survey.html'
		}),		
		$routeProvider.when('/newsurvey', { 
			templateUrl: 'views/newSurvey.html'
		});
		$routeProvider.when('/takesurvey', { 
			templateUrl: 'views/takesurvey.html'
		}),
        $routeProvider.when('/summary', { 
			templateUrl: 'views/summary.html',
            reloadOnSearch: false
		});
	
}]);
