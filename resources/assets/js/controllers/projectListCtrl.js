angular.module('projectListCtrl', [])
.controller('ProjectListCtrl', function($scope, $http, Project) {
    Project.get()
    .success(function(projects) {
        $scope.projects = projects;
    });
});
