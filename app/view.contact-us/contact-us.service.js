(function() {
    
    'use strict';
    
    angular.module('app')
    
    .service('ContactUsService', ['$q', '$http', '$log', function($q, $http, $log) {
        
        var ContactUsService = function() {
        
            var that = this;
            
            that.submitComments = function(params) {
                
                var deferred = $q.defer();
                
                $http({
                    method: 'POST',
                    url: '/api/contant-us',
                    data: params
                })
                
                .then(function successCallback(response) {
                    if(response.data.hasError) {
                        deferred.reject(new Error(response.data.errorMessage));
                    }
                    else {
                        deferred.resolve(response.data.data);
                    }
                },
                function errorCallback(error) {
                    deferred.reject(new Error(error.data.statusText));
                    $log.error(error);
                });
                
                return deferred.promise;
                
            };
            
        };
        
        return ContactUsService;
        
    }]);
    
    
}());