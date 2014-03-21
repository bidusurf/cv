'use strict';

angular.module('cvApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
      .otherwise({
        redirectTo: '/personal'
      });
  });
