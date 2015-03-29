'use strict';

var SERVICE = 'services/';

var index = angular.module('index', ['ui.bootstrap'])
.run( function ($rootScope) {

    $rootScope.init = function () {
        $rootScope.userID = '';
        $rootScope.userName = '';
        $rootScope.userType = 0;
        $rootScope.loggedIn = false;
        $rootScope.tab = 1;
    }
     
    $rootScope.selectNav = function(setTab) {
        $rootScope.tab = setTab;
    }
    
    $rootScope.isSelected = function(checkTab){
        return $rootScope.tab === checkTab;
    };
    
    $rootScope.$broadcast('login', '');

    $rootScope.init();
});
