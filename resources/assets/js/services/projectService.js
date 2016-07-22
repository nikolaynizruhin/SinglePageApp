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