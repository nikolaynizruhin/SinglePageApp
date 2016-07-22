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

angular.module('projectListCtrl', [])
.controller('ProjectListCtrl', function($scope, $http, Project) {
    Project.get()
    .success(function(projects) {
        $scope.projects = projects;
    });
});

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

angular.module('projectService', [])
.factory('Project', function($http) {
    return {
        get : function() {
            return $http.get('/api/project');
        },
        getById : function(id) {
            return $http.get('/api/project/' + id);
        },
        post : function(projectData) {
            return $http({
                method: 'POST',
                url: '/api/project',
                data: projectData
            });
        },
        put : function(projectData) {
            return $http({
                method: 'PUT',
                url: '/api/project/' + projectData.id,
                data: projectData
            });
        },
        delete : function(id) {
            return $http.delete('/api/project/' + id);
        }
    }
});
//# sourceMappingURL=all.js.map
