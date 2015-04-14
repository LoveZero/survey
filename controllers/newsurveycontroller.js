index.controller('NewSurveyController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
   
    $scope.form = {};
    $scope.form.title = 'Untitled form';
    $scope.form.description = '';
    $scope.form.userID = $rootScope.userID;
    $scope.form.questions = [{
        name: 'Untitled question',
        subtext: '',
        qtype:'',
        qsubtype: [{name: 'Option 1'}]
    }];
    $scope.options = ['Multiple Choice', 'Checkboxes', 'Text'];

    $scope.addOption = function(array){
        array.push({name: 'Option ' + (array.length + 1)});
    }
    
    $scope.removeOption = function(index, array){
        if (array.length > 1) {
            array.splice(index, 1);
        }
    }
    
    $scope.addQuest = function(){
        $scope.form.questions.push({name:'Untitled question', subtext:'', qtype:'', qsubtype: [{name: 'Option 1'}] });
    }

    $scope.removeQuest = function(index){
        $scope.form.questions.splice(index,1);
    }
    
    $scope.createNewSurvey = function(){
        if ($scope.form.questions.length > 0) {
            $http({
                url: SERVICE + 'newSurvey.php',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: $scope.form
            }).success ( function (data) {
                alert(data);
                $location.path( '/survey' );
            }).error( function (data) {
                alert("Failed to create new survey. Please try again.");
            });
        } else {
            alert("Sorry, you unable to create survey without any questions.");
        }
    }

}]);