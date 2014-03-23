'use strict';

angular.module(
        'cvApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngAnimate',
            'ui.bootstrap'
        ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/personal', {
                templateUrl: 'views/personal.html',
                controller: 'personalCtrl'
            })
            .when('/education', {
                templateUrl: 'views/education.html',
                controller: 'educationCtrl'
            })
            .when('/career', {
                templateUrl: 'views/career.html',
                controller: 'careerCtrl'
            })
            .when('/skills', {
                templateUrl: 'views/skills.html',
                controller: 'skillsCtrl'
            })
            .otherwise({
                redirectTo: '/personal'
            });
    });
