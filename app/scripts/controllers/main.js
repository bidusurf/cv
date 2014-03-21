'use strict';

angular.module('cvApp')
  .controller('mainCtrl', function ($scope, userContext, $location) {
    $scope.userContext = userContext;
    $scope.personal = userContext.getInfoScopes().personal;
    $scope.career = userContext.getInfoScopes().career;
    $scope.education = userContext.getInfoScopes().education;
    $scope.selectScope = function(infoScope){
        $location.path(infoScope.route);
    }
  });
