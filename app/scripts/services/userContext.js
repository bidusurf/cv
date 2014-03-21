'use strict';

angular.module('cvApp')
  .service('userContext', function userContext() {
    var infoScopes = {};
    infoScopes.personal = {
      title: 'Personal',
      selected: true,
      route: 'personal'
    };
    infoScopes.education = {
      title: 'Education',
      selected: false,
      route: 'education'
    };
    infoScopes.career = {
      title: 'Career',
      selected: false,
      route: 'career'
    };

    return {
      getInfoScopes: function(){
          return infoScopes;
      },
      selectScope: function(scope){
          angular.forEach(infoScopes, function(infoScope){
              infoScope.selected = infoScope.title === scope.title;
          })
      }
    }
  })
