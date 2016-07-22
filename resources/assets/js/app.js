angular.module('project', ['ngRoute', 'projectService', 'projectListCtrl', 'projectEditCtrl', 'projectNewCtrl'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/partials/list.html',
        controller: 'ProjectListCtrl'
    })
    .when('/edit/:projectId', {
        templateUrl: '/partials/detail.html',
        controller: 'ProjectEditCtrl'
    })
    .when('/new', {
        templateUrl: '/partials/detail.html',
        controller: 'ProjectNewCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
