'use strict';

angular.module('cvApp').controller('educationCtrl', function ($scope, userContext, $http) {
    userContext.selectScope(userContext.infoScopes.education);
    $scope.academic = {};
    $scope.courses = [];
    $http.get('/data/education.json').success(function(data){
        $scope.academic = data.academic;
        $scope.courses = data.courses;
    });
    $scope.hideAlert = function() {
        userContext.showAlertEducation = false;
    }
});
