'use strict';

angular.module('cvApp').controller('skillsCtrl', function ($scope, userContext, $http, $timeout) {
    userContext.selectScope(userContext.infoScopes.skills);
    $scope.skills = [];
    $http.get('/data/skills.json').success(function(data){
        $scope.skills = data;
    });
});
