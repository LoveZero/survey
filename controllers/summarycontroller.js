index.controller('SummaryController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
    $scope.surveyId = $location.search()['sid'];
    $scope.myData = [];
    $scope.gridOptions = { 
        data: 'myData',
        headerRowHeight: 55,
        showGroupPanel: true,
        showFooter: true,
        enableColumnResize: true,
        showColumnMenu: true,
        showFilter: true      
    };
    
    $scope.fetchData = function() {
        $http.get (SERVICE + 'getSummary.php?surveyID=' + $scope.surveyId)
        .success ( function (data) {
            var myObject = {};
            
            if (data.answers.length > 0) {
                angular.forEach(data.answers, function(answer, key) {
                    myObject = {};
                    angular.forEach(data.questions, function(question, index) { 
                        myObject[question] = answer[index];
                    });
                    $scope.myData.push(myObject);
                });
            } else {
                angular.forEach(data.questions, function(question, index) { 
                    myObject[question] = "-";
                });
                $scope.myData.push(myObject);
            }
        })
        .error( function (data) {
        });     
    }
    
    $scope.fetchData();
    
}]);