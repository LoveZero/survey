index.controller('NavController', ['$rootScope', function($rootScope) {

    $rootScope.init = function () {
        $rootScope.tab = 1
    }
     
    $rootScope.selectNav = function(setTab) {
        $rootScope.tab = setTab;
    }
    
    $rootScope.isSelected = function(checkTab){
        return $rootScope.tab === checkTab;
    };
    
    $rootScope.init();
}]);