'use strict';

angular.module('cvApp').controller('skillsCtrl', function ($scope, userContext, $http, $timeout) {
    userContext.selectScope(userContext.infoScopes.skills);
    $scope.skills = [];
    $http.get('../data/skills.json').success(function(data){
        $scope.skills = data;
//        angular.forEach($scope.skills, function(skill){
//            skill.currentLevel = 0;
//            var timeoutFunction = function(){
//                if (skill.currentLevel < skill.level) {
//                    skill.currentLevel++;
//                    $timeout(timeoutFunction, 10);
//                }
//            }
//            $timeout(timeoutFunction(), 10);
//        });
    });
});
