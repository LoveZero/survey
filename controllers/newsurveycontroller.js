index.controller('NewSurveyController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
    $scope.form = {};
    $scope.form.questions = [{
        name: 'Untitled question',
        subtext: '',
        qtype:'',
        qsubtype: [{name: 'Option 1'}]
    }];
    $scope.options = ['Multiple Choice', 'Checkboxes', 'Text'];

    $scope.form.title = 'Untitled form';
    $scope.form.description = '';


    $scope.addOption = function(array){
        array.push({name: 'Option ' + (array.length + 1)});
    }
    
    $scope.removeOption = function(index, array){
        array.splice(index, 1);
    }
    
    $scope.addQuest = function(){
        $scope.form.questions.push({name:'Untitled question', subtext:'', qtype:'', qsubtype: [{name: 'Option 1'}] });
    }

    $scope.removeQuest = function(index){
        $scope.form.questions.splice(index,1);
    }

}]);