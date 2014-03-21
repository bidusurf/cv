'use strict';

angular.module('cvApp').controller('personalCtrl', function ($scope, userContext) {
    userContext.selectScope(userContext.getInfoScopes().personal);
    var getAge = function() {
        var now = new Date();
        var years = now.getFullYear() - 1981;
        if (now.getMonth() < 5 || now.getMonth() === 5 && now.getDate() < 4) {
            years--;
        }
        return years;
    }
    $scope.age = getAge();
});
