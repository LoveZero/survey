index.controller('TakeSurveyController', ['$rootScope', '$scope', '$filter', '$http', '$modal', '$location', function($rootScope, $scope, $filter, $http, $modal, $location) {
    $scope.survey = {};
    $scope.survey.id = '';
    $scope.survey.title = '';
    $scope.survey.description = '';
    $scope.survey.questions = {};
    $scope.answer = {};
	
    $scope.init = function () {
		$scope.queryString = $location.search();
        
		if ($scope.queryString) {
            $scope.survey.id = $scope.queryString.id;
            $scope.survey.title = $scope.queryString.title;
            $scope.survey.description = $scope.queryString.description;
        }
        
        $scope.getSurvey($scope.survey.id);
    }
	
	$scope.getSurvey = function (surveyID) {
        $http.get (SERVICE + 'getSurvey.php?survey=' + surveyID)
        .success ( function (data) {
            $scope.survey.questions = data;
			$.each ($scope.survey.questions, function ( index, value ) {
				$scope.answer[index] = {id:value.id};
				if (value.type == 'Checkboxes') {
					$scope.answer[index].checkbox = {};
					$.each (value.subtype, function ( i, j ) {
						$scope.answer[index].checkbox[j.name] = {};
					});
				}
			});
        })
        .error( function (data) {
            //return error in login
        });
    }
	
	$scope.submitAnswer = function (answer) {
        var arrAnswer = [];
        var objAnswer = {};
        var checkBoxValue = [];
        var strCheckBoxValue;
        
        angular.forEach(answer, function(eachAnswer, index) {
            objAnswer = {};
            checkBoxValue = [];
            strCheckBoxValue = '';

            if (Object.keys(eachAnswer)[1] == "checkbox") {
                angular.forEach(eachAnswer.checkbox, function(checkbox, key) {
                    if (checkbox.selected == true) {
                        checkBoxValue.push(key);
                    }
                });
                strCheckBoxValue = checkBoxValue.join(', ');
                objAnswer['id'] = eachAnswer['id'];
                objAnswer['description'] = strCheckBoxValue;
            } else {
                objAnswer['id'] = eachAnswer['id'];
                objAnswer['description'] = (eachAnswer[Object.keys(eachAnswer)[1]]) ? eachAnswer[Object.keys(eachAnswer)[1]] : "";            
            }
            arrAnswer.push(objAnswer);
        });

        $http({
            url: SERVICE + 'responseSurvey.php',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {surveyID: $scope.survey.id,
                   userID: $rootScope.userID,
                   answer: arrAnswer}
        }).success ( function (data) {
            alert(data);
            $location.path( '/survey' );
        }).error( function (data) {
            alert(data);
        });

	}
	
	$scope.init();
}]);