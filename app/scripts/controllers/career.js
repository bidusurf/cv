'use strict';

angular.module('cvApp').controller('careerCtrl', function ($scope, userContext, $http) {
    userContext.selectScope(userContext.infoScopes.career);
    $scope.jobs = [];
    $http.get('/data/career.json').success(function(data){
        $scope.jobs = data;
    });
    $scope.hideAlert = function() {
        userContext.showAlertCareer = false;
    }
});
