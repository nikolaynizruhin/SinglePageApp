angular.module('projectNewCtrl', [])
.controller('ProjectNewCtrl', function($scope, $location, Project) {
    $scope.save = function() {
        var project = {
            name: $scope.project.name,
            description: $scope.project.description
        }
        Project.post(project)
        .then(function(data) {
            $location.path('/');
        });
    }
});
