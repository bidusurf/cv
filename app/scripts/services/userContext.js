'use strict';

var UserContext = function() {
    this.showAlert = true;
    this.infoScopes = {};
    this.infoScopes.personal = {
        title: 'Personal',
        selected: true,
        route: 'personal'
    };
    this.infoScopes.education = {
        title: 'Education',
        selected: false,
        route: 'education'
    };
    this.infoScopes.career = {
        title: 'Career',
        selected: false,
        route: 'career'
    };
    this.infoScopes.skills = {
        title: 'Skills',
        selected: false,
        route: 'skills'
    };

    this.selectScope = function(scope){
        angular.forEach(this.infoScopes, function(infoScope){
            infoScope.selected = infoScope.title === scope.title;
        });
    }
}

angular.module('cvApp').service('userContext', function(){
    var userContext;
    if (!userContext) {
        userContext =new UserContext();
    }
    return userContext;
});
