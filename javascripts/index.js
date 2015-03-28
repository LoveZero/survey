'use strict';

var SERVICE = 'services/';

var index = angular.module('index', ['ui.bootstrap'])
.run( function ($rootScope) {
    $rootScope.userID = '';
    $rootScope.userName = '';
    $rootScope.userType = '';
    $rootScope.loggedIn = false;
});
