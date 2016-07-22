angular.module('projectEditCtrl', [])
.controller('ProjectEditCtrl', function($scope, $routeParams, $location, Project) {
    Project.getById($routeParams.projectId)
    .success(function(project) {
        $scope.project = project;
    });
    $scope.save = function() {
        var project = {
            id: $scope.project.id,
            name: $scope.project.name,
            description: $scope.project.description
        }
        Project.put(project)
        .then(function(data) {
            $location.path('/');
        });
    };
    $scope.delete = function() {
        Project.delete(this.project.id)
        .then(function(data) {
            $location.path('/');
        });
    };
});
