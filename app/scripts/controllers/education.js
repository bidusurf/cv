'use strict';

angular.module('cvApp')
  .controller('educationCtrl', function ($scope, userContext) {
        userContext.selectScope(userContext.getInfoScopes().education);
  });
