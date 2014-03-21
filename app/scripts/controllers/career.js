'use strict';

angular.module('cvApp')
  .controller('careerCtrl', function ($scope, userContext) {
        userContext.selectScope(userContext.getInfoScopes().career);
        $scope.jobs = [];
        $scope.jobs.push({
            collapse: 'one',
            period: {
                begin: '01/2010',
                end: 'Today'
            },
            company: {
                name: 'Weev Brasil',
                location: 'Florianópolis - SC'
            },
            position: 'Solution Architect',
            activities: [
                'Backend developer and application architect for a big financial system ' +
                    'which controls customer\'s banking accounts, able to manage loans, ' +
                    'savings and all the normal banking operations.',
                'Frontend developer for a mobile application using Phonegap and AngularJS'
            ]
        });
        $scope.jobs.push({
            collapse: 'two',
            period: {
                begin: '06/2009',
                end: '01-2010'
            },
            company: {
                name: 'Neoway',
                location: 'Florianópolis - SC'
            },
            position: 'System Analyst',
            activities: [
                'Backend developer and application architect for a big financial system ' +
                    'which controls customer\'s banking accounts, able to manage loans, ' +
                    'savings and all the normal banking operations.',
                'Frontend developer for a mobile application using Phonegap and AngularJS'
            ]
        });
        $scope.jobs.push({
            collapse: 'six',
            period: {
                begin: '07/2000',
                end: '02/2004'
            },
            company: {
                name: 'Zanettini, Barossi S/A - Ind e Com.',
                location: 'São Paulo - SP'
            },
            position: 'Junior Systems Analyst',
            activities: [
                'Manage the ERP System, which has been developed internally and covered all' +
                    ' steps from the clients\' request to the invoice, including production and ' +
                    'purchase planning, and production and inventory control. Manage the database, ' +
                    'and provide all the necessary maintenance to update the system.',
                'Maintain the purchased systems: Microsiga (accounting) and RM-Labore ' +
                    '(Human Resources and Personnel Department).',
                'Control the information exchange services via formatted files, such as: ' +
                    'bank transactions, purchase requests, and Electronic Data Interchange (EDI).'
            ]
        });
        $scope.jobs.push({
            collapse: 'seven',
            period: {
                begin: '03/2000',
                end: '07/2000'
            },
            company: {
                name: 'Zanettini, Barossi S/A - Ind e Com.',
                location: 'São Paulo - SP'
            },
            position: 'Trainee',
            activities: [
                'Learn about the ERP System, developed internally, and the database ' +
                    '(Unify 2000/SQL Language), and administer the UNIX network.',
                'Acquire practical knowledge of the ERP System; provide small maintenance ' +
                    'services on the database; write reports.'
            ]
        })
    });
