'use strict';

angular.module('cvApp').controller('mainCtrl', function ($scope, userContext, $location) {
    $scope.userContext = userContext;
    for (var scope in userContext.infoScopes) {
        $scope[scope] = userContext.infoScopes[scope];
    }
    $scope.selectScope = function(infoScope){
        $location.path(infoScope.route);
    }
});
